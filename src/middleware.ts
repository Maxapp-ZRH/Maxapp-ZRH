import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  // Get the user's country from Cloudflare headers (if available)
  const country = (request as NextRequest & { geo?: { country?: string } }).geo?.country || request.headers.get('cf-ipcountry')
  
  // Get the user's accept-language header
  const acceptLanguage = request.headers.get('accept-language') || ''
  
  // Check if user is from Switzerland, Germany, or Austria
  const isGermanSpeakingRegion = ['CH', 'DE', 'AT'].includes(country || '')
  
  // Parse accept-language header to get language preferences with quality values
  const parseAcceptLanguage = (header: string) => {
    return header
      .split(',')
      .map(lang => {
        const [locale, qValue] = lang.trim().split(';q=')
        return {
          locale: locale.toLowerCase(),
          quality: qValue ? parseFloat(qValue) : 1.0
        }
      })
      .sort((a, b) => b.quality - a.quality)
  }
  
  const languagePreferences = parseAcceptLanguage(acceptLanguage)
  
  // Check if user's browser language preference includes German (with high priority)
  const prefersGerman = languagePreferences.some(
    pref => (pref.locale.startsWith('de') || pref.locale.startsWith('gsw')) && pref.quality > 0.5
  )
  
  // Check if user explicitly prefers English
  const prefersEnglish = languagePreferences.some(
    pref => pref.locale.startsWith('en') && pref.quality > 0.5
  )
  
  // If user is from German-speaking region AND doesn't explicitly prefer English, redirect to de-CH
  if (isGermanSpeakingRegion && !prefersEnglish) {
    const url = request.nextUrl.clone()
    if (!url.pathname.startsWith('/de-CH') && !url.pathname.startsWith('/en')) {
      url.pathname = `/de-CH${url.pathname}`
      return Response.redirect(url)
    }
  }
  
  // If user prefers German (regardless of location), redirect to de-CH
  if (prefersGerman && !prefersEnglish) {
    const url = request.nextUrl.clone()
    if (!url.pathname.startsWith('/de-CH') && !url.pathname.startsWith('/en')) {
      url.pathname = `/de-CH${url.pathname}`
      return Response.redirect(url)
    }
  }
  
  // Otherwise, use the default next-intl middleware
  return intlMiddleware(request)
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de-CH|en)/:path*'],
}

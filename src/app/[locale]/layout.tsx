import { type Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { StructuredData } from '@/components/StructuredData'
import { UTMTracker } from '@/components/UTMTracker'
import { routing } from '@/i18n/routing'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s - ${siteConfig.name}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  openGraph: {
    type: siteConfig.openGraph.type,
    locale: siteConfig.openGraph.locale,
    url: siteConfig.openGraph.url,
    title: siteConfig.openGraph.title,
    description: siteConfig.openGraph.description,
    siteName: siteConfig.openGraph.siteName,
    images: siteConfig.openGraph.images,
  },
  twitter: {
    card: siteConfig.twitter.card,
    title: siteConfig.twitter.title,
    description: siteConfig.twitter.description,
    images: siteConfig.twitter.images,
    creator: siteConfig.twitter.creator,
  },
  robots: siteConfig.robots,
  verification: siteConfig.verification,
  alternates: siteConfig.alternates,
  category: siteConfig.category,
  classification: siteConfig.classification,
  other: {
    'contact:email': siteConfig.contact.email,
    'contact:phone': siteConfig.contact.phone,
    'contact:address': `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.country} ${siteConfig.contact.address.postalCode}`,
    'business:contact_data:street_address': siteConfig.contact.address.street,
    'business:contact_data:locality': siteConfig.contact.address.city,
    'business:contact_data:region': siteConfig.contact.address.region,
    'business:contact_data:postal_code': siteConfig.contact.address.postalCode,
    'business:contact_data:country_name': siteConfig.contact.address.country,
    'og:email': siteConfig.contact.email,
    'og:phone_number': siteConfig.contact.phone,
    'og:street_address': siteConfig.contact.address.street,
    'og:locality': siteConfig.contact.address.city,
    'og:region': siteConfig.contact.address.region,
    'og:postal_code': siteConfig.contact.address.postalCode,
    'og:country_name': siteConfig.contact.address.country,
  },
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en' | 'de-CH')) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        <StructuredData type="Service" />
        <link rel="canonical" href={siteConfig.url} />
        <meta name="theme-color" content={siteConfig.brand.primary} />
        <meta
          name="msapplication-TileColor"
          content={siteConfig.brand.primary}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="application-name" content={siteConfig.name} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="flex min-h-full flex-col">
        <UTMTracker>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </UTMTracker>
      </body>
    </html>
  )
}

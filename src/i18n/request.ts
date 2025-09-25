import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as 'en' | 'de-CH')) {
    locale = routing.defaultLocale
  }

  // Load all translation files for the locale
  const [
    common,
    home,
    about,
    blog,
    contact,
    services,
    team,
    work,
    careers,
    process,
  ] = await Promise.all([
    import(`../messages/${locale}/common.json`),
    import(`../messages/${locale}/home.json`),
    import(`../messages/${locale}/about.json`),
    import(`../messages/${locale}/blog.json`),
    import(`../messages/${locale}/contact.json`),
    import(`../messages/${locale}/services.json`),
    import(`../messages/${locale}/team.json`),
    import(`../messages/${locale}/work.json`),
    import(`../messages/${locale}/careers.json`),
    import(`../messages/${locale}/process.json`),
  ])

  // Merge all translation files
  const messages = {
    ...common.default,
    ...home.default,
    ...about.default,
    ...blog.default,
    ...contact.default,
    ...services.default,
    ...team.default,
    ...work.default,
    ...careers.default,
    ...process.default,
  }

  return {
    locale,
    messages,
  }
})

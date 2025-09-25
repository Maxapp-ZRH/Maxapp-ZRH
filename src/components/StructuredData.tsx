import { siteConfig } from '@/config/site'

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'Service' | 'BreadcrumbList'
  data?: Record<string, unknown>
}

export function StructuredData({
  type = 'Organization',
  data,
}: StructuredDataProps) {
  const getOrganizationData = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.region,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
    },
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.github,
    ],
    service: siteConfig.services.map((service) => ({
      '@type': 'Service',
      name: service,
      provider: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    })),
    keywords: siteConfig.keywords.join(', '),
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
  })

  const getWebSiteData = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  })

  const getServiceData = () => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digital Transformation Services',
    description: siteConfig.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: 'Digital Transformation',
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: siteConfig.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
        position: index + 1,
      })),
    },
  })

  const getBreadcrumbData = (
    breadcrumbs: Array<{ name: string; url: string }>,
  ) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  })

  const getStructuredData = () => {
    switch (type) {
      case 'WebSite':
        return getWebSiteData()
      case 'Service':
        return getServiceData()
      case 'BreadcrumbList':
        return data && 'breadcrumbs' in data
          ? getBreadcrumbData(
              data.breadcrumbs as Array<{ name: string; url: string }>,
            )
          : null
      default:
        return getOrganizationData()
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Breadcrumb component for easy use
interface BreadcrumbProps {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbStructuredData({ items }: BreadcrumbProps) {
  return <StructuredData type="BreadcrumbList" data={{ breadcrumbs: items }} />
}

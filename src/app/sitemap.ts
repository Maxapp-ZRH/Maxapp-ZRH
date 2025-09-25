import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static routes
  const staticRoutes = ['', '/about', '/blog', '/contact', '/process', '/work']

  // Blog routes (you can expand this based on your actual blog posts)
  const blogRoutes = [
    '/blog/3-lessons-we-learned-going-back-to-the-office',
    '/blog/a-short-guide-to-component-naming',
    '/blog/future-of-web-development',
  ]

  // Work/Case study routes
  const workRoutes = ['/work/family-fund', '/work/phobia', '/work/unseal']

  const allRoutes = [...staticRoutes, ...blogRoutes, ...workRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1
        : route.startsWith('/blog') || route.startsWith('/work')
          ? 0.8
          : 0.6,
  }))
}

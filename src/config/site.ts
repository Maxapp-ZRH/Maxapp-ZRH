export const siteConfig = {
  name: 'Maxapp ZRH',
  title: 'Maxapp ZRH - Your Trusted Partner in Digital Transformation',
  description:
    'Secure, Scalable, and Future-Ready digital solutions. We specialize in Web app development (Next.js), DevOps, Cloud services, and AI/ML solutions. Your trusted partner in digital transformation.',
  tagline: 'Your Trusted Partner in Digital Transformation',
  brand: {
    primary: '#213D5A',
    primaryLight: '#2A4F6B',
    primaryDark: '#1A2F47',
    secondary: '#4A90A4',
    accent: '#7BB3C7',
    neutral: '#F8FAFC',
    text: '#1E293B',
    textLight: '#64748B',
  },
  keywords: [
    'digital transformation',
    'web app development',
    'Next.js development',
    'DevOps services',
    'cloud solutions',
    'AI ML solutions',
    'software development',
    'Zürich',
    'Switzerland',
    'enterprise solutions',
    'scalable applications',
    'secure development',
    'future-ready technology',
  ] as string[],
  url: 'https://maxappzrh.com',
  ogImage: '/og-image.jpg',
  creator: 'Maxapp ZRH',
  /**
   * Icon configuration based on existing files in /public/icons/
   *
   * This configuration matches the actual icon files present in the icons directory.
   * Icons are placed in the /public/icons/ directory and referenced here.
   *
   * Current files:
   * - favicon.ico, favicon-16x16.png, favicon-32x32.png (browser favicons)
   * - icon.svg (modern scalable icon)
   * - android-chrome-192x192.png (Android home screen)
   * - apple-touch-icon.png (iOS home screen)
   * - site.webmanifest (PWA manifest)
   */
  icons: {
    // Favicon files for browsers
    favicon: '/icons/favicon.ico',
    '16x16': '/icons/favicon-16x16.png',
    '32x32': '/icons/favicon-32x32.png',

    // SVG icon for modern browsers (scalable and crisp)
    icon: '/icons/icon.svg',

    // Android Chrome icon
    '192x192': '/icons/android-chrome-192x192.png',

    // Apple touch icon for iOS
    apple: '/icons/apple-touch-icon.png',

    // Web app manifest for PWA support
    manifest: '/icons/site.webmanifest',

    // Theme colors for different platforms and modes
    themeColor: {
      light: '#213D5A', // Primary brand color for light mode
      dark: '#1A2F47', // Dark variant for dark mode
    },

    // Background color for splash screens and loading states
    backgroundColor: '#F8FAFC', // Neutral background color
  },
  authors: [
    {
      name: 'Maxapp ZRH',
      url: 'https://maxappzrh.com',
    },
  ] as Array<{ name: string; url: string }>,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maxappzrh.com',
    title: 'Maxapp ZRH - Your Trusted Partner in Digital Transformation',
    description:
      'Secure, Scalable, and Future-Ready digital solutions. We specialize in Web app development (Next.js), DevOps, Cloud services, and AI/ML solutions.',
    siteName: 'Maxapp ZRH',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maxapp ZRH - Digital Transformation Partner',
      },
    ] as Array<{ url: string; width: number; height: number; alt: string }>,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maxapp ZRH - Your Trusted Partner in Digital Transformation',
    description:
      'Secure, Scalable, and Future-Ready digital solutions. We specialize in Web app development (Next.js), DevOps, Cloud services, and AI/ML solutions.',
    images: ['/og-image.jpg'] as string[],
    creator: '@maxappzrh',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://maxappzrh.com',
  },
  category: 'technology',
  classification: 'Digital Transformation Services',
  contact: {
    email: 'hello@maxappzrh.com',
    phone: '+41 XX XXX XX XX',
    address: {
      street: 'Your Street Address',
      city: 'Zürich',
      region: 'Zürich',
      country: 'Switzerland',
      postalCode: '8000',
    },
  },
  social: {
    twitter: 'https://twitter.com/maxappzrh',
    linkedin: 'https://linkedin.com/company/maxappzrh',
    github: 'https://github.com/maxappzrh',
  },
  services: [
    'Web App Development',
    'Next.js Development',
    'DevOps Services',
    'Cloud Solutions',
    'AI/ML Solutions',
    'Digital Transformation',
    'Enterprise Solutions',
    'Scalable Applications',
  ],
  utm: {
    sources: ['google', 'facebook', 'linkedin', 'twitter', 'email', 'direct'],
    mediums: ['cpc', 'social', 'email', 'organic', 'referral', 'direct'],
    campaigns: ['brand', 'services', 'blog', 'case-study', 'contact'],
  },
} as const

export type SiteConfig = typeof siteConfig

/**
 * UTM Tracking Hook and Provider
 *
 * This module provides React hooks and components for tracking UTM parameters
 * in the Maxapp ZRH application. UTM (Urchin Tracking Module) parameters are
 * used to track the effectiveness of marketing campaigns by identifying the
 * source, medium, and campaign that brought users to the website.
 *
 * The module includes:
 * - A custom hook for UTM tracking functionality
 * - A provider component for automatic UTM parameter detection
 * - Integration with Next.js navigation hooks
 * - Client-side tracking with localStorage persistence
 */

'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { parseUTMParams, trackUTM } from '@/lib/utm'

/**
 * Internal component that handles UTM parameter tracking
 *
 * This component is wrapped in Suspense to handle the asynchronous nature
 * of useSearchParams in Next.js. It automatically detects UTM parameters
 * in the URL and tracks them when the component mounts or when the URL changes.
 *
 * The component:
 * 1. Extracts UTM parameters from the URL search params
 * 2. Validates that UTM parameters are present
 * 3. Calls the tracking function to store and send the data
 * 4. Re-runs when the pathname or search params change
 */
function UTMTrackingInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Parse UTM parameters from the current URL
    const utmParams = parseUTMParams(searchParams)

    // Only proceed with tracking if we have meaningful UTM parameters
    // We check for the three core UTM parameters: source, medium, and campaign
    if (
      utmParams.utm_source ||
      utmParams.utm_medium ||
      utmParams.utm_campaign
    ) {
      // Track the UTM parameters with the current page context
      trackUTM(utmParams, pathname)
    }
  }, [pathname, searchParams]) // Re-run when URL or search params change

  // This component doesn't render anything visible
  return null
}

/**
 * Custom hook for UTM tracking functionality
 *
 * This hook provides a simple interface for components that need to check
 * UTM tracking status. Currently, it returns a basic object, but it can be
 * extended to provide more UTM-related functionality in the future.
 *
 * @returns Object containing UTM tracking state and utilities
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { hasUTMParams } = useUTMTracking()
 *   return <div>UTM tracking: {hasUTMParams ? 'Active' : 'Inactive'}</div>
 * }
 * ```
 */
export function useUTMTracking() {
  return {
    hasUTMParams: false, // This will be handled by the component
  }
}

/**
 * UTM Tracking Provider Component
 *
 * This component provides automatic UTM parameter tracking for the entire
 * application. It should be placed high in the component tree (typically
 * in the root layout) to ensure UTM parameters are tracked on every page.
 *
 * The provider:
 * - Wraps the tracking logic in Suspense for proper Next.js integration
 * - Automatically detects UTM parameters on page load and navigation
 * - Handles client-side tracking without requiring manual intervention
 * - Provides a fallback of null while the component is loading
 *
 * @returns JSX element that handles UTM tracking
 *
 * @example
 * ```tsx
 * // In your root layout or _app.tsx
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <UTMTrackingProvider />
 *         {children}
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
export function UTMTrackingProvider() {
  return (
    <Suspense fallback={null}>
      <UTMTrackingInner />
    </Suspense>
  )
}

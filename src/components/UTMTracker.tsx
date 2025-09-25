'use client'

import { UTMTrackingProvider } from '@/hooks/useUTMTracking'

interface UTMTrackerProps {
  children: React.ReactNode
}

export function UTMTracker({ children }: UTMTrackerProps) {
  return (
    <>
      <UTMTrackingProvider />
      {children}
    </>
  )
}

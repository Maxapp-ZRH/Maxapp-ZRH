'use client'

import { useState, useEffect } from 'react'

export interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  preferences: false,
}

export function useCookieConsent() {
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences)
  const [hasConsented, setHasConsented] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedConsent = localStorage.getItem('cookie-consent')
    const savedPreferences = localStorage.getItem('cookie-preferences')

    if (savedConsent === 'true') {
      setHasConsented(true)
      if (savedPreferences) {
        try {
          const parsed = JSON.parse(savedPreferences)
          setPreferences(parsed)
        } catch (error) {
          console.error('Error parsing saved cookie preferences:', error)
          setPreferences(defaultPreferences)
        }
      }
    }

    setIsLoading(false)
  }, [])

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences)
    localStorage.setItem('cookie-consent', 'true')
    localStorage.setItem('cookie-preferences', JSON.stringify(newPreferences))

    // Initialize or disable services based on preferences
    initializeServices(newPreferences)
  }

  const initializeServices = (prefs: CookiePreferences) => {
    // Analytics
    if (prefs.analytics) {
      // Initialize Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
        })
      }
    } else {
      // Disable analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied',
        })
      }
    }

    // Marketing
    if (prefs.marketing) {
      // Initialize marketing tools
      console.log('Marketing cookies enabled')
    } else {
      // Disable marketing
      console.log('Marketing cookies disabled')
    }

    // Preferences
    if (prefs.preferences) {
      // Load user preferences
      console.log('Preference cookies enabled')
    }
  }

  const resetConsent = () => {
    localStorage.removeItem('cookie-consent')
    localStorage.removeItem('cookie-preferences')
    setHasConsented(false)
    setPreferences(defaultPreferences)
  }

  const canUseAnalytics = () => {
    return preferences.analytics && hasConsented
  }

  const canUseMarketing = () => {
    return preferences.marketing && hasConsented
  }

  const canUsePreferences = () => {
    return preferences.preferences && hasConsented
  }

  return {
    preferences,
    hasConsented,
    isLoading,
    updatePreferences,
    resetConsent,
    canUseAnalytics,
    canUseMarketing,
    canUsePreferences,
  }
}

// Global type declaration for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

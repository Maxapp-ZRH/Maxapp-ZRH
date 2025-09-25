'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings, Shield, BarChart3, Target } from 'lucide-react'
import Link from 'next/link'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

const defaultPreferences: CookiePreferences = {
  essential: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  preferences: false,
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      setIsVisible(true)
    } else {
      // Load saved preferences
      const savedPreferences = localStorage.getItem('cookie-preferences')
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences))
      }
    }
  }, [])

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    setPreferences(allAccepted)
    savePreferences(allAccepted)
    setIsVisible(false)
  }

  const acceptEssential = () => {
    savePreferences(defaultPreferences)
    setIsVisible(false)
  }

  const saveCustomPreferences = () => {
    savePreferences(preferences)
    setIsVisible(false)
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', 'true')
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs))

    // Initialize analytics based on preferences
    if (prefs.analytics) {
      // Initialize Google Analytics or other analytics tools
      console.log('Analytics cookies enabled')
    }

    if (prefs.marketing) {
      // Initialize marketing tools
      console.log('Marketing cookies enabled')
    }
  }

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'essential') return // Essential cookies cannot be disabled
    setPreferences((prev) => ({ ...prev, [key]: value }))
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed right-0 bottom-0 left-0 z-50 rounded-t-2xl border-t border-neutral-200 bg-white shadow-lg"
      >
        <div className="mx-auto max-w-7xl px-4 py-6">
          {!showSettings ? (
            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-neutral-600" />
                  <h3 className="font-semibold text-neutral-900">
                    Cookie Consent
                  </h3>
                </div>
                <p className="text-sm text-neutral-600">
                  We use cookies to enhance your browsing experience, serve
                  personalized content, and analyze our traffic. By clicking
                  &quot;Accept All&quot;, you consent to our use of cookies. You
                  can customize your preferences or learn more in our{' '}
                  <Link
                    href="/privacy"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center gap-2 rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
                >
                  <Settings className="h-4 w-4" />
                  Customize
                </button>
                <button
                  onClick={acceptEssential}
                  className="rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
                >
                  Essential Only
                </button>
                <button
                  onClick={acceptAll}
                  className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="rounded-lg p-1 transition-colors hover:bg-neutral-100"
                >
                  <X className="h-5 w-5 text-neutral-600" />
                </button>
              </div>

              <div className="space-y-4">
                <CookieCategory
                  title="Essential Cookies"
                  description="These cookies are necessary for the website to function and cannot be switched off in our systems."
                  icon={<Shield className="h-5 w-5" />}
                  enabled={preferences.essential}
                  required={true}
                />

                <CookieCategory
                  title="Analytics Cookies"
                  description="These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously."
                  icon={<BarChart3 className="h-5 w-5" />}
                  enabled={preferences.analytics}
                  onChange={(enabled) => updatePreference('analytics', enabled)}
                />

                <CookieCategory
                  title="Marketing Cookies"
                  description="These cookies are used to track visitors across websites to display relevant and engaging advertisements."
                  icon={<Target className="h-5 w-5" />}
                  enabled={preferences.marketing}
                  onChange={(enabled) => updatePreference('marketing', enabled)}
                />

                <CookieCategory
                  title="Preference Cookies"
                  description="These cookies enable the website to remember choices you make and provide enhanced, more personal features."
                  icon={<Settings className="h-5 w-5" />}
                  enabled={preferences.preferences}
                  onChange={(enabled) =>
                    updatePreference('preferences', enabled)
                  }
                />
              </div>

              <div className="flex flex-col gap-2 border-t border-neutral-200 pt-4 sm:flex-row">
                <button
                  onClick={acceptEssential}
                  className="rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
                >
                  Essential Only
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

interface CookieCategoryProps {
  title: string
  description: string
  icon: React.ReactNode
  enabled: boolean
  required?: boolean
  onChange?: (enabled: boolean) => void
}

function CookieCategory({
  title,
  description,
  icon,
  enabled,
  required = false,
  onChange,
}: CookieCategoryProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-neutral-50 p-4">
      <div className="mt-0.5 text-neutral-600">{icon}</div>
      <div className="flex-1">
        <div className="mb-1 flex items-center justify-between">
          <h4 className="font-medium text-neutral-900">{title}</h4>
          {required ? (
            <span className="rounded bg-neutral-200 px-2 py-1 text-xs text-neutral-500">
              Required
            </span>
          ) : (
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={enabled}
                onChange={(e) => onChange?.(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`h-6 w-11 rounded-full transition-colors ${
                  enabled ? 'bg-neutral-900' : 'bg-neutral-300'
                }`}
              >
                <div
                  className={`h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                    enabled ? 'translate-x-5' : 'translate-x-0.5'
                  } mt-0.5`}
                />
              </div>
            </label>
          )}
        </div>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </div>
  )
}

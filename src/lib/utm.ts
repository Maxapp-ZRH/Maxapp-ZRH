/**
 * UTM Tracking and Analytics Utilities
 *
 * This module provides comprehensive UTM (Urchin Tracking Module) parameter
 * handling and analytics tracking for the Maxapp ZRH website. It includes:
 * - Type definitions for UTM parameters and tracking data
 * - Functions to parse UTM parameters from URLs
 * - Utilities to generate UTM tracking URLs
 * - Client-side tracking and storage mechanisms
 * - Pre-configured UTM links for different marketing channels
 *
 * UTM tracking helps measure the effectiveness of marketing campaigns by
 * identifying the source, medium, and campaign that brought users to the site.
 */

import { siteConfig } from '@/config/site'

/**
 * UTM Source types
 *
 * Defines the allowed values for utm_source parameter, representing
 * the platform or channel that generated the traffic.
 */
export type UTMSource =
  | 'google' // Google search or ads
  | 'facebook' // Facebook social media
  | 'linkedin' // LinkedIn professional network
  | 'twitter' // Twitter social media
  | 'email' // Email marketing campaigns
  | 'direct' // Direct traffic (no referrer)

/**
 * UTM Medium types
 *
 * Defines the allowed values for utm_medium parameter, representing
 * the type of traffic or marketing channel.
 */
export type UTMMedium =
  | 'cpc' // Cost-per-click advertising
  | 'social' // Social media platforms
  | 'email' // Email marketing
  | 'organic' // Organic search results
  | 'referral' // Referral from another website
  | 'direct' // Direct traffic

/**
 * UTM Campaign types
 *
 * Defines the allowed values for utm_campaign parameter, representing
 * the specific marketing campaign or initiative.
 */
export type UTMCampaign =
  | 'brand' // Brand awareness campaigns
  | 'services' // Service promotion campaigns
  | 'blog' // Blog content campaigns
  | 'case-study' // Case study promotion
  | 'contact' // Contact form campaigns

/**
 * UTM Parameters interface
 *
 * Represents the standard UTM parameters that can be passed in URLs
 * to track marketing campaign effectiveness.
 */
export interface UTMParams {
  utm_source?: string // Traffic source (e.g., google, facebook)
  utm_medium?: string // Traffic medium (e.g., cpc, social)
  utm_campaign?: string // Campaign name (e.g., brand, services)
  utm_term?: string // Paid search keywords
  utm_content?: string // Ad content or link text
}

/**
 * Tracking Data interface
 *
 * Represents the complete tracking data structure stored client-side
 * for analytics and attribution purposes. Includes both UTM parameters
 * and additional contextual information.
 */
export interface TrackingData {
  source: string // Traffic source
  medium: string // Traffic medium
  campaign: string // Campaign name
  term?: string // Search terms (if applicable)
  content?: string // Content identifier
  timestamp: number // When the tracking occurred
  page: string // Page where tracking was recorded
  referrer?: string // Referring URL (if available)
}

/**
 * Parse UTM parameters from URL search params
 *
 * This function extracts UTM parameters from a URL's search parameters
 * and returns them as a structured object. It handles missing parameters
 * gracefully by returning undefined for absent values.
 *
 * @param searchParams - URLSearchParams object containing URL parameters
 * @returns Object containing UTM parameters (undefined for missing values)
 *
 * @example
 * ```typescript
 * const params = new URLSearchParams('?utm_source=google&utm_medium=cpc&utm_campaign=brand')
 * const utm = parseUTMParams(params)
 * // Returns: { utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'brand' }
 * ```
 */
export function parseUTMParams(searchParams: URLSearchParams): UTMParams {
  return {
    utm_source: searchParams.get('utm_source') || undefined,
    utm_medium: searchParams.get('utm_medium') || undefined,
    utm_campaign: searchParams.get('utm_campaign') || undefined,
    utm_term: searchParams.get('utm_term') || undefined,
    utm_content: searchParams.get('utm_content') || undefined,
  }
}

/**
 * Generate UTM tracking URL
 *
 * This function creates a URL with UTM parameters for tracking marketing
 * campaign effectiveness. It's used to generate trackable links for
 * different marketing channels and campaigns.
 *
 * @param baseUrl - Base URL to add UTM parameters to
 * @param source - Traffic source (e.g., 'google', 'facebook')
 * @param medium - Traffic medium (e.g., 'cpc', 'social')
 * @param campaign - Campaign name (e.g., 'brand', 'services')
 * @param term - Search terms (optional, for paid search)
 * @param content - Content identifier (optional, for A/B testing)
 * @returns Complete URL with UTM parameters
 *
 * @example
 * ```typescript
 * generateUTMUrl('https://maxapp-zrh.com', 'google', 'cpc', 'brand', 'web development')
 * // Returns: 'https://maxapp-zrh.com?utm_source=google&utm_medium=cpc&utm_campaign=brand&utm_term=web%20development'
 * ```
 */
export function generateUTMUrl(
  baseUrl: string,
  source: UTMSource,
  medium: UTMMedium,
  campaign: UTMCampaign,
  term?: string,
  content?: string,
): string {
  const url = new URL(baseUrl)
  url.searchParams.set('utm_source', source)
  url.searchParams.set('utm_medium', medium)
  url.searchParams.set('utm_campaign', campaign)

  if (term) url.searchParams.set('utm_term', term)
  if (content) url.searchParams.set('utm_content', content)

  return url.toString()
}

/**
 * Track UTM parameters and store in localStorage
 *
 * This function processes UTM parameters and stores them both locally and
 * sends them to analytics services. It provides comprehensive tracking
 * for marketing campaign attribution and user journey analysis.
 *
 * The function:
 * 1. Validates that it's running in a browser environment
 * 2. Creates a complete tracking data object with defaults
 * 3. Stores the data in localStorage for persistence across sessions
 * 4. Sends the data to Google Analytics (if available)
 *
 * @param params - UTM parameters from URL
 * @param page - Current page path for tracking context
 *
 * @example
 * ```typescript
 * const params = { utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'brand' }
 * trackUTM(params, '/services')
 * ```
 */
export function trackUTM(params: UTMParams, page: string): void {
  // Exit early if running on server-side (SSR)
  if (typeof window === 'undefined') return

  // Create comprehensive tracking data with sensible defaults
  const trackingData: TrackingData = {
    source: params.utm_source || 'direct',
    medium: params.utm_medium || 'none',
    campaign: params.utm_campaign || 'none',
    term: params.utm_term,
    content: params.utm_content,
    timestamp: Date.now(),
    page,
    referrer: document.referrer || undefined,
  }

  // Store in localStorage for persistence across browser sessions
  localStorage.setItem('utm_tracking', JSON.stringify(trackingData))

  // Send to Google Analytics if gtag is available
  if (typeof window !== 'undefined' && 'gtag' in window) {
    ;(window as { gtag: (...args: unknown[]) => void }).gtag(
      'event',
      'utm_track',
      {
        utm_source: trackingData.source,
        utm_medium: trackingData.medium,
        utm_campaign: trackingData.campaign,
        utm_term: trackingData.term,
        utm_content: trackingData.content,
        page_title: document.title,
        page_location: window.location.href,
      },
    )
  }
}

/**
 * Get stored UTM tracking data
 *
 * This function retrieves previously stored UTM tracking data from localStorage.
 * It's useful for accessing attribution data across different parts of the
 * application or for analytics purposes.
 *
 * @returns Stored tracking data or null if not available
 *
 * @example
 * ```typescript
 * const trackingData = getStoredUTMData()
 * if (trackingData) {
 *   console.log(`User came from ${trackingData.source} via ${trackingData.medium}`)
 * }
 * ```
 */
export function getStoredUTMData(): TrackingData | null {
  // Exit early if running on server-side (SSR)
  if (typeof window === 'undefined') return null

  const stored = localStorage.getItem('utm_tracking')
  return stored ? JSON.parse(stored) : null
}

/**
 * Pre-configured UTM link generators for different marketing channels
 *
 * This object provides convenient methods to generate UTM tracking URLs
 * for common marketing channels. Each method is pre-configured with the
 * appropriate source and medium values, requiring only the campaign name.
 *
 * These functions are useful for:
 * - Creating consistent tracking links across marketing materials
 * - Ensuring proper UTM parameter formatting
 * - Simplifying the process of generating trackable URLs
 */
export const utmLinks = {
  /**
   * Generate Google Ads UTM link
   * @param campaign - Campaign name
   * @param term - Search terms (optional)
   * @returns UTM tracking URL for Google Ads
   */
  google: (campaign: UTMCampaign, term?: string) =>
    generateUTMUrl(siteConfig.url, 'google', 'cpc', campaign, term),

  /**
   * Generate Facebook UTM link
   * @param campaign - Campaign name
   * @param content - Content identifier (optional)
   * @returns UTM tracking URL for Facebook
   */
  facebook: (campaign: UTMCampaign, content?: string) =>
    generateUTMUrl(
      siteConfig.url,
      'facebook',
      'social',
      campaign,
      undefined,
      content,
    ),

  /**
   * Generate LinkedIn UTM link
   * @param campaign - Campaign name
   * @param content - Content identifier (optional)
   * @returns UTM tracking URL for LinkedIn
   */
  linkedin: (campaign: UTMCampaign, content?: string) =>
    generateUTMUrl(
      siteConfig.url,
      'linkedin',
      'social',
      campaign,
      undefined,
      content,
    ),

  /**
   * Generate Twitter UTM link
   * @param campaign - Campaign name
   * @param content - Content identifier (optional)
   * @returns UTM tracking URL for Twitter
   */
  twitter: (campaign: UTMCampaign, content?: string) =>
    generateUTMUrl(
      siteConfig.url,
      'twitter',
      'social',
      campaign,
      undefined,
      content,
    ),

  /**
   * Generate Email UTM link
   * @param campaign - Campaign name
   * @param content - Content identifier (optional)
   * @returns UTM tracking URL for email marketing
   */
  email: (campaign: UTMCampaign, content?: string) =>
    generateUTMUrl(
      siteConfig.url,
      'email',
      'email',
      campaign,
      undefined,
      content,
    ),

  /**
   * Generate Direct UTM link
   * @param campaign - Campaign name
   * @returns UTM tracking URL for direct traffic
   */
  direct: (campaign: UTMCampaign) =>
    generateUTMUrl(siteConfig.url, 'direct', 'direct', campaign),
}

/**
 * Validate UTM parameters against allowed values
 *
 * This function validates UTM parameters to ensure they conform to the
 * predefined allowed values in the site configuration. It helps maintain
 * data quality and consistency in analytics tracking.
 *
 * @param params - UTM parameters to validate
 * @returns True if parameters are valid, false otherwise
 *
 * @example
 * ```typescript
 * const params = { utm_source: 'google', utm_medium: 'cpc', utm_campaign: 'brand' }
 * const isValid = validateUTMParams(params) // true
 *
 * const invalidParams = { utm_source: 'invalid', utm_medium: 'cpc', utm_campaign: 'brand' }
 * const isInvalid = validateUTMParams(invalidParams) // false
 * ```
 */
export function validateUTMParams(params: UTMParams): boolean {
  const { utm_source, utm_medium, utm_campaign } = params

  // At minimum, we need source, medium, and campaign
  if (!utm_source || !utm_medium || !utm_campaign) {
    return false
  }

  // Validate against allowed values from site configuration
  const validSources = siteConfig.utm.sources
  const validMediums = siteConfig.utm.mediums
  const validCampaigns = siteConfig.utm.campaigns

  return (
    validSources.includes(utm_source as UTMSource) &&
    validMediums.includes(utm_medium as UTMMedium) &&
    validCampaigns.includes(utm_campaign as UTMCampaign)
  )
}

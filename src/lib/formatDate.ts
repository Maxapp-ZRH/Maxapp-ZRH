/**
 * Date Formatting Utilities
 *
 * This module provides utilities for formatting dates in a consistent,
 * user-friendly manner throughout the application. It handles various
 * date formats and ensures proper timezone handling.
 */

/**
 * Formats a date string into a human-readable format
 *
 * This function takes a date string (typically in YYYY-MM-DD or YYYY-MM format)
 * and converts it to a localized, readable format. It automatically detects
 * whether the date includes a day component and formats accordingly.
 *
 * Key features:
 * - Handles both full dates (YYYY-MM-DD) and year-month only (YYYY-MM)
 * - Uses UTC timezone to prevent timezone-related inconsistencies
 * - Returns localized format (currently en-US)
 * - Automatically includes/excludes day based on input format
 *
 * @param dateString - Date string in YYYY-MM-DD or YYYY-MM format
 * @returns Formatted date string (e.g., "January 15, 2024" or "January 2024")
 *
 * @example
 * ```typescript
 * formatDate('2024-01-15') // "January 15, 2024"
 * formatDate('2024-01')    // "January 2024"
 * formatDate('2023-12-25') // "December 25, 2023"
 * ```
 */
export function formatDate(dateString: string) {
  // Split the date string to determine if it includes a day component
  const parts = dateString.split('-')
  const hasDay = parts.length > 2

  // Create a Date object with UTC timezone to avoid local timezone issues
  // The 'Z' suffix ensures the date is interpreted as UTC
  return new Date(`${dateString}Z`).toLocaleDateString('en-US', {
    // Include day only if the input date has a day component
    day: hasDay ? 'numeric' : undefined,
    // Always include month as full name
    month: 'long',
    // Always include year
    year: 'numeric',
    // Use UTC timezone to ensure consistent formatting regardless of server location
    timeZone: 'UTC',
  })
}

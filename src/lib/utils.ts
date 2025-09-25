/**
 * Utility Functions
 *
 * This module provides common utility functions used throughout the application.
 * It includes utilities for class name merging, which is essential for working
 * with Tailwind CSS and conditional styling.
 */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines and merges class names with Tailwind CSS conflict resolution
 *
 * This utility function combines the power of clsx (for conditional class names)
 * with tailwind-merge (for intelligent Tailwind CSS class merging). It's the
 * recommended approach for handling class names in Tailwind CSS applications.
 *
 * Key benefits:
 * - Handles conditional classes with clsx
 * - Resolves Tailwind CSS conflicts intelligently (e.g., 'p-2 p-4' becomes 'p-4')
 * - Supports arrays, objects, and strings as input
 * - Removes duplicate classes and merges conflicting ones
 *
 * @param inputs - Variable number of class values (strings, objects, arrays)
 * @returns Merged class string with Tailwind conflicts resolved
 *
 * @example
 * ```tsx
 * cn('px-2 py-1', 'px-4') // 'px-4 py-1'
 * cn('text-red-500', { 'text-blue-500': isActive }) // 'text-blue-500' or 'text-red-500'
 * cn('base-class', className) // Merges with any additional classes
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

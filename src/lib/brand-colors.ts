/**
 * Brand Colors and Design System
 *
 * This module defines the Maxapp ZRH brand color palette and provides utilities
 * for consistent color usage throughout the application. It includes:
 * - Raw color values from the site configuration
 * - Pre-built Tailwind CSS classes for common color applications
 * - Gradient definitions for modern UI effects
 * - Shadow definitions using brand colors
 * - TypeScript types for type safety
 *
 * The color palette is designed to reflect professionalism, trust, and
 * technological expertise, with a focus on blues and complementary neutrals.
 */

import { siteConfig } from '@/config/site'

/**
 * Raw brand color values from site configuration
 *
 * These colors are sourced from the centralized site configuration to ensure
 * consistency across the application. They represent the core brand identity
 * and should be used as the foundation for all color decisions.
 */
export const brandColors = {
  primary: siteConfig.brand.primary,
  primaryLight: siteConfig.brand.primaryLight,
  primaryDark: siteConfig.brand.primaryDark,
  secondary: siteConfig.brand.secondary,
  accent: siteConfig.brand.accent,
  neutral: siteConfig.brand.neutral,
  text: siteConfig.brand.text,
  textLight: siteConfig.brand.textLight,
} as const

/**
 * Pre-built Tailwind CSS classes for brand colors
 *
 * These classes provide ready-to-use styling for common color applications:
 * - Text colors for typography
 * - Background colors for containers and surfaces
 * - Border colors for outlines and dividers
 *
 * Using these classes ensures consistent color application and makes it easy
 * to maintain the brand identity across components.
 */
export const brandColorClasses = {
  // Primary color variations
  primary: 'text-[#213D5A]',
  primaryBg: 'bg-[#213D5A]',
  primaryBorder: 'border-[#213D5A]',
  primaryLight: 'text-[#2A4F6B]',
  primaryLightBg: 'bg-[#2A4F6B]',
  primaryDark: 'text-[#1A2F47]',
  primaryDarkBg: 'bg-[#1A2F47]',

  // Secondary and accent colors
  secondary: 'text-[#4A90A4]',
  secondaryBg: 'bg-[#4A90A4]',
  accent: 'text-[#7BB3C7]',
  accentBg: 'bg-[#7BB3C7]',

  // Neutral and text colors
  neutral: 'text-[#F8FAFC]',
  neutralBg: 'bg-[#F8FAFC]',
  text: 'text-[#1E293B]',
  textLight: 'text-[#64748B]',
} as const

/**
 * Brand gradient definitions for modern UI effects
 *
 * These gradients use the brand color palette to create visually appealing
 * transitions and depth. They're designed to work well together and maintain
 * brand consistency while adding visual interest to components.
 */
export const brandGradients = {
  // Primary gradients for main elements
  primary: 'from-[#213D5A] to-[#2A4F6B]',
  primaryToSecondary: 'from-[#213D5A] to-[#4A90A4]',
  primaryToAccent: 'from-[#213D5A] to-[#7BB3C7]',

  // Secondary gradients for supporting elements
  secondaryToAccent: 'from-[#4A90A4] to-[#7BB3C7]',

  // Subtle gradients for backgrounds and overlays
  subtle: 'from-[#213D5A]/10 to-[#4A90A4]/10',
} as const

/**
 * Brand shadow definitions using primary color
 *
 * These shadows use the primary brand color with varying opacity levels to
 * create depth and hierarchy. They provide consistent elevation effects
 * throughout the application while maintaining brand identity.
 */
export const brandShadows = {
  // Standard shadow for cards and elevated elements
  primary: 'shadow-[0_4px_14px_0_rgba(33,61,90,0.25)]',

  // Large shadow for modals and overlays
  primaryLg: 'shadow-[0_8px_25px_0_rgba(33,61,90,0.35)]',

  // Extra large shadow for hero sections and major elements
  primaryXl: 'shadow-[0_20px_40px_0_rgba(33,61,90,0.45)]',
} as const

/**
 * TypeScript types for type safety and IntelliSense support
 *
 * These types ensure that only valid brand color keys can be used when
 * referencing the brand color objects, providing compile-time safety
 * and better developer experience.
 */
export type BrandColor = keyof typeof brandColors
export type BrandColorClass = keyof typeof brandColorClasses
export type BrandGradient = keyof typeof brandGradients
export type BrandShadow = keyof typeof brandShadows

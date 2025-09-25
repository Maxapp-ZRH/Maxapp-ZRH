/**
 * Screenshot Generation Script
 *
 * This script uses Puppeteer to capture screenshots of the Maxapp ZRH website
 * in various sizes and themes. It's primarily used for generating:
 * - Desktop and mobile screenshots for documentation
 * - Open Graph images for social media sharing
 * - Marketing materials and presentations
 *
 * The script supports multiple viewport sizes, themes (light/dark), and output
 * formats (WebP, PNG, JPEG) to meet different use cases.
 */

import fs from 'node:fs'
import path from 'node:path'

import type { Browser } from 'puppeteer-core'
import puppeteer from 'puppeteer-core'

// Path to Chrome executable - required for Puppeteer to launch the browser
const executablePath =
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

// Target URL for screenshots - defaults to localhost, can be overridden via URL env var
const url = process.env.URL || 'http://localhost:3000'

// Output directory for generated screenshots
const outputDir = path.join(process.cwd(), 'public/screenshots')

/**
 * Viewport size configurations for different screenshot types
 *
 * These sizes are optimized for:
 * - Desktop: Full HD resolution for documentation and presentations
 * - Mobile: iPhone 16 Pro Max dimensions for mobile testing
 * - OG Image: Standard Open Graph image size for social media sharing
 */
const SIZE = {
  // Full HD resolution for desktop screenshots
  desktop: {
    width: 1920,
    height: 1080,
  },
  // iPhone 16 Pro Max dimensions for mobile screenshots
  mobile: {
    width: 440,
    height: 956,
  },
  // Open Graph image size (Facebook, Twitter, LinkedIn standard)
  'og-image': {
    width: 1200,
    height: 630,
  },
} as const

/**
 * Theme type for screenshot generation
 *
 * Currently supports light and dark themes, which are applied via
 * CSS media queries (prefers-color-scheme) during screenshot capture
 */
type Theme = 'light' | 'dark'

/**
 * Captures screenshots of a webpage with specified dimensions and themes
 *
 * This function handles the core screenshot capture logic, including:
 * - Setting up the browser page with the correct viewport size
 * - Navigating to the target URL and waiting for content to load
 * - Applying theme-specific media queries for light/dark mode
 * - Generating screenshots in the specified format and quality
 * - Saving files with descriptive naming convention
 *
 * @param browser - Puppeteer browser instance for page creation
 * @param url - Target URL to capture screenshots from
 * @param size - Viewport size key from SIZE configuration
 * @param themes - Array of themes to capture (defaults to ['light'])
 * @param type - Output image format (defaults to 'webp')
 */
async function captureScreenshot({
  browser,
  url,
  size,
  themes = ['light'],
  type = 'webp',
}: {
  browser: Browser
  url: string
  size: keyof typeof SIZE
  themes?: Theme[]
  type?: 'webp' | 'png' | 'jpeg'
}) {
  // Ensure the output directory exists before attempting to save files
  await fs.promises.mkdir(outputDir, { recursive: true })

  // Create a new browser page for this screenshot session
  const page = await browser.newPage()

  // Set the viewport to the specified size for consistent rendering
  const { width, height } = SIZE[size]
  await page.setViewport({ width, height })

  // Navigate to the target URL and wait for network activity to settle
  // 'networkidle2' ensures all network requests have completed
  await page.goto(url, { waitUntil: 'networkidle2' })

  // Capture screenshots for each requested theme
  for (const theme of themes) {
    // Apply theme-specific CSS media queries to simulate light/dark mode
    await page.emulateMediaFeatures([
      { name: 'prefers-color-scheme', value: theme },
    ])

    // Generate descriptive filename based on size, theme, and format
    const filePath = path.join(
      outputDir,
      `screenshot-${size}-${theme}.${type}`,
    ) as `${string}.webp` | `${string}.png` | `${string}.jpeg`

    // Capture the screenshot with specified format and quality settings
    // PNG doesn't use quality parameter, while WebP/JPEG use 90% quality
    await page.screenshot({
      path: filePath,
      type,
      quality: type !== 'png' ? 90 : undefined,
    })

    console.log(`✅ Screenshot saved:`, filePath)
  }

  // Clean up the page to free memory
  await page.close()
}

/**
 * Main execution function that orchestrates the screenshot capture process
 *
 * This function:
 * 1. Launches a Puppeteer browser instance
 * 2. Captures screenshots in three different configurations:
 *    - Desktop viewport (1920x1080) for documentation
 *    - Mobile viewport (440x956) for mobile testing
 *    - Open Graph image (1200x630) for social media sharing
 * 3. Handles errors gracefully and ensures browser cleanup
 * 4. Provides console feedback for each step
 */
async function main() {
  // Launch Puppeteer browser with the specified Chrome executable
  const browser = await puppeteer.launch({
    executablePath,
  })

  try {
    // Capture desktop screenshot for documentation and presentations
    await captureScreenshot({
      browser,
      url,
      size: 'desktop',
      themes: ['light'],
    })

    // Capture mobile screenshot for responsive design testing
    await captureScreenshot({
      browser,
      url,
      size: 'mobile',
      themes: ['light'],
    })

    // Capture Open Graph image from the dedicated /og route
    // Uses PNG format for better compatibility with social media platforms
    await captureScreenshot({
      browser,
      url: `${url}/og`,
      size: 'og-image',
      themes: ['light'],
      type: 'png',
    })

    console.log('✅ All screenshots captured successfully.')
  } catch (error) {
    console.error('⛔️ Error capturing screenshots:', error)
  } finally {
    // Always close the browser to free system resources
    await browser.close()
  }
}

// Execute the main function when the script is run directly
main()

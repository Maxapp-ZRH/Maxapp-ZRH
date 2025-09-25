/**
 * MDX Content Loading and Type Definitions
 *
 * This module provides utilities for loading and managing MDX content throughout
 * the application. It includes type definitions for different content types
 * (articles, case studies) and functions to dynamically load and process
 * MDX files from the filesystem.
 *
 * The module uses a generic approach to handle different content types while
 * maintaining type safety and providing consistent data structures.
 */

import { type ImageProps } from 'next/image'
import glob from 'fast-glob'

/**
 * Generic function to load MDX entries from a directory
 *
 * This function dynamically discovers and loads MDX files from a specified
 * directory, extracting metadata and generating URLs for each entry. It's
 * designed to work with any content type that includes a date field.
 *
 * The function:
 * 1. Uses fast-glob to find all page.mdx files in the target directory
 * 2. Dynamically imports each file to extract metadata
 * 3. Generates URLs by converting file paths to route paths
 * 4. Sorts entries by date in descending order (newest first)
 *
 * @param directory - Target directory within src/app/ (e.g., 'blog', 'work')
 * @param metaName - Name of the exported metadata object in each MDX file
 * @returns Promise resolving to array of MDX entries with metadata and URLs
 */
async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/[locale]/${directory}` })).map(
        async (filename) => {
          // Dynamically import the MDX file to access its metadata
          const metadata = (
            await import(`../app/[locale]/${directory}/${filename}`)
          )[metaName] as T
          return {
            ...metadata,
            metadata,
            // Generate URL by removing /page.mdx and converting to route path
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}

/**
 * Image props type with optional alt text
 *
 * This type extends Next.js ImageProps but makes the alt attribute optional,
 * which is useful for decorative images or when alt text is not always required.
 */
type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

/**
 * Generic MDX entry type
 *
 * This type represents a loaded MDX entry with its metadata and generated URL.
 * It's used as the return type for the loadEntries function and provides
 * type safety for content loading operations.
 */
export type MDXEntry<T> = T & { href: string; metadata: T }

/**
 * Article metadata interface
 *
 * Defines the structure for blog article metadata. This interface is used
 * to type-check article content and ensure consistency across all blog posts.
 */
export interface Article {
  date: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

/**
 * Case study metadata interface
 *
 * Defines the structure for case study metadata. This interface includes
 * client information, project details, and testimonial data to support
 * comprehensive case study presentations.
 */
export interface CaseStudy {
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

/**
 * Load all blog articles
 *
 * This function loads all article entries from the blog directory and returns
 * them sorted by date (newest first). It's used to populate blog listing pages
 * and generate article feeds.
 *
 * @returns Promise resolving to array of article entries
 */
export function loadArticles() {
  return loadEntries<Article>('blog', 'article')
}

/**
 * Load all case studies
 *
 * This function loads all case study entries from the work directory and returns
 * them sorted by date (newest first). It's used to populate portfolio pages
 * and showcase client work.
 *
 * @returns Promise resolving to array of case study entries
 */
export function loadCaseStudies() {
  return loadEntries<CaseStudy>('work', 'caseStudy')
}

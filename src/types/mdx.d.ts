/**
 * Type declarations for MDX processing plugins
 *
 * This file contains TypeScript module declarations for various MDX processing
 * plugins that don't have built-in type definitions. These declarations help
 * TypeScript understand the shape and behavior of these modules when they're
 * imported in the codebase.
 */

/**
 * Module declaration for recma-import-images
 *
 * This plugin automatically imports and optimizes images referenced in MDX files.
 * It transforms image references into optimized imports, handling both local
 * and remote images. The plugin is used in the MDX processing pipeline to
 * ensure images are properly bundled and optimized.
 */
declare module 'recma-import-images' {
  const recmaImportImages: () => unknown
  export default recmaImportImages
}

/**
 * Module declaration for remark-rehype-wrap
 *
 * This plugin wraps specific HTML elements with custom components during the
 * remark-to-rehype transformation process. It's particularly useful for
 * wrapping elements like images, code blocks, or other content with custom
 * React components while processing MDX content.
 */
declare module 'remark-rehype-wrap' {
  export const remarkRehypeWrap: (options: Record<string, unknown>) => unknown
}

/**
 * Module declaration for unified-conditional
 *
 * This plugin provides conditional processing capabilities for unified processors.
 * It allows different processing steps to be applied based on specific conditions,
 * enabling more flexible and dynamic content transformation pipelines. This is
 * useful for applying different processing rules based on file metadata, content
 * structure, or other contextual factors.
 */
declare module 'unified-conditional' {
  export const unifiedConditional: (conditions: unknown[][]) => unknown
}

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

/**
 * Studio configuration. `basePath` matches the Next.js route at
 * `src/app/studio/[[...tool]]/page.tsx`, which mounts Studio under /studio.
 *
 * Singleton documents (`homePage`, `aboutPage`, etc.) are constrained via the
 * desk structure — `document.actions` strips `duplicate`, `delete`, and
 * `unpublish` so editors can only edit the single pinned instance.
 */
export default defineConfig({
  name: 'default',
  title: 'Dostanic.net',
  basePath: '/studio',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  document: {
    actions: (prev, context) => {
      const singletons = new Set([
        'siteSettings',
        'homePage',
        'aboutPage',
        'expertisePage',
        'workIndexPage',
      ])
      if (singletons.has(context.schemaType)) {
        return prev.filter(
          ({ action }) =>
            action !== 'duplicate' && action !== 'delete' && action !== 'unpublish',
        )
      }
      return prev
    },
  },
})

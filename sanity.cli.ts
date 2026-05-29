import { defineCliConfig } from 'sanity/cli'

/**
 * Read project + dataset from the public Next.js env so `sanity` CLI commands
 * (e.g. `npx sanity dataset export`) pick up the same target as the app.
 */
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  autoUpdates: true,
})

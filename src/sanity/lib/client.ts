import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

/**
 * Public read-only client. `useCdn: true` for cached reads in production;
 * draft / preview flows will receive their own perspective in a later phase.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
})

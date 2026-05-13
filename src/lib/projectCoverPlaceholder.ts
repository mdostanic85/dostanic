/**
 * Stable pseudo-random cover fills for work tiles (hash of slug → palette index).
 * Saturated hues read clearly behind mono labels on the dark site shell.
 */
const PLACEHOLDER_BACKGROUNDS = [
  '#1e3d5c',
  '#3d1e4f',
  '#1e5c45',
  '#5c3d1e',
  '#5c1e3d',
  '#1e5c5c',
  '#2a3358',
  '#4a2a1a',
  '#1a4a3d',
  '#3a1a4a',
  '#2d4a2a',
  '#4a1a2d',
] as const

function slugHueIndex(slug: string): number {
  let h = 0
  for (let i = 0; i < slug.length; i += 1) {
    h = (h + slug.charCodeAt(i) * (i + 17)) % 1009
  }
  return h % PLACEHOLDER_BACKGROUNDS.length
}

export function getProjectCoverPlaceholderBackground(slug: string): string {
  return PLACEHOLDER_BACKGROUNDS[slugHueIndex(slug)]
}

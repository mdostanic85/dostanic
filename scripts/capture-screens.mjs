// Captures real product screenshots from live deployments to fill portfolio
// case studies that currently have no evidence images. Run with:
//   node scripts/capture-screens.mjs
//
// Each target only points at public, unauthenticated routes — nothing here
// logs into a gated app. See docs/audit-2026-08.md for why WorkLight, Optra,
// and LimitRadar are excluded (all three sit behind a login wall).

import { chromium } from 'playwright'
import { mkdir, unlink } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.dirname(fileURLToPath(import.meta.url)) + '/..'
const VIEWPORT = { width: 1600, height: 1000 }
const DISABLE_MOTION = `
  *, *::before, *::after {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
`

const TARGETS = [
  {
    slug: 'optronic',
    base: 'https://optronic-v2.vercel.app',
    shots: [
      { name: 'cover', path: '/en/' },
      { name: 'product-detail', path: '/en/products/lvmc' },
      { name: 'de-homepage', path: '/de/' },
      { name: 'downloads', path: '/en/support/downloads' },
    ],
  },
]

async function run() {
  const browser = await chromium.launch()

  for (const target of TARGETS) {
    const dir = path.join(ROOT, 'public', 'work', target.slug)
    await mkdir(dir, { recursive: true })

    const context = await browser.newContext({
      viewport: VIEWPORT,
      deviceScaleFactor: 2,
    })
    const page = await context.newPage()

    for (const shot of target.shots) {
      const url = target.base + shot.path
      console.log(`→ ${target.slug}/${shot.name}  (${url})`)
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
      await page.addStyleTag({ content: DISABLE_MOTION })
      await page.waitForTimeout(500)
      // Raw PNG capture, then re-encode to WebP at delivery width — a 2x
      // capture straight to disk runs 1–1.7 MB per shot, well past the
      // budget for a page that ships a dozen of these.
      const raw = path.join(dir, `${shot.name}.raw.png`)
      await page.screenshot({ path: raw })

      const dest = path.join(dir, `${shot.name}.webp`)
      await sharp(raw)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(dest)
      await unlink(raw)
      console.log(`  saved ${dest}`)
    }

    await context.close()
  }

  await browser.close()
  console.log('Done.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/work/devrev',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/work/spotify-admin-enterprise',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/work/spaceinch',
        destination: '/about',
        permanent: true,
      },
      // Design system capability page — renamed away from the AI-led slug so the
      // URL matches how the work is now positioned.
      {
        source: '/work/ai-design-system-workflow',
        destination: '/work/design-systems',
        permanent: true,
      },
      // Retired explorations — off-positioning for complex B2B product work.
      {
        source: '/work/cecconis',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/work/galaxy-cash',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/work/matchlink',
        destination: '/work',
        permanent: true,
      },
    ]
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid intermittent ENOENT rename failures under `.next/cache/webpack`
      // on some macOS setups (stale / corrupted pack cache → odd RSC dev errors).
      config.cache = false
    }
    return config
  },
}

export default nextConfig

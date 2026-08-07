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

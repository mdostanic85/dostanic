import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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

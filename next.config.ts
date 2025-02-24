import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', '@emotion/react', 'next-themes', 'react-icons'],
    typedRoutes: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig

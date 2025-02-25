import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    authInterrupts: true,
    optimizePackageImports: ['@chakra-ui/react', '@emotion/react', 'next-themes', 'react-icons'],
    typedRoutes: true,
  },
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig

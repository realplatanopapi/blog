import pluginBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const withBundleAnalyzer = pluginBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      '@ark-ui/react',
      '@chakra-ui/react',
      '@emotion/react',
      '@premieroctet/next-admin',
      'highlight.js',
      'next-themes',
      'react-highlight',
      'react-icons',
    ],
    typedRoutes: true,
  },
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default withBundleAnalyzer(nextConfig)

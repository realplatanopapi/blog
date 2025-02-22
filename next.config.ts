import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "@chakra-ui/react",
      "@emotion/react",
      "next-themes",
      "react-icons",
    ],
  },
};

export default nextConfig;

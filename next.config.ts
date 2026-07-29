import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // Ignore ESLint errors during Vercel builds to prevent blocking
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Already validated locally - skip on Vercel to save build time
    ignoreBuildErrors: false,
  },
};

export default nextConfig;

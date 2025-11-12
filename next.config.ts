import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const isAnalyze = process.env.ANALYZE === "true";

const nextConfig: NextConfig = {
  // ✅ Image Optimization Configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: false,
  },

  // ✅ Compiler Options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // ✅ React Strict Mode
  reactStrictMode: true,

  // ✅ Experimental Features
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // ✅ Optional: Empty Turbopack config to silence Webpack conflict
  turbopack: {},

  // ✅ Headers for better caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

// Export with or without bundle analyzer
export default isAnalyze 
  ? withBundleAnalyzer({ enabled: true })(nextConfig) 
  : nextConfig;

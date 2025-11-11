import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const isAnalyze = process.env.ANALYZE === "true";

const nextConfig: NextConfig = {
  images: {
    domains: ["flagcdn.com"], // your allowed image domains
  },
  // any other Next.js options
};

export default isAnalyze ? withBundleAnalyzer({ enabled: true })(nextConfig) : nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.cybernews.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // ✅ for Sanity images
      },
    ],
  },
};

export default nextConfig;
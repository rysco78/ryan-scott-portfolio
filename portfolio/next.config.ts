import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ryan-scott-portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

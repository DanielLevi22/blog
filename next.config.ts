import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'contentlayer/generated': require.resolve('./.contentlayer/generated'),
    };
    return config;
  },
}

export default nextConfig;


import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/french-learning-app',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

export default nextConfig;

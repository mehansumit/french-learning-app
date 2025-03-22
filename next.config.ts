import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
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

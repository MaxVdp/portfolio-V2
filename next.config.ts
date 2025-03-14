import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for highlighting potential problems
  swcMinify: true, // Uses SWC compiler for minification (faster than Terser)
};

export default nextConfig;

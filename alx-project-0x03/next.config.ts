import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Set outputFileTracingRoot to explicitly define the workspace root
  // This prevents Next.js from warning when multiple lockfiles are present.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['skillicons.dev'],
  },
};

export default nextConfig;

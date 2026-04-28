import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "admin.claimscopeconsulting.com",
      },
      {
        protocol: "https",
        hostname: "admin.claimscopeconsulting.com",
      },
    ],
  },
};

export default nextConfig;

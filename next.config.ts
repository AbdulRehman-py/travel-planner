import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "nxck8s17dg.ufs.sh",
      },
    ],
  },
};

module.exports = nextConfig;
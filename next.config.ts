import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: `$img-path: '/img';`,
  },
};

export default nextConfig;

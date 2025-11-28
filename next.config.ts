import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$img-path: '/img';`,
  },
  output: 'export',
  compress: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   sassOptions: {
//     additionalData: `$img-path: '/img';`,
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: `$img-path: '/img';`,
  },
  // Добавьте эти настройки для Vercel
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
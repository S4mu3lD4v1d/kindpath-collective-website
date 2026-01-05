/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // If you use next/image, static export can't use the default image optimizer.
  images: { unoptimized: true },
};

module.exports = nextConfig;

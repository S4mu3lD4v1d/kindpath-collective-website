/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  // If you use next/image, static export can't use the default image optimizer.
  images: { unoptimized: true },
};

module.exports = nextConfig;

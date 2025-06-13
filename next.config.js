/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raba.pages.dev", "github.com"],
    unoptimized: true,
  },
  output: "export",
  distDir: ".next",
  trailingSlash: true,
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: ".next",
  images: {
    unoptimized: true,
    domains: ["raba.pages.dev", "github.com"],
  },
  trailingSlash: true,
};

module.exports = nextConfig;

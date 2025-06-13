/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raba.pages.dev", "github.com"],
  },
  distDir: ".next",
  output: "export",
  trailingSlash: true,
};

module.exports = nextConfig;

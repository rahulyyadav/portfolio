/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raba.pages.dev", "github.com"],
    unoptimized: true,
  },
  distDir: ".next",
  output: "export",
  trailingSlash: true,
  basePath: "",
};

module.exports = nextConfig;

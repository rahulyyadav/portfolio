/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raba.pages.dev", "github.com"],
  },
  output: "export",
  distDir: ".next",
};

module.exports = nextConfig;

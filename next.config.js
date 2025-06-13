/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raba.pages.dev", "github.com"],
  },
  distDir: ".next",
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index.html",
      },
    ];
  },
};

module.exports = nextConfig;

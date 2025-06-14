/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
    domains: ["rahul-yadav.com.np", "github.com"],
  },
  trailingSlash: true,
};

module.exports = nextConfig;

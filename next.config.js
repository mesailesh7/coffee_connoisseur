/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;

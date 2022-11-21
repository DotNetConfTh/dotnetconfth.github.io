/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  // todo: add why this is needed
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

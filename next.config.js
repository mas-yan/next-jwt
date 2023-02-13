/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER: process.env.SERVER,
  },
  reactStrictMode: true,
}

module.exports = nextConfig

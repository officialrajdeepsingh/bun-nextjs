/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'miro.medium.com',
      },
      {
        hostname: 'assets.website-files.com'
      }
    ],
  },
}

module.exports = nextConfig

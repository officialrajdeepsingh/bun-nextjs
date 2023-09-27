/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'miro.medium.com',
      },
    ],
  },
}

module.exports = nextConfig

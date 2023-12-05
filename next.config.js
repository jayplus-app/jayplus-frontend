/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/booking',
        destination: '/booking/selection',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

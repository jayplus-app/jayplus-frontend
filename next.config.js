/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/booking/selection',
        permanent: true,
      },
      {
        source: '/booking',
        destination: '/booking/selection',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

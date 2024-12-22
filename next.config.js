/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
  },
  async redirects() {
    return [
      {
        source: '/awards',
        destination: 'https://gdsc-awards.omsimos.com/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

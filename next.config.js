/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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

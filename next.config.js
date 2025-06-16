/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.in", "fakestoreapi.com"], // Tambahkan domain image yang dipakai
  },
};

module.exports = nextConfig;
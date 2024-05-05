/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["mishanep.store", "localhost:3000"],
    },
  },
};

module.exports = nextConfig;

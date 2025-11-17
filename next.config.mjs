/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "eu-west-2.graphassets.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

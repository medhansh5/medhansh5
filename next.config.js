/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
    domains: ['lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
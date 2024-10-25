/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bsky.social",
        pathname: "/xrpc/com.atproto.sync.getBlob",
      },
      {
        protocol: "https",
        hostname: "cdn.bsky.app",
        pathname: "/img/avatar/plain/**",
      },
    ],
  },
};

export default nextConfig;

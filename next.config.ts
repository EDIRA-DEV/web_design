import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/insights/scaling-leap-mro-queretaro',
        destination: '/research',
        permanent: true,
      },
      {
        source: '/research/scaling-leap-mro-queretaro',
        destination: '/research',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


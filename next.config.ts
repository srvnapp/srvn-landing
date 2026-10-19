import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [{
      source: "/s/:path*",
      headers: [
        { key: "Referrer-Policy", value: "no-referrer" },
        { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
        { key: "X-Content-Type-Options", value: "nosniff" },
      ],
    }];
  },
};

export default nextConfig;

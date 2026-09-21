import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fictional business: tell crawlers not to index anything, including the
  // /public images, which a <meta name="robots"> tag can't reach. There's
  // deliberately no robots.txt Disallow — a crawler that can't fetch a page
  // never sees its noindex, and the URL can still end up listed.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;

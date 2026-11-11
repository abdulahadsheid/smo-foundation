import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Old URLs from the first version of the site, sent to their new homes.
  async redirects() {
    return [
      { source: "/programmes", destination: "/our-work", permanent: true },
      { source: "/programmes/:slug", destination: "/our-work", permanent: true },
      { source: "/projects", destination: "/where-we-work", permanent: true },
      { source: "/projects/:slug", destination: "/where-we-work", permanent: true },
      { source: "/impact", destination: "/our-work", permanent: true },
      { source: "/news", destination: "/", permanent: true },
      { source: "/news/:slug", destination: "/", permanent: true },
      { source: "/gallery", destination: "/", permanent: true },
      { source: "/get-involved", destination: "/support", permanent: true },
      { source: "/partnerships", destination: "/support#partner", permanent: true },
      { source: "/results", destination: "/our-work", permanent: true },
      { source: "/stories", destination: "/", permanent: true },
      { source: "/stories/:slug", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

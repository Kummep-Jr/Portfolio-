import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  env: {
    // Public name of the GitHub App used to sign in to the admin panel (/keystatic).
    // Not a secret — it appears in the app's public URL. A Vercel variable overrides it.
    NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG:
      process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG || "kummep-jr-admin",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "images.weserv.nl",
      },
    ],
  },
};

export default nextConfig;

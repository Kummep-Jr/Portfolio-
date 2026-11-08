import profileJson from "../../content/settings/profile.json";
import { obj, str } from "@/lib/content";

const profile = obj(profileJson);

export const siteConfig = {
  name: str(profile.name, "Kummep Jnr"),
  title: str(profile.siteTitle, str(profile.name, "Kummep Jnr")),
  description: str(profile.siteDescription),
  url: str(profile.siteUrl, "https://kummep-jr.vercel.app").replace(/\/$/, "") || "https://kummep-jr.vercel.app",
  githubUsername: str(profile.githubUsername),
  twitterHandle: str(profile.twitterHandle),
  ogImage: str(profile.ogImage, "/assets/profile/og-image.jpg") || "/assets/profile/og-image.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  copyright: "All rights reserved.",
  footerTagline: str(profile.footerTagline),
};

import profileJson from "../../content/settings/profile.json";
import { list, obj, str } from "@/lib/content";

const profile = obj(profileJson);

export type SocialIcon = "x" | "linkedin" | "github" | "medium" | "mail" | "resume";
const icons: SocialIcon[] = ["x", "linkedin", "github", "medium", "mail", "resume"];

const avatar = str(profile.avatar) || "/icon.png";

export const heroConfig = {
  name: str(profile.name, "Kummep Jnr"),
  fullName: str(profile.fullName) || str(profile.name, "Kummep Jnr"),
  email: str(profile.email),
  calendarUrl: str(profile.calendarUrl),
  bio: str(profile.bio),
  avatar,
  avatarSmile: avatar,
  banner: str(profile.banner) || "/assets/profile/banner.jpg",
  bannerAlt: str(profile.bannerAlt),
  timezone: str(profile.timezone) || "Africa/Lagos",
  location: str(profile.location),
};

export const socialLinks = list(profile.socialLinks)
  .map(obj)
  .map((link) => ({
    name: str(link.name),
    href: str(link.href),
    icon: (icons.includes(link.icon as SocialIcon) ? link.icon : "github") as SocialIcon,
  }))
  .filter((link) => link.href);

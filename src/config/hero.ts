export const heroConfig = {
  name: "Kummep Jnr",
  // TODO: replace with the email you want visitors to use
  email: "hello@example.com",
  // Optional booking link (e.g. cal.com). Leave empty to hide the "Book a call" button.
  calendarUrl: "",
  bio: "Full-stack developer and geologist. I build clean, practical web apps and automation tools — and I bring a field scientist's patience for reading layers, finding patterns, and getting the details right.",
  avatar: "/assets/avatar.png",
  avatarSmile: "/assets/avatar.png",
  // TODO: set your IANA timezone (e.g. "Africa/Lagos") and location
  timezone: "UTC",
  location: "Earth",
};

export type SocialIcon = "x" | "linkedin" | "github" | "medium" | "mail" | "resume";

export const socialLinks: { name: string; href: string; icon: SocialIcon }[] = [
  {
    name: "GitHub",
    href: "https://github.com/Kummep-jnr",
    icon: "github",
  },
  // TODO: add LinkedIn / X / Medium here, e.g.
  // { name: "LinkedIn", href: "https://www.linkedin.com/in/your-profile/", icon: "linkedin" },
  {
    name: "Mail",
    href: `mailto:${heroConfig.email}`,
    icon: "mail",
  },
];

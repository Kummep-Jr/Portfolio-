export const heroConfig = {
  name: "Kummep Jnr",
  fullName: "Kummep Ringpon Timyil",
  email: "ringpon123@gmail.com",
  // Optional booking link (e.g. cal.com). Leave empty to hide the "Book a call" button.
  calendarUrl: "",
  bio: "Full-stack developer, IT technician and geology graduate (University of Jos, 2025). I build web apps with Python and JavaScript, make GIS and geological maps, and bring a field geologist's eye for detail to everything I ship.",
  avatar: "/assets/avatar.png",
  avatarSmile: "/assets/avatar.png",
  timezone: "Africa/Lagos",
  location: "Girei, Adamawa State, Nigeria",
};

export type SocialIcon = "x" | "linkedin" | "github" | "medium" | "mail" | "resume";

export const socialLinks: { name: string; href: string; icon: SocialIcon }[] = [
  {
    name: "GitHub",
    href: "https://github.com/SmartDev911",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ringpon-kummep-969318403",
    icon: "linkedin",
  },
  {
    name: "X",
    href: "https://x.com/Smart_dev001",
    icon: "x",
  },
  {
    name: "Mail",
    href: `mailto:${heroConfig.email}`,
    icon: "mail",
  },
  {
    name: "CV",
    href: "/resume",
    icon: "resume",
  },
];

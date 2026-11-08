export type ExperienceItem = {
  company: string;
  role: string;
  periodShort: string;
  periodLong: string;
  locationShort: string;
  locationLong: string;
  working?: boolean;
  details?: string[];
  tech?: string[];
  /** Optional logo shown on the home page, e.g. "/assets/company-logo.png" */
  logo?: string;
};

// TODO: add your roles here. The Work page and the home "Experience" section
// stay hidden until this list has at least one entry. Example:
// {
//   company: "Company name",
//   role: "Full-stack Developer",
//   periodShort: "Jan 24 – Present",
//   periodLong: "January 2024 – Present",
//   locationShort: "Remote",
//   locationLong: "Remote",
//   working: true,
//   details: ["What you built or improved."],
//   tech: ["TypeScript", "React", "Node.js"],
// },
export const experience: ExperienceItem[] = [];

export type Achievement = {
  slug: string;
  title: string;
  organization: string;
  year: string;
  periodShort: string;
  periodLong: string;
  details?: string[];
  /** Cover image for cards and detail header */
  image?: string;
  /** Pinterest-style photo gallery on the detail page */
  gallery?: string[];
  featured?: boolean;
};

// TODO: add awards, certifications, or milestones. The Achievements page is
// hidden from navigation until this list has entries.
export const achievements: Achievement[] = [];

export function getAchievement(slug: string) {
  return achievements.find((item) => item.slug === slug);
}

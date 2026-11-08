export type CvVariant = {
  slug: string;
  title: string;
  focus: string;
  pdf: string;
  docx: string;
};

const cv = (slug: string) => ({
  pdf: `/cv/Kummep-Ringpon-Timyil-CV-${slug}.pdf`,
  docx: `/cv/Kummep-Ringpon-Timyil-CV-${slug}.docx`,
});

export const resumeConfig = {
  title: "CV",
  description:
    "Six tailored versions of my CV — pick the one that fits the role. Each is available as PDF and Word.",
  variants: [
    {
      slug: "software-it",
      title: "Software & IT",
      focus: "Full-stack developer, junior software developer and IT support roles.",
      ...cv("software-it"),
    },
    {
      slug: "general-geology",
      title: "General Geology",
      focus: "Entry-level geologist roles in solid minerals, environmental and geospatial work.",
      ...cv("general-geology"),
    },
    {
      slug: "gis-cartography",
      title: "GIS & Cartography",
      focus: "GIS analyst, cartographer and geospatial technician roles.",
      ...cv("gis-cartography"),
    },
    {
      slug: "mining-exploration",
      title: "Mining & Exploration",
      focus: "Solid minerals exploration, mining and quarrying roles.",
      ...cv("mining-exploration"),
    },
    {
      slug: "hydrogeology-environmental",
      title: "Hydrogeology & Environmental",
      focus: "Groundwater exploration, environmental assessment and geotechnical site investigation.",
      ...cv("hydrogeology-environmental"),
    },
    {
      slug: "academic-research",
      title: "Academic & Research",
      focus: "Graduate assistant, research assistant and M.Sc. positions in geology.",
      ...cv("academic-research"),
    },
  ] satisfies CvVariant[],
};

/** Path shown in navigation / social links */
export const resumeHref = "/resume";

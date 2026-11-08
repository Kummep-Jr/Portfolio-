import { heroConfig, socialLinks } from "@/config/hero";
import { siteConfig } from "@/config/meta";

const profileLinks = socialLinks
  .filter((link) => link.href.startsWith("http"))
  .map((link) => link.href);

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: heroConfig.fullName,
    alternateName: heroConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${heroConfig.avatar}`,
    jobTitle: ["Full-stack Developer", "Geologist", "GIS Analyst"],
    description: siteConfig.description,
    email: `mailto:${heroConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Girei",
      addressRegion: "Adamawa State",
      addressCountry: "NG",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Jos",
    },
    memberOf: [
      { "@type": "Organization", name: "Nigerian Mining and Geosciences Society (NMGS)" },
      { "@type": "Organization", name: "Nigerian Association of Petroleum Explorationists (NAPE)" },
    ],
    knowsAbout: [
      "Full-stack web development",
      "Python",
      "Django",
      "Flask",
      "React",
      "Next.js",
      "Geological field mapping",
      "Petrography",
      "GIS",
      "ArcGIS Pro",
      "QGIS",
      "Cartography",
      "IT support",
    ],
    knowsLanguage: ["English", "Hausa", "Taroh"],
    sameAs: profileLinks,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import { collection, config, fields, singleton } from "@keystatic/core";

/**
 * Admin panel schema — open /keystatic on the site to edit.
 * In development changes are written to local files; in production they are
 * committed to GitHub (only accounts with write access to the repo can save).
 */

const REPO = "Kummep-jnr/Portfolio-" as const;

const highlightHint = "Wrap words in **double stars** to highlight them.";

const image = (label: string, folder: string, description?: string) =>
  fields.image({
    label,
    description,
    directory: `public/assets/${folder}`,
    publicPath: `/assets/${folder}/`,
  });

const textList = (label: string, itemLabel: string, multiline = false) =>
  fields.array(fields.text({ label: itemLabel, multiline }), {
    label,
    itemLabel: (props) => props.value || itemLabel,
  });

export default config({
  storage:
    process.env.NODE_ENV === "development"
      ? { kind: "local" }
      : { kind: "github", repo: REPO },
  ui: {
    brand: { name: "Kummep Jnr — Admin" },
    navigation: {
      "Site & profile": ["profile", "about"],
      Career: ["experience", "education", "cv", "techStack"],
      Work: ["projects", "maps", "achievements"],
      Writing: ["blog"],
      Personal: ["books", "favourites"],
    },
  },

  singletons: {
    profile: singleton({
      label: "Profile & site settings",
      path: "content/settings/profile",
      format: { data: "json" },
      schema: {
        name: fields.text({ label: "Display name", validation: { isRequired: true } }),
        fullName: fields.text({ label: "Full name" }),
        bio: fields.text({ label: "Short bio (home page)", multiline: true }),
        avatar: image("Profile photo", "profile"),
        banner: image("Home page banner", "profile"),
        bannerAlt: fields.text({ label: "Banner description (for screen readers)" }),
        rotatingTitles: textList("Titles that rotate under your name", "Title"),
        location: fields.text({ label: "Location" }),
        timezone: fields.text({
          label: "Timezone",
          description: "IANA name, e.g. Africa/Lagos",
          defaultValue: "Africa/Lagos",
        }),
        email: fields.text({ label: "Contact email" }),
        calendarUrl: fields.url({
          label: "Booking link (optional)",
          description: "e.g. a cal.com link. Leave empty to hide the 'Book a call' button.",
        }),
        socialLinks: fields.array(
          fields.object({
            name: fields.text({ label: "Label" }),
            href: fields.text({ label: "Link", description: "Full URL, mailto:…, or a page like /resume" }),
            icon: fields.select({
              label: "Icon",
              defaultValue: "github",
              options: [
                { label: "GitHub", value: "github" },
                { label: "LinkedIn", value: "linkedin" },
                { label: "X / Twitter", value: "x" },
                { label: "Medium", value: "medium" },
                { label: "Email", value: "mail" },
                { label: "CV / document", value: "resume" },
              ],
            }),
          }),
          { label: "Social links", itemLabel: (props) => props.fields.name.value || "Link" },
        ),
        quote: fields.object(
          {
            text: fields.text({ label: "Quote", multiline: true }),
            author: fields.text({ label: "Author" }),
          },
          { label: "Home page quote" },
        ),
        footerTagline: fields.text({ label: "Footer tagline" }),
        siteTitle: fields.text({ label: "Browser / Google title" }),
        siteDescription: fields.text({ label: "Google description", multiline: true }),
        ogImage: image("Social share image (1200×630)", "profile"),
        siteUrl: fields.url({ label: "Website address", description: "Your live domain, e.g. https://kummep.dev" }),
        githubUsername: fields.text({ label: "GitHub username (for the activity graph)" }),
        twitterHandle: fields.text({ label: "X / Twitter handle", description: "e.g. @Smart_dev001" }),
      },
    }),

    about: singleton({
      label: "About page",
      path: "content/settings/about",
      format: { data: "json" },
      schema: {
        headline1: fields.text({ label: "Headline — line 1" }),
        headline2: fields.text({ label: "Headline — line 2" }),
        intro: fields.text({ label: "Intro", multiline: true, description: highlightHint }),
        quote: fields.text({ label: "Pull quote", multiline: true }),
        traits: fields.array(
          fields.object({
            label: fields.text({ label: "Trait" }),
            color: fields.select({
              label: "Colour",
              defaultValue: "sky",
              options: ["sky", "emerald", "amber", "violet", "rose", "slate"].map((c) => ({
                label: c,
                value: c,
              })),
            }),
          }),
          { label: "Traits", itemLabel: (props) => props.fields.label.value || "Trait" },
        ),
        meta: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            value: fields.text({ label: "Value" }),
          }),
          { label: "Quick facts (Location, Status, Focus…)", itemLabel: (props) => props.fields.label.value || "Fact" },
        ),
        storyTitle: fields.text({ label: "Story heading" }),
        story: fields.array(fields.text({ label: "Paragraph", multiline: true, description: highlightHint }), {
          label: "Story paragraphs",
          itemLabel: (props) => props.value.slice(0, 60) || "Paragraph",
        }),
        principlesTitle: fields.text({ label: "Principles heading" }),
        principles: fields.array(
          fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
          }),
          { label: "Principles", itemLabel: (props) => props.fields.title.value || "Principle" },
        ),
        beyondTitle: fields.text({ label: "'Beyond' heading" }),
        beyond: fields.array(fields.text({ label: "Paragraph", multiline: true, description: highlightHint }), {
          label: "'Beyond' paragraphs",
          itemLabel: (props) => props.value.slice(0, 60) || "Paragraph",
        }),
        connectTitle: fields.text({ label: "Connect box heading" }),
        connectText: fields.text({ label: "Connect box text", multiline: true }),
      },
    }),

    experience: singleton({
      label: "Work experience",
      path: "content/settings/experience",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            role: fields.text({ label: "Role", validation: { isRequired: true } }),
            company: fields.text({ label: "Company / organisation" }),
            type: fields.text({ label: "Type", description: "e.g. Self-employed, NYSC, Full-time, Internship" }),
            periodShort: fields.text({ label: "Dates (short)", description: "e.g. 2023 – Present" }),
            periodLong: fields.text({ label: "Dates (long)", description: "e.g. January 2023 – Present" }),
            locationShort: fields.text({ label: "Location (short)" }),
            locationLong: fields.text({ label: "Location (long)" }),
            working: fields.checkbox({ label: "Currently working here" }),
            details: textList("Bullet points", "Bullet", true),
            tech: textList("Tools / technologies", "Tool"),
            logo: image("Logo (optional)", "experience"),
          }),
          {
            label: "Roles (first two appear on the home page)",
            itemLabel: (props) =>
              [props.fields.role.value, props.fields.company.value].filter(Boolean).join(" — ") || "Role",
          },
        ),
      },
    }),

    education: singleton({
      label: "Education, skills & memberships",
      path: "content/settings/education",
      format: { data: "json" },
      schema: {
        education: fields.array(
          fields.object({
            school: fields.text({ label: "School" }),
            degree: fields.text({ label: "Qualification" }),
            period: fields.text({ label: "Year(s)" }),
            location: fields.text({ label: "Location" }),
            details: textList("Details", "Detail", true),
          }),
          { label: "Education", itemLabel: (props) => props.fields.school.value || "School" },
        ),
        skillGroups: fields.array(
          fields.object({
            title: fields.text({ label: "Group name" }),
            items: textList("Skills", "Skill"),
          }),
          { label: "Skill groups", itemLabel: (props) => props.fields.title.value || "Group" },
        ),
        memberships: textList("Professional memberships", "Membership"),
      },
    }),

    cv: singleton({
      label: "CV page",
      path: "content/settings/cv",
      format: { data: "json" },
      schema: {
        title: fields.text({ label: "Page title" }),
        description: fields.text({ label: "Intro", multiline: true }),
        variants: fields.array(
          fields.object({
            title: fields.text({ label: "CV name", validation: { isRequired: true } }),
            focus: fields.text({ label: "Best for…", multiline: true }),
            pdf: fields.file({ label: "PDF file", directory: "public/cv", publicPath: "/cv/" }),
            docx: fields.file({ label: "Word file (optional)", directory: "public/cv", publicPath: "/cv/" }),
          }),
          { label: "CV versions (the first one is previewed)", itemLabel: (props) => props.fields.title.value || "CV" },
        ),
      },
    }),

    techStack: singleton({
      label: "Tech stack icons",
      path: "content/settings/tech-stack",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            name: fields.text({ label: "Name" }),
            icon: fields.text({
              label: "Icon",
              description: "A simpleicons.org slug (e.g. django, qgis) — or a path like /assets/icons/arcgis.png",
            }),
          }),
          { label: "Tools", itemLabel: (props) => props.fields.name.value || "Tool" },
        ),
      },
    }),

    projects: singleton({
      label: "Projects",
      path: "content/settings/projects",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            title: fields.text({ label: "Title", validation: { isRequired: true } }),
            date: fields.text({ label: "Date", description: "e.g. 11.2026 or 2025" }),
            description: fields.text({ label: "Description", multiline: true }),
            tech: textList("Technologies", "Technology"),
            website: fields.url({ label: "Live site (optional)" }),
            repo: fields.url({ label: "Source code link (optional)" }),
            cover: image("Cover image (16:10 works best)", "projects"),
            featured: fields.checkbox({ label: "Feature on home page" }),
            gradient: fields.text({
              label: "Fallback gradient (used when there is no cover)",
              defaultValue: "from-amber-500/25 via-orange-500/15 to-stone-500/25",
            }),
          }),
          { label: "Projects (drag to reorder)", itemLabel: (props) => props.fields.title.value || "Project" },
        ),
      },
    }),

    maps: singleton({
      label: "Maps",
      path: "content/settings/maps",
      format: { data: "json" },
      schema: {
        intro: fields.text({
          label: "Page intro",
          multiline: true,
          defaultValue: "Geological, topographic, drainage, DEM and satellite imagery maps I've produced.",
        }),
        items: fields.array(
          fields.object({
            title: fields.text({ label: "Title", validation: { isRequired: true } }),
            type: fields.select({
              label: "Map type",
              defaultValue: "Geological",
              options: ["Geological", "Topographic", "Drainage", "DEM", "Satellite imagery", "Structural", "Other"].map(
                (t) => ({ label: t, value: t }),
              ),
            }),
            area: fields.text({ label: "Area / location" }),
            date: fields.text({ label: "Year" }),
            description: fields.text({ label: "Description", multiline: true }),
            software: textList("Software used", "Software"),
            image: image("Map image (JPG/PNG)", "maps"),
            file: fields.file({
              label: "Full-resolution file (optional, e.g. PDF)",
              directory: "public/assets/maps/files",
              publicPath: "/assets/maps/files/",
            }),
          }),
          { label: "Maps (drag to reorder)", itemLabel: (props) => props.fields.title.value || "Map" },
        ),
      },
    }),

    achievements: singleton({
      label: "Achievements",
      path: "content/settings/achievements",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            title: fields.text({ label: "Title", description: "e.g. Winner, Certificate of Completion", validation: { isRequired: true } }),
            organization: fields.text({ label: "Event / organisation" }),
            year: fields.text({ label: "Year" }),
            periodShort: fields.text({ label: "Date (short)", description: "e.g. Aug 25" }),
            periodLong: fields.text({ label: "Date (long)", description: "e.g. August 2025" }),
            details: textList("Details", "Detail", true),
            image: image("Cover photo", "achievements"),
            gallery: fields.array(image("Photo", "achievements"), {
              label: "Photo gallery",
              itemLabel: () => "Photo",
            }),
            featured: fields.checkbox({ label: "Feature on home page" }),
          }),
          {
            label: "Achievements (drag to reorder)",
            itemLabel: (props) =>
              [props.fields.title.value, props.fields.organization.value].filter(Boolean).join(" — ") || "Achievement",
          },
        ),
      },
    }),

    books: singleton({
      label: "Books",
      path: "content/settings/books",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            title: fields.text({ label: "Title", validation: { isRequired: true } }),
            author: fields.text({ label: "Author" }),
            cover: image("Cover", "books"),
          }),
          { label: "Books", itemLabel: (props) => props.fields.title.value || "Book" },
        ),
      },
    }),

    favourites: singleton({
      label: "Favourites",
      path: "content/settings/favourites",
      format: { data: "json" },
      schema: {
        movies: fields.array(
          fields.object({
            title: fields.text({ label: "Title", validation: { isRequired: true } }),
            cover: image("Poster", "favourites"),
          }),
          { label: "Movies", itemLabel: (props) => props.fields.title.value || "Movie" },
        ),
        series: fields.array(
          fields.object({
            title: fields.text({ label: "Title", validation: { isRequired: true } }),
            cover: image("Poster", "favourites"),
          }),
          { label: "Series", itemLabel: (props) => props.fields.title.value || "Series" },
        ),
      },
    }),
  },

  collections: {
    blog: collection({
      label: "Blog posts",
      slugField: "title",
      path: "content/blog/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "date"],
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Summary", multiline: true }),
        date: fields.date({ label: "Date", defaultValue: { kind: "today" } }),
        cover: image("Cover image", "blog"),
        content: fields.mdx({
          label: "Post",
          options: {
            image: { directory: "public/assets/blog", publicPath: "/assets/blog/" },
          },
        }),
      },
    }),
  },
});

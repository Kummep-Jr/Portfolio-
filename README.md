# Kummep Jnr — Portfolio

Personal portfolio of **Kummep Jnr** (Kummep Ringpon Timyil) — full-stack developer, IT technician and University of Jos geology graduate. Built with Next.js 15, TypeScript, Tailwind CSS v4, and MDX.

**GitHub:** [@SmartDev911](https://github.com/SmartDev911)

---

## Getting Started

**Requirements:** Node.js 18+

```bash
git clone https://github.com/Kummep-jnr/Portfolio-.git
cd Portfolio-
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

---

## Editing content

Almost everything lives in **`src/config/`**. Search for `TODO` to find the spots still waiting for your details.

| File | What to edit |
|------|--------------|
| `meta.ts` | Site title, description, domain, X/Twitter handle |
| `hero.ts` | Name, bio, email, timezone, location, social links |
| `about.ts` | About page story, traits, principles |
| `projects.ts` | Projects (GitHub link, live site, tech, optional cover) |
| `experience.ts` | Work history — the Work page appears once this has entries |
| `education.ts` | Education, skill groups and memberships (shown on the CV page) |
| `achievements.ts` | Awards and milestones — page appears once this has entries |
| `resume.ts` | The six CV variants on the CV page (files live in `public/cv/`) |
| `books.ts` / `favourites.ts` | Books, movies, series — pages appear once filled |
| `tech-stack.ts` | Home page tech icons ([simpleicons.org](https://simpleicons.org) slugs) |
| `quote.ts` | Quote card and rotating titles under your name |

- **CVs:** to update a CV, replace the `.docx` in `public/cv/` and regenerate the PDF (e.g. `soffice --headless --convert-to pdf --outdir public/cv public/cv/<file>.docx`).
- **Blog posts:** add `.mdx` files to `content/blog/`, then set `hasBlog = true` in `src/config/navigation.ts`.
- **Project write-ups:** add `.mdx` files to `content/projects/` (optional detail pages).
- **Images:** put files in `public/assets/` and reference them as `/assets/your-image.png`. Avatar: `public/assets/avatar.png`; banner: `public/assets/header.jpg`; social preview: `public/assets/og-image.jpg`.

---

## Credits

Based on the open-source portfolio template by [Priyanshu Urmaliya](https://github.com/GitHpriyanshu23), used under the MIT License (see `LICENSE`).

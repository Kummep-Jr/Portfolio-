# Kummep Jnr — Portfolio

Personal portfolio of **Kummep Jnr** (Kummep Ringpon Timyil) — full-stack developer, IT technician and University of Jos geology graduate. Built with Next.js 15, TypeScript, Tailwind CSS v4, and MDX.

**GitHub:** [@Kummep-Jr](https://github.com/Kummep-Jr)

---

## Getting Started

**Requirements:** Node.js 18+

```bash
git clone https://github.com/Kummep-Jr/Portfolio-.git
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

Use the **admin panel** at `/keystatic`. It covers your profile, About page, experience, CVs, projects, maps, blog, achievements, books and favourites. To set it up and use it, see **[ADMIN.md](./ADMIN.md)**.

Behind the scenes, all content lives in plain files:

| Where | What |
|---|---|
| `content/settings/*.json` | Profile, About, experience, education, CVs, projects, maps, achievements, books, favourites, tech stack |
| `content/blog/*.mdx` | Blog posts |
| `public/assets/…`, `public/cv/` | Uploaded images and files |
| `keystatic.config.ts` | The admin panel's fields |

The code in `src/config/` reads these files. Missing fields are handled safely, so an edit made in the admin can't break the build.

---

## Credits

Based on the open-source portfolio template by [Priyanshu Urmaliya](https://github.com/GitHpriyanshu23), used under the MIT License (see `LICENSE`).

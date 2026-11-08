# Admin panel

The site has a built-in admin panel at **`/keystatic`**, where you can edit:

- Your profile and About page wording
- Work experience, education, skills and CVs
- Projects, Maps, Achievements, Books and Favourites
- Blog posts

In every section you can add, edit, delete, upload images and files, and drag items into order.

## How it works

- You sign in with **GitHub**. Only GitHub accounts with **write access to the `Kummep-Jr/Portfolio-` repository** can save changes. Today that's just you.
- Every save becomes a commit in the repository. Vercel then rebuilds the site, and the change is live in about **1–2 minutes**.
- Nothing is lost: every past version is in the Git history and can be restored.
- You don't need a database or a paid service.

> **Which GitHub account?** The repository belongs to **Kummep-Jr**, so sign in with that account. Do every setup step below (Vercel, GitHub App) while signed in as Kummep-Jr.
> Never add anyone as a collaborator unless you want them to be able to edit the site.

---

## One-time setup (about 15 minutes)

### 1. Put the site on the `main` branch

All of this work lives on the `ccr-72923aad-bp0ayv` branch. Open a pull request into `main` and merge it, so the live site and the admin both use `main`.

### 2. Deploy on Vercel

1. Go to <https://vercel.com/new>, sign in with GitHub, and import **Kummep-Jr/Portfolio-**.
2. Leave the settings as they are: Framework = Next.js, Production branch = `main`.
3. Click **Deploy**.
4. Note your site address, e.g. `https://kummep-jnr.vercel.app`, or add your own domain under Project → Settings → Domains.

At this point `/keystatic` will say "Admin not set up yet". That's expected.

### 3. Create a GitHub App (this is the login)

Go to **GitHub → Settings → Developer settings → GitHub Apps → New GitHub App**, or open <https://github.com/settings/apps/new>, and fill in:

| Field | Value |
|---|---|
| GitHub App name | `kummep-portfolio-admin` (any unique name) |
| Homepage URL | your site address, e.g. `https://kummep-jnr.vercel.app` |
| Callback URL | `https://kummep-jr.vercel.app/api/keystatic/github/oauth/callback` |
| Expire user authorization tokens | ✅ leave ticked |
| Request user authorization (OAuth) during installation | ✅ tick |
| Webhook → Active | ❌ untick |
| Repository permissions → **Contents** | **Read and write** |
| Repository permissions → **Metadata** | Read-only (set automatically) |
| Repository permissions → **Pull requests** | Read-only |
| Where can this GitHub App be installed? | **Only on this account** |

Click **Create GitHub App**, then on the app's page:

1. Copy the **Client ID**.
2. Click **Generate a new client secret** and copy it. GitHub shows it only once.
3. Note the app's **slug**: the last part of its public page URL, `github.com/apps/<slug>`.
4. Click **Install App** in the left menu, then choose **Only select repositories** → **Portfolio-** → Install.

If you also add your own domain later, add a second Callback URL for it in the app settings.

### 4. Add the keys to Vercel

In Vercel → your project → **Settings → Environment Variables**, add these four, ticking all environments:

| Name | Value |
|---|---|
| `KEYSTATIC_GITHUB_CLIENT_ID` | the Client ID |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | the client secret |
| `KEYSTATIC_SECRET` | a long random string, e.g. from <https://generate-secret.vercel.app/64> |
| `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | the app slug |

Then go to **Deployments → ⋯ → Redeploy**.

### 5. Sign in

Open `https://kummep-jr.vercel.app/keystatic` and click **Sign in with GitHub**. Approve the request, and you're in.

Also open the admin, go to **Profile & site settings → Website address**, set your real address, and save. Google and link previews use it.

---

## Everyday use

| I want to… | Go to |
|---|---|
| Change my bio, photo, banner, links or titles | **Profile & site settings** |
| Edit my story | **About page** |
| Add a job or change dates | **Work experience** |
| Replace or add a CV | **CV page** → upload the PDF (and Word file) |
| Upload a map | **Maps** → Add → image (+ optional PDF) |
| Write a blog post | **Blog posts** → Create |
| Add a certificate or award, with photos | **Achievements** |
| Add books, movies or series | **Books** / **Favourites** |
| Add or remove projects | **Projects** |

- Click **Save** (or **Create** for a new blog post). The change is live 1–2 minutes later.
- To **delete**, use the 🗑 bin icon next to an item, then **Save**. For a blog post, use the delete button at the top of the post.
- **Drag** the ⠿ handle to reorder items. The order in the admin is the order on the site.
- Pages like Maps, Blog, Achievements, Books and Favourites **appear in the menu automatically** once they have at least one item.
- To highlight words in the About page, wrap them in `**double stars**`.

### Tips for files

- **Images:** JPG or PNG, ideally under 2 MB. Big phone photos are fine, but shrinking them first makes the site faster.
- **Maps:** upload a JPG/PNG preview, and optionally the full-resolution PDF.
- Keep each file under **25 MB**. Very large files make the repository slow, and GitHub rejects files over 100 MB.

## Editing on your own computer (optional)

```bash
npm install
npm run dev
```

Then open <http://localhost:3000/keystatic>. Here changes are written straight to the files on your computer, with no GitHub login. Commit and push them when you're done.

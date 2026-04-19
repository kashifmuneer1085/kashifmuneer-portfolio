# Kashif Muneer — Portfolio

AI/ML Engineer portfolio. Built with React + TypeScript + Tailwind + shadcn/ui + Framer Motion.

**Forked and customized from** the excellent open-source portfolio by [Dinesh Barri](https://github.com/dineshbarri/dineshbarri-portfolio). All original structural work credited to the source project.

---

## Tech stack

- **Framework:** React 18 + Vite 5
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui primitives
- **Animation:** Framer Motion
- **Contact form:** EmailJS
- **Icons:** Lucide React + React Icons

---

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

### Requirements

- Node.js 18+ (Node 22 recommended, Node 24 works fine)
- npm (or bun — `bun.lockb` is in the repo from upstream)

---

## Before deploying — things to set up

### 1. EmailJS (for contact form)

The contact form currently has placeholder EmailJS credentials. To make it work:

1. Sign up at [emailjs.com](https://www.emailjs.com) (free tier)
2. Add an email service (Gmail works well) → copy **Service ID**
3. Create a template with variables: `from_name`, `from_email`, `subject`, `message` → copy **Template ID**
4. Account → API Keys → copy **Public Key**
5. Open `src/components/Contact.tsx` (around line 20) and replace:
   - `YOUR_SERVICE_ID` → your Service ID
   - `YOUR_TEMPLATE_ID` → your Template ID
   - `YOUR_PUBLIC_KEY` → your Public Key

### 2. Your photo (optional)

The Hero pulls from `https://github.com/kashifmuneer1085.png` (GitHub avatar). If you want a custom photo instead:

- Drop a square photo into `/public/` (e.g., `/public/kashif-avatar.png`)
- In `src/components/Hero.tsx`, change the `<img src="..." />` in the profile card to `"/kashif-avatar.png"`

### 3. Project preview images

The `projects` array in `src/components/Projects.tsx` references `/project-fire.png`, `/project-language.png`, `/project-airquality.png`, `/project-jarvis.png`. These files don't exist yet — you need to create them:

- **Easiest:** screenshot of the project in action
- **Cleaner:** generate a themed 1200x630 card using Canva/Figma with the project name and key tech tags
- **Fallback:** the `placeholder.svg` that's already in `/public/` — temporarily edit project objects to use `/placeholder.svg`

### 4. Company logos (for Experience section)

`src/components/Experience.tsx` references `/ai4lyf.png` and `/xavor.png`. Drop those logo files into `/public/` or temporarily use `/placeholder.svg`.

---

## Content structure

All content lives **inline in component files** (not in a separate constants file — keeps things simple):

| File | What to edit |
|---|---|
| `src/components/Hero.tsx` | Name, TypeWriter words, bio, social URLs |
| `src/components/About.tsx` | Bio paragraphs + 6 highlight cards |
| `src/components/Skills.tsx` | 7 skill categories (`skillCategories` array) |
| `src/components/Experience.tsx` | Jobs (`experiences` array) |
| `src/components/Projects.tsx` | Projects (`projects` array) + categories |
| `src/components/Education.tsx` | Degrees (`educationData` array) |
| `src/components/Contact.tsx` | Email, phone, location, EmailJS creds |
| `src/components/Footer.tsx` | Social links + tagline |
| `public/Certifications.csv` | Certifications (data-driven, edit CSV directly) |
| `src/components/Certifications.tsx` | Description + logo mapping for each cert |
| `index.html` | SEO meta tags + JSON-LD schema |
| `src/pages/Index.tsx` | Page title |

---

## Deploy to Vercel

```bash
# One-time setup
npm i -g vercel
vercel login

# Deploy
vercel --prod
```

Or: push this repo to GitHub, then Import Project on [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Vite and deploys.

**Don't forget** to re-do the Vercel domain in `index.html` canonical/OG tags and in the `JSON-LD schema` once you know your deployed URL.

---

## Credits

- Original template: [Dinesh Barri](https://github.com/dineshbarri) — `dineshbarri-portfolio`
- UI components: [shadcn/ui](https://ui.shadcn.com)
- Icons: [Lucide](https://lucide.dev) + [React Icons](https://react-icons.github.io)

# Kashif Muneer — Portfolio

Personal portfolio website for **Kashif Muneer** — AI/ML Engineer based in Lahore, Pakistan.

🌐 **Live site:** [kashifmuneer-portfolio.vercel.app](https://kashifmuneer-portfolio.vercel.app)

---

## About me

AI/ML Engineer Intern at **AI4LYF**, working on LLMs, agentic AI, and RAG pipelines for healthcare insights. Computer Engineering graduate from **UET Lahore** (2021–2025). Registered Engineer with the Pakistan Engineering Council (PEC).

**Focus areas:** Applied machine learning, Deep Learning, LLMs and retrieval-augmented generation (RAG), computer vision, and Augentic AI.

---

## Tech stack

- **Framework:** React 18 + Vite 5
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animation:** Framer Motion
- **Contact form:** EmailJS
- **Icons:** Lucide React

---

## Featured projects

| Project | Description | Stack |
|---|---|---|
| **Pakistan Law Assistant** | RAG-powered legal chatbot grounded in official Pakistani law (Constitution, PPC, PECA, NADRA). Hybrid retrieval with FAISS + BM25, Groq-hosted Llama 3.3 70B. Bilingual (English + Urdu). | LangChain, FAISS, BM25, Groq, Streamlit |
| **Review Intelligence** | NLP dashboard that scrapes app reviews, clusters them by theme using sentence-transformer embeddings, and labels clusters with TF-IDF keywords. | scikit-learn, Sentence Transformers, Streamlit |
| **Autonomous Research Agent** | Multi-agent AI system that researches any topic end-to-end and generates structured 1,000–1,200 word reports. | LangGraph, Groq, Llama 3.3 70B, FastAPI |
| **Ghar Ka Hisaab** | Cross-platform household expense tracker with AI-powered receipt parsing (Roman Urdu + English) and push notifications. | React Native, Expo, Groq, Apps Script |
| **Smart Fire Extinguisher (FYP)** | Computer-vision-based fire detection with automated suppression — final-year project. | YOLO, OpenCV, Hardware Integration |

---

## Run locally

### Requirements

- Node.js 18+ (Node 22 recommended)
- npm

### Setup

```bash
# Clone the repo
git clone https://github.com/kashifmuneer1085/kashifmuneer-portfolio.git
cd kashifmuneer-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Opens at `http://localhost:8080`.

---

## Project structure

```
kashifmuneer-portfolio/
├── public/                              # Static assets served as-is
│   ├── avatar.png                       # Profile photos
│   ├── kashif-avatar.png
│   ├── kashif-avatar1.png               # Currently used in Hero
│   ├── ai4lyf.png                       # Company logo (AI4LYF)
│   ├── xavor.png                        # Company logo (Xavor)
│   ├── UET.png                          # University logo
│   ├── KIMS.png                         # College logo
│   ├── favicon.svg                      # Site favicon (KM monogram)
│   ├── Kashif_Muneer_Resume.pdf         # Downloadable resume
│   ├── Certifications.csv               # Cert data (loaded by Certifications.tsx)
│   ├── placeholder.svg
│   ├── robots.txt
│   ├── logos/                           # Certification logos
│   │   ├── microsoft.png                # Microsoft Azure AI Fundamentals
│   │   ├── navttc.png                   # NAVTTC AI/ML
│   │   ├── xavor.png                    # Xavor Generative AI Bootcamp
│   │   ├── acm.jpeg                     # ACM Fellowship AI/ML
│   │   └── ibm.png                      # IBM Coursera (Web Dev + RDBMS)
│   └── project-*.png                    # 8 project preview images
│
├── src/
│   ├── assets/
│   │   └── hero-bg.png                  # Hero section background
│   ├── components/                      # All section content lives here
│   │   ├── Hero.tsx                     # Name, tagline, photo, social links, PEC badge
│   │   ├── About.tsx                    # Bio + 6 highlight cards
│   │   ├── Skills.tsx                   # 7 skill categories
│   │   ├── Experience.tsx               # AI4LYF + Xavor work history
│   │   ├── Projects.tsx                 # 8 projects with category filter + expand/collapse
│   │   ├── Education.tsx                # UET Lahore + KIMS College
│   │   ├── Certifications.tsx           # 6 certifications (data from CSV)
│   │   ├── Contact.tsx                  # Form with EmailJS integration
│   │   ├── Footer.tsx                   # Social links + copyright
│   │   ├── Navbar.tsx                   # Top navigation with KM logo
│   │   ├── NavLink.tsx                  # Reusable nav link component
│   │   ├── TypeWriter.tsx               # Typewriter animation for tagline
│   │   └── ui/                          # shadcn/ui primitives
│   ├── hooks/
│   │   ├── use-mobile.tsx               # Mobile detection hook
│   │   └── use-toast.ts                 # Toast notification hook
│   ├── lib/                             # Utility functions
│   ├── pages/
│   │   └── Index.tsx                    # Main page composition
│   ├── App.tsx                          # Root component
│   ├── index.css                        # Global styles + CSS variables
│   ├── main.tsx                         # Entry point
│   └── vite-env.d.ts                    # TypeScript environment declarations
│
├── index.html                           # HTML template + SEO meta + JSON-LD schema
├── README.md                            # This file
├── LICENSE
├── package.json                         # Dependencies
├── tailwind.config.ts                   # Tailwind configuration
├── tsconfig.json                        # TypeScript configuration
├── vite.config.ts                       # Vite configuration
├── eslint.config.js                     # ESLint configuration
├── postcss.config.js                    # PostCSS configuration
└── components.json                      # shadcn/ui configuration
```

All section content lives **inline in its component file** — no separate constants file. To edit a section, open the matching `.tsx` file in `src/components/`.

---

## Customization guide

| What to change | File |
|---|---|
| Name, tagline, bio | `src/components/Hero.tsx` |
| About me + highlights | `src/components/About.tsx` |
| Skills | `src/components/Skills.tsx` |
| Work experience | `src/components/Experience.tsx` |
| Projects | `src/components/Projects.tsx` |
| Education | `src/components/Education.tsx` |
| Certifications data | `public/Certifications.csv` + descriptions in `src/components/Certifications.tsx` |
| Contact info | `src/components/Contact.tsx` |
| Social links + footer | `src/components/Footer.tsx` |
| SEO meta tags | `index.html` |
| Page title | `src/pages/Index.tsx` |

---

## Deployment

The site is deployed on **Vercel** with auto-deploy on every push to `main`.

To deploy your own version:

1. Push to a GitHub repo
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite and deploys
4. Live URL ready in 60 seconds

---

## Contact

- **Email:** kashifmuneer1085@gmail.com
- **LinkedIn:** [linkedin.com/in/kashif-muneer-4a641b22b](https://www.linkedin.com/in/kashif-muneer-4a641b22b/)
- **GitHub:** [@kashifmuneer1085](https://github.com/kashifmuneer1085)

---

© 2026 Kashif Muneer. All rights reserved.
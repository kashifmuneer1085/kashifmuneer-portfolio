# Kashif Muneer — Portfolio

Personal portfolio website for **Kashif Muneer** — AI/ML Engineer based in Lahore, Pakistan.

🌐 **Live site:** [kashifmuneer-portfolio.vercel.app](https://kashifmuneer-portfolio.vercel.app)

---

## About me

AI/ML Engineer Intern at **AI4LYF**, working on LLMs, agentic AI, and RAG pipelines for healthcare insights. Computer Engineering graduate from **UET Lahore** (2021–2025). Registered Engineer with the Pakistan Engineering Council (PEC).

**Interests:** Applied machine learning, LLMs and RAG systems, computer vision, and embedded AI.

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
├── public/                    # Static assets (avatar, logos, resume PDF, favicon)
│   ├── avatar.png
│   ├── favicon.svg
│   ├── Kashif_Muneer_Resume.pdf
│   ├── Certifications.csv
│   └── logos/                 # Company and certification logos
├── src/
│   ├── components/            # React components — all section content lives here
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Index.tsx          # Main page
│   └── main.tsx               # Entry point
├── index.html                 # SEO meta tags + JSON-LD schema
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

All section content lives inline in its component file — no separate constants file. Edit a section by opening the matching `.tsx` file in `src/components/`.

---

## Deployment

The site is deployed on **Vercel** with auto-deploy on every push to `main`.

To deploy your own fork:

1. Push to a GitHub repo
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite and deploys

---

## Contact

- **Email:** kashifmuneer1085@gmail.com
- **LinkedIn:** [linkedin.com/in/kashif-muneer-4a641b22b](https://www.linkedin.com/in/kashif-muneer-4a641b22b/)
- **GitHub:** [@kashifmuneer1085](https://github.com/kashifmuneer1085)

---

© 2026 Kashif Muneer. All rights reserved.
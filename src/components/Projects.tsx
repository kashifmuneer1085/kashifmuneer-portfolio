import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  github: string;
  image: string;
  live?: string;
};

const categories = [
  '🎯 All Projects',
  '🧠 NLP & AI',
  '📊 Data & Analytics',
  '👁️ Computer Vision',
  '📡 IoT & Embedded',
  '📱 Full-Stack',
  '🎙️ Voice & Automation',
];

const projects: Project[] = [
  {
    title: 'Pakistan Law Assistant',
    description:
      'RAG-powered legal chatbot grounded in official Pakistani law. Hybrid retrieval (FAISS semantic + BM25 keyword with RRF fusion) over 1,800+ chunks from the Constitution, Penal Code, PECA, and NADRA Ordinance. Groq-hosted Llama 3.3 70B generates source-cited answers with a 7-layer anti-hallucination guard. Bilingual (English + Urdu) with auto-detection.',
    tags: ['RAG', 'LangChain', 'FAISS', 'BM25', 'Groq', 'Llama 3.3 70B', 'Streamlit'],
    categories: ['🧠 NLP & AI'],
    github: 'https://github.com/kashifmuneer1085/pakistan-law-assistant',
    image: '/project-pakistan-law.png',
  },
  {
    title: 'Review Intelligence',
    description:
      'NLP dashboard that scrapes competitor app reviews from Google Play and the App Store, clusters them into theme-based cohorts with sentence-transformer embeddings (all-MiniLM-L6-v2), auto-selects optimal k via silhouette score, and labels clusters with TF-IDF keywords. Built as a 5-stage pipeline with a Streamlit dashboard for sentiment and cluster exploration.',
    tags: ['NLP', 'Clustering', 'Sentence Transformers', 'scikit-learn', 'Streamlit', 'Python'],
    categories: ['🧠 NLP & AI', '📊 Data & Analytics'],
    github: 'https://github.com/kashifmuneer1085/review-intelligence',
    image: '/project-review-intel.png',
  },
  {
    title: 'Autonomous Research Agent',
    description:
      'Production-ready multi-agent AI system that researches any topic end-to-end: searches the web, scrapes content from multiple sources, analyses findings with LLMs, and generates structured 1,000–1,200 word reports from a single query. Built on LangGraph with a planner → researcher → writer workflow, Groq Llama 3.3 70B for inference, and DuckDuckGo for retrieval — completely free-tier.',
    tags: ['LangGraph', 'Multi-Agent', 'Groq', 'Llama 3.3 70B', 'DuckDuckGo', 'FastAPI', 'Streamlit'],
    categories: ['🧠 NLP & AI'],
    github: 'https://github.com/kashifmuneer1085/autonomous-research-agent',
    image: '/project-research-agent.png',
  },
  {
    title: 'Ghar Ka Hisaab',
    description:
      'Cross-platform household expense tracker for an 8-person shared residence. React Native + Expo app with Groq-powered natural-language receipt parsing (Roman Urdu + English), Google Apps Script + Sheets as a lightweight serverless backend, and ntfy.sh push notifications for daily summaries and high-expense alerts. PIN-locked, offline-capable, deployed as Android APK via EAS.',
    tags: ['React Native', 'Expo', 'Groq', 'Apps Script', 'Google Sheets', 'ntfy.sh'],
    categories: ['📱 Full-Stack'],
    github: 'https://github.com/kashifmuneer1085/ghar-ka-hisaab',
    image: '/project-ghar-ka-hisaab.png',
  },
  {
    title: 'Smart Fire Extinguisher System',
    description:
      'Final-year project: a computer-vision-based system using deep learning for early fire detection with a smart camera sensor. Real-time smoke and fire recognition via YOLO-based object detection, with an automated fire suppression module that dynamically adjusts water spray trajectory via a motor pump. Includes a location-mapping component using coordinate-based calculations for precise response.',
    tags: ['YOLO', 'Computer Vision', 'Deep Learning', 'Python', 'OpenCV', 'Hardware Integration'],
    categories: ['👁️ Computer Vision', '📡 IoT & Embedded'],
    github: 'https://github.com/kashifmuneer1085',
    image: '/project-fire.png',
  },
  {
    title: 'AI Language Detector and Translator',
    description:
      'AI-based system that automatically detects the language of input text and translates it into a target language. Uses language identification models and translation APIs to support multilingual input.',
    tags: ['Python', 'NLP', 'AI', 'Language Detection'],
    categories: ['🧠 NLP & AI'],
    github: 'https://github.com/kashifmuneer1085/AI-Language-Detector-and-Translator',
    image: '/project-language.png',
  },
  {
    title: 'Real-Time Air Quality Monitoring System',
    description:
      'Arduino-based IoT system that monitors air pollution levels using sensors and streams real-time environmental data to a cloud platform for visualization and alerting. Demonstrates end-to-end embedded-to-cloud pipelines.',
    tags: ['Arduino', 'IoT', 'Embedded', 'Cloud', 'Sensors'],
    categories: ['📡 IoT & Embedded'],
    github: 'https://github.com/kashifmuneer1085/Air-Quality-Monitoring-System',
    image: '/project-airquality.png',
  },
  {
    title: 'JARVIS Voice Assistant',
    description:
      'Voice-controlled virtual assistant built with Python and Tkinter that performs tasks like web search, email sending, and information retrieval. An early project demonstrating speech recognition and task automation.',
    tags: ['Python', 'Tkinter', 'Voice Recognition', 'AI Assistant'],
    categories: ['🎙️ Voice & Automation', '🧠 NLP & AI'],
    github: 'https://github.com/kashifmuneer1085/Jarvis-Google-Assistant-Project',
    image: '/project-jarvis.png',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('🎯 All Projects');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleExpand = (title: string) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  const filteredProjects = projects.filter(project =>
    activeCategory === '🎯 All Projects' || project.categories.includes(activeCategory)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in computer vision, NLP, LLMs, and embedded AI systems
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false); // Reset show all when changing category
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group"
              style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.16)' }}
            >
              <div className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6 pb-7">
                <h3 className="font-display font-bold text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className={`text-muted-foreground mb-2 leading-normal ${expandedCards.has(project.title) ? '' : 'line-clamp-3'}`}>
                  {project.description}
                </p>
                <button
                  onClick={() => toggleExpand(project.title)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors mb-4 self-start"
                  aria-expanded={expandedCards.has(project.title)}
                >
                  {expandedCards.has(project.title) ? (
                    <>
                      Show less <ChevronUp size={14} />
                    </>
                  ) : (
                    <>
                      Show more <ChevronDown size={14} />
                    </>
                  )}
                </button>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronRight size={18} className={`transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
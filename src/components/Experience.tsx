import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const experiences = [
  {
    title: 'AI Engineer Intern',
    company: 'AI4LYF',
    image: '/ai4lyf.png',
    period: 'Dec 2025 – Present',
    location: 'Remote',
    description:
      'Designing and validating production deep learning systems for biometric authentication from audio. Built a cough-based identity verification pipeline achieving 1.7% EER and 94.6% accuracy on blind-test evaluation — outperforming published reference baselines.',
    achievements: [
      'Designed and validated a cough-based biometric verification pipeline for per-user identity authentication from cough acoustics: enrollment-and-verification workflow with real-world blind-test evaluation; achieved 1.7% EER and 94.6% verification accuracy on a held-out test set — outperforming published reference baselines on standard biometric metrics.',
      'Integrated the personalized verification stage with the existing on-device cough detection pipeline into a unified two-stage acoustic processing system; modular stage handoff with independent deployability, enabling cough-type classification and per-user identity verification from a single audio stream.',
      'Built an internal-testing web app for the verification workflow: enrollment and verification from consumer-hardware microphones, automated blind-test runner, per-session Excel result logging, and microphone device selection — used internally by the team for blind-test evaluation.',
      'Driving on-device readiness for the verification stage toward iOS handoff: mobile-format model export, inference-path profiling, and footprint alignment with the production classification system — supporting personalization integration with the iOS dev team through model handoff and on-device validation.',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'Deep Learning',
      'Audio Processing',
      'Biometric Authentication',
      'Triplet/Metric Learning',
      'ResNet',
      'Mel Spectrograms',
      'Librosa',
      'Streamlit',
      'On-Device ML',
      'iOS Model Export',
    ],
  },
  {
    title: 'Generative AI Intern',
    company: 'Xavor Corporation',
    image: '/xavor.png',
    period: 'June 2024 – August 2024',
    location: 'Lahore, Pakistan',
    description:
      'Built production-grade NLP, embedding, and RAG systems. Fine-tuned open-source LLMs using LoRA/QLoRA and deployed demo UIs with Streamlit.',
    achievements: [
      'Implemented NLP preprocessing (stop-word removal, stemming, lemmatization) to improve text data quality and downstream ML model performance.',
      'Developed and evaluated feature extraction methods (BoW, TF-IDF, n-grams) and word embeddings (Word2Vec, GloVe) for semantic representation in NLP tasks.',
      'Built Retrieval-Augmented Generation (RAG) pipelines using Pinecone, ChromaDB, Hugging Face, and OpenAI embeddings to enhance contextual response accuracy.',
      'Fine-tuned LLMs (Llama 2, Gemma) using LoRA/QLoRA and deployed interactive demo UIs with Streamlit.',
    ],
    technologies: [
      'Python',
      'Pinecone',
      'ChromaDB',
      'Hugging Face',
      'OpenAI',
      'LoRA',
      'QLoRA',
      'Llama 2',
      'Gemma',
      'Streamlit',
      'Word2Vec',
      'GloVe',
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From data analytics to automation and ML-driven insights, here’s my experience delivering business value with scalable solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[34px] md:left-[46px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full shadow-[0_0_12px_rgba(var(--primary-rgb),0.25)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards.includes(index);

              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 md:pl-28"
                >
                  <div className="absolute left-[27px] md:left-[39px] top-0 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-10 shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)] animate-pulse-glow" />

                  {/* Horizontal Connector Line */}
                  <div className="absolute left-[43px] md:left-[55px] top-6 w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full opacity-60" />

                  <motion.div
                    className={`glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 ${isExpanded ? 'border-primary/40 bg-secondary/40' : ''
                      }`}
                    whileHover={{ scale: 1.005 }}
                    layout
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4 md:gap-6 mb-6">
                        {/* Logo Container */}
                        <div className="shrink-0">
                          <div className="w-20 h-16 md:w-24 md:h-18 rounded-xl bg-transparent flex items-center justify-center">
                            {exp.image ? (
                              <img
                                src={exp.image}
                                alt={exp.company}
                                className="w-full h-full object-contain p-0"
                                loading="lazy"
                              />
                            ) : null}
                          </div>
                        </div>

                        {/* Title & Company */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-base font-semibold text-primary mb-2">
                            {exp.company}
                          </h4>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              📅 {exp.period}
                            </span>
                            {exp.location && (
                              <span className="flex items-center gap-1.5">
                                🌍 {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                      >
                        {isExpanded ? 'Show Less' : 'Key Achievements & Skills'}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                            }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 space-y-6 border-t border-border/50 mt-2">
                            {/* Achievements */}
                            <div className="pt-6">
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="text-primary">⚡</span> Key Achievements
                              </h5>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="text-primary">💻</span> Technologies Used
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
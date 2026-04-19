import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

interface Certification {
  name: string;
  url: string;
  authority: string;
  description: string[];
  logo: string;
}

const certificationDescriptions: Record<string, { description: string[], logo: string }> = {
  'Microsoft Certified: Azure AI Fundamentals': {
    description: [
      'Azure AI services, ML concepts, and responsible AI principles',
      'Computer vision, NLP, and generative AI on Azure platform',
    ],
    logo: '/logos/microsoft.png',
  },
  'Artificial Intelligence and Machine Learning (NAVTTC)': {
    description: [
      'Government-sponsored AI/ML training under the Prime Minister Youth Skill Development Program',
      'Hands-on projects in supervised learning, deep learning, and model deployment',
    ],
    logo: '/logos/navttc.png',
  },
  'Generative AI Bootcamp Internship': {
    description: [
      'Built RAG pipelines with Pinecone, ChromaDB, Hugging Face, and OpenAI',
      'Fine-tuned Llama 2 and Gemma using LoRA/QLoRA with Streamlit UIs',
    ],
    logo: '/logos/xavor.png',
  },
  'Artificial Intelligence and Machine Learning (ACM Fellowship)': {
    description: [
      'ACM Fellowship Program 2024 — AI/ML theory and practical applications',
      'Supervised and unsupervised learning fundamentals with Python',
    ],
    logo: '/logos/acm.jpeg',
  },
  'Introduction to Web Development with HTML CSS JavaScript': {
    description: [
      'Front-end fundamentals: HTML5 structure and semantic markup',
      'CSS styling and interactive JavaScript programming',
    ],
    logo: '/logos/ibm.png',
  },
  'Introduction to Relational Databases (RDBMS)': {
    description: [
      'Database design principles and normalization',
      'SQL fundamentals and relational database concepts',
    ],
    logo: '/logos/ibm.png',
  },
};

// Display priority — most recent and most valuable first
const priorityOrder = [
  'Microsoft Certified: Azure AI Fundamentals',
  'Artificial Intelligence and Machine Learning (NAVTTC)',
  'Generative AI Bootcamp Internship',
  'Artificial Intelligence and Machine Learning (ACM Fellowship)',
  'Introduction to Web Development with HTML CSS JavaScript',
  'Introduction to Relational Databases (RDBMS)',
];

export const Certifications = ({ limit }: { limit?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    fetch('/Certifications.csv')
      .then(response => response.text())
      .then(data => {
        const lines = data.split('\n').slice(1);
        const certs: Certification[] = [];

        lines.forEach(line => {
          if (!line.trim()) return;

          const parts: string[] = [];
          let current = '';
          let inQuotes = false;

          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
              parts.push(current.trim());
              current = '';
            } else {
              current += char;
            }
          }
          parts.push(current.trim());

          const name = parts[0] || '';
          const url = parts[1] || '';
          const authority = parts[2] || '';

          if (name && certificationDescriptions[name]) {
            certs.push({
              name,
              url,
              authority,
              description: certificationDescriptions[name].description,
              logo: certificationDescriptions[name].logo
            });
          }
        });

        const orderedCerts = certs.sort((a, b) => {
          const aIndex = priorityOrder.indexOf(a.name);
          const bIndex = priorityOrder.indexOf(b.name);
          if (aIndex === -1 && bIndex === -1) return 0;
          if (aIndex === -1) return 1;
          if (bIndex === -1) return -1;
          return aIndex - bIndex;
        });

        setCertifications(limit ? orderedCerts.slice(0, limit) : orderedCerts);
      })
      .catch(error => console.error('Error loading certifications:', error));
  }, [limit]);

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials across AI, machine learning, web development, and databases
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => {
            const isClickable = cert.url && cert.url.trim() !== '';
            const CardWrapper = isClickable ? motion.a : motion.div;
            const wrapperProps = isClickable
              ? {
                href: cert.url,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
              : {};

            return (
              <CardWrapper
                key={cert.name}
                {...wrapperProps}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-6 hover:border-primary/30 transition-all duration-300 group ${isClickable ? 'cursor-pointer hover:translate-y-[-4px] hover:shadow-lg' : ''
                  }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 p-2 border border-border/20 group-hover:border-primary/30 transition-colors">
                    <img
                      src={cert.logo}
                      alt={cert.authority}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-primary text-lg">${cert.authority.substring(0, 3).toUpperCase()}</span>`;
                      }}
                    />
                  </div>
                  {isClickable && (
                    <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  )}
                </div>

                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.name}
                </h3>

                <p className="text-sm text-primary font-semibold mb-3">
                  {cert.authority}
                </p>

                <ul className="space-y-2">
                  {cert.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
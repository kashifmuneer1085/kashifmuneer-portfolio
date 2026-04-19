import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'AI/ML & Deep Learning',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'YOLO', 'CNNs', 'Deep Learning', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    title: 'LLMs & Generative AI',
    skills: ['Hugging Face', 'LangChain', 'RAG Pipelines', 'Pinecone', 'ChromaDB', 'OpenAI Embeddings', 'LoRA', 'QLoRA', 'Llama 2', 'Gemma', 'Prompt Engineering', 'Agentic AI'],
  },
  {
    title: 'Natural Language Processing',
    skills: ['Tokenization', 'Stop-word Removal', 'Stemming', 'Lemmatization', 'BoW', 'TF-IDF', 'N-grams', 'Word2Vec', 'GloVe', 'Word Embeddings'],
  },
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C++', 'C', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Data & Databases',
    skills: ['Pandas', 'NumPy', 'SQL Server', 'Data Pipelines', 'ETL', 'Preprocessing', 'Multi-modal Data'],
  },
  {
    title: 'App & Web Frameworks',
    skills: ['Streamlit', 'Flask', 'React', 'React Native', 'Tkinter'],
  },
  {
    title: 'Tools, Hardware & IoT',
    skills: ['Git/GitHub', 'VS Code', 'PyCharm', 'IntelliJ', 'Jupyter', 'Docker', 'Raspberry Pi', 'Arduino'],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and frameworks I've used across ML research, production pipelines, and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

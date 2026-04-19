import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Eye, Sparkles, Code2, MessageSquare, Cpu } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'Machine & Deep Learning',
    description: 'Building predictive models, CNNs, and end-to-end ML pipelines with TensorFlow, PyTorch, and Scikit-learn.',
  },
  {
    icon: Sparkles,
    title: 'LLMs & Generative AI',
    description: 'RAG pipelines, LLM fine-tuning with LoRA/QLoRA, and agentic AI systems using LangChain and Hugging Face.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Real-time object detection with YOLO, OpenCV-based pipelines, and hardware-integrated CV systems.',
  },
  {
    icon: MessageSquare,
    title: 'NLP & Text Processing',
    description: 'Word embeddings (Word2Vec, GloVe), TF-IDF, tokenization, and preprocessing pipelines for production text systems.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, modular code with fidelity to research-grade practices and clear evaluation.',
  },
  {
    icon: Cpu,
    title: 'Embedded & IoT',
    description: 'Bridging software and hardware with Arduino, Raspberry Pi, and sensor-driven real-time systems.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Applied machine learning, from research to working prototypes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-foreground font-medium">Computer Engineering graduate from UET Lahore (2021–2025)</span>, currently an AI Engineer Intern at <span className="text-primary font-medium">AI4LYF</span>. My focus is applied machine learning — the part where research meets application and has to actually work on real data.
              </p>
              <p>
                At AI4LYF, I work with <span className="text-primary font-medium">LLMs, agentic AI frameworks, and RAG pipelines</span> for healthcare insights and decision support. Earlier, during a summer 2024 internship at Xavor Corporation, I built NLP and generative AI systems — RAG with Pinecone and ChromaDB, and LLM fine-tuning with LoRA/QLoRA on Llama 2 and Gemma.
              </p>
              <p>
                My final-year project (2024–2025) was a <span className="text-foreground font-medium">Smart Fire Extinguisher System</span> — real-time YOLO-based fire detection with automated suppression. I enjoy work like this most: when ML leaves the notebook and interacts with the physical world. I care about code fidelity, evidence-grounded reasoning, and metrics that reflect reality.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
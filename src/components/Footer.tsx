// eslint-disable-next-line @typescript-eslint/no-deprecated
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-secondary/20">
      <div className="section-container">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a href="#" className="font-display text-2xl font-bold mb-6">
            <span className="gradient-text">Kashif</span>
            <span className="text-foreground"> Muneer</span>
          </a>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href="https://www.linkedin.com/in/kashif-muneer-4a641b22b/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/kashifmuneer1085"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:kashifmuneer1085@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="Email"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://wa.me/923447513564"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="https://x.com/KashifMune61139"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="X (Twitter)"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={18} />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">Education</a>
            <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">Certifications</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Kashif Muneer. All rights reserved.</p>
            <p className="mt-1">AI/ML Engineer | LLM & RAG Developer | Computer Vision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
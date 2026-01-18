import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-display font-bold hero-text-gradient inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Arifa.
            </motion.a>
            <p className="text-sm text-muted-foreground">
              Front-End Developer & SEO Expert
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:shadow-lg hover:shadow-primary/30 transition-all"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arifa Akter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

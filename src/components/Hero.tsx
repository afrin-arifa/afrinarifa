import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { ChevronDown, Sparkles } from 'lucide-react';

// Lottie animation data for a developer/coding animation


const seoKeywords = [
  'SEO Optimization',
  'Keyword Research',
  'On-Page SEO',
  'Off-Page SEO',
  'Technical SEO',
  'Google Analytics',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const keywordVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

const Hero: React.FC = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch('https://lottie.host/2f348c96-bfca-4119-98f0-b6fe666277fe/zu0Lecime4.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading Lottie animation:', error));
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="floating-badge mb-6 inline-flex">
              <Sparkles className="w-4 h-4" />
              <span>Available for Freelance</span>
            </motion.div>

            <motion.h1
              variants={containerVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
            >
              <motion.span variants={itemVariants} className="block">
                Hi, I'm
              </motion.span>
              <motion.span variants={itemVariants} className="block hero-text-gradient glow-text">
                Arifa Akter
              </motion.span>
              <motion.span
                variants={itemVariants}
                className="block text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-2"
              >
                Front-End Developer & SEO Expert
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Crafting beautiful, performant websites that rank high and convert visitors into customers.
            </motion.p>

            {/* SEO Keywords */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {seoKeywords.map((keyword, index) => (
                <motion.span
                  key={keyword}
                  variants={keywordVariants}
                  className="skill-tag"
                  whileHover={{ scale: 1.05 }}
                >
                  {keyword}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleViewWork}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.a
                href="#contact"
                className="btn-outline text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow" />
              {animationData && (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="relative z-10 w-full h-auto"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

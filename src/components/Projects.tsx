import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Dr. Siraj BD',
    description: 'A professional dermatology and aesthetic care website providing advanced skin treatments and personalized medical services in Bangladesh.',
    url: 'https://www.drsirajbd.com/',
    tags: ['Healthcare', 'Dermatology', 'SEO'],
    color: 'from-primary to-cyan-500',
  },
  {
    title: 'Dr. Tarafder ENT',
    description: 'A medical website for a gold-medal-awarded ENT specialist offering expert ear, nose, throat, and head-neck treatments and surgeries.',
    url: 'https://www.drtarafderent.com/',
    tags: ['Medical', 'ENT Specialist', 'SEO'],
    color: 'from-accent to-orange-500',
  },
  {
    title: 'SON Academy',
    description: 'An English-medium school website offering a Cambridge-based curriculum with strong academic and moral development focus.',
    url: 'https://www.son.ac/',
    tags: ['Education', 'School', 'SEO'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Assetic Ltd',
    description: 'A real estate company website providing property listings, investment guidance, and professional real-estate services in Dhaka.',
    url: 'https://www.asseticltd.com/',
    tags: ['Real Estate', 'Business', 'SEO'],
    color: 'from-violet-500 to-purple-500',
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary font-medium mb-4 block"
          >
            My Work
          </motion.span>
          <h2 className="section-title">
            Featured
            <span className="hero-text-gradient"> Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore some of my recent work where design meets performance and SEO excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative glass-card rounded-2xl overflow-hidden card-hover block"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Website</span>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

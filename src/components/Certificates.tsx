import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Bright Skills Certificate',
    issuer: 'Bright Skills',
    url: 'https://brightskills.com/certificate/69625D7CA1529',
    description: 'Professional certification demonstrating expertise in web development and digital skills.',
  },
  {
    title: 'AI Code Lab Certificate',
    issuer: 'Learn With Sumit',
    url: 'https://aicodelab.learnwithsumit.com/certificate/arifa-akter-1055-lws-aicodelab',
    description: 'Certification in AI-powered development and modern coding practices.',
  },
];

const Certificates: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="certificates" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary font-medium mb-4 block"
          >
            Recent Achievements
          </motion.span>
          <h2 className="section-title">
            My
            <span className="hero-text-gradient"> Certificates</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Continuous learning and professional development in web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group glass-card rounded-2xl p-8 card-hover block relative overflow-hidden"
            >
              {/* Decorative Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Award className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{cert.description}</p>

                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Certificate</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Briefcase, Target, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.animate-item'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Diploma in Computer Technology • BSc in CSE at Southeast University',
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: 'Professional Front-End Developer & SEO Expert',
    },
    {
      icon: Target,
      title: 'SEO Focus',
      description: 'Website Ranking, Technical SEO, Meta Tags Optimization',
    },
    {
      icon: Code,
      title: 'Tech Stack',
      description: 'React, JavaScript, PHP, MySQL, GSAP',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary font-medium mb-4 block"
          >
            About Me
          </motion.span>
          <h2 className="section-title animate-item">
            Passionate About Creating
            <span className="hero-text-gradient"> Digital Excellence</span>
          </h2>
          <p className="section-subtitle mx-auto animate-item">
            A dedicated developer and SEO specialist focused on building websites that perform and rank.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-item">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-display font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm <span className="text-primary font-medium">Arifa Akter</span>, a Front-End Developer and SEO Expert 
                with a passion for creating beautiful, high-performing websites. I completed my 
                <span className="text-primary font-medium"> Diploma in Computer Technology</span> and am currently 
                pursuing my <span className="text-primary font-medium">BSc in Computer Science and Engineering</span> at 
                <span className="text-primary font-medium"> Southeast University</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans across modern front-end technologies including 
                <span className="text-accent font-medium"> HTML, CSS, Bootstrap, JavaScript, React, and GSAP</span>, 
                along with backend skills in <span className="text-accent font-medium">PHP and MySQL</span>. 
                I specialize in Search Engine Optimization, helping businesses improve their website rankings 
                through keyword research, on-page and off-page SEO, technical SEO, and analytics.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Search Engine Optimization', 'Website Ranking', 'Keyword Research', 'Meta Tags', 'Technical SEO', 'Site Performance'].map((skill) => (
                <span key={skill} className="skill-tag text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl card-hover group"
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

        {/* Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.americanbestit.com/about-us/meet-the-team/7606_arifa-akter"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            View Official Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

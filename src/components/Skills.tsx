import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Bootstrap', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 85 },
      { name: 'GSAP', level: 80 },
    ],
    color: 'primary',
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'PHP', level: 75 },
      { name: 'MySQL', level: 80 },
    ],
    color: 'accent',
  },
  {
    title: 'SEO & Analytics',
    skills: [
      { name: 'Keyword Research', level: 92 },
      { name: 'On-Page SEO', level: 95 },
      { name: 'Off-Page SEO', level: 88 },
      { name: 'Technical SEO', level: 90 },
      { name: 'Google Analytics', level: 85 },
      { name: 'Search Console', level: 88 },
    ],
    color: 'primary',
  },
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary font-medium mb-4 block"
          >
            My Expertise
          </motion.span>
          <h2 className="section-title">
            Skills &
            <span className="hero-text-gradient"> Technologies</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive skill set spanning front-end development and SEO optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-${category.color}`} />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          category.color === 'accent'
                            ? 'bg-gradient-to-r from-accent to-orange-400'
                            : 'bg-gradient-to-r from-primary to-cyan-400'
                        }`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'GSAP', 'PHP', 'MySQL', 'SEO', 'Analytics'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 rounded-full bg-card border border-border font-medium hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

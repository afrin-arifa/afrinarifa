import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is SEO and why is it important for my website?',
    answer: 'SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It\'s crucial because higher rankings lead to more organic traffic, increased visibility, and better conversion rates without paying for ads.',
  },
  {
    question: 'How long does it take to see SEO results?',
    answer: 'SEO is a long-term strategy. Typically, you can start seeing initial results within 3-6 months, with more significant improvements appearing after 6-12 months. The timeline depends on factors like competition, website age, and the quality of optimization.',
  },
  {
    question: 'What technologies do you use for front-end development?',
    answer: 'I specialize in modern front-end technologies including HTML5, CSS3, JavaScript, React, and Bootstrap for responsive design. I also use GSAP for advanced animations and ensure all websites are mobile-friendly and SEO-optimized.',
  },
  {
    question: 'What is the difference between On-Page and Off-Page SEO?',
    answer: 'On-Page SEO involves optimizing elements on your website like content, meta tags, headings, and internal links. Off-Page SEO focuses on external factors like backlinks, social signals, and online reputation that influence your site\'s authority.',
  },
  {
    question: 'Do you offer website maintenance services?',
    answer: 'Yes! I offer comprehensive website maintenance including regular updates, security patches, performance optimization, content updates, and ongoing SEO monitoring to ensure your website stays fast, secure, and ranks well.',
  },
  {
    question: 'How do you approach a new web development project?',
    answer: 'I follow a structured process: understanding your requirements, creating wireframes and designs, developing with clean code, implementing SEO best practices, thorough testing, and launching with ongoing support. Communication is key throughout.',
  },
];

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary font-medium mb-4 block"
          >
            Got Questions?
          </motion.span>
          <h2 className="section-title">
            Frequently Asked
            <span className="hero-text-gradient"> Questions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Common questions about web development and SEO services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-display font-semibold pr-4">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

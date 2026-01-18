import { ThemeProvider } from '@/contexts/ThemeContext';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certificates />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;

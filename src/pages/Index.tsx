
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AccessibilityPanel from '@/components/AccessibilityPanel';

const Index = () => {
  const [fontFamily, setFontFamily] = useState('Inter');
  const [fontSize, setFontSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  return (
    <div 
      className={`min-h-screen bg-background relative ${fontFamily === 'opendyslexic' ? 'font-dyslexic' : ''} 
      ${fontSize === 'large' ? 'text-lg' : fontSize === 'xlarge' ? 'text-xl' : ''}
      ${highContrast ? 'high-contrast' : ''} 
      ${reducedMotion ? 'motion-reduce' : ''}`}
    >
      <AccessibilityPanel 
        fontFamily={fontFamily} 
        setFontFamily={setFontFamily}
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        reducedMotion={reducedMotion}
        setReducedMotion={setReducedMotion}
      />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

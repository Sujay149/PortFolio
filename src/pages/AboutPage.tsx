
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';
import AccessibilityPanel from '@/components/AccessibilityPanel';
import CustomCursor from '@/components/CustomCursor';
import { loadDynamicData } from '@/lib/data';

const AboutPage = () => {
  const [fontFamily, setFontFamily] = useState('Inter');
  const [fontSize, setFontSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await loadDynamicData();
      setDataLoaded(true);
    };
    
    loadData();
  }, []);

  if (!dataLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div 
      className={`min-h-screen bg-black text-white relative ${fontFamily === 'opendyslexic' ? 'font-dyslexic' : ''} 
      ${fontSize === 'large' ? 'text-lg' : fontSize === 'xlarge' ? 'text-xl' : ''}
      ${highContrast ? 'high-contrast' : ''} 
      ${reducedMotion ? 'motion-reduce' : ''}`}
    >
      <CustomCursor />
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
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;

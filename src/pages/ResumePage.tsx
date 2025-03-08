
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccessibilityPanel from '@/components/AccessibilityPanel';
import CustomCursor from '@/components/CustomCursor';
import { loadDynamicData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const ResumePage = () => {
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
      <div className="pt-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block py-1 px-3 rounded-full text-sm bg-secondary/50 text-muted-foreground mb-4">
            Resume
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My Professional Resume
          </h2>
          
          <div className="flex justify-center mt-6">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white flex items-center gap-2">
                <Download size={16} />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
        
        <div className="glass-panel p-8 rounded-lg mb-12">
          <div className="aspect-[8.5/11] w-full bg-white/5 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <FileText size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Resume preview loading...</p>
              <p className="text-sm text-muted-foreground mt-2">You can download the full resume using the button above.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ResumePage;

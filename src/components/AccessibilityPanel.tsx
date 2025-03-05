
import { useState } from 'react';
import { ChevronUp, Eye, Type, Zap, MousePointer } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccessibilityPanelProps {
  fontFamily: string;
  setFontFamily: (font: string) => void;
  fontSize: string;
  setFontSize: (size: string) => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  reducedMotion: boolean;
  setReducedMotion: (enabled: boolean) => void;
}

export function AccessibilityPanel({
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
  reducedMotion,
  setReducedMotion
}: AccessibilityPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-panel p-3 rounded-full flex items-center justify-center shadow-lg hover:bg-white/20 transition-all duration-300"
        aria-label="Accessibility Options"
      >
        <ChevronUp className={cn("w-6 h-6 transition-transform duration-300", isOpen ? "rotate-180" : "")} />
      </button>

      <div 
        className={cn(
          "glass-panel p-4 rounded-xl absolute bottom-16 right-0 w-64 transition-all duration-300",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <h3 className="text-lg font-medium mb-3">Accessibility Options</h3>
        
        <div className="space-y-4">
          <div>
            <label className="flex items-center gap-2 mb-2 text-sm">
              <Type className="w-4 h-4" /> Font Family
            </label>
            <select 
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              className="w-full p-2 rounded bg-secondary text-sm"
            >
              <option value="Inter">Default (Inter)</option>
              <option value="opendyslexic">OpenDyslexic</option>
            </select>
          </div>
          
          <div>
            <label className="flex items-center gap-2 mb-2 text-sm">
              <Type className="w-4 h-4" /> Font Size
            </label>
            <select 
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full p-2 rounded bg-secondary text-sm"
            >
              <option value="medium">Default</option>
              <option value="large">Large</option>
              <option value="xlarge">Extra Large</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <Eye className="w-4 h-4" /> High Contrast
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={highContrast}
                onChange={(e) => setHighContrast(e.target.checked)}
                className="sr-only peer" 
              />
              <div className="w-9 h-5 bg-secondary rounded-full peer peer-focus:ring-1 peer-focus:ring-neon-blue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neon-blue"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <MousePointer className="w-4 h-4" /> Reduced Motion
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={reducedMotion}
                onChange={(e) => setReducedMotion(e.target.checked)}
                className="sr-only peer" 
              />
              <div className="w-9 h-5 bg-secondary rounded-full peer peer-focus:ring-1 peer-focus:ring-neon-blue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neon-blue"></div>
            </label>
          </div>
          
          <div className="flex justify-center pt-2">
            <button 
              onClick={() => {
                setFontFamily('Inter');
                setFontSize('medium');
                setHighContrast(false);
                setReducedMotion(false);
              }}
              className="text-xs px-3 py-1 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessibilityPanel;

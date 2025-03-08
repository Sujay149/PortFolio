
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { about } from '@/lib/data';
import { useDelayedAnimation } from '@/hooks/useAnimations';

export function Hero() {
  const nameAnimated = useDelayedAnimation(300);
  const titleAnimated = useDelayedAnimation(600);
  const descriptionAnimated = useDelayedAnimation(900);
  const ctaAnimated = useDelayedAnimation(1200);
  
  // Dynamic text effect
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const dynamicTexts = ["Developer", "Designer", "Problem Solver"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % dynamicTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div 
          className={cn(
            "mb-4 inline-block py-1 px-4 rounded-full text-sm bg-secondary/80 text-muted-foreground opacity-0 transform translate-y-6 transition-all duration-700 ease-out",
            nameAnimated && "opacity-100 translate-y-0"
          )}
        >
          Hello, I'm
        </div>
        
        <h1 
          className={cn(
            "text-5xl sm:text-6xl md:text-7xl font-bold mb-6 opacity-0 transform translate-y-6 transition-all duration-700 ease-out",
            titleAnimated && "opacity-100 translate-y-0"
          )}
        >
          <span className="block text-gradient-blue">{about.name}</span>
          <span className="inline-block mt-2">
            I'm a <span className="text-neon-blue">{dynamicTexts[currentTextIndex]}</span>
          </span>
        </h1>
        
        <p 
          className={cn(
            "text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 transform translate-y-6 transition-all duration-700 ease-out",
            descriptionAnimated && "opacity-100 translate-y-0"
          )}
        >
          {about.bio}
        </p>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 transform translate-y-6 transition-all duration-700 ease-out",
            ctaAnimated && "opacity-100 translate-y-0"
          )}
        >
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-lg bg-neon-blue hover:bg-neon-blue/90 text-black font-medium transition-all duration-300 w-full sm:w-auto"
          >
            View My Work
          </a>
          
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 w-full sm:w-auto mt-4 sm:mt-0"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

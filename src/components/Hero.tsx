
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { about } from '@/lib/data';
import { useDelayedAnimation } from '@/hooks/useAnimations';
import { ArrowDown, Download } from 'lucide-react';

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

  // Scroll down
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNGgydi00aC0ydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-[0.05]" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 md:right-20 w-20 h-20 border border-white/10 rounded-full animate-rotate-slow"></div>
      <div className="absolute bottom-1/3 left-10 md:left-20 w-12 h-12 border border-white/10 rounded-full animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
      
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
            "text-5xl sm:text-6xl md:text-8xl font-bold mb-6 opacity-0 transform translate-y-6 transition-all duration-700 ease-out",
            titleAnimated && "opacity-100 translate-y-0"
          )}
        >
          <span className="block text-gradient-blue text-glow">{about.name}</span>
          <span className="inline-block mt-2 text-3xl sm:text-4xl md:text-5xl">
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
            className="px-6 py-3 rounded-lg bg-neon-blue hover:bg-neon-blue/90 text-black font-medium transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-blue/20"
            onClick={(e) => {
              e.preventDefault();
              scrollToProjects();
            }}
          >
            View My Work
          </a>
          
          <a 
            href="/resume.pdf" 
            download
            className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 w-full sm:w-auto mt-4 sm:mt-0 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToProjects}
          className="text-muted-foreground hover:text-white transition-colors flex flex-col items-center gap-2"
          aria-label="Scroll down"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export default Hero;

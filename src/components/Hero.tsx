
import { useEffect, useRef, useState } from 'react';
import { useDelayedAnimation, useMousePosition } from '@/hooks/useAnimations';
import { cn } from '@/lib/utils';

export function Hero() {
  const title1Animated = useDelayedAnimation(300);
  const title2Animated = useDelayedAnimation(600);
  const subtitleAnimated = useDelayedAnimation(900);
  const ctaAnimated = useDelayedAnimation(1200);
  
  const mousePosition = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseRelative, setMouseRelative] = useState({ x: 0, y: 0 });
  
  // Calculate relative mouse position for parallax effect
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      setMouseRelative({
        x: (mousePosition.x - centerX) / rect.width,
        y: (mousePosition.y - centerY) / rect.height
      });
    }
  }, [mousePosition]);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* 3D Objects (simulated with divs for now) */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 blur-3xl animate-float"
        style={{ 
          transform: `translate(${mouseRelative.x * -20}px, ${mouseRelative.y * -20}px)`,
          top: '30%',
          left: '20%'
        }}
      />
      
      <div 
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 blur-3xl animate-float"
        style={{ 
          animationDelay: '1s',
          transform: `translate(${mouseRelative.x * -30}px, ${mouseRelative.y * -30}px)`,
          top: '40%',
          right: '15%'
        }}
      />
      
      <div 
        className="absolute w-40 h-40 rounded-full bg-neon-blue/5 blur-2xl animate-rotate-slow"
        style={{ 
          transform: `translate(${mouseRelative.x * -10}px, ${mouseRelative.y * -10}px)`,
          top: '25%',
          right: '30%'
        }}
      />
      
      {/* Grid pattern (for depth) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <h1 className="flex flex-col items-center">
          <span 
            className={cn(
              "text-5xl md:text-7xl font-bold leading-tight opacity-0 transform translate-y-6 transition-all duration-700 ease-out",
              title1Animated && "opacity-100 translate-y-0"
            )}
          >
            Crafting Digital
          </span>
          <span 
            className={cn(
              "text-5xl md:text-7xl font-bold leading-tight text-gradient-blue mt-2 opacity-0 transform translate-y-6 transition-all duration-700 ease-out delay-100",
              title2Animated && "opacity-100 translate-y-0"
            )}
          >
            Experiences
          </span>
        </h1>
        
        <p 
          className={cn(
            "mt-6 text-xl text-muted-foreground max-w-xl mx-auto opacity-0 transform translate-y-6 transition-all duration-700 ease-out delay-200",
            subtitleAnimated && "opacity-100 translate-y-0"
          )}
        >
          Designing and developing interfaces that blend aesthetics with function.
          Interactive 3D experiences that engage and inspire.
        </p>
        
        <div 
          className={cn(
            "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 transform translate-y-6 transition-all duration-700 ease-out delay-300",
            ctaAnimated && "opacity-100 translate-y-0"
          )}
        >
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-lg glass-panel hover:bg-white/10 transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              View Projects
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
          
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-[bounce_1.5s_infinite]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

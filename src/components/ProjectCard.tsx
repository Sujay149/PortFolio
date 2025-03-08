
import { useState, useRef, useEffect } from 'react';
import { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Info } from 'lucide-react';
import { useHoverAnimation } from '@/hooks/useAnimations';

interface ProjectCardProps {
  project: Project;
  isAnimated: boolean;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, isAnimated, index, onOpenDetails }: ProjectCardProps) {
  const { isHovered, bindHoverEvents } = useHoverAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  
  const animationDelay = 100 + (index * 100);
  
  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenDetails(project);
    }
  };

  // Smooth tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (centerY - y) / 20; // Reversed for natural tilt
    const tiltY = (x - centerX) / 20;
    
    setTiltValues({ x: tiltX, y: tiltY });
  };
  
  // Reset tilt when mouse leaves
  const handleMouseLeave = () => {
    setTiltValues({ x: 0, y: 0 });
    bindHoverEvents.onMouseLeave();
  };

  // Check if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card overflow-hidden group h-full opacity-0 transform translate-y-10 transition-all duration-700 perspective",
        isAnimated && "opacity-100 translate-y-0"
      )}
      style={{ 
        transitionDelay: `${animationDelay}ms`,
        transform: isAnimated && isInView
          ? `translateY(0) perspective(1000px) rotateX(${tiltValues.x}deg) rotateY(${tiltValues.y}deg) scale(${isHovered ? 1.02 : 1})`
          : `translateY(10px) perspective(1000px) rotateX(0deg) rotateY(0deg)`,
        transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={bindHoverEvents.onMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      role="button"
      aria-label={`Project: ${project.title}. Press Enter to view details`}
      onKeyDown={handleKeyDown}
      onClick={() => onOpenDetails(project)}
    >
      <div className="h-full min-h-[350px] md:min-h-[400px]">
        <div className="h-full w-full relative overflow-hidden cursor-pointer">
          {/* Project Image with parallax effect */}
          <div 
            className="h-full w-full absolute transform transition-transform duration-500 ease-out"
            style={{
              backgroundImage: `url(${project.image})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          {/* Project Info with animated entrance */}
          <div className="absolute bottom-4 left-4 right-4 transition-all duration-500" 
               style={{ transform: isHovered ? 'translateY(0)' : 'translateY(0)', opacity: 1 }}>
            <h3 className="text-xl font-semibold truncate">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span 
                  key={i} 
                  className="text-xs font-medium py-1 px-2 rounded-full bg-black/30 backdrop-blur-sm transition-all" 
                  style={{
                    transitionDelay: `${i * 50}ms`,
                    transform: isHovered ? 'translateY(0) scale(1.05)' : 'translateY(0) scale(1)',
                    opacity: isHovered ? 1 : 0.9,
                  }}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs font-medium py-1 px-2 rounded-full bg-black/30 backdrop-blur-sm">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
            
            {/* Links with animated entrance */}
            <div className="flex flex-wrap gap-3 mt-4 justify-between transform transition-all duration-500" 
                 style={{ transform: isHovered ? 'translateY(0)' : 'translateY(5px)', opacity: isHovered ? 1 : 0.9 }}>
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-neon-blue hover:underline p-2 glass-panel transition-all duration-300 hover:bg-white/10"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Visit ${project.title} live site`}
                >
                  <span className="truncate">Visit Site</span>
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                </a>
              )}
              
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-neon-blue hover:underline p-2 glass-panel transition-all duration-300 hover:bg-white/10"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <span className="truncate">View Code</span>
                  <Github className="w-4 h-4 flex-shrink-0" />
                </a>
              )}
            </div>
          </div>
          
          {/* Spotlight effect */}
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-radial from-white/10 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none",
              isHovered && "opacity-100"
            )}
            style={{
              background: isHovered 
                ? `radial-gradient(circle at ${tiltValues.y * 10 + 50}% ${tiltValues.x * -10 + 50}%, rgba(255,255,255,0.15) 0%, transparent 50%)`
                : 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

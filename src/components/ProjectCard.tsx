
import { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Info } from 'lucide-react';
import { useSmoothScrollReveal, useHoverAnimation } from '@/hooks/useAnimations';

interface ProjectCardProps {
  project: Project;
  isAnimated: boolean;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, isAnimated, index, onOpenDetails }: ProjectCardProps) {
  const { isHovered, bindHoverEvents } = useHoverAnimation();
  const { ref, scrollProgress } = useSmoothScrollReveal();
  
  return (
    <div 
      ref={ref}
      className={cn(
        "rounded-xl overflow-hidden opacity-0 transform translate-y-10 transition-all duration-500 glass-panel border border-white/10 hover:border-neon-blue/30 shadow-lg hover:shadow-xl",
        isAnimated && "opacity-100 translate-y-0"
      )}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transform: isAnimated 
          ? `translateY(0) perspective(1000px) rotateX(${isHovered ? '2deg' : '0'}) rotateY(${isHovered ? '2deg' : '0'})` 
          : 'translateY(10px)',
      }}
      onMouseEnter={bindHoverEvents.onMouseEnter}
      onMouseLeave={bindHoverEvents.onMouseLeave}
      onClick={() => onOpenDetails(project)}
      tabIndex={0}
      role="button"
      aria-label={`Project: ${project.title}. Press Enter to view details`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenDetails(project);
        }
      }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-neon-blue/80 text-white mb-2 w-max">
            {project.tags[0]}
          </span>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{project.title}</h3>
          <p className="text-sm text-white/80 line-clamp-2 mb-4">{project.description}</p>
          
          <div className="flex gap-3">
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded text-xs bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Visit Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded text-xs bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Code</span>
                <Github className="w-3 h-3" />
              </a>
            )}
            
            <button
              className="px-3 py-1.5 rounded text-xs bg-neon-blue/80 backdrop-blur-sm hover:bg-neon-blue transition-colors flex items-center gap-1 ml-auto"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(project);
              }}
            >
              <span>Details</span>
              <Info className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

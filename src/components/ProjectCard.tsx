
import { useState } from 'react';
import { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Info } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isAnimated: boolean;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, isAnimated, index, onOpenDetails }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = 100 + (index * 100);
  
  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenDetails(project);
    }
  };
  
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden group h-full opacity-0 transform translate-y-10 transition-all duration-700",
        isAnimated && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${animationDelay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`Project: ${project.title}. Press Enter to view details`}
      onKeyDown={handleKeyDown}
      onClick={() => onOpenDetails(project)}
    >
      <div className="h-full min-h-[350px] md:min-h-[400px]">
        <div className="h-full w-full relative overflow-hidden cursor-pointer">
          {/* Project Image */}
          <div 
            className="h-full w-full absolute"
            style={{
              backgroundImage: `url(${project.image})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          {/* Project Info */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold truncate">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-xs font-medium py-1 px-2 rounded-full bg-black/30 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs font-medium py-1 px-2 rounded-full bg-black/30 backdrop-blur-sm">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-4 justify-between">
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-neon-blue hover:underline p-2 glass-panel"
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
                  className="text-sm flex items-center gap-1 text-neon-blue hover:underline p-2 glass-panel"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <span className="truncate">View Code</span>
                  <Github className="w-4 h-4 flex-shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

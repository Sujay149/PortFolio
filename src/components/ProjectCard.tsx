
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
  const [isFlipped, setIsFlipped] = useState(false);
  
  const animationDelay = 100 + (index * 100);
  
  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
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
      aria-pressed={isFlipped}
      aria-label={`Project: ${project.title}. Press Enter to view details`}
      onKeyDown={handleKeyDown}
    >
      <div className="h-full min-h-[350px] md:min-h-[400px] perspective">
        <div 
          className={cn(
            "w-full h-full preserve-3d backface-hidden transition-all duration-700",
            isFlipped ? "rotate-y-180" : "rotate-y-0"
          )}
        >
          {/* Front side - Image */}
          <div 
            className="h-full w-full absolute backface-hidden overflow-hidden cursor-pointer"
            style={{
              backgroundImage: `url(${project.image})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}
            onClick={() => onOpenDetails(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenDetails(project);
              }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4"> {/* Added right-4 to prevent text overflow */}
              <h3 className="text-xl font-semibold truncate">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="text-xs font-medium py-1 px-2 rounded-full bg-black/30 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-black/30 backdrop-blur-sm">
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>
            </div>
            
            <button 
              className="absolute top-3 right-3 p-2 bg-white/10 backdrop-blur-sm rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(true);
              }}
              aria-label="Flip card to see project details"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
          
          {/* Back side - Details */}
          <div className="h-full w-full absolute backface-hidden rotate-y-180 bg-secondary p-6 flex flex-col overflow-auto">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mt-2 flex-grow text-sm md:text-base overflow-y-auto">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-medium py-1 px-2 rounded-full glass-panel">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-4 justify-between">
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-neon-blue hover:underline p-2 glass-panel w-[48%]"
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
                  className="text-sm flex items-center gap-1 text-neon-blue hover:underline p-2 glass-panel w-[48%]"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <span className="truncate">View Code</span>
                  <Github className="w-4 h-4 flex-shrink-0" />
                </a>
              )}
            </div>
            <button
              onClick={() => setIsFlipped(false)}
              className="mt-4 p-2 glass-panel text-sm text-center"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

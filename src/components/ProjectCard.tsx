
import { useState } from 'react';
import { Project } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  isAnimated: boolean;
  index: number;
}

export function ProjectCard({ project, isAnimated, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = 100 + (index * 100);
  
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden group h-full opacity-0 transform translate-y-10 transition-all duration-700",
        isAnimated && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${animationDelay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-56 md:h-64 perspective">
        <div 
          className={cn(
            "w-full h-full preserve-3d backface-hidden transition-all duration-700",
            isHovered ? "rotate-y-180" : "rotate-y-0"
          )}
        >
          {/* Front side - Image */}
          <div 
            className="h-full w-full absolute backface-hidden overflow-hidden"
            style={{
              backgroundImage: `url(${project.image})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="flex gap-2 mt-2">
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
          </div>
          
          {/* Back side - Details */}
          <div className="h-full w-full absolute backface-hidden rotate-y-180 bg-secondary p-6 flex flex-col">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-muted-foreground mt-2 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-medium py-1 px-2 rounded-full glass-panel">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-neon-blue hover:underline"
                >
                  Visit Site
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-neon-blue hover:underline"
                >
                  View Code
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
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

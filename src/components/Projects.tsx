
import { useSequentialAnimation, useFadeInOnScroll } from '@/hooks/useAnimations';
import { Project, projects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, X } from 'lucide-react';

export function Projects() {
  const { ref, isVisible } = useFadeInOnScroll(0.1);
  const animatedItems = useSequentialAnimation(projects.length, 100, 150);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
  };
  
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-12">
          <div 
            className={cn(
              "inline-block py-1 px-3 rounded-full text-sm bg-secondary/50 text-muted-foreground mb-4 opacity-0 transform translate-y-4 transition-all duration-500",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            Featured Work
          </div>
          
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold opacity-0 transform translate-y-4 transition-all duration-500 delay-100",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            Recent Projects
          </h2>
          
          <p 
            className={cn(
              "text-muted-foreground mt-4 max-w-2xl opacity-0 transform translate-y-4 transition-all duration-500 delay-200",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            A collection of work that showcases my skills and experience in design and development.
            Each project is briefly described with links to code repositories and live demos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isAnimated={isVisible && animatedItems[index]}
              index={index}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl w-[90vw] max-h-[90vh] overflow-y-auto glass-panel border-none">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
            <button 
              className="absolute top-4 right-4" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogHeader>
          
          {selectedProject && (
            <div className="mt-4">
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 rounded-full glass-panel text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  {selectedProject.url && (
                    <a 
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded glass-panel flex items-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      Visit Site <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded glass-panel flex items-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      View Code <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Projects;

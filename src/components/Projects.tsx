
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
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-12 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-12 text-center">
          <div 
            className={cn(
              "inline-block py-1 px-3 rounded-full text-sm bg-secondary/50 text-muted-foreground mb-4 opacity-0 transform translate-y-4 transition-all duration-500",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            My Work
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
              "text-muted-foreground mt-4 max-w-2xl mx-auto opacity-0 transform translate-y-4 transition-all duration-500 delay-200",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              
              {/* Preview Images */}
              {selectedProject.previewImages && selectedProject.previewImages.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Preview Images</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.previewImages.map((img, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden">
                        <img 
                          src={img} 
                          alt={`${selectedProject.title} preview ${idx + 1}`} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
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
                
                <div className="flex flex-wrap gap-4 pt-4">
                  {selectedProject.url && (
                    <a 
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded bg-neon-blue hover:bg-neon-blue/90 text-black font-medium flex items-center gap-2 transition-colors"
                    >
                      Visit Site <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded border border-white/20 flex items-center gap-2 hover:border-white/40 transition-colors"
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

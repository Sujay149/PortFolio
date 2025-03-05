
import { useSequentialAnimation, useFadeInOnScroll } from '@/hooks/useAnimations';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';

export function Projects() {
  const { ref, isVisible } = useFadeInOnScroll(0.1);
  const animatedItems = useSequentialAnimation(projects.length, 100, 150);
  
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isAnimated={isVisible && animatedItems[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

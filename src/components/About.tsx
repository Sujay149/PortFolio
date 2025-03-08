
import { useState, useEffect } from 'react';
import { useFadeInOnScroll } from '@/hooks/useAnimations';
import { about, loadDynamicData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

export function About() {
  const { ref, isVisible } = useFadeInOnScroll(0.1);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  useEffect(() => {
    async function fetchData() {
      await loadDynamicData();
      setDataLoaded(true);
    }
    fetchData();
  }, []);
  
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gradient-to-b from-background to-background/80 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-40 left-10 w-40 h-40 border border-white/5 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-neon-blue/20 rounded-full blur-md animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-neon-cyan/20 rounded-full blur-md animate-float" style={{animationDelay: '-1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div 
            className={cn(
              "inline-block py-1 px-3 rounded-full text-sm bg-secondary/50 text-muted-foreground mb-4"
            )}
          >
            About Me
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            My Background
          </h2>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div 
            className={cn(
              "transform transition-all duration-1000",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h3 className="text-2xl font-bold mb-8 inline-block border-b-2 border-neon-blue pb-2">
              Skills & Technologies
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {about.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="glass-panel p-4 rounded-lg flex items-start hover-lift"
                  style={{transitionDelay: `${index * 50}ms`}}
                >
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Section */}
          <div 
            className={cn(
              "transform transition-all duration-1000",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <h3 className="text-2xl font-bold mb-8 inline-block border-b-2 border-neon-blue pb-2">
              Experience
            </h3>
            
            <div className="space-y-6">
              {about.experience.map((exp, index) => (
                <div 
                  key={index} 
                  className="glass-panel p-5 rounded-lg relative hover-lift"
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className="absolute -left-3 top-5 w-6 h-6 rounded-full bg-neon-blue flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  
                  <div className="text-sm text-neon-blue font-medium">{exp.period}</div>
                  <div className="text-xl font-bold mt-1">{exp.position}</div>
                  <div className="text-muted-foreground mb-3">{exp.company}</div>
                  
                  {exp.description && (
                    <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                  )}
                  
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded text-xs bg-neon-blue/80 text-white hover:bg-neon-blue transition-colors flex items-center gap-1"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    
                    {exp.github && (
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded text-xs bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1"
                      >
                        <span>View Code</span>
                        <Github className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

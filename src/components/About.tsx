
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
    <section id="about" className="py-20 px-6 md:px-12 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Column */}
          <div>
            <div 
              className={cn(
                "inline-block py-1 px-3 rounded-full text-sm bg-secondary/50 text-muted-foreground mb-4 opacity-0 transform translate-y-4 transition-all duration-500",
                isVisible && "opacity-100 translate-y-0"
              )}
            >
              About Me
            </div>
            
            <h2 
              className={cn(
                "text-3xl md:text-4xl font-bold opacity-0 transform translate-y-4 transition-all duration-500 delay-100",
                isVisible && "opacity-100 translate-y-0"
              )}
            >
              {about.headline}
            </h2>
            
            <p 
              className={cn(
                "text-muted-foreground mt-4 opacity-0 transform translate-y-4 transition-all duration-500 delay-200",
                isVisible && "opacity-100 translate-y-0"
              )}
            >
              {about.bio}
            </p>
            
            <div 
              className={cn(
                "mt-8 opacity-0 transform translate-y-4 transition-all duration-500 delay-300",
                isVisible && "opacity-100 translate-y-0"
              )}
            >
              <h3 className="text-lg font-semibold mb-3">Experience</h3>
              <div className="space-y-4">
                {about.experience.map((exp, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">{exp.period}</div>
                    <div className="font-medium">{exp.position}</div>
                    <div className="text-sm mb-3">{exp.company}</div>
                    
                    {/* Links section */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.url && (
                        <a 
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs flex items-center gap-1 text-neon-blue hover:underline p-1.5 glass-panel"
                          aria-label={`Visit ${exp.company} site`}
                        >
                          <span className="truncate">Visit Site</span>
                          <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        </a>
                      )}
                      
                      {exp.github && (
                        <a 
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs flex items-center gap-1 text-neon-blue hover:underline p-1.5 glass-panel"
                          aria-label={`View ${exp.company} code on GitHub`}
                        >
                          <span className="truncate">View Code</span>
                          <Github className="w-3 h-3 flex-shrink-0" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div 
            className={cn(
              "opacity-0 transform translate-y-4 transition-all duration-500 delay-400",
              isVisible && "opacity-100 translate-y-0"
            )}
          >
            <div className="glass-panel p-6 rounded-xl relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-neon-blue/10 blur-2xl" />
              
              <h3 className="text-lg font-semibold mb-6 relative z-10">Skills & Expertise</h3>
              
              <div className="space-y-4 relative z-10">
                {about.skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
              
              {/* Call to action */}
              <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center">
                <div>
                  <div className="text-sm text-muted-foreground">Want to work together?</div>
                  <div className="font-medium">Let's create something amazing</div>
                </div>
                <a 
                  href="#contact" 
                  className="px-4 py-2 rounded-lg border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 transition-colors duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

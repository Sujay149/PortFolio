
import { useDelayedAnimation } from '@/hooks/useAnimations';
import { cn } from '@/lib/utils';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { contact } from '@/lib/data';

export function Footer() {
  const isAnimated = useDelayedAnimation(100);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer 
      className={cn(
        "py-8 px-6 md:px-12 border-t border-white/10 opacity-0 transform translate-y-4 transition-all duration-500 relative",
        isAnimated && "opacity-100 translate-y-0"
      )}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-gradient-blue text-glow mb-4">portfolio.</div>
            <p className="text-sm text-muted-foreground">
              A showcase of my skills, projects, and experience as a developer.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors animated-underline inline-block">Home</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-white transition-colors animated-underline inline-block">Projects</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-white transition-colors animated-underline inline-block">About</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-white transition-colors animated-underline inline-block">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              {contact.social.map((platform, index) => {
                const Icon = platform.name === 'GitHub' ? Github : Linkedin;
                
                return (
                  <a 
                    key={index}
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue/20 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <p className="text-muted-foreground">{contact.email}</p>
            <p className="text-muted-foreground">{contact.location}</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex justify-between items-center flex-wrap gap-4">
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center hover:bg-neon-blue/40 transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:text-neon-blue transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

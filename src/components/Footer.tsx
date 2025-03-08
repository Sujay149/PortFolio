
import { useDelayedAnimation } from '@/hooks/useAnimations';
import { cn } from '@/lib/utils';
import { Github, Linkedin } from 'lucide-react';
import { contact } from '@/lib/data';

export function Footer() {
  const isAnimated = useDelayedAnimation(100);
  
  return (
    <footer 
      className={cn(
        "py-8 px-6 md:px-12 border-t border-white/10 opacity-0 transform translate-y-4 transition-all duration-500",
        isAnimated && "opacity-100 translate-y-0"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-neon-blue mb-4">portfolio.</div>
            <p className="text-sm text-muted-foreground">
              A showcase of my skills, projects, and experience as a developer.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Home</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-white transition-colors">Projects</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-white transition-colors">Contact</a></li>
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
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

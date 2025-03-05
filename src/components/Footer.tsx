
import { useDelayedAnimation } from '@/hooks/useAnimations';
import { cn } from '@/lib/utils';

export function Footer() {
  const isAnimated = useDelayedAnimation(100);
  
  return (
    <footer 
      className={cn(
        "py-8 px-6 md:px-12 border-t border-white/10 opacity-0 transform translate-y-4 transition-all duration-500",
        isAnimated && "opacity-100 translate-y-0"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="text-gradient-blue font-medium">portfolio.</span>
          <p className="text-sm text-muted-foreground mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-muted-foreground hover:text-white transition-colors">Home</a>
          <a href="#projects" className="text-muted-foreground hover:text-white transition-colors">Projects</a>
          <a href="#about" className="text-muted-foreground hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-muted-foreground hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

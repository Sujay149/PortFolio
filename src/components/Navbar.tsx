
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={cn(
        'fixed top-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4'
      )}
    >
      <div className="ml-auto">
        <div className="flex items-center space-x-8 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="/resume.pdf">Resume</NavLink>
          <NavLink href="#contact">Blog</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
    >
      {children}
    </a>
  );
}

export default Navbar;

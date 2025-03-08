
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
    >
      {children}
    </Link>
  );
}

export default Navbar;


import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Download, Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4',
        scrolled ? 'backdrop-blur-xl bg-background/80 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl font-bold text-neon-blue"
        >
          portfolio.
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a 
            href="/resume.pdf" 
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-16 bg-background/95 backdrop-blur-xl p-6 flex flex-col space-y-6 transition-all duration-300 transform md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <MobileNavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</MobileNavLink>
        <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
        <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
        <a 
          href="/resume.pdf" 
          download
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20 transition-all duration-300 mt-6"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Download size={18} />
          <span>Download Resume</span>
        </a>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-white hover:text-neon-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-neon-blue after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <a 
      href={href} 
      className="text-xl font-medium text-center py-4 border-b border-white/10 hover:text-neon-blue transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default Navbar;


import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // Dot follows with slight delay
      setTimeout(() => {
        setDotPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    // Track hover targets
    const handleHoverStart = () => setHovering(true);
    const handleHoverEnd = () => setHovering(false);

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover detection to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
      el.classList.add('hover-target');
    });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
        el.classList.remove('hover-target');
      });
    };
  }, []);

  // Don't show custom cursor on touch devices
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      <div 
        className={cn(
          "custom-cursor",
          hovering && "scale-[1.5]",
          visible ? "opacity-100" : "opacity-0"
        )}
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
      />
      <div 
        className={cn(
          "custom-cursor-dot",
          hovering && "scale-[1.2]",
          visible ? "opacity-100" : "opacity-0"
        )}
        style={{
          transform: `translate(${dotPosition.x - 2.5}px, ${dotPosition.y - 2.5}px)`,
        }}
      />
    </>
  );
}

export default CustomCursor;

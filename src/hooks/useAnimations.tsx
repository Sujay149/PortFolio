
import { useEffect, useRef, useState } from 'react';

// Hook for fade-in animation on scroll
export function useFadeInOnScroll(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

// Hook to track mouse position for parallax effects
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
}

// Hook for delayed animation
export function useDelayedAnimation(delay = 100) {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return isAnimated;
}

// Hook for sequential animations (for lists)
export function useSequentialAnimation(itemCount: number, baseDelay = 100, increment = 100) {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(Array(itemCount).fill(false));
  
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    for (let i = 0; i < itemCount; i++) {
      const timer = setTimeout(() => {
        setAnimatedItems(prev => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, baseDelay + (i * increment));
      
      timers.push(timer);
    }
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [itemCount, baseDelay, increment]);
  
  return animatedItems;
}

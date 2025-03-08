
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

// New smooth scroll reveal animation hook
export function useSmoothScrollReveal(options = { threshold: 0.1, rootMargin: '0px' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Calculate how far the element is visible
            const visibleRatio = Math.min(1, Math.max(0, entry.intersectionRatio));
            setScrollProgress(visibleRatio);
          }
        });
      },
      {
        root: null,
        rootMargin: options.rootMargin,
        threshold: Array.from({ length: 20 }, (_, i) => i / 19) // Create array [0, 0.05, 0.1, ..., 1]
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
  }, [options.threshold, options.rootMargin]);

  return { ref, scrollProgress };
}

// Hook for element hover animation
export function useHoverAnimation() {
  const [isHovered, setIsHovered] = useState(false);
  
  const bindHoverEvents = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocus: () => setIsHovered(true),
    onBlur: () => setIsHovered(false)
  };
  
  return { isHovered, bindHoverEvents };
}

// New hooks for page transitions
export function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const startTransition = () => {
    setIsTransitioning(true);
    return new Promise<void>(resolve => {
      setTimeout(() => {
        setIsTransitioning(false);
        resolve();
      }, 500);
    });
  };
  
  return { isTransitioning, startTransition };
}

// New hook for staggered text animation
export function useStaggeredText(text: string, delay = 30) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText('');
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);
    
    return () => clearInterval(interval);
  }, [text, delay]);
  
  return displayedText;
}

// New hook for counter animation
export function useCounterAnimation(endValue: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const startAnimation = () => {
    setIsAnimating(true);
    const startTime = Date.now();
    
    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min(1, (currentTime - startTime) / duration);
      
      setCount(Math.floor(progress * endValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
    
    requestAnimationFrame(animate);
  };
  
  return { count, isAnimating, startAnimation };
}

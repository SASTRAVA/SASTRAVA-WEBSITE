/**
 * useScrollAnimation Hook
 * Scroll-based animation triggering with useInView
 */

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.2,
    margin = '-50px',
    triggerOnce = true,
    onInView = null,
    onOutOfView = null
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold,
    margin
  });

  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Intersection observer state is synchronized here.
      setHasBeenInView(true);
      onInView && onInView();
    } else {
      if (!triggerOnce) {
        onOutOfView && onOutOfView();
      }
    }
  }, [isInView, onInView, onOutOfView, triggerOnce]);

  return {
    ref,
    isInView: triggerOnce ? hasBeenInView : isInView,
    hasBeenInView
  };
};

/**
 * useParallax Hook
 * Create parallax scroll effect
 */
export const useParallax = (_offset = 50) => {
  const ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementPos = ref.current.getBoundingClientRect().top;
        setOffsetY(elementPos * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, offsetY };
};

/**
 * useScrollProgress Hook
 * Track scroll progress on page
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

/**
 * useSectionInView Hook
 * Detect which section is in view
 */
export const useSectionInView = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-50% 0px -50% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const registerSection = (id, ref) => {
    sectionRefs.current[id] = ref;
  };

  return { activeSection, registerSection };
};

/**
 * useCountUp Hook
 * Animate counting up to a target number
 */
export const useCountUp = (endValue = 0, duration = 2, triggerWhenInView = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (triggerWhenInView && !isInView) return;
    if (hasStarted.current) return;

    hasStarted.current = true;
    const startValue = 0;
    const increment = endValue / (duration * 60); // 60fps
    let current = startValue;

    const interval = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        setCount(endValue);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [endValue, duration, isInView, triggerWhenInView]);

  return { count, ref };
};

/**
 * useElementVisibility Hook
 * Track element visibility and visibility percentage
 */
export const useElementVisibility = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibilityPercent, setVisibilityPercent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        // Calculate visibility percentage
        if (entry.isIntersecting) {
          const rect = ref.current.getBoundingClientRect();
          const viewHeight = window.innerHeight;
          const visibleHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0);
          const percent = (visibleHeight / rect.height) * 100;
          setVisibilityPercent(Math.max(0, Math.min(100, percent)));
        }
      },
      { threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible, visibilityPercent };
};

export default useScrollAnimation;

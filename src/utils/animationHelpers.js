/**
 * Animation Helpers Utility Functions
 * Reusable animation configurations and helpers
 */

/**
 * Get stagger delay for index-based animations
 */
export const getStaggerDelay = (index = 0, baseDelay = 0.1) => {
  return index * baseDelay;
};

/**
 * Create fade in animation variants
 */
export const createFadeInVariants = (duration = 0.6, delay = 0) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration, delay }
    }
  };
};

/**
 * Create slide in animation variants
 */
export const createSlideInVariants = (
  direction = 'up',
  duration = 0.6,
  delay = 0,
  distance = 30
) => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return {
    hidden: { opacity: 0, ...directionMap[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay }
    }
  };
};

/**
 * Create scale animation variants
 */
export const createScaleVariants = (
  startScale = 0.8,
  duration = 0.6,
  delay = 0
) => {
  return {
    hidden: { opacity: 0, scale: startScale },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration, delay }
    }
  };
};

/**
 * Create rotate animation variants
 */
export const createRotateVariants = (
  startRotation = -10,
  duration = 0.6,
  delay = 0
) => {
  return {
    hidden: { opacity: 0, rotate: startRotation },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration, delay }
    }
  };
};

/**
 * Create container animation with staggered children
 */
export const createContainerVariants = (
  staggerChildren = 0.1,
  delayChildren = 0
) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

/**
 * Create hover animation
 */
export const createHoverVariants = (scale = 1.05, duration = 0.2) => {
  return {
    hover: {
      scale,
      transition: { duration }
    }
  };
};

/**
 * Create tap animation
 */
export const createTapVariants = (scale = 0.95, duration = 0.1) => {
  return {
    tap: {
      scale,
      transition: { duration }
    }
  };
};

/**
 * Create infinite animation
 */
export const createInfiniteVariants = (
  property = 'y',
  distance = 10,
  duration = 2,
  delay = 0
) => {
  const animation = {};
  animation[property] = [0, distance, 0];
  
  return {
    animate: {
      ...animation,
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };
};

/**
 * Get easing function by name
 */
export const getEasing = (name = 'easeOut') => {
  const easings = {
    easeIn: [0.42, 0, 1, 1],
    easeOut: [0, 0, 0.58, 1],
    easeInOut: [0.42, 0, 0.58, 1],
    linear: [0.25, 0.25, 0.75, 0.75],
    easeInQuad: [0.55, 0.085, 0.68, 0.53],
    easeOutQuad: [0.25, 0.46, 0.45, 0.94],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
    easeOutCubic: [0.215, 0.61, 0.355, 1],
    easeInOutCubic: [0.645, 0.045, 0.355, 1]
  };
  
  return easings[name] || easings.easeOut;
};

/**
 * Create scroll-triggered animation
 */
export const createScrollTriggerVariants = (
  visible,
  hidden = { opacity: 0 },
  transition = { duration: 0.6 }
) => {
  return {
    hidden,
    visible: {
      ...visible,
      transition
    }
  };
};

/**
 * Smooth scroll to element
 */
export const smoothScroll = (elementId) => {
  if (typeof window === 'undefined') return;
  
  const element = document.getElementById(elementId);
  if (!element) return;
  
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

/**
 * Scroll to top smoothly
 */
export const scrollToTop = () => {
  if (typeof window === 'undefined') return;
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Get scroll progress (0-1)
 */
export const getScrollProgress = () => {
  if (typeof window === 'undefined') return 0;
  
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  
  return scrollTop / (documentHeight - windowHeight);
};

/**
 * Check if element is in viewport
 */
export const isElementInViewport = (element) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
};

/**
 * Create parallax effect configuration
 */
export const createParallaxConfig = (offset = -20, duration = 0.5) => {
  return {
    hidden: { y: 0 },
    visible: {
      y: offset,
      transition: { duration }
    }
  };
};

/**
 * Debounce animation trigger
 */
export const debounceAnimation = (callback, delay = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      callback(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};

/**
 * Create shimmer loading animation
 */
export const createShimmerAnimation = () => {
  return {
    initial: { backgroundPosition: '-1000px 0' },
    animate: {
      backgroundPosition: '1000px 0'
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear'
    }
  };
};

/**
 * Get animation preset by name
 */
export const getAnimationPreset = (name = 'fadeIn', index = 0) => {
  const presets = {
    fadeIn: createFadeInVariants(0.6, getStaggerDelay(index)),
    slideInUp: createSlideInVariants('up', 0.6, getStaggerDelay(index)),
    slideInDown: createSlideInVariants('down', 0.6, getStaggerDelay(index)),
    slideInLeft: createSlideInVariants('left', 0.6, getStaggerDelay(index)),
    slideInRight: createSlideInVariants('right', 0.6, getStaggerDelay(index)),
    scaleIn: createScaleVariants(0.8, 0.6, getStaggerDelay(index)),
    rotateIn: createRotateVariants(-10, 0.6, getStaggerDelay(index))
  };
  
  return presets[name] || presets.fadeIn;
};

export default {
  getStaggerDelay,
  createFadeInVariants,
  createSlideInVariants,
  createScaleVariants,
  createRotateVariants,
  createContainerVariants,
  createHoverVariants,
  createTapVariants,
  createInfiniteVariants,
  getEasing,
  createScrollTriggerVariants,
  smoothScroll,
  scrollToTop,
  getScrollProgress,
  isElementInViewport,
  createParallaxConfig,
  debounceAnimation,
  createShimmerAnimation,
  getAnimationPreset
};

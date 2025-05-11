import { Variants } from "framer-motion";

/**
 * Standard animation variants for use across the site
 * These provide consistent animations for all components
 */

export const animations = {
  // Standard fade in from bottom animation
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  } as Variants,
  
  // Fade in with scale effect
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  } as Variants,
  
  // Fade in from the left
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  } as Variants,
  
  // Fade in from the right
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  } as Variants,
  
  // Container settings for staggered children
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  } as Variants
};

// Standard settings for viewport triggering
export const defaultViewport = { once: true };

// Standard transition settings
export const defaultTransition = { duration: 0.5 };

// Helper functions for creating transition delays
export const withDelay = (delay: number) => ({ duration: 0.5, delay });
export const withStagger = (index: number, baseDelay = 0.1) => ({ duration: 0.5, delay: baseDelay * index });

/**
 * Helper function to generate a complete set of motion props
 */
export const motionProps = (
  variant: keyof typeof animations = "fadeIn", 
  index?: number, 
  customDelay?: number
) => {
  const variants = animations[variant];
  let transition;
  
  if (customDelay !== undefined) {
    transition = withDelay(customDelay);
  } else if (index !== undefined) {
    transition = withStagger(index);
  } else {
    transition = defaultTransition;
  }
  
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: defaultViewport,
    variants,
    transition
  };
}; 
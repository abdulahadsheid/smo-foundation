/**
 * SMO Foundation — Animation Variants
 * Reusable Framer Motion variants for consistent scroll animations
 */

// Duration constants
export const DURATION = {
  fast: 0.4,
  normal: 0.6,
  slow: 0.8,
};

// Easing
export const EASE = {
  smooth: [0.25, 0.1, 0.25, 1],
  out: [0, 0, 0.2, 1],
  in: [0.4, 0, 1, 1],
  spring: { type: "spring", stiffness: 100, damping: 20 },
};

// Fade in from below
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE.out },
  },
};

// Simple fade
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE.smooth },
  },
};

// Fade in from left
export const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.normal, ease: EASE.out },
  },
};

// Fade in from right
export const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.normal, ease: EASE.out },
  },
};

// Scale in
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.normal, ease: EASE.out },
  },
};

// Container for stagger children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Individual stagger item
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE.out },
  },
};

// Hero text entrance
export const heroText = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE.out },
  },
};

// Hero image (subtle scale)
export const heroImage = {
  initial: { scale: 1.05 },
  animate: {
    scale: 1,
    transition: { duration: 6, ease: "linear" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: EASE.smooth },
  },
};

// Viewport configuration defaults
export const viewportConfig = {
  once: true,
  amount: 0.2,
};

export const viewportConfigLight = {
  once: true,
  amount: 0.1,
};

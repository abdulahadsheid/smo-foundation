"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children?: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  "aria-label"?: string;
}

const hidden = { opacity: 0, y: 28 };
const shown = { opacity: 1, y: 0 };

function useRevealProps(delay: number) {
  const reduceMotion = useReducedMotion();
  return {
    initial: reduceMotion ? false : hidden,
    whileInView: shown,
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export function RevealSection({ children, delay = 0, ...props }: RevealProps) {
  const motionProps = useRevealProps(delay);
  return (
    <motion.section {...motionProps} {...props}>
      {children}
    </motion.section>
  );
}

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const motionProps = useRevealProps(delay);
  return (
    <motion.div {...motionProps} {...props}>
      {children}
    </motion.div>
  );
}

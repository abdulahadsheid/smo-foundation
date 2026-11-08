"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * useCarousel — manages automatic carousel state
 * @param {number} total — number of slides
 * @param {number} interval — autoplay interval in ms
 */
export function useCarousel(total, interval = 6000) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const timerRef = useRef(null);

  // Detect reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  // Start/stop autoplay
  useEffect(() => {
    if (paused || prefersReducedMotion) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [paused, prefersReducedMotion, next, interval]);

  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);

  return { current, paused, pause, resume, prefersReducedMotion };
}

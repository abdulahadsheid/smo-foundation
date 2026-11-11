"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import Button from "@/components/shared/Button";
import { heroSlides } from "@/data/photos";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 6500;

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
const getReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getReducedMotionOnServer = () => false;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionOnServer
  );

  const count = heroSlides.length;
  const playing = !hovering && !reducedMotion && count > 1;
  const next = useCallback(() => setCurrent((i) => (i + 1) % count), [count]);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [playing, next]);

  const slide = heroSlides[current];

  return (
    <section
      aria-label="Introduction"
      className="relative isolate overflow-hidden bg-green-950 text-cream"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Photos */}
      <div
        className="absolute inset-0 -z-20"
        aria-roledescription="carousel"
        aria-label="Photos from the programme"
      >
        {heroSlides.map((s, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === current ? 1 : 0, scale: i === current ? 1 : 1.04 }}
            transition={{ duration: reducedMotion ? 0 : 1.1, ease: "easeOut" }}
            aria-hidden={i !== current}
          >
            {s.src ? (
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-green-800" />
            )}
          </motion.div>
        ))}
      </div>

      {/*
        Readability layer. Mobile: the whole frame is tinted because the text fills it.
        Desktop: solid behind the text column, fading out to the right so the photo shows.
      */}
      <div
        className="absolute inset-0 -z-10 bg-green-950/80 lg:bg-transparent lg:bg-[linear-gradient(90deg,var(--color-green-950)_0%,rgb(18_87_46/0.95)_45%,rgb(18_87_46/0.6)_70%,rgb(18_87_46/0.2)_100%)]"
        aria-hidden="true"
      />

      <div className="container-site flex min-h-[clamp(560px,82vh,760px)] flex-col justify-end pb-10 pt-20 md:pb-14">
        <div className="max-w-[40rem]">
          <h1 className="text-[2.6rem] leading-[1.03] text-cream sm:text-[3.5rem] lg:text-[4.5rem]">
            We give Nigeria&apos;s market women ₦100,000, a bank account and the skills to grow.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-cream/85 md:text-xl">
            SMO Foundation is a youth-led non-profit in Abuja. Our 12-State Programme will put grants
            into the accounts of 5,400 traders across 111 market clusters, starting soon in six
            states.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/support" variant="onDark">
              Support a trader
            </Button>
            <Button href="/our-work" variant="outlineOnDark">
              How a grant works
            </Button>
          </div>
        </div>

        {/* Controls + caption */}
        <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {count > 1 && (
              <>
                <div className="-ml-2 flex items-center gap-1" role="group" aria-label="Choose a photo">
                  {heroSlides.map((s, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-label={`Show photo ${i + 1} of ${count}`}
                      aria-current={i === current ? "true" : undefined}
                      className="grid h-10 w-8 place-items-center"
                    >
                      <motion.span
                        className={cn("block h-1 rounded-full", i === current ? "bg-cream" : "bg-cream/40")}
                        initial={false}
                        animate={{ width: i === current ? 28 : 12 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

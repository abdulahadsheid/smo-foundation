"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Route } from "lucide-react";
import { phases, programmeStates } from "@/data/programme";
import { cn } from "@/lib/utils";
import type { Zone } from "@/types";

const zones: Zone[] = [
  "North West",
  "North East",
  "North Central",
  "South West",
  "South East",
  "South South",
];

function Stop({ phase }: { phase: 1 | 2 }) {
  return (
    <span
      className={cn(
        "relative z-10 grid h-4 w-4 shrink-0 place-items-center rounded-full border-2 border-green-900",
        phase === 1 ? "bg-green-900" : "bg-white"
      )}
      aria-hidden="true"
    />
  );
}

export default function StatesByZone() {
  const [p1, p2] = phases;
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <li className="flex items-center gap-2">
          <Stop phase={1} />
          {p1.label}, {p1.period} (starting first)
        </li>
        <li className="flex items-center gap-2">
          <Stop phase={2} />
          {p2.label}, {p2.period}
        </li>
      </ul>

      <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-10 lg:grid-cols-3">
        {zones.map((zone, zi) => {
          const route = programmeStates.filter((s) => s.zone === zone);
          return (
            <div key={zone} className="border-t border-line pt-4">
              <dt className="flex items-center gap-2 text-sm text-muted">
                <Route size={15} strokeWidth={2} className="shrink-0 text-green-900" aria-hidden="true" />
                {zone}
              </dt>
              <dd className="mt-3">
                <ol aria-label={`${zone} route`}>
                  {route.map((s, i) => (
                    <Fragment key={s.name}>
                      <li className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-green-900 sm:text-xl">
                        <Stop phase={s.phase} />
                        {s.name}
                        <span className="sr-only">, Phase {s.phase}</span>
                      </li>
                      {i < route.length - 1 && (
                        <li aria-hidden="true" className="ml-[7px] h-6 w-0.5 py-1">
                          <motion.span
                            className="block h-full w-full origin-top bg-[repeating-linear-gradient(to_bottom,var(--color-green-900)_0_4px,transparent_4px_7px)]"
                            initial={reduceMotion ? false : { scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.15 + zi * 0.08, ease: "easeOut" }}
                          />
                        </li>
                      )}
                    </Fragment>
                  ))}
                </ol>
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

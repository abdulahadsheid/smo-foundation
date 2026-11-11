import { cn } from "@/lib/utils";
import type { Figure } from "@/types";

interface FigureStatProps {
  figure: Figure;
  tone?: "light" | "dark";
}

export default function FigureStat({ figure, tone = "light" }: FigureStatProps) {
  const dark = tone === "dark";
  const pending = figure.value === "";

  return (
    <div>
      <p
        className={cn(
          "tabular font-display text-[1.875rem] font-semibold leading-none tracking-tight min-[400px]:text-[2.125rem] sm:text-[2.75rem] md:text-[3.5rem]",
          dark ? "text-cream" : "text-green-900",
          pending && (dark ? "text-cream/35" : "text-green-900/30")
        )}
      >
        {pending ? "—" : figure.value}
      </p>
      <p className={cn("mt-3 max-w-[22ch] text-base", dark ? "text-cream/90" : "text-ink")}>
        {figure.label}
      </p>
      <p className={cn("mt-1 text-sm", dark ? "text-cream/60" : "text-muted")}>
        {pending
          ? figure.note ?? "Not yet published"
          : figure.status === "target"
            ? `Target by ${figure.asOf}`
            : `As of ${figure.asOf}`}
      </p>
    </div>
  );
}

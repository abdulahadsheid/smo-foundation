import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Logo — a text wordmark until the foundation supplies logo files.
 * Replace the mark with the real logo (e.g. next/image from /public/logo.svg) when ready.
 */
export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="SMO Foundation home">
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-[9px] font-display text-[0.8rem] font-bold tracking-tight",
          dark ? "bg-cream text-green-950" : "bg-green-900 text-cream"
        )}
        aria-hidden="true"
      >
        SMO
      </span>
      <span
        className={cn(
          "font-display text-[1.05rem] font-semibold tracking-tight",
          dark ? "text-cream" : "text-green-900"
        )}
      >
        SMO Foundation
      </span>
    </Link>
  );
}

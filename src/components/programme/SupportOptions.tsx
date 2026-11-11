import Link from "next/link";
import { supportOptions } from "@/data/programme";
import { cn } from "@/lib/utils";

/** SupportOptions — three ways to help, divided by rules rather than boxed in cards */
export default function SupportOptions({ withAnchors = false }: { withAnchors?: boolean }) {
  return (
    <div className="grid border-t border-line md:grid-cols-3">
      {supportOptions.map((option, i) => (
        <div
          key={option.id}
          id={withAnchors ? option.id : undefined}
          className={cn(
            "scroll-mt-28 border-b border-line py-8 md:border-b-0 md:py-10",
            i > 0 && "md:border-l md:pl-8",
            i < supportOptions.length - 1 && "md:pr-8"
          )}
        >
          <h3 className="text-[1.625rem]">{option.title}</h3>
          <p className="mt-3 text-muted">{option.body}</p>
          {!withAnchors && (
            <Link
              href={option.action.href}
              className="mt-5 inline-block font-semibold text-green-900 underline decoration-green-900/30 underline-offset-4 hover:decoration-green-900"
            >
              {option.action.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

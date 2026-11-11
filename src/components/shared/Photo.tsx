import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PhotoSlot } from "@/types";

type Ratio = "4/5" | "3/4" | "1/1" | "4/3" | "3/2" | "16/9" | "21/9";

interface PhotoProps {
  photo: PhotoSlot;
  ratio?: Ratio;
  className?: string;
  /** Load eagerly (use for the hero only) */
  priority?: boolean;
  sizes?: string;
  /** Show the caption under the frame */
  showCaption?: boolean;
  /** Placeholder on a dark background */
  tone?: "light" | "dark";
}

export default function Photo({
  photo,
  ratio = "4/3",
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  showCaption = false,
  tone = "light",
}: PhotoProps) {
  return (
    <figure className={cn("m-0", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-[14px]",
          !photo.src &&
            (tone === "dark"
              ? "border border-dashed border-white/30 bg-white/[0.06]"
              : "border border-dashed border-green-700/35 bg-green-100")
        )}
        style={{ aspectRatio: ratio }}
      >
        {photo.src ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center",
              tone === "dark" ? "text-white/70" : "text-green-800/80"
            )}
            role="img"
            aria-label={`Photo placeholder: ${photo.alt}`}
          >
            <ImageIcon size={28} strokeWidth={1.5} aria-hidden="true" />
            <p className="max-w-[28ch] text-sm leading-snug">
              <span className="font-semibold">Photo needed</span>
              <br />
              {photo.alt}
            </p>
          </div>
        )}
      </div>
      {showCaption && photo.caption && (
        <figcaption
          className={cn("mt-3 text-sm", tone === "dark" ? "text-white/70" : "text-muted")}
        >
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}

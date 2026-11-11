import Image from "next/image";
import { cn } from "@/lib/utils";
import type { PhotoSlot } from "@/types";

interface PartnerLogoProps {
  name: string;
  logo: PhotoSlot;
  className?: string;
}

/** PartnerLogo — the partner's logo once `logo.src` is set, otherwise their name as a wordmark */
export default function PartnerLogo({ name, logo, className }: PartnerLogoProps) {
  if (logo.src) {
    return (
      <div className={cn("relative h-10 w-40", className)}>
        <Image src={logo.src} alt={logo.alt} fill sizes="160px" className="object-contain object-left" />
      </div>
    );
  }

  return (
    <p className={cn("font-display text-2xl font-bold tracking-tight text-green-900", className)}>{name}</p>
  );
}

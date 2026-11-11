import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "onDark" | "outlineOnDark";

export interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-green-900 text-cream hover:bg-green-800 active:bg-green-950",
  secondary:
    "border border-green-900/25 text-green-900 hover:border-green-900 hover:bg-green-900/[0.04]",
  onDark: "bg-cream text-green-950 hover:bg-paper",
  outlineOnDark: "border border-cream/40 text-cream hover:border-cream hover:bg-cream/[0.08]",
};

/**
 * Button — filled and outlined, each in a version for cream and for dark-green backgrounds.
 */
export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center rounded-[10px] px-6 text-[0.975rem] font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

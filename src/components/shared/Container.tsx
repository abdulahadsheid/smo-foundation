import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Container — constrains content to the site width with responsive padding */
export default function Container({ children, className, as: Tag = "div", ...props }: ContainerProps) {
  return (
    <Tag className={cn("container-site", className)} {...props}>
      {children}
    </Tag>
  );
}

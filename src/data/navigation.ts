import type { NavLink } from "@/types";

export const navigationLinks: NavLink[] = [
  { label: "Our work", href: "/our-work" },
  { label: "Core team", href: "/core-team" },
  { label: "Partners", href: "/partners" },
  { label: "Where we work", href: "/where-we-work" },
  { label: "About", href: "/about" },
];

export const primaryAction: NavLink = { label: "Support a trader", href: "/support" };

export const footerLinks: NavLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

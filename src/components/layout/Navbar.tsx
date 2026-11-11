"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigationLinks, primaryAction } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const mobileOpen = openPath === pathname;
  const close = () => setOpenPath(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-green-900/10 bg-cream/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3.5 py-2 text-[0.95rem] font-medium transition-colors",
                      isActive(link.href)
                        ? "text-green-900 underline decoration-2 underline-offset-[10px]"
                        : "text-ink/75 hover:text-green-900"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={primaryAction.href}
              className="hidden min-h-11 items-center rounded-[10px] bg-green-900 px-5 text-[0.95rem] font-semibold text-cream transition-colors hover:bg-green-800 sm:inline-flex"
            >
              {primaryAction.label}
            </Link>
            <button
              type="button"
              onClick={() => setOpenPath(mobileOpen ? null : pathname)}
              className="grid h-11 w-11 place-items-center rounded-[10px] text-green-900 transition-colors hover:bg-green-900/[0.06] lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={close} isActive={isActive} />
    </header>
  );
}

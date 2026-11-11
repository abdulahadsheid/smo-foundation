"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { navigationLinks, primaryAction } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}

/**
 * MobileMenu — a frosted-glass panel that drops down under the navbar.
 * The page stays visible, blurred, behind it.
 */
export default function MobileMenu({ isOpen, onClose, isActive }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Tap outside to close; lightly tinted so the glass panel reads */}
          <motion.button
            key="scrim"
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 cursor-default bg-transparent lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            key="panel"
            id="mobile-menu"
            className="absolute inset-x-3 top-[calc(4.5rem+0.5rem)] z-50 overflow-hidden rounded-[20px] border border-white/60 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_24px_60px_-24px_rgba(18,87,46,0.45)] backdrop-blur-2xl backdrop-saturate-[1.8] lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <nav aria-label="Mobile" className="p-3">
              <ul>
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={cn(
                        "flex min-h-14 items-center rounded-[12px] px-4 font-display text-[1.375rem] font-semibold tracking-tight transition-colors",
                        isActive(link.href)
                          ? "bg-white/55 text-green-900"
                          : "text-green-950 hover:bg-white/40"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-3 border-t border-green-900/15 px-1 pt-4">
                <Link
                  href={primaryAction.href}
                  onClick={onClose}
                  className="flex min-h-12 w-full items-center justify-center rounded-[12px] bg-green-900 text-base font-semibold text-cream"
                >
                  {primaryAction.label}
                </Link>
                <a
                  href={`tel:${siteConfig.contact.primaryPhone.replace(/\s/g, "")}`}
                  className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-[12px] text-base font-semibold text-green-900"
                >
                  <Phone size={16} aria-hidden="true" />
                  {siteConfig.contact.primaryPhone}
                </a>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

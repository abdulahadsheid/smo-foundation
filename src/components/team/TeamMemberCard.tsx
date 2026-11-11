"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Photo from "@/components/shared/Photo";
import type { TeamMember } from "@/types";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group relative flex h-full flex-col gap-4 rounded-[18px] border border-line bg-white p-2.5 shadow-[0_1px_0_rgba(18,87,46,0.04)] transition-shadow hover:shadow-[0_18px_40px_-22px_rgba(18,87,46,0.35)] sm:p-3 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-6"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Photo photo={member.photo} ratio="4/5" sizes="(max-width: 1024px) 50vw, 22vw" />
      <div className="flex flex-1 flex-col px-1.5 pb-2 sm:px-2 lg:px-0 lg:py-4 lg:pr-4">
        <h3 className="text-[1.05rem] leading-snug sm:text-[1.25rem] lg:text-[1.5rem]">{member.name}</h3>
        <p className="mt-1 text-[0.85rem] font-medium leading-snug text-green-700 sm:text-[0.95rem]">
          {member.role}
        </p>
        <p className="mt-3 line-clamp-4 text-[0.85rem] text-ink/80 sm:line-clamp-none sm:text-[0.95rem]">
          {member.responsibility}
        </p>
        {member.slug && (
          <Link
            href={`/core-team/${member.slug}`}
            className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-green-900 after:absolute after:inset-0 after:rounded-[18px] sm:text-[0.95rem]"
          >
            View profile
            <ArrowRight size={16} strokeWidth={1.75} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            <span className="sr-only">of {member.name}</span>
          </Link>
        )}
      </div>
    </motion.article>
  );
}

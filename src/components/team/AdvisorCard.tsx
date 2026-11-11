"use client";

import { motion, useReducedMotion } from "framer-motion";
import Photo from "@/components/shared/Photo";
import type { AdvisoryMember } from "@/types";

export default function AdvisorCard({ member }: { member: AdvisoryMember }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="flex h-full flex-col gap-4 rounded-[18px] border border-line bg-white p-2.5 shadow-[0_1px_0_rgba(18,87,46,0.04)] transition-shadow hover:shadow-[0_18px_40px_-22px_rgba(18,87,46,0.35)] sm:p-3 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-6"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Photo photo={member.photo} ratio="4/5" sizes="(max-width: 1024px) 50vw, 22vw" />
      <div className="px-1.5 pb-2 sm:px-2 lg:px-0 lg:py-4 lg:pr-4">
        <h3 className="text-[1.05rem] leading-snug sm:text-[1.25rem] lg:text-[1.5rem]">{member.name}</h3>
        <p className="mt-1 text-[0.85rem] font-medium leading-snug text-green-700 sm:text-[0.95rem]">
          {member.role}
        </p>
      </div>
    </motion.article>
  );
}

import { BadgeCheck, Briefcase, GraduationCap, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Photo from "@/components/shared/Photo";
import type { LeaderProfile, PhotoSlot } from "@/types";

interface ProfileAsideProps {
  profile: LeaderProfile;
  photo: PhotoSlot;
}

export default function ProfileAside({ profile, photo }: ProfileAsideProps) {
  const [currentRole, governmentRole] = profile.roles;
  const [degree] = profile.education;

  const facts: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Briefcase, label: currentRole.title, value: currentRole.organisation },
    { icon: Landmark, label: governmentRole.title, value: governmentRole.organisation },
    { icon: GraduationCap, label: degree.qualification, value: degree.institution },
    { icon: BadgeCheck, label: profile.postNominal, value: "Nigeria Institute of Management" },
  ];

  return (
    <aside className="lg:top-28 [@media(min-width:1024px)_and_(min-height:1000px)]:sticky">
      <div className="relative isolate">
        <Photo photo={photo} ratio="4/5" priority sizes="(max-width: 1024px) 100vw, 34vw" />
        <div
          className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-[14px] border-2 border-green-900"
          aria-hidden="true"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-[2rem] leading-[1.05] md:text-[2.375rem]">
          {profile.name}
          <span className="ml-2 align-middle font-sans text-base font-semibold tracking-normal text-green-700">
            {profile.postNominal}
          </span>
        </h2>
        <p className="mt-3 text-lg font-medium text-green-700">{profile.title}</p>
      </div>

      <ul className="mt-8 divide-y divide-line border-y border-line">
        {facts.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex gap-4 py-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-green-100 text-green-900">
              <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[0.95rem] font-semibold leading-snug text-green-900">{label}</span>
              <span className="mt-0.5 block text-sm text-muted">{value}</span>
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

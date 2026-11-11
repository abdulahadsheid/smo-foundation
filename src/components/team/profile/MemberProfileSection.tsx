import { Quote, Sparkles } from "lucide-react";
import Container from "@/components/shared/Container";
import { Reveal, RevealSection } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import MemberAside from "./MemberAside";
import type { MemberProfile, ProfileSection, Qualification, TeamMember } from "@/types";

function Heading({ children }: { children: string }) {
  return <h2 className="text-[1.75rem] leading-tight md:text-[2rem]">{children}</h2>;
}

function QualificationList({ title, items }: { title: string; items: Qualification[] }) {
  return (
    <div className="rounded-[16px] border border-line p-6 md:p-7">
      <h3 className="text-xl">{title}</h3>
      <ul className="mt-5 space-y-5">
        {items.map((item) => (
          <li key={item.qualification} className="border-l-2 border-green-900 pl-4">
            <p className="font-semibold leading-snug text-green-900">
              {item.qualification}
              {item.note && (
                <span className="ml-2 inline-block rounded-full bg-green-100 px-2.5 py-0.5 align-middle text-xs font-semibold text-green-900">
                  {item.note}
                </span>
              )}
            </p>
            <p className="mt-1 text-[0.95rem] text-muted">{item.institution}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionBlock({ section, name }: { section: ProfileSection; name: string }) {
  switch (section.kind) {
    case "text":
      return (
        <>
          <Heading>{section.heading}</Heading>
          <div className="mt-5 max-w-[62ch] space-y-4 text-lg">
            {section.paragraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </>
      );
    case "roles":
      return (
        <>
          <Heading>{section.heading}</Heading>
          <ol className="mt-8 border-l-2 border-line">
            {section.roles.map((role) => (
              <li key={`${role.title}-${role.organisation}`} className="relative pb-7 pl-7 last:pb-0">
                <span
                  className={cn(
                    "absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-green-900",
                    role.current ? "bg-green-900" : "bg-white"
                  )}
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold text-green-700">
                  {role.label ?? (role.current ? "Current" : "Previously")}
                </p>
                <p className="mt-1 font-display text-xl font-semibold leading-snug tracking-tight text-green-900">
                  {role.title}
                </p>
                <p className="mt-0.5 text-muted">{role.organisation}</p>
                {role.detail && <p className="mt-2 max-w-[56ch]">{role.detail}</p>}
              </li>
            ))}
          </ol>
        </>
      );
    case "qualifications":
      return (
        <>
          <Heading>{section.heading}</Heading>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {section.groups.map((group) => (
              <QualificationList key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </>
      );
    case "tags":
      return (
        <>
          <Heading>{section.heading}</Heading>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {section.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-green-900/25 bg-green-100/60 px-4 py-2 text-[0.95rem] font-medium text-green-900"
              >
                {tag}
              </li>
            ))}
          </ul>
        </>
      );
    case "highlight":
      return (
        <div className="rounded-[20px] border-2 border-green-900 p-7 md:p-9">
          <p className="flex items-center gap-2 text-sm font-semibold text-green-700">
            <Sparkles size={16} strokeWidth={1.75} aria-hidden="true" />
            {section.eyebrow}
          </p>
          <h2 className="mt-3 text-[1.625rem] leading-tight md:text-[1.875rem]">{section.title}</h2>
          <p className="mt-4 max-w-[60ch] text-lg">{section.body}</p>
        </div>
      );
    case "commitment":
      return (
        <figure className="relative overflow-hidden rounded-[20px] bg-green-900 px-7 py-10 text-white md:px-12 md:py-14">
          <Quote size={88} strokeWidth={1} className="absolute -right-2 -top-2 text-white/10" aria-hidden="true" />
          <p className="text-sm font-semibold text-white/70">{section.eyebrow}</p>
          <p className="relative mt-4 font-display text-[1.375rem] font-medium leading-snug tracking-tight text-white md:text-[1.75rem]">
            {section.body}
          </p>
          <figcaption className="mt-6 text-white/75">{name}</figcaption>
        </figure>
      );
  }
}

interface MemberProfileSectionProps {
  member: TeamMember;
  profile: MemberProfile;
}

export default function MemberProfileSection({ member, profile }: MemberProfileSectionProps) {
  return (
    <RevealSection className="py-12 md:py-20" aria-label={`Profile of ${member.name}`}>
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <MemberAside member={member} profile={profile} />
        </div>

        <div className="space-y-16 lg:col-span-8 lg:pt-2">
          <Reveal>
            <p className="font-display text-[1.625rem] font-medium leading-snug tracking-tight text-green-900 md:text-[2rem]">
              {profile.intro}
            </p>
          </Reveal>
          {profile.sections.map((section, i) => (
            <Reveal key={`${section.kind}-${i}`}>
              <SectionBlock section={section} name={member.name} />
            </Reveal>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}

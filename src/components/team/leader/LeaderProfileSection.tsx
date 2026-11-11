import { HeartHandshake, Lightbulb, Quote, TrendingUp, Users, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/shared/Container";
import { Reveal, RevealSection } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import ProfileAside from "./ProfileAside";
import type { LeaderProfile, MandateIcon, PhotoSlot, Qualification } from "@/types";

const mandateIcons: Record<MandateIcon, LucideIcon> = {
  wallet: Wallet,
  users: Users,
  trending: TrendingUp,
  lightbulb: Lightbulb,
  community: HeartHandshake,
};

function Heading({ children }: { children: string }) {
  return <h3 className="text-[1.75rem] leading-tight md:text-[2rem]">{children}</h3>;
}

function QualificationList({ title, items }: { title: string; items: Qualification[] }) {
  return (
    <div className="rounded-[16px] border border-line p-6 md:p-7">
      <h4 className="text-xl">{title}</h4>
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

interface LeaderProfileSectionProps {
  profile: LeaderProfile;
  photo: PhotoSlot;
}

export default function LeaderProfileSection({ profile, photo }: LeaderProfileSectionProps) {
  return (
    <RevealSection className="py-16 md:py-24" aria-label={`Profile of ${profile.name}`}>
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <ProfileAside profile={profile} photo={photo} />
        </div>

        <div className="space-y-16 lg:col-span-8 lg:pt-2">
          <Reveal>
            <p className="font-display text-[1.625rem] font-medium leading-snug tracking-tight text-green-900 md:text-[2rem]">
              {profile.intro}
            </p>
            <p className="mt-6 max-w-[62ch] text-lg">{profile.mandateLead}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {profile.mandate.map(({ label, icon }) => {
                const Icon = mandateIcons[icon];
                return (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-[14px] border border-line px-4 py-3.5 font-semibold text-green-900"
                  >
                    <Icon size={20} strokeWidth={1.75} className="shrink-0" aria-hidden="true" />
                    {label}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal>
            <Heading>Leadership and experience</Heading>
            <div className="mt-5 max-w-[62ch] space-y-4 text-lg">
              {profile.about.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <ol className="mt-8 border-l-2 border-line">
              {profile.roles.map((role) => (
                <li key={role.title} className="relative pb-7 pl-7 last:pb-0">
                  <span
                    className={cn(
                      "absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-green-900",
                      role.current ? "bg-green-900" : "bg-white"
                    )}
                    aria-hidden="true"
                  />
                  <p className="text-sm font-semibold text-green-700">{role.current ? "Current" : "Previously"}</p>
                  <p className="mt-1 font-display text-xl font-semibold leading-snug tracking-tight text-green-900">
                    {role.title}
                  </p>
                  <p className="mt-0.5 text-muted">{role.organisation}</p>
                  {role.detail && <p className="mt-2 max-w-[56ch]">{role.detail}</p>}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <figure className="relative overflow-hidden rounded-[20px] bg-green-900 px-7 py-10 text-white md:px-12 md:py-14">
              <Quote
                size={88}
                strokeWidth={1}
                className="absolute -right-2 -top-2 text-white/10"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-white/70">His philosophy</p>
              <blockquote className="relative mt-4">
                <p className="font-display text-[1.5rem] font-medium leading-snug tracking-tight text-white md:text-[2rem]">
                  “{profile.philosophy}”
                </p>
              </blockquote>
              <figcaption className="mt-6 text-white/75">{profile.name}</figcaption>
            </figure>
          </Reveal>

          <Reveal>
            <Heading>How he leads</Heading>
            <div className="mt-5 max-w-[62ch] space-y-4 text-lg">
              {profile.leadership.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Heading>Education and qualifications</Heading>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <QualificationList title="Education" items={profile.education} />
              <QualificationList title="Professional certifications" items={profile.certifications} />
            </div>
          </Reveal>

          <Reveal>
            <Heading>Areas of expertise</Heading>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {profile.expertise.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-green-900/25 bg-green-100/60 px-4 py-2 text-[0.95rem] font-medium text-green-900"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <Heading>Professional interests</Heading>
            <div className="mt-5 max-w-[62ch] space-y-4 text-lg">
              {profile.interests.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <p className="mt-8 max-w-[62ch] border-t border-line pt-8 text-lg font-medium text-green-900">
              {profile.closing}
            </p>
          </Reveal>
        </div>
      </Container>
    </RevealSection>
  );
}

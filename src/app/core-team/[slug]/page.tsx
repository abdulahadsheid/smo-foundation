import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import MemberProfileSection from "@/components/team/profile/MemberProfileSection";
import { coreTeam } from "@/data/team";
import { getMemberProfile } from "@/data/profiles";

const members = coreTeam.filter((member) => member.slug && getMemberProfile(member.slug));

export function generateStaticParams() {
  return members.map((member) => ({ slug: member.slug as string }));
}

export async function generateMetadata(props: PageProps<"/core-team/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const member = members.find((m) => m.slug === slug);
  if (!member) return {};
  return { title: member.name, description: `${member.name}, ${member.role}.` };
}

export default async function MemberPage(props: PageProps<"/core-team/[slug]">) {
  const { slug } = await props.params;
  const index = members.findIndex((m) => m.slug === slug);
  const member = members[index];
  const profile = member ? getMemberProfile(slug) : undefined;
  if (!member || !profile) notFound();

  const prev = members[(index - 1 + members.length) % members.length];
  const next = members[(index + 1) % members.length];

  return (
    <>
      <Container className="pt-10 md:pt-14">
        <Link
          href="/core-team"
          className="inline-flex items-center gap-2 font-semibold text-green-900 underline decoration-green-900/30 underline-offset-4 hover:decoration-green-900"
        >
          <ArrowLeft size={18} strokeWidth={1.75} aria-hidden="true" />
          Back to the core team
        </Link>
      </Container>

      <MemberProfileSection member={member} profile={profile} />

      <nav aria-label="More of the management team" className="border-t border-line py-12 md:py-16">
        <Container className="grid grid-cols-2 gap-3 sm:gap-6">
          <Link
            href={`/core-team/${prev.slug}`}
            className="group rounded-[16px] border border-line p-4 transition-colors hover:border-green-900 sm:p-6"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-green-700">
              <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" />
              Previous
            </span>
            <span className="mt-2 block font-display text-[1.05rem] font-semibold leading-snug text-green-900 sm:text-xl">
              {prev.name}
            </span>
          </Link>
          <Link
            href={`/core-team/${next.slug}`}
            className="group rounded-[16px] border border-line p-4 text-right transition-colors hover:border-green-900 sm:p-6"
          >
            <span className="flex items-center justify-end gap-2 text-sm font-semibold text-green-700">
              Next
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="mt-2 block font-display text-[1.05rem] font-semibold leading-snug text-green-900 sm:text-xl">
              {next.name}
            </span>
          </Link>
        </Container>
      </nav>
    </>
  );
}

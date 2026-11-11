import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import Button from "@/components/shared/Button";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import { advisoryCouncil, coreTeam } from "@/data/team";
import AdvisorCard from "@/components/team/AdvisorCard";
import { executiveDirector } from "@/data/leadership";
import LeaderProfileSection from "@/components/team/leader/LeaderProfileSection";
import { RevealSection } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Core team",
  description:
    "The core management team running SMO Foundation's 12-State Empowerment Programme from the national secretariat in Abuja.",
};

export default function CoreTeamPage() {
  const [lead, ...team] = coreTeam;

  return (
    <>
      <PageHeader
        title="The team running the programme"
        intro="Our core management team runs the 12-State Programme day to day from the national secretariat in Maitama, Abuja: registering traders, working with our banking partner and keeping every grant accountable."
      />

      <LeaderProfileSection profile={executiveDirector} photo={lead.photo} />

      <RevealSection className="border-t border-line bg-paper py-16 md:py-24">
        <Container>
          <h2 className="text-[2.25rem] md:text-[2.75rem]">Management team</h2>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6">
            {team.map((member, i) => (
              <TeamMemberCard key={`${member.name}-${i}`} member={member} />
            ))}
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="border-t border-line py-16 md:py-24">
        <Container>
          <div>
            <h2 className="text-[2.25rem] md:text-[2.75rem]">SMO Foundation Advisory Council</h2>
            <p className="mt-4 max-w-[52ch] text-lg text-muted">
              Experienced leaders who guide the Foundation&apos;s strategy and partnerships.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6">
            {advisoryCouncil.map((member, i) => (
              <AdvisorCard key={`${member.name}-${i}`} member={member} />
            ))}
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-[2rem] md:text-[2.5rem]">Overseen by a Board of Trustees</h2>
            <p className="mt-5 max-w-[56ch] text-lg text-muted">
              The team reports to a Board of Trustees with one member from each of Nigeria&apos;s six
              geopolitical zones.
            </p>
            <Link
              href="/about#board"
              className="mt-6 inline-block font-semibold text-green-900 underline decoration-green-900/30 underline-offset-4 hover:decoration-green-900"
            >
              Meet the Board of Trustees
            </Link>
          </div>
          <div className="md:col-span-5 md:self-end">
            <div className="rounded-[14px] border-2 border-green-900 p-7">
              <h3 className="text-[1.375rem]">Work with us</h3>
              <p className="mt-2 text-muted">
                We need field officers, trainers and volunteers in every programme state.
              </p>
              <Button href="/support#volunteer" className="mt-5">
                Volunteer with us
              </Button>
            </div>
          </div>
        </Container>
      </RevealSection>
    </>
  );
}

import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import StatesByZone from "@/components/programme/StatesByZone";
import { phases, programmeStates } from "@/data/programme";
import { RevealSection } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Where we work",
  description:
    "The 12 states of SMO Foundation's programme, across all six geopolitical zones of Nigeria, and when each phase starts.",
};

export default function WhereWeWorkPage() {
  return (
    <>
      <PageHeader
        title="Twelve states, all six zones"
        intro="The programme runs in two phases of six states each, so every geopolitical zone is covered by early 2027. Our national secretariat is in Maitama, Abuja."
      />

      <RevealSection className="py-16 md:py-24">
        <Container>
          <StatesByZone />
        </Container>
      </RevealSection>

      <RevealSection className="border-t border-line bg-paper py-16 md:py-24">
        <Container>
          <h2 className="text-[2.25rem] md:text-[2.75rem]">When each phase starts</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {phases.map((phase) => (
              <div key={phase.id} className="border-t-2 border-green-900 pt-6">
                <p className="text-muted">
                  {phase.period} · {phase.status === "in-progress" ? "Under way" : phase.id === 1 ? "Starting first" : "Next"}
                </p>
                <h3 className="mt-2 text-[1.75rem]">{phase.label}</h3>
                <p className="mt-4 text-lg">
                  {programmeStates
                    .filter((s) => s.phase === phase.id)
                    .map((s) => s.name)
                    .join(", ")}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-[60ch] text-muted">
            Field teams work in weekly outreach cycles, one market cluster at a time. The list of
            clusters in each state will be added here as they are confirmed.
          </p>
        </Container>
      </RevealSection>
    </>
  );
}

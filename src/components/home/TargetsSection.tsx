import Container from "@/components/shared/Container";
import FigureStat from "@/components/shared/FigureStat";
import { figures } from "@/data/programme";
import { RevealSection } from "@/components/motion/Reveal";

const homeTargets = ["traders-target", "clusters-target", "states-target", "women-target"];

export default function TargetsSection() {
  const targets = figures.filter((f) => homeTargets.includes(f.id));

  return (
    <RevealSection className="bg-green-900 py-20 text-cream md:py-24">
      <Container>
        <h2 className="max-w-[22ch] text-[2.25rem] text-cream md:text-[3rem]">
          What the 12-State Programme sets out to do
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {targets.map((figure) => (
            <FigureStat key={figure.id} figure={figure} tone="dark" />
          ))}
        </div>
        <p className="mt-14 max-w-[60ch] text-cream/70">
          These are the programme&apos;s goals. Grants paid and accounts opened will be published
          here once the programme begins.
        </p>
      </Container>
    </RevealSection>
  );
}

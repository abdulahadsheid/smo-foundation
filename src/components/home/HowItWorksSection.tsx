import Container from "@/components/shared/Container";
import HowItWorks from "@/components/programme/HowItWorks";
import { RevealSection } from "@/components/motion/Reveal";

export default function HowItWorksSection() {
  return (
    <RevealSection className="border-t border-line bg-paper py-20 md:py-28">
      <Container>
        <h2 className="max-w-[20ch] text-[2.25rem] md:text-[3rem]">From a market stall to a grant, in three steps</h2>
        <div className="mt-12 md:mt-16">
          <HowItWorks />
        </div>
      </Container>
    </RevealSection>
  );
}

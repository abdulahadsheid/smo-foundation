import Container from "@/components/shared/Container";
import SupportOptions from "@/components/programme/SupportOptions";
import { RevealSection } from "@/components/motion/Reveal";

export default function SupportSection() {
  return (
    <RevealSection className="py-20 md:py-28">
      <Container>
        <h2 className="max-w-[18ch] text-[2.25rem] md:text-[3rem]">Help a trader grow her business</h2>
        <div className="mt-12">
          <SupportOptions />
        </div>
      </Container>
    </RevealSection>
  );
}

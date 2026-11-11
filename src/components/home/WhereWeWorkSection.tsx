import Link from "next/link";
import Container from "@/components/shared/Container";
import StatesByZone from "@/components/programme/StatesByZone";
import { RevealSection } from "@/components/motion/Reveal";

export default function WhereWeWorkSection() {
  return (
    <RevealSection className="py-20 md:py-28">
      <Container>
        <div className="grid gap-6 md:grid-cols-12">
          <h2 className="text-[2.25rem] md:col-span-7 md:text-[3rem]">Twelve states, every zone of Nigeria</h2>
          <p className="text-lg text-muted md:col-span-5 md:pt-3">
            Six states start first. Six more follow in early 2027, so every
            geopolitical zone has at least two.
          </p>
        </div>
        <div className="mt-12">
          <StatesByZone />
        </div>
        <Link
          href="/where-we-work"
          className="mt-10 inline-block font-semibold text-green-900 underline decoration-green-900/30 underline-offset-4 hover:decoration-green-900"
        >
          Where we work, state by state
        </Link>
      </Container>
    </RevealSection>
  );
}

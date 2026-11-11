import Container from "@/components/shared/Container";
import Receipt from "@/components/programme/Receipt";
import { siteConfig } from "@/data/site";
import { RevealSection } from "@/components/motion/Reveal";

export default function MoneySection() {
  return (
    <RevealSection className="bg-green-900 py-20 text-white md:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="max-w-[16ch] text-[2.25rem] text-white md:text-[3rem]">Every naira of the grant reaches the trader</h2>
          <p className="mt-6 max-w-[52ch] text-lg text-white/80">
            The ₦100,000 goes straight into an account in the trader&apos;s own name, and she
            decides how to spend it. The receipt shows what one grant costs to deliver, line by line.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-white/65">Registered as</dt>
              <dd className="mt-1 font-semibold">{siteConfig.fullName}</dd>
            </div>
            <div>
              <dt className="text-sm text-white/65">Banking partner</dt>
              <dd className="mt-1 font-semibold">{siteConfig.partnerBank}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm text-white/65">Our promise to traders</dt>
              <dd className="mt-1 font-semibold">We never charge a fee to apply for a grant.</dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-6">
          <Receipt />
        </div>
      </Container>
    </RevealSection>
  );
}

import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import Photo from "@/components/shared/Photo";
import PartnerLogo from "@/components/partners/PartnerLogo";
import Button from "@/components/shared/Button";
import { fogpay, fogpayFeatures, partnershipRoles } from "@/data/partners";
import { RevealSection } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "FogPay is SMO Foundation's first partner, giving market women and petty traders a bank account on their phone and receiving their ₦100,000 grants.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        title="FogPay, our first partner"
        intro="Every grant needs somewhere safe to land. FogPay opens an account in each trader's own name, receives her ₦100,000 grant and gives her everyday banking on the phone she already owns."
      />

      <RevealSection className="py-16 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Photo photo={fogpay.photo} ratio="4/3" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="lg:col-span-6">
            <PartnerLogo name={fogpay.name} logo={fogpay.logo} />
            <h2 className="mt-8 text-[2rem] md:text-[2.5rem]">Who FogPay are</h2>
            <p className="mt-5 max-w-[54ch] text-lg">{fogpay.description}</p>
            <a
              href={fogpay.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-semibold text-green-900 underline decoration-green-900/30 underline-offset-4 hover:decoration-green-900"
            >
              Visit fogpay.co
            </a>
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="border-t border-line bg-paper py-16 md:py-24">
        <Container>
          <h2 className="max-w-[22ch] text-[2.25rem] md:text-[2.75rem]">
            Why FogPay works for traders who have never banked
          </h2>
          <dl className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {fogpayFeatures.map((feature) => (
              <div key={feature.title} className="border-t border-line pt-5">
                <dt className="font-display text-[1.375rem] font-semibold tracking-tight text-green-900">
                  {feature.title}
                </dt>
                <dd className="mt-3 text-muted">{feature.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </RevealSection>

      <RevealSection className="py-16 md:py-24">
        <Container>
          <h2 className="text-[2.25rem] md:text-[2.75rem]">Who does what</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="rounded-[14px] border border-line p-8">
              <h3 className="text-[1.5rem]">SMO Foundation</h3>
              <ul className="mt-5 space-y-3">
                {partnershipRoles.smo.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-900" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[14px] bg-green-900 p-8 text-white">
              <h3 className="text-[1.5rem] text-white">FogPay</h3>
              <ul className="mt-5 space-y-3">
                {partnershipRoles.fogpay.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="bg-green-950 py-16 text-white md:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-[24ch] text-[2rem] text-white md:text-[2.5rem]">
              Room for more partners
            </h2>
            <p className="mt-3 max-w-[56ch] text-white/75">
              Banks, fintechs, development agencies and state governments can co-fund clusters or
              take the programme to new states.
            </p>
          </div>
          <Button href="/support#partner" variant="onDark">
            Start a partnership conversation
          </Button>
        </Container>
      </RevealSection>
    </>
  );
}

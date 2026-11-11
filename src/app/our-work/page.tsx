import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import Photo from "@/components/shared/Photo";
import Button from "@/components/shared/Button";
import HowItWorks from "@/components/programme/HowItWorks";
import Receipt from "@/components/programme/Receipt";
import { contextStats } from "@/data/programme";
import { photos } from "@/data/photos";
import { siteConfig } from "@/data/site";
import { RevealSection } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "How SMO Foundation's 12-State Programme finds market women and petty traders, opens bank accounts in their names and pays ₦100,000 grants.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHeader
        title="Cash grants for the traders banks don't see"
        intro="Our one programme, the 12-State Empowerment Programme, gives market women and petty traders a ₦100,000 grant, a bank account in their own name and practical money skills."
      />

      <RevealSection className="py-16 md:py-20">
        <Container>
          <Photo photo={photos.ourWorkHeader} ratio="21/9" sizes="100vw" />
        </Container>
      </RevealSection>

      {/* The problem */}
      <RevealSection className="pb-20 md:pb-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-[2.25rem] md:text-[2.75rem]">The problem: a huge economy that runs on cash</h2>
          </div>
          <div className="space-y-5 text-lg lg:col-span-7">
            <p>
              Tens of millions of Nigerians earn their living at a market stall. Most trade only in
              cash, with no bank account, no savings record and no way to borrow. When stock runs
              low or prices rise, there is nothing to fall back on.
            </p>
            <p>
              Banks and fintechs find these traders expensive to reach one by one. SMO works through
              organised market clusters instead, so whole groups of traders can be registered,
              banked and supported together.
            </p>
          </div>
        </Container>

        <Container>
          <dl className="mt-16 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {contextStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <p className="tabular font-display text-[2.75rem] font-semibold leading-none tracking-tight text-green-900">
                    {stat.value}
                  </p>
                  <p className="mt-3 max-w-[24ch]">{stat.label}</p>
                  <p className="mt-1 text-sm text-muted">Source: {stat.source ?? "[to be added]"}</p>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </RevealSection>

      {/* How it works */}
      <RevealSection className="border-t border-line bg-paper py-20 md:py-28">
        <Container>
          <h2 className="max-w-[20ch] text-[2.25rem] md:text-[3rem]">How a grant reaches a trader</h2>
          <div className="mt-12 md:mt-16">
            <HowItWorks />
          </div>
        </Container>
      </RevealSection>

      {/* Who qualifies + money */}
      <RevealSection className="py-20 md:py-28">
        <Container className="grid items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-[2.25rem] md:text-[2.75rem]">Who the programme is for</h2>
            <ul className="mt-8 space-y-4 text-lg">
              <li className="border-t border-line pt-4">Market women and female heads of household</li>
              <li className="border-t border-line pt-4">Petty traders working from a stall, kiosk or tray</li>
              <li className="border-t border-line pt-4">Traders living with disabilities</li>
              <li className="border-t border-line pt-4">Other vulnerable sellers identified with market leaders</li>
            </ul>
            <p className="mt-8 text-muted">
              Every trader is registered in person by our field team. Each is verified with her BVN
              and NIN before her account is opened with {siteConfig.partnerBank}.
            </p>
            <p className="mt-4 font-semibold text-green-900">
              We never charge a fee to apply. Anyone asking a trader for money in SMO&apos;s name is
              not from us. Report it on {siteConfig.contact.primaryPhone}.
            </p>
          </div>
          <div className="lg:col-span-6 lg:pt-4">
            <Receipt />
          </div>
        </Container>
      </RevealSection>

      <RevealSection className="bg-green-900 py-16 text-cream md:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-[22ch] text-[2rem] text-cream md:text-[2.5rem]">
            ₦100,000 can restart a trader&apos;s business.
          </h2>
          <Button href="/support" variant="onDark">
            Support a trader
          </Button>
        </Container>
      </RevealSection>
    </>
  );
}

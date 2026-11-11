import Link from "next/link";
import Container from "@/components/shared/Container";
import Photo from "@/components/shared/Photo";
import PartnerLogo from "@/components/partners/PartnerLogo";
import { fogpay, fogpayFeatures } from "@/data/partners";
import { RevealSection } from "@/components/motion/Reveal";

export default function PartnerSection() {
  const highlights = fogpayFeatures.slice(0, 3);

  return (
    <RevealSection className="py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Photo photo={fogpay.photo} ratio="4/3" sizes="(max-width: 1024px) 100vw, 40vw" />
        </div>
        <div className="lg:col-span-7">
          <PartnerLogo name={fogpay.name} logo={fogpay.logo} />
          <h2 className="mt-8 max-w-[18ch] text-[2.25rem] md:text-[3rem]">
            Every grant lands in the trader&apos;s own FogPay account
          </h2>
          <p className="mt-5 max-w-[54ch] text-lg text-muted">
            FogPay, a Nigerian digital bank and payment platform, is our first partner. It gives each
            trader an account on the phone she already owns, so her grant arrives safely and her
            money keeps working after it.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {highlights.map((feature) => (
              <li key={feature.title} className="border-t-2 border-green-900 pt-4">
                <p className="font-display text-lg font-semibold leading-snug tracking-tight text-green-900">
                  {feature.title}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="/partners"
            className="mt-10 inline-block font-semibold text-green-900 underline decoration-green-900/30 underline-offset-4 hover:decoration-green-900"
          >
            How the FogPay partnership works
          </Link>
        </div>
      </Container>
    </RevealSection>
  );
}

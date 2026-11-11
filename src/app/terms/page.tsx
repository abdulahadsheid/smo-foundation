import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import { RevealSection } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions governing the use of the Sustainable Market Outreach Foundation website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Use" intro="Last updated: November 2024" />

      <RevealSection className="py-16 md:py-24">
        <Container>
          <div className="max-w-[68ch] space-y-10 leading-relaxed text-ink">
            <div>
              <h2 className="text-[1.5rem] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you agree to comply with and be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please refrain from using the platform.
              </p>
            </div>

            <div>
              <h2 className="text-[1.5rem] mb-3">
                2. Intellectual Property Rights
              </h2>
              <p>
                All content, trademarks, logos, research materials, reports, photographs, and website layouts are the exclusive property of the Sustainable Market Outreach Foundation or its content licensors, protected under applicable intellectual property laws. Content may be referenced for educational or non-commercial journalistic purposes provided proper institutional attribution is maintained.
              </p>
            </div>

            <div>
              <h2 className="text-[1.5rem] mb-3">
                3. Informational Purpose & Disclaimer
              </h2>
              <p>
                The information provided on this platform is for general institutional transparency, educational dissemination, and partnership orientation. While we strive to ensure accuracy, the foundation assumes no liability for errors or omissions in third-party linked resources.
              </p>
            </div>

            <div>
              <h2 className="text-[1.5rem] mb-3">
                4. Anti-Fraud & Solicitation Policy
              </h2>
              <p>
                SMO Foundation does not solicit monetary fees from individuals seeking participation in community training programs, volunteer slots, or employment recruitments. Any unofficial solicitation claiming affiliation with the foundation should be reported immediately.
              </p>
            </div>

            <div>
              <h2 className="text-[1.5rem] mb-3">
                5. Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
              </p>
            </div>
          </div>
        </Container>
      </RevealSection>
    </>
  );
}


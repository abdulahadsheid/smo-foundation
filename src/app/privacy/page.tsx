import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import { RevealSection } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Official Privacy Policy of the Sustainable Market Outreach Foundation.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" intro="Last updated: November 2024" />

      <RevealSection className="py-16 md:py-24">
        <Container>
          <div className="max-w-[68ch] space-y-10 leading-relaxed text-ink">
            <div>
              <h2 className="text-[1.5rem] mb-3">
                1. Institutional Commitment to Privacy
              </h2>
              <p>
                The Sustainable Market Outreach Foundation (&ldquo;SMO Foundation&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to handling personal data collected through our digital platforms, stakeholder surveys, volunteer portals, and donor channels responsibly and in compliance with the Nigeria Data Protection Act (NDPA) and applicable international privacy benchmarks.
              </p>
            </div>

            <div>
              <h2 className="text-[1.5rem] mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-2">We collect personal information solely to facilitate legitimate foundation activities, including:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Contact details (name, email address, telephone number, institution) submitted via our contact forms.</li>
                <li>Newsletter subscriber email addresses.</li>
                <li>Volunteer application background details and professional references.</li>
                <li>Aggregated, anonymised website analytics data to understand user traffic patterns.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[1.5rem] mb-3">
                3. Purpose of Processing
              </h2>
              <p>
                We do not sell, rent, or trade your personal information. Data collected is used strictly to respond to specific enquiries, communicate project developments, process institutional partnership proposals, and fulfill legal compliance obligations.
              </p>
            </div>

            <div>
              <h2 className="text-[1.5rem] mb-3">
                4. Data Security and Retention
              </h2>
              <p>
                We maintain appropriate organizational and technical safeguards to protect collected data against unauthorized access, disclosure, or loss. Information is retained only for as long as necessary to fulfill the operational purpose for which it was collected.
              </p>
            </div>

            <div>
              <h2 className="text-[1.5rem] mb-3">
                5. Contacting Our Data Privacy Desk
              </h2>
              <p>
                For questions regarding this policy or to request the deletion or correction of your personal data, please contact us at{" "}
                <a href="mailto:privacy@smofoundation.org" className="text-muted font-semibold underline">
                  privacy@smofoundation.org
                </a>.
              </p>
            </div>
          </div>
        </Container>
      </RevealSection>
    </>
  );
}


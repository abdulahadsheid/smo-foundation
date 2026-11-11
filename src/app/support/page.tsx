import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import Photo from "@/components/shared/Photo";
import SupportOptions from "@/components/programme/SupportOptions";
import ContactForm from "@/components/contact/ContactForm";
import { photos } from "@/data/photos";
import { siteConfig } from "@/data/site";
import { RevealSection } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Support a trader",
  description:
    "Fund a ₦100,000 grant for a Nigerian market woman, partner with SMO Foundation on a market cluster or state, or volunteer in the field.",
};

export default function SupportPage() {
  return (
    <>
      <PageHeader
        title="Support a trader"
        intro="Fund a grant, bring your organisation in as a partner, or give your time in the field. Tell us how you'd like to help and our team will reply within two working days."
      />

      <RevealSection className="py-16 md:py-20">
        <Container>
          <Photo photo={photos.supportHeader} ratio="21/9" sizes="100vw" />
        </Container>
      </RevealSection>

      <RevealSection className="pb-16 md:pb-24">
        <Container>
          <SupportOptions withAnchors />
        </Container>
      </RevealSection>

      <RevealSection id="enquiry" className="scroll-mt-24 border-t border-line bg-paper py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-[2.25rem]">Get in touch</h2>
            <p className="mt-4 text-lg text-muted">
              Online giving isn&apos;t open yet. To fund a grant today, send us your details and we
              will share our bank details and a receipt.
            </p>
            <p className="mt-6">
              Or call{" "}
              <a href={`tel:${siteConfig.contact.primaryPhone.replace(/\s/g, "")}`} className="font-semibold text-green-900 underline underline-offset-4">
                {siteConfig.contact.primaryPhone}
              </a>
            </p>
          </div>
          <div className="lg:col-span-8">
            <ContactForm defaultSubject="fund" />
          </div>
        </Container>
      </RevealSection>
    </>
  );
}

import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";
import { RevealSection } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SMO Foundation's national secretariat in Maitama, Abuja.",
};

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <>
      <PageHeader
        title="Contact us"
        intro="Our national secretariat answers questions from traders, partners, volunteers and the press."
      />
      <RevealSection className="py-16 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <dl className="space-y-8 lg:col-span-4">
            <div>
              <dt className="text-sm text-muted">Office</dt>
              <dd className="mt-1 text-lg">{contact.address}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Phone</dt>
              <dd className="mt-1 text-lg">
                <a href={`tel:${contact.primaryPhone.replace(/\s/g, "")}`} className="hover:text-green-700">
                  {contact.primaryPhone}
                </a>
                <br />
                <a href={`tel:${contact.secondaryPhone.replace(/\s/g, "")}`} className="hover:text-green-700">
                  {contact.secondaryPhone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Email</dt>
              <dd className="mt-1 text-lg">
                <a href={`mailto:${contact.email}`} className="hover:text-green-700">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Hours</dt>
              <dd className="mt-1 text-lg">{contact.hours}</dd>
            </div>
            <div className="rounded-[14px] border-2 border-green-900 p-5">
              <dt className="font-semibold text-green-900">Beware of fake agents</dt>
              <dd className="mt-2 text-[0.95rem]">
                SMO Foundation never asks traders for money to apply for a grant. If anyone does,
                call us on {contact.primaryPhone}.
              </dd>
            </div>
          </dl>
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </Container>
      </RevealSection>
    </>
  );
}

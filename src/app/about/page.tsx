import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import Photo from "@/components/shared/Photo";
import { photos } from "@/data/photos";
import { siteConfig } from "@/data/site";
import { RevealSection } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who runs SMO Foundation, a youth-led non-profit in Abuja: our mission, our board and how we are registered.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="A youth-led foundation, built for the market"
        intro={`${siteConfig.fullName} (${siteConfig.rcNumber}) is a non-profit headquartered in Maitama, Abuja. We connect grassroots traders to the formal financial system, and we are institutionally guided by ${siteConfig.institutionalGuide}.`}
      />

      <RevealSection className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Photo photo={photos.aboutTeam} ratio="3/2" sizes="(max-width: 1024px) 100vw, 60vw" />
          </div>
          <div className="space-y-10 lg:col-span-5">
            <div>
              <h2 className="text-[1.75rem]">Mission</h2>
              <p className="mt-3 text-lg">{siteConfig.mission}</p>
            </div>
            <div>
              <h2 className="text-[1.75rem]">Vision</h2>
              <p className="mt-3 text-lg">{siteConfig.vision}</p>
            </div>
            <div>
              <h2 className="text-[1.75rem]">What we work towards</h2>
              <ul className="mt-4 space-y-4">
                {siteConfig.sdgs.map((sdg) => (
                  <li key={sdg.number} className="border-t border-line pt-4">
                    <p className="font-semibold text-green-900">
                      UN Sustainable Development Goal {sdg.number}: {sdg.title}
                    </p>
                    <p className="mt-1 text-muted">{sdg.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </RevealSection>

      <RevealSection id="board" className="scroll-mt-24 border-t border-line bg-paper py-16 md:py-24">
        <Container>
          <h2 className="text-[2.25rem] md:text-[2.75rem]">Board of trustees</h2>
          <p className="mt-4 max-w-[60ch] text-lg text-muted">
            One member from each geopolitical zone, with the Executive Director as Board Secretary.
          </p>
          <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.boardMembers.map((member) => (
              <li key={member.name}>
                <Photo photo={member.photo} ratio="4/5" sizes="(max-width: 640px) 100vw, 25vw" />
                <h3 className="mt-5 text-[1.25rem] leading-snug">{member.name}</h3>
                <p className="mt-1 font-medium text-green-700">{member.role}</p>
                <p className="mt-1 text-sm text-muted">{member.zone}</p>
                <p className="mt-3 text-[0.95rem] text-ink/80">{member.bio}</p>
              </li>
            ))}
          </ul>
        </Container>
      </RevealSection>

      <RevealSection className="py-16 md:py-24">
        <Container>
          <h2 className="text-[2.25rem] md:text-[2.75rem]">Registration</h2>
          <dl className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-muted">Registered name</dt>
              <dd className="mt-1 text-lg font-semibold">{siteConfig.fullName}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">CAC registration</dt>
              <dd className="mt-1 text-lg font-semibold">{siteConfig.rcNumber}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Head office</dt>
              <dd className="mt-1 text-lg font-semibold">{siteConfig.contact.address}</dd>
            </div>
          </dl>
        </Container>
      </RevealSection>
    </>
  );
}

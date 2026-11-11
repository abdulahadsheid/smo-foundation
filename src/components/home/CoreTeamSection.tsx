import Link from "next/link";
import Container from "@/components/shared/Container";
import Photo from "@/components/shared/Photo";
import { coreTeam } from "@/data/team";
import { homeTeamLeadPhoto } from "@/data/photos";
import { RevealSection } from "@/components/motion/Reveal";

export default function CoreTeamSection() {
  const lead = coreTeam[0];
  const leadPhoto = homeTeamLeadPhoto.src ? homeTeamLeadPhoto : lead.photo;

  return (
    <RevealSection className="border-t border-line bg-paper py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <h2 className="max-w-[20ch] text-[2.25rem] md:text-[3rem]">
            A national team, working market by market
          </h2>
          <p className="mt-5 max-w-[54ch] text-lg text-muted">
            Visionary leader, political figure, media entrepreneur and community organizer. 
            As MD/CEO of Inclusive Market Limited, currently Senior Special Assistant on 
            Digital Media to the Governor of Kogi State, and former Financial Advisor to Kogi State SDGs, 
            he now leads SMO Foundation&apos;s 12-State Program driving financial inclusion, women empowerment 
            and economic inclusion for petty traders, youth and women across Nigeria.
          </p>
          <figure className="mt-10 border-l-2 border-green-900 pl-6">
            <p className="font-display text-xl font-semibold tracking-tight text-green-900">{lead.name}</p>
            <figcaption className="mt-1 text-muted">{lead.role}</figcaption>
          </figure>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/core-team"
              className="font-semibold text-green-900 underline decoration-green-900/30 underline-offset-4 hover:decoration-green-900"
            >
              Meet the core team
            </Link>
            <Link
              href="/about#board"
              className="font-semibold text-green-900 underline decoration-green-900/30 underline-offset-4 hover:decoration-green-900"
            >
              Board of Trustees
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-5">
          <Photo photo={leadPhoto} ratio="4/5" sizes="(max-width: 1024px) 100vw, 40vw" />
        </div>
      </Container>
    </RevealSection>
  );
}

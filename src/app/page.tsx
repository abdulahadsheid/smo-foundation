import type { Metadata } from "next";
import HeroCarousel from "@/components/home/HeroCarousel";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PartnerSection from "@/components/home/PartnerSection";
import TargetsSection from "@/components/home/TargetsSection";
import WhereWeWorkSection from "@/components/home/WhereWeWorkSection";
import CoreTeamSection from "@/components/home/CoreTeamSection";
import MoneySection from "@/components/home/MoneySection";
import SupportSection from "@/components/home/SupportSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: "SMO Foundation: grants and bank accounts for Nigeria's market women" },
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <HowItWorksSection />
      <PartnerSection />
      <TargetsSection />
      <WhereWeWorkSection />
      <CoreTeamSection />
      <MoneySection />
      <SupportSection />
    </>
  );
}

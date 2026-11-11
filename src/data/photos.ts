import type { PhotoSlot } from "@/types";

export const heroSlides: PhotoSlot[] = [
  {
    src: "/images/market-woman.jpg",
    alt: "A market woman at her stall, looking at the camera, goods around her",
    caption: "[Name], [trade], [market], [state]",
  },
  {
    src: "/images/field-agent.jpg",
    alt: "Traders opening bank accounts at an SMO onboarding day",
    caption: "Onboarding day, [market], [state]",
  },
  {
    src: "/images/wideview.jpg",
    alt: "img-wideview",
    caption: "[Market], [state]",
  },
];

export const homeTeamLeadPhoto: PhotoSlot = {
  src: "/images/team/ED.jpg",
  alt: "Hon. Shehu Ahmed Yahaya with traders in a market",
};

export const photos = {
  ourWorkHeader: {
    src: "/images/wideview.jpg",
    alt: "img-wideview",
  },
  aboutTeam: {
    alt: "The SMO field team together at an onboarding day",
  },
  supportHeader: {
    alt: "Traders and field officers at a cluster meeting",
  },
} satisfies Record<string, PhotoSlot>;

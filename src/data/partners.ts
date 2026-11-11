import type { PartnerFeature, PhotoSlot } from "@/types";

export const fogpay = {
  name: "FogPay",
  website: "https://fogpay.co",
  description:
    "FogPay is a Nigerian digital bank and payment platform built by Fog Global Technologies in Lagos. It serves individuals, merchants and small businesses on the web, on mobile and on WhatsApp.",
  logo: { alt: "FogPay logo" } satisfies PhotoSlot,
  photo: { src: "/images/confirming.png", alt: "img-fog" } satisfies PhotoSlot,
};

/** Why FogPay suits petty traders, using features FogPay offers today */
export const fogpayFeatures: PartnerFeature[] = [
  {
    title: "An account in about ten seconds",
    body: "Nigerian customers get a bank account number linked to their phone number, so a trader can be banked on the spot at an onboarding day.",
  },
  {
    title: "Banking on WhatsApp",
    body: "With FogPay-Easy, traders can check their balance, send transfers and pull statements from WhatsApp on any phone, with no new app to learn.",
  },
  {
    title: "Instant transfers to any Nigerian bank",
    body: "Money moves instantly between FogPay accounts and reaches every Nigerian bank, with fees shown before the trader confirms.",
  },
  {
    title: "Tools for small businesses",
    body: "Bill payments, cards and merchant payment tools are there as a stall grows into a bigger business.",
  },
  {
    title: "Security built in",
    body: "One-time passwords, device binding and an instant account freeze from the app or WhatsApp if a phone is lost.",
  },
];

/** What each partner does in the programme. Confirm FogPay's side with FogPay before launch. */
export const partnershipRoles = {
  smo: [
    "Finds and registers traders in market clusters across 12 states",
    "Verifies each trader and confirms who qualifies",
    "Funds the ₦100,000 grant for every trader",
    "Runs practical money skills sessions",
  ],
  fogpay: [
    "Opens an account in each trader's own name",
    "Receives each grant straight into that account",
    "Gives traders everyday banking on their phones",
  ],
};

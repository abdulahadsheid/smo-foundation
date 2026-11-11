/**
 * SMO Foundation — The 12-State Empowerment Programme
 * Everything on the site describes this one programme.
 */

import type {
  ContextStat,
  Figure,
  Phase,
  ProgrammeState,
  ReceiptLine,
  Step,
  SupportOption,
} from "@/types";

export const phases: Phase[] = [
  { id: 1, label: "Phase 1", period: "Q4 2026", status: "upcoming" },
  { id: 2, label: "Phase 2", period: "Q1 2027", status: "upcoming" },
];

export const programmeStates: ProgrammeState[] = [
  { name: "Oyo", zone: "South West", phase: 1 },
  { name: "Kano", zone: "North West", phase: 1 },
  { name: "Jigawa", zone: "North West", phase: 1 },
  { name: "Kogi", zone: "North Central", phase: 1 },
  { name: "Nasarawa", zone: "North Central", phase: 1 },
  { name: "Imo", zone: "South East", phase: 1 },
  { name: "Anambra", zone: "South East", phase: 2 },
  { name: "Borno", zone: "North East", phase: 2 },
  { name: "Yobe", zone: "North East", phase: 2 },
  { name: "Akwa Ibom", zone: "South South", phase: 2 },
  { name: "Bayelsa", zone: "South South", phase: 2 },
  { name: "Lagos", zone: "South West", phase: 2 },
];

/** How a grant reaches a trader. A real sequence, so it is numbered on the page. */
export const steps: Step[] = [
  {
    title: "We meet traders where they sell",
    body: "Field teams visit market clusters, register traders on KoboToolbox with their location, business type and ID, and confirm who qualifies. Market women, traders with disabilities and other vulnerable sellers come first.",
    photo: { src: "/images/fieldofficerreg.jpg", alt: "Field officer registering a trader on a phone at her market stall" },
  },
  {
    title: "Each trader opens her own bank account",
    body: "With our partner bank, every trader opens an account in her own name, linked to her BVN and NIN, and learns to use it in a short practical session.",
    photo: { src: "/images/onboarding.png", alt: "Trader opening a bank account with a bank officer at an onboarding day" },
  },
  {
    title: "₦100,000 goes straight into that account",
    body: "The grant is paid directly to the trader. She decides what her business needs: more stock, a freezer, a stall repair, a new line of goods.",
    photo: { src: "/images/restocking.jpg", alt: "Trader restocking her stall after receiving the grant" },
  },
];

/**
 * Programme figures. `status` says whether a number is a result or a goal.
 * Actuals stay empty until the foundation publishes them.
 */
export const figures: Figure[] = [
  { id: "traders-target", value: "5,400", label: "traders to receive a grant", status: "target", asOf: "Q1 2027" },
  { id: "clusters-target", value: "111", label: "market clusters", status: "target", asOf: "Q1 2027" },
  { id: "states-target", value: "12", label: "states across all six zones", status: "target", asOf: "Q1 2027" },
  { id: "women-target", value: "1 million", label: "market women reached", status: "target", asOf: "2030" },
  { id: "grants-paid", value: "", label: "grants paid", status: "actual", asOf: "", note: "Published once Phase 1 payments are confirmed" },
  { id: "accounts-opened", value: "", label: "bank accounts opened", status: "actual", asOf: "", note: "Published once Phase 1 onboarding is confirmed" },
  { id: "clusters-reached", value: "", label: "clusters reached", status: "actual", asOf: "", note: "Published once Phase 1 field visits are confirmed" },
];

/** The problem, in numbers. Each needs a source before launch. */
export const contextStats: ContextStat[] = [
  { value: "40M+", label: "petty traders and market women in Nigeria" },
  { value: "45%+", label: "of informal GDP comes from their trade" },
  { value: "70%+", label: "have no bank account or credit history" },
  { value: "₦5,000", label: "average daily takings, all in cash" },
];

/** One grant, itemised. Lines marked [to confirm] need the foundation's figures. */
export const receiptLines: ReceiptLine[] = [
  { label: "Paid to the trader's own account", amount: "₦100,000" },
  { label: "Bank account opening", amount: "[to confirm]" },
  { label: "Money skills session", amount: "[to confirm]" },
  { label: "Registration and field follow-up", amount: "[to confirm]" },
];

export const supportOptions: SupportOption[] = [
  {
    id: "fund",
    title: "Fund a grant",
    body: "₦100,000 recapitalises one trader's business. Individuals, families and companies can fund one grant or a whole market cluster.",
    action: { label: "Ask about funding a grant", href: "/support#fund" },
  },
  {
    id: "partner",
    title: "Partner with us",
    body: "Banks, fintechs, development agencies and state governments can co-fund clusters, extend the programme to new states or bring products to newly banked traders.",
    action: { label: "Start a partnership conversation", href: "/support#partner" },
  },
  {
    id: "volunteer",
    title: "Volunteer in the field",
    body: "We need people who can run money skills sessions, help with onboarding days and translate in local languages.",
    action: { label: "Volunteer with us", href: "/support#volunteer" },
  },
];

/**
 * SMO Foundation — Shared domain types
 */

export interface NavLink {
  label: string;
  href: string;
}

/**
 * A photo slot. Leave `src` empty to show a labelled placeholder;
 * set it (e.g. "/images/hero.jpg" from /public) to show the real photo.
 */
export interface PhotoSlot {
  src?: string;
  /** Alt text once the photo is in; also describes what to shoot while it is a placeholder */
  alt: string;
  /** Optional caption shown under the photo: name, trade, market, state */
  caption?: string;
}

export type Zone =
  | "North Central"
  | "North East"
  | "North West"
  | "South East"
  | "South South"
  | "South West";

export interface ProgrammeState {
  name: string;
  zone: Zone;
  phase: 1 | 2;
}

export interface Phase {
  id: 1 | 2;
  label: string;
  period: string;
  status: "in-progress" | "upcoming" | "complete";
}

export type FigureStatus = "actual" | "target";

export interface Figure {
  id: string;
  /** Display value, e.g. "5,400". Leave empty for an actual that is not yet published. */
  value: string;
  label: string;
  status: FigureStatus;
  /** When the figure was true, or the deadline for a target, e.g. "Q1 2027" */
  asOf: string;
  note?: string;
}

export interface ContextStat {
  value: string;
  label: string;
  /** Where the number comes from. Leave empty until a source is confirmed. */
  source?: string;
}

export interface Step {
  title: string;
  body: string;
  photo: PhotoSlot;
}

export interface ReceiptLine {
  label: string;
  amount: string;
}

export interface SupportOption {
  id: string;
  title: string;
  body: string;
  action: { label: string; href: string };
}

export interface BoardMember {
  name: string;
  role: string;
  zone: string;
  bio: string;
  photo: PhotoSlot;
}

export interface Sdg {
  number: number;
  title: string;
  desc: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  rcNumber: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    primaryPhone: string;
    secondaryPhone: string;
    address: string;
    hours: string;
  };
  social: {
    handle: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
  institutionalGuide: string;
  vision: string;
  mission: string;
  partnerBank: string;
  grantAmount: string;
  sdgs: Sdg[];
  boardMembers: BoardMember[];
}

export interface TeamMember {
  slug?: string;
  name: string;
  role: string;
  /** What this person is responsible for, in one or two sentences */
  responsibility: string;
  photo: PhotoSlot;
  /** True while the entry is a template waiting for real details */
  placeholder: boolean;
}

export interface PartnerFeature {
  title: string;
  body: string;
}

export type MandateIcon = "wallet" | "users" | "trending" | "lightbulb" | "community";

export interface Qualification {
  qualification: string;
  institution: string;
  note?: string;
}

export interface LeaderRole {
  title: string;
  organisation: string;
  detail?: string;
  current: boolean;
  label?: string;
}

export interface LeaderProfile {
  name: string;
  postNominal: string;
  title: string;
  intro: string;
  mandateLead: string;
  mandate: { label: string; icon: MandateIcon }[];
  about: string[];
  roles: LeaderRole[];
  leadership: string[];
  philosophy: string;
  education: Qualification[];
  certifications: Qualification[];
  expertise: string[];
  interests: string[];
  closing: string;
}

export interface AdvisoryMember {
  name: string;
  role: string;
  photo: PhotoSlot;
}

export type FactIcon =
  | "briefcase"
  | "landmark"
  | "graduation"
  | "badge"
  | "megaphone"
  | "cpu"
  | "handshake"
  | "chart"
  | "scale"
  | "target"
  | "code";

export interface ProfileFact {
  icon: FactIcon;
  label: string;
  value: string;
}

export type ProfileSection =
  | { kind: "text"; heading: string; paragraphs: string[] }
  | { kind: "roles"; heading: string; roles: LeaderRole[] }
  | { kind: "qualifications"; heading: string; groups: { title: string; items: Qualification[] }[] }
  | { kind: "tags"; heading: string; tags: string[] }
  | { kind: "highlight"; eyebrow: string; title: string; body: string }
  | { kind: "commitment"; eyebrow: string; body: string };

export interface MemberProfile {
  slug: string;
  intro: string;
  facts: ProfileFact[];
  sections: ProfileSection[];
}

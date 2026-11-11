/**
 * SMO Foundation — Site configuration
 */

import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "SMO Foundation",
  fullName: "Sustainable Market Outreach Foundation",
  rcNumber: "RC 9896470",
  tagline: "Renewed hope for petty traders, from Abuja to every market in Nigeria",
  description:
    "SMO Foundation gives Nigeria's market women and petty traders ₦100,000 grants, a bank account in their own name and practical money skills, so a cash-only stall can grow into a business.",
  url: "https://smofoundation.org",

  contact: {
    email: "info@smofoundation.org",
    phone: "0706 069 4252 | 0902 022 2250",
    primaryPhone: "0706 069 4252",
    secondaryPhone: "0902 022 2250",
    address: "No. 2 Amazon River Close, Maitama, Abuja, Nigeria",
    hours: "Monday to Friday, 8:30 to 17:00 (WAT)",
  },

  social: {
    handle: "@smofoundation",
    facebook: "https://facebook.com/smofoundation",
    twitter: "https://x.com/smofoundation",
    instagram: "https://instagram.com/smofoundation",
    linkedin: "https://linkedin.com/company/smofoundation",
    youtube: "https://youtube.com/@smofoundation",
  },

  institutionalGuide: "Distinguished Senator Faozey",
  vision: "To be Nigeria's leading catalyst for financial and economic inclusion.",
  mission:
    "To empower 1 million market women by 2030 with the capital, tools and digital skills they need to thrive in a modern economy.",
  partnerBank: "FogPay",
  grantAmount: "₦100,000",

  sdgs: [
    { number: 1, title: "No poverty", desc: "Direct grants that put working capital back into vulnerable traders' businesses." },
    { number: 5, title: "Gender equality", desc: "Market women and female heads of household come first." },
    { number: 8, title: "Decent work and economic growth", desc: "Turning cash-only trade into bankable, lasting livelihoods." },
  ],

  boardMembers: [
    {
      name: "H.E. Abdussalam A. Zaura",
      role: "Board Chairman",
      zone: "North West",
      bio: "Distinguished administrator and visionary leader providing institutional governance and national strategic direction.",
      photo: { alt: "Portrait of H.E. Abdussalam A. Zaura" },
    },
    {
      name: "Hon. Stella Okotete",
      role: "Board Member",
      zone: "South South",
      bio: "Seasoned public policy executive and economic development advocate with extensive financial inclusion governance experience.",
      photo: { alt: "Portrait of Hon. Stella Okotete" },
    },
    {
      name: "Hon. Muhammad Goje",
      role: "Board Member",
      zone: "North East",
      bio: "Community resilience strategist and public administrator focused on post-conflict economic revitalization and market empowerment.",
      photo: { alt: "Portrait of Hon. Muhammad Goje" },
    },
    {
      name: "Hajiya Hauwa Abdullahi Sule",
      role: "Board Member",
      zone: "North Central",
      bio: "Dedicated grassroots mobilizer and champion of women empowerment, education, and vulnerable group advocacy.",
      photo: { alt: "Portrait of Hajiya Hauwa Abdullahi Sule" },
    },
    {
      name: "Hon. Chief Dr. Ginika Florence Tor",
      role: "Board Member",
      zone: "South East",
      bio: "Eminent public institutional leader and social advocate with deep expertise in equitable national integration and human capital development.",
      photo: { alt: "Portrait of Hon. Chief Dr. Ginika Florence Tor" },
    },
    {
      name: "Hon. Dayo Israel",
      role: "Board Member (APC National Youth Leader)",
      zone: "South West",
      bio: "Dynamic youth leader, international development specialist, and advocate for generational economic inclusion and digital literacy.",
      photo: { alt: "Portrait of Hon. Dayo Israel" },
    },
    {
      name: "Hon. Shehu Ahmed Yahaya, mnim (Lashek)",
      role: "Executive Director / CEO & Board Secretary",
      zone: "National Secretariat",
      bio: "Accomplished grassroots strategist, administrator, and executive director driving field execution across 111 market clusters nationwide.",
      photo: { alt: "Portrait of Hon. Shehu Ahmed Yahaya" },
    },
  ],
};

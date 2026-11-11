import type { MemberProfile } from "@/types";

export const memberProfiles: MemberProfile[] = [
  {
    slug: "farida-umar-abdullahi",
    intro:
      "A lawyer, governance professional and finance administrator who keeps SMO Foundation's administration, finances and compliance transparent and accountable.",
    facts: [
      { icon: "scale", label: "Head of Legal and Corporate Affairs", value: "Mole Machinery Ltd" },
      { icon: "landmark", label: "Investor Relations Officer", value: "Jaiz Bank Plc" },
      { icon: "graduation", label: "LL.B (Hons), MBA", value: "University of Abuja · Ahmadu Bello University" },
      { icon: "badge", label: "DCP, ACIS, ACIT, AICMC", value: "Professional memberships" },
    ],
    sections: [
      {
        kind: "text",
        heading: "Her role at SMO Foundation",
        paragraphs: [
          "As Director of Admin & Finance, Farida oversees the Foundation's administration, finance, corporate governance and compliance, so every naira entrusted to the Foundation is managed with transparency and accountability.",
        ],
      },
      {
        kind: "roles",
        heading: "Experience",
        roles: [
          { label: "Current", title: "Director of Admin & Finance", organisation: "SMO Foundation", current: true },
          { label: "Current", title: "Head of Legal and Corporate Affairs", organisation: "Mole Machinery Ltd", current: true },
          { label: "Previously", title: "Investor Relations Officer", organisation: "Jaiz Bank Plc", current: false },
          { label: "Early career", title: "Began her career", organisation: "Bank of Agriculture", current: false },
        ],
      },
      {
        kind: "qualifications",
        heading: "Education and qualifications",
        groups: [
          {
            title: "Education",
            items: [
              { qualification: "LL.B (Hons)", institution: "University of Abuja" },
              { qualification: "Law School Certificate", institution: "Nigerian Law School" },
              { qualification: "MBA", institution: "Ahmadu Bello University" },
              {
                qualification: "MSc Supply Chain and Logistics",
                institution: "Rome Business School Nigeria",
                note: "In progress",
              },
            ],
          },
          {
            title: "Professional memberships",
            items: [
              { qualification: "DCP", institution: "Professional membership" },
              { qualification: "ACIS", institution: "Professional membership" },
              { qualification: "ACIT", institution: "Professional membership" },
              { qualification: "AICMC", institution: "Professional membership" },
            ],
          },
        ],
      },
      {
        kind: "tags",
        heading: "Areas of expertise",
        tags: ["Corporate governance", "Legal and corporate affairs", "Finance and administration", "Compliance", "Investor relations", "Supply chain and logistics"],
      },
      {
        kind: "commitment",
        eyebrow: "At SMO Foundation",
        body: "Farida brings legal, banking and governance experience to one goal: making sure the Foundation's resources reach the people they are meant for, with every decision on record.",
      },
    ],
  },
  {
    slug: "jude-ugal-olayi",
    intro:
      "An ICT expert and communicator who leads how SMO Foundation tells its story and engages the public and the media.",
    facts: [
      { icon: "megaphone", label: "Director, Communications and Media", value: "SMO Foundation" },
      { icon: "cpu", label: "ICT expert", value: "Digital communication and technology" },
    ],
    sections: [
      {
        kind: "text",
        heading: "His role at SMO Foundation",
        paragraphs: [
          "As Director, Communications and Media, Amb. Jude Ugal Olayi leads the Foundation's visibility, storytelling, media relations and public engagement.",
          "He brings a background in ICT to the work, using digital tools and platforms to carry the Foundation's message to traders, partners and the wider public.",
        ],
      },
      {
        kind: "tags",
        heading: "Areas of expertise",
        tags: ["Communications", "Media relations", "Storytelling", "Public engagement", "ICT", "Digital media"],
      },
      {
        kind: "commitment",
        eyebrow: "At SMO Foundation",
        body: "His work makes sure the people the programme serves, and the people who support it, can see clearly what the Foundation is doing and why.",
      },
    ],
  },
  {
    slug: "ahmad-abdullahi-ahmad",
    intro:
      "A development practitioner with a decade of experience who leads the design and delivery of SMO Foundation's programmes.",
    facts: [
      { icon: "target", label: "Director, Programme", value: "SMO Foundation" },
      { icon: "briefcase", label: "A decade in development", value: "Programme design and delivery" },
      { icon: "landmark", label: "EEFP under the ERSP", value: "Pandemic to Prosperity, 2020" },
    ],
    sections: [
      {
        kind: "text",
        heading: "His role at SMO Foundation",
        paragraphs: [
          "As Director, Programme, Ahmad leads programme strategy and delivery, designing interventions in financial inclusion, women empowerment, skills development and community resilience.",
        ],
      },
      {
        kind: "highlight",
        eyebrow: "2020",
        title: "EEFP under the ERSP",
        body: "Ahmad worked on the EEFP under the Economic Recovery and Sustainability Plan in 2020, the \"Pandemic to Prosperity\" response to the economic impact of COVID-19.",
      },
      {
        kind: "tags",
        heading: "Areas of expertise",
        tags: ["Programme strategy", "Programme delivery", "Financial inclusion", "Women empowerment", "Skills development", "Community resilience"],
      },
      {
        kind: "commitment",
        eyebrow: "At SMO Foundation",
        body: "Ahmad turns the Foundation's mission into programmes that reach traders on the ground, state by state.",
      },
    ],
  },
  {
    slug: "abdulahad-obansa-sheid",
    intro:
      "A frontend engineer and physics graduate who runs the systems and digital platforms behind SMO Foundation's work.",
    facts: [
      { icon: "cpu", label: "Director, ICT", value: "SMO Foundation" },
      { icon: "briefcase", label: "Technical Assistant to the Executive Director", value: "SMO Foundation" },
      { icon: "graduation", label: "BSc Physics", value: "Federal University Lokoja" },
      { icon: "code", label: "Frontend Engineering", value: "HNG Internship" },
    ],
    sections: [
      {
        kind: "text",
        heading: "His role at SMO Foundation",
        paragraphs: [
          "As Director, ICT and Technical Assistant to the Executive Director, Abdulahad leads the Foundation's ICT systems, digital platforms, data security and technical support.",
        ],
      },
      {
        kind: "qualifications",
        heading: "Education and certifications",
        groups: [
          {
            title: "Education",
            items: [{ qualification: "BSc Physics", institution: "Federal University Lokoja" }],
          },
          {
            title: "Certifications",
            items: [
              { qualification: "Frontend Development", institution: "W3Schools" },
              { qualification: "HTML, CSS and JavaScript", institution: "W3Schools" },
              { qualification: "Frontend Engineering", institution: "HNG Internship" },
            ],
          },
        ],
      },
      {
        kind: "tags",
        heading: "Areas of expertise",
        tags: ["ICT systems", "Digital platforms", "Frontend engineering", "HTML, CSS and JavaScript", "Data security", "Technical support"],
      },
      {
        kind: "commitment",
        eyebrow: "At SMO Foundation",
        body: "Abdulahad keeps the Foundation's tools reliable and its data secure, so the team can focus on reaching traders.",
      },
    ],
  },
  {
    slug: "maryam-husseinat-yusuf",
    intro:
      "An accountant, business consultant and youth and women advocate who leads SMO Foundation's partnerships, grants and monitoring & evaluation.",
    facts: [
      { icon: "handshake", label: "Director, Partnerships, Grants & M&E", value: "SMO Foundation" },
      { icon: "chart", label: "Accountant and business consultant", value: "Finance and enterprise" },
      { icon: "target", label: "Youth and women advocate", value: "Inclusion and empowerment" },
    ],
    sections: [
      {
        kind: "text",
        heading: "Her role at SMO Foundation",
        paragraphs: [
          "As Director, Partnerships, Grants & M&E, Maryam leads partnerships, grants mobilisation and monitoring and evaluation, so every programme delivers measurable impact.",
          "Her background as an accountant and business consultant shapes how the Foundation tracks results, and her advocacy for young people and women keeps them at the centre of its work.",
        ],
      },
      {
        kind: "tags",
        heading: "Areas of expertise",
        tags: ["Partnerships", "Grants mobilisation", "Monitoring and evaluation", "Accounting", "Business consulting", "Youth and women advocacy"],
      },
      {
        kind: "commitment",
        eyebrow: "At SMO Foundation",
        body: "Maryam makes sure the Foundation can show its partners exactly what their support has achieved.",
      },
    ],
  },
];

export function getMemberProfile(slug: string) {
  return memberProfiles.find((profile) => profile.slug === slug);
}

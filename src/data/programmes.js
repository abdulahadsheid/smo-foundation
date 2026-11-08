/**
 * SMO Foundation — Programmes Data
 * ⚠️  Descriptions are sample content. Replace with verified programme information.
 */

export const programmes = [
  {
    slug: "economic-empowerment",
    title: "Economic Empowerment",
    shortTitle: "Economic Empowerment",
    eyebrow: "Sustainable Livelihoods",
    description:
      "We support individuals and communities in developing sustainable livelihoods through vocational skills training, micro-enterprise development, financial literacy, and market access. Our approach prioritises women, youth, and marginalised groups.",
    shortDescription:
      "Building sustainable livelihoods through skills training, enterprise development, and financial inclusion.",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80&auto=format&fit=crop",
    color: "#123C32",
    icon: "TrendingUp",
    highlights: [
      "Vocational skills training",
      "Micro-enterprise support",
      "Financial literacy",
      "Market access facilitation",
      "Women's economic groups",
    ],
    featured: true,
  },
  {
    slug: "quality-education",
    title: "Quality Education",
    shortTitle: "Quality Education",
    eyebrow: "Learning for All",
    description:
      "Education is at the heart of sustainable development. We work to improve access to quality education through school support programmes, scholarship initiatives, teacher training, and adult literacy campaigns in underserved communities.",
    shortDescription:
      "Improving access to quality education through school support, scholarships, and community learning.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop",
    color: "#1B5945",
    icon: "GraduationCap",
    highlights: [
      "School infrastructure support",
      "Scholarship programmes",
      "Teacher capacity building",
      "Adult literacy campaigns",
      "Digital literacy",
    ],
    featured: true,
  },
  {
    slug: "better-healthcare",
    title: "Better Healthcare",
    shortTitle: "Better Healthcare",
    eyebrow: "Healthy Communities",
    description:
      "We advocate for and support improved healthcare access in rural and peri-urban communities. Our health programmes include mobile health clinics, maternal and child health support, preventive health education, and community health worker training.",
    shortDescription:
      "Strengthening community health through mobile clinics, maternal care, and preventive education.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop",
    color: "#0B2E25",
    icon: "Heart",
    highlights: [
      "Mobile health outreach",
      "Maternal and child health",
      "Preventive health education",
      "Community health workers",
      "Immunisation support",
    ],
    featured: true,
  },
  {
    slug: "agricultural-development",
    title: "Agricultural Development",
    shortTitle: "Agricultural Development",
    eyebrow: "Food Security & Rural Growth",
    description:
      "Agriculture is central to community prosperity in Nigeria. We support smallholder farmers with modern farming techniques, access to quality inputs, storage solutions, cooperative formation, and market linkages to improve yields and income.",
    shortDescription:
      "Supporting smallholder farmers with modern techniques, cooperative development, and market linkages.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80&auto=format&fit=crop",
    color: "#123C32",
    icon: "Wheat",
    highlights: [
      "Smallholder farmer support",
      "Modern farming techniques",
      "Cooperative formation",
      "Post-harvest management",
      "Market linkages",
    ],
    featured: true,
  },
];

export function getProgrammeBySlug(slug) {
  return programmes.find((p) => p.slug === slug) || null;
}

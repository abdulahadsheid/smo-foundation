/**
 * SMO Foundation — Projects Data
 * ⚠️  All projects below are SAMPLE CONTENT.
 *     Replace with verified, officially confirmed project information before publication.
 */

export const projects = [
  {
    slug: "12-state-empowerment-programme",
    title: "12-State Empowerment Programme",
    shortTitle: "12-State Empowerment",
    programme: "economic-empowerment",
    programmeTitle: "Economic Empowerment",
    status: "ongoing",
    location: "Oyo, Kano, Jigawa, Kogi, Nasarawa (Pilot States)",
    year: "2024–Present",
    description:
      "A landmark multi-state initiative targeting economic empowerment, skills development, and community resilience across twelve Nigerian states. The programme begins with five confirmed pilot states: Oyo, Kano, Jigawa, Kogi, and Nasarawa.",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80&auto=format&fit=crop",
    featured: true,
    tags: ["empowerment", "skills", "multi-state"],
    pilotStates: ["Oyo", "Kano", "Jigawa", "Kogi", "Nasarawa"],
  },
  {
    slug: "women-cooperative-development",
    title: "Women's Cooperative Development Initiative",
    shortTitle: "Women's Cooperatives",
    programme: "economic-empowerment",
    programmeTitle: "Economic Empowerment",
    status: "ongoing",
    location: "Oyo State",
    year: "2024",
    description:
      "Supporting the formation and strengthening of women's cooperatives to improve economic agency, collective savings, and market participation.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&auto=format&fit=crop",
    featured: false,
    tags: ["women", "cooperatives", "economic"],
    pilotStates: [],
  },
  {
    slug: "rural-school-support",
    title: "Rural School Support Programme",
    shortTitle: "Rural Schools",
    programme: "quality-education",
    programmeTitle: "Quality Education",
    status: "ongoing",
    location: "Kano State",
    year: "2024",
    description:
      "Improving learning environments, supplying educational materials, and providing teacher professional development in rural primary schools.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop",
    featured: false,
    tags: ["education", "schools", "rural"],
    pilotStates: [],
  },
  {
    slug: "mobile-health-outreach",
    title: "Community Mobile Health Outreach",
    shortTitle: "Mobile Health",
    programme: "better-healthcare",
    programmeTitle: "Better Healthcare",
    status: "ongoing",
    location: "Nasarawa & Kogi States",
    year: "2024",
    description:
      "Delivering primary healthcare services, maternal health support, and immunisation campaigns to remote communities through mobile health units.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop",
    featured: false,
    tags: ["healthcare", "mobile", "maternal"],
    pilotStates: [],
  },
  {
    slug: "smallholder-farmer-support",
    title: "Smallholder Farmer Support Programme",
    shortTitle: "Farmer Support",
    programme: "agricultural-development",
    programmeTitle: "Agricultural Development",
    status: "ongoing",
    location: "Jigawa State",
    year: "2024",
    description:
      "Equipping smallholder farmers with modern agricultural techniques, improved seed varieties, cooperative structures, and market linkages.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80&auto=format&fit=crop",
    featured: false,
    tags: ["agriculture", "farming", "cooperatives"],
    pilotStates: [],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getFeaturedProject() {
  return projects.find((p) => p.featured) || projects[0];
}

/**
 * SMO Foundation — Navigation Configuration
 */

export const navigationLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Our Story", href: "/about#story" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Core Values", href: "/about#values" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Organisational Structure", href: "/about#structure" },
    ],
  },
  {
    label: "Our Programmes",
    href: "/programmes",
    dropdown: [
      { label: "Economic Empowerment", href: "/programmes/economic-empowerment" },
      { label: "Quality Education", href: "/programmes/quality-education" },
      { label: "Better Healthcare", href: "/programmes/better-healthcare" },
      { label: "Agricultural Development", href: "/programmes/agricultural-development" },
    ],
  },
  {
    label: "Our Projects",
    href: "/projects",
  },
  {
    label: "Our Impact",
    href: "/impact",
  },
  {
    label: "News & Insights",
    href: "/news",
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    dropdown: [
      { label: "Volunteer", href: "/get-involved#volunteer" },
      { label: "Partner With Us", href: "/partnerships" },
      { label: "Support Our Work", href: "/get-involved#support" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

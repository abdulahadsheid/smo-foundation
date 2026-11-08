/**
 * SMO Foundation — News & Insights Data
 * ⚠️  All articles below are SAMPLE CONTENT.
 *     Do not publish without replacing with verified, official content.
 */

export const newsArticles = [
  {
    slug: "community-outreach-empowerment-2024",
    title: "SMO Foundation Launches Community Outreach Empowerment Initiative",
    excerpt:
      "The foundation has expanded its community outreach efforts to reach more vulnerable households across five pilot states, delivering essential support and capacity-building resources.",
    content: `
      <p>This is a sample article. Replace with verified, officially approved content before publication.</p>
      <p>SMO Foundation's community outreach initiative represents a significant step forward in our efforts to reach marginalised communities across Nigeria...</p>
    `,
    date: "2024-11-01",
    formattedDate: "1 November 2024",
    category: "Community Outreach",
    author: "SMO Foundation Communications",
    image:
      "https://images.unsplash.com/photo-1593113630400-ea4288922559?w=800&q=80&auto=format&fit=crop",
    featured: true,
    tags: ["community", "outreach", "empowerment"],
  },
  {
    slug: "sustainable-livelihoods-skills-development",
    title: "Building Sustainable Livelihoods Through Skills Development",
    excerpt:
      "Our vocational skills development programme continues to transform lives, equipping young Nigerians with marketable skills and linking graduates to employment and enterprise opportunities.",
    content: `
      <p>This is a sample article. Replace with verified, officially approved content before publication.</p>
      <p>Through our skills development programme, participants gain practical competencies in trades such as tailoring, carpentry, digital marketing, and agro-processing...</p>
    `,
    date: "2024-10-15",
    formattedDate: "15 October 2024",
    category: "Economic Empowerment",
    author: "SMO Foundation Programmes",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&auto=format&fit=crop",
    featured: false,
    tags: ["skills", "livelihoods", "youth"],
  },
  {
    slug: "partnerships-community-impact",
    title: "Strengthening Partnerships for Greater Community Impact",
    excerpt:
      "SMO Foundation continues to build strategic partnerships with government agencies, international development organisations, and corporate entities to amplify community impact.",
    content: `
      <p>This is a sample article. Replace with verified, officially approved content before publication.</p>
      <p>Strategic partnerships are central to SMO Foundation's model for sustainable community development. Through collaboration, we leverage complementary strengths...</p>
    `,
    date: "2024-09-28",
    formattedDate: "28 September 2024",
    category: "Partnerships",
    author: "SMO Foundation Partnerships",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80&auto=format&fit=crop",
    featured: false,
    tags: ["partnerships", "collaboration", "impact"],
  },
  {
    slug: "agricultural-development-smallholder-farmers",
    title: "Supporting Smallholder Farmers Across Northern Nigeria",
    excerpt:
      "Our agricultural development programme is working with smallholder farming communities to introduce modern techniques and cooperative structures that improve yields and incomes.",
    content: `
      <p>This is a sample article. Replace with verified, officially approved content before publication.</p>
      <p>Agriculture represents the primary livelihood for millions of Nigerians. Through structured extension services and cooperative formation...</p>
    `,
    date: "2024-09-10",
    formattedDate: "10 September 2024",
    category: "Agricultural Development",
    author: "SMO Foundation Agricultural Team",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80&auto=format&fit=crop",
    featured: false,
    tags: ["agriculture", "farming", "food security"],
  },
  {
    slug: "healthcare-outreach-rural-communities",
    title: "Mobile Health Clinics Reach Remote Communities",
    excerpt:
      "SMO Foundation's mobile health outreach programme has extended primary healthcare access to communities previously unable to reach formal health facilities.",
    content: `
      <p>This is a sample article. Replace with verified, officially approved content before publication.</p>
      <p>Access to quality healthcare remains a significant challenge for many rural communities in Nigeria. Through mobile health outreach...</p>
    `,
    date: "2024-08-20",
    formattedDate: "20 August 2024",
    category: "Healthcare",
    author: "SMO Foundation Health Team",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop",
    featured: false,
    tags: ["healthcare", "mobile clinics", "rural"],
  },
  {
    slug: "education-scholarship-programme",
    title: "Education Scholarship Programme Opens Applications",
    excerpt:
      "Applications are now open for the SMO Foundation scholarship programme, supporting academically talented students from economically disadvantaged backgrounds.",
    content: `
      <p>This is a sample article. Replace with verified, officially approved content before publication.</p>
      <p>The SMO Foundation Scholarship Programme is committed to ensuring that financial barriers do not prevent talented young Nigerians from accessing quality education...</p>
    `,
    date: "2024-08-05",
    formattedDate: "5 August 2024",
    category: "Education",
    author: "SMO Foundation Education Team",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop",
    featured: false,
    tags: ["education", "scholarships", "youth"],
  },
];

export const newsCategories = [
  "All",
  "Community Outreach",
  "Economic Empowerment",
  "Education",
  "Healthcare",
  "Agricultural Development",
  "Partnerships",
];

export function getArticleBySlug(slug) {
  return newsArticles.find((a) => a.slug === slug) || null;
}

export function getFeaturedArticle() {
  return newsArticles.find((a) => a.featured) || newsArticles[0];
}

export function getLatestArticles(count = 3) {
  return newsArticles.slice(0, count);
}

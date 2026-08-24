export type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    org: "AFL-CIO",
    location: "Remote",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Developed and deployed a scalable full-stack website for the labor federation using React, Next.js, TypeScript, and Tailwind CSS, serving 5,000+ monthly users.",
      "Integrated Strapi CMS REST APIs for dynamic content, automating updates and cutting manual publishing work by 80%.",
      "Reduced deployment time with Strapi Cloud and Vercel, and boosted organic traffic through SEO optimizations.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Strapi", "Vercel"],
  },
  {
    role: "Marketing Manager / Analyst",
    org: "Eastern Michigan University — Rec/IM",
    location: "Ypsilanti, MI",
    period: "Aug 2025 – Present",
    bullets: [
      "Led a 12-member team delivering campaigns to 5,000+ students, boosting campus-wide participation and engagement by 30%.",
      "Built Python and SQL analytics workflows to automate reporting and optimize marketing strategy.",
    ],
    stack: ["Python", "SQL", "Analytics"],
  },
];

export type CultureItem = {
  image: string | null;
  alt: string;
  title: string;
  caption: string;
};

export const cultureItems: CultureItem[] = [
  {
    image: "/images/culture/digital-transformation-day-1.jpg",
    alt: "Ahmad presenting at a podium with a DTE-branded slide behind him, listing automation results",
    title: "Digital Empowerment Day",
    caption:
      "Gave a presentation on SAP automation at DTE's Spring 2026 Digital Empowerment Day — walking the room through the SAP BW reporting process he automated.",
  },
  {
    image: "/images/culture/digital-transformation-day-2.jpg",
    alt: "Ahmad presenting to a seated audience under a slide reading Digital Empowerment Day, We saved up to ~3 hours",
    title: "Digital Empowerment Day",
    caption:
      "The results slide: roughly 3 hours saved per run, automatic date input, and zero disruption to downstream teams.",
  },
  {
    image: "/images/culture/student-spotlight-photo.jpg",
    alt: "Ahmad standing in front of a Berlin Wall exhibit piece, from DTE's Student Spotlight feature",
    title: "Student Spotlight",
    caption:
      "“Don't just build solutions. Understand what people need.” Featured in DTE's Student Spotlight for the year for pairing technical automation with clear communication.",
  },
  {
    image: "/images/culture/best-dressed-july-4th.jpg",
    alt: "Ahmad's team posing in red, white, and blue outfits in front of a DTE Fermi 2 banner",
    title: "Best Dressed Team — July 4th",
    caption:
      "Team spirit counts too — took the win for Best Dressed Team at DTE's July 4th event.",
  },
  {
    image: null,
    alt: "",
    title: "Cards of Encouragement",
    caption:
      "Volunteered writing Cards of Encouragement for DTE's community outreach program — a small effort, but the kind that adds up.",
  },
];

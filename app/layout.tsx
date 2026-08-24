import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://work.ahmadhash.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ahmad Hashmi | Technical Analyst & Software Engineer",
  description:
    "Ahmad Hashmi is a Technical Analyst Intern at DTE Energy's Financial Operations IT team, automating SAP and Power BI reporting, plus a CS Honors student and full-stack engineer.",
  keywords: [
    "Ahmad Hashmi",
    "DTE Energy",
    "Technical Analyst Intern",
    "Power BI",
    "SAP Automation",
    "Power Automate",
    "Eastern Michigan University",
  ],
  authors: [{ name: "Ahmad Hashmi" }],
  openGraph: {
    title: "Ahmad Hashmi | Technical Analyst & Software Engineer",
    description:
      "Automation, analytics, and full-stack engineering — currently modernizing financial systems at DTE Energy.",
    url: siteUrl,
    siteName: "Ahmad Hashmi",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Hashmi | Technical Analyst & Software Engineer",
    description:
      "Automation, analytics, and full-stack engineering — currently modernizing financial systems at DTE Energy.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmad Hashmi",
  jobTitle: "Technical Analyst Intern",
  worksFor: {
    "@type": "Organization",
    name: "DTE Energy",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Eastern Michigan University",
  },
  url: siteUrl,
  sameAs: [
    "https://linkedin.com/in/ahmad-hashmi",
    "https://github.com/Hashmi-dev",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

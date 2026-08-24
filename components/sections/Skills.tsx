import { Reveal } from "@/components/ui/Reveal";

const groups = [
  {
    label: "Enterprise & Automation",
    items: [
      "Power BI",
      "Power Query",
      "DAX",
      "Oracle SQL",
      "Power Automate",
      "Power Automate Desktop",
      "SAP GUI Scripting",
      "ServiceNow",
      "SharePoint Online",
      "Microsoft Graph API",
      "Copilot Studio",
      "Azure",
    ],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    label: "Backend & Data",
    items: ["Python", "Java", "SQL", "AWS", "Docker", "Kafka", "Spark"],
  },
  {
    label: "Tools",
    items: ["Git", "Figma", "Linux", "VS Code", "IntelliJ"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-paper-raised/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <Reveal>
          <p className="eyebrow text-copper">Toolset</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => (
            <Reveal key={group.label} delayMs={i * 70}>
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink/80">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

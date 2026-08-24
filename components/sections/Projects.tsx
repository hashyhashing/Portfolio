import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <div>
      <h3 className="eyebrow text-copper">Side Projects</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delayMs={i * 80} className="h-full">
            <div className="flex h-full flex-col border border-line bg-paper p-6">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">
                {p.period}
              </span>
              <h4 className="mt-2 font-display text-lg leading-snug">{p.title}</h4>
              <p className="mt-2 text-sm text-ink/70">{p.summary}</p>
              <ul className="mt-3 flex-1 space-y-1.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[0.83rem] leading-relaxed text-ink/65">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-line px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.05em] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

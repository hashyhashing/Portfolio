import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <div>
      <h3 className="eyebrow text-copper">Experience</h3>
      <div className="mt-6 space-y-10">
        {experience.map((job, i) => (
          <Reveal key={job.role + job.org} delayMs={i * 80}>
            <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-baseline">
              <h4 className="font-display text-xl md:text-2xl">
                {job.role} <span className="text-ink/50">— {job.org}</span>
              </h4>
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                {job.period} · {job.location}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.stack.map((s) => (
                <span
                  key={s}
                  className="border border-line px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

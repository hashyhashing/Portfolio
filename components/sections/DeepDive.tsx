import { Reveal } from "@/components/ui/Reveal";
import { dteInitiatives } from "@/content/dte-initiatives";

export function DeepDive() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow text-copper">The Work at DTE</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Five threads of one job: make manual processes disappear.
          </h2>
          <p className="mt-5 max-w-2xl text-ink/75">
            As a Technical Analyst Intern on Financial Operations IT, the role grew past
            traditional business analysis into automation development, data engineering, and
            solution architecture — across Regulatory, Treasury, Risk, and Accounts Payable.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-t border-line">
          {dteInitiatives.map((item, i) => (
            <Reveal key={item.code} delayMs={i * 60}>
              <div className="grid gap-4 py-9 md:grid-cols-[110px_1fr] md:gap-10">
                <div className="flex items-start gap-3 md:block">
                  <span className="font-mono text-sm text-copper">{item.code}</span>
                  <h3 className="font-display text-xl leading-snug md:mt-1 md:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p className="text-ink/80">{item.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {item.details.map((d) => (
                      <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-line px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

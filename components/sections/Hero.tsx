import { Button } from "@/components/ui/Button";
import { awards } from "@/content/awards";

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted md:[writing-mode:vertical-rl] md:rotate-180">
            Detroit, MI — Technical Analyst, DTE Energy
          </div>

          <div>
            <p className="eyebrow mb-5 text-copper">Portfolio · Field Notes from a Co-op</p>
            <h1 className="font-display text-[13vw] leading-[0.95] tracking-tight md:text-[6.4rem]">
              Ahmad
              <br />
              Hashmi
            </h1>

            <div className="mt-8 max-w-xl border-l-2 border-copper pl-5">
              <p className="font-display text-xl italic leading-snug text-ink md:text-2xl">
                &ldquo;Don&rsquo;t just build solutions. Understand what people need.&rdquo;
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                — DTE Student Spotlight, 2026
              </p>
            </div>

            <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-ink/80">
              CS Honors student at Eastern Michigan University (4.0 GPA) currently automating
              financial-systems reporting as a Technical Analyst Intern at{" "}
              <span className="font-medium text-ink">DTE Energy</span>. I turn multi-hour manual
              processes into minutes — and I build full-stack products on the side.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#contact" variant="primary">
                Get in touch
              </Button>
              <Button href="/resume/AhmadHashmi.pdf" variant="secondary" external>
                View résumé
              </Button>
              <Button href="#impact" variant="ghost">
                See the impact ↓
              </Button>
            </div>

            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
              {awards.map((award) => (
                <li key={award.title} className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-muted">
                  <span className="text-copper">1st —</span> {award.event}{" "}
                  <span className="text-muted-dark">'{award.year.slice(-2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

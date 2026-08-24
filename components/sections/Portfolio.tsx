import { Reveal } from "@/components/ui/Reveal";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow text-copper">Beyond DTE</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            The rest of the portfolio
          </h2>
          <p className="mt-5 max-w-2xl text-ink/75">
            DTE is the headline, not the whole résumé. Full-stack engineering, applied ML, and a
            handful of hackathon podiums round out the picture.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 border-y border-line py-5" delayMs={40}>
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Education</span>
          <span className="text-sm text-ink/80">
            B.S. Computer Science, Minor in Information Assurance &amp; Security Architecture —
            Eastern Michigan University Honors College
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-copper">4.0 GPA · Dean&rsquo;s List</span>
          <span className="text-sm text-ink/60">Co-founder &amp; Secretary, Google Developer Student Club</span>
        </Reveal>

        <div className="mt-14">
          <Experience />
        </div>
        <div className="mt-16">
          <Projects />
        </div>
        <div className="mt-16">
          <Awards />
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
          <Reveal>
            <p className="eyebrow text-copper">Let&rsquo;s Talk</p>
            <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              Get in touch
            </h2>
            <p className="mt-5 max-w-md text-ink/75">
              Open to full-time opportunities at DTE Energy and beyond. The fastest way to reach
              me is the form — I read every message myself.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/resume/AhmadHashmi.pdf" variant="secondary" external>
                Download résumé
              </Button>
              <Button href="https://linkedin.com/in/ahmad-hashmi" variant="ghost" external>
                LinkedIn ↗
              </Button>
              <Button href="https://github.com/Hashmi-dev" variant="ghost" external>
                GitHub ↗
              </Button>
            </div>
          </Reveal>

          <Reveal delayMs={100} className="relative">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

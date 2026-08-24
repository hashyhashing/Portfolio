import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { cultureItems } from "@/content/culture";

export function Culture() {
  return (
    <section id="culture" className="border-b border-line bg-paper-raised/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow text-copper">Beyond the Work</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Culture &amp; involvement
          </h2>
          <p className="mt-5 max-w-2xl text-ink/75">
            Technical output is half the story. The rest is showing up — presenting to the room,
            volunteering, and being the kind of teammate people remember.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {cultureItems.map((item, i) => (
            <Reveal key={item.title + i} delayMs={i * 70}>
              <figure className="border border-line bg-paper">
                {item.image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] w-full items-center justify-center border-b border-line bg-ink">
                    <span className="font-display text-3xl italic text-paper/70">
                      Cards of Encouragement
                    </span>
                  </div>
                )}
                <figcaption className="p-5">
                  <p className="eyebrow text-copper">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

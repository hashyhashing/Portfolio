import { Reveal } from "@/components/ui/Reveal";
import { awards } from "@/content/awards";

export function Awards() {
  return (
    <div>
      <h3 className="eyebrow text-copper">Awards</h3>
      <div className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {awards.map((a, i) => (
          <Reveal key={a.title} delayMs={i * 60} className="bg-paper">
            <div className="flex h-full flex-col justify-between p-5">
              <p className="font-display text-lg leading-snug">{a.title}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-muted">
                {a.event} · {a.year}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

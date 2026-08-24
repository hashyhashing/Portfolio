import { Reveal } from "@/components/ui/Reveal";
import { MeterBar } from "@/components/ui/MeterBar";

export function Impact() {
  return (
    <section id="impact" className="border-b border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow text-copper-bright">Impact Readout</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            What automation actually looked like, in hours.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line-dark bg-line-dark md:grid-cols-3">
          <Reveal delayMs={0} className="bg-ink p-8">
            <p className="eyebrow text-muted-dark">Crystal Reports Modernization</p>
            <div className="mt-6 flex items-baseline justify-between font-mono">
              <span className="text-2xl text-muted-dark line-through decoration-copper/60">
                02:00:00
              </span>
              <span className="text-4xl font-semibold text-copper-bright">00:15:00</span>
            </div>
            <div className="mt-4">
              <MeterBar fillPercent={12.5} onInk />
            </div>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-muted-dark">
              ~87.5% faster · manual Oracle report → validated Power BI model
            </p>
          </Reveal>

          <Reveal delayMs={120} className="bg-ink p-8">
            <p className="eyebrow text-muted-dark">SAP BW Reporting</p>
            <div className="mt-6 flex items-baseline justify-between font-mono">
              <span className="text-2xl text-muted-dark line-through decoration-copper/60">
                03:00:00
              </span>
              <span className="text-3xl font-semibold text-copper-bright">AUTOMATED</span>
            </div>
            <div className="mt-4">
              <MeterBar fillPercent={3} onInk />
            </div>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-muted-dark">
              3-hr manual process → hands-off SAP GUI + PAD flow
            </p>
          </Reveal>

          <Reveal delayMs={240} className="bg-ink p-8">
            <p className="eyebrow text-muted-dark">MEC Automation, at Scale</p>
            <div className="mt-6 grid grid-cols-2 gap-y-5 font-mono">
              <div>
                <div className="text-3xl font-semibold text-copper-bright">5+</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.08em] text-muted-dark">
                  Python pipelines
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-copper-bright">6</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.08em] text-muted-dark">
                  business units
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-3xl font-semibold text-copper-bright">12 hrs/wk</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.08em] text-muted-dark">
                  saved during month-end close
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

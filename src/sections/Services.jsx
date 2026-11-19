import { ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { shop, services } from "@/config";
import { wa } from "@/lib/whatsapp";

export default function Services() {
  return (
    <Section id="services" title="Services & prices" intro="Tap a service to book it on WhatsApp.">
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={(i % 2) * 100}>
            <a href={wa(`Hi ${shop.name}, I'd like to book: ${s.name}.`)} className="card u-group flex items-center justify-between gap-4 p-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold"><span className="u-hover">{s.name}</span></h3>
                  {s.popular && <span className="rounded-full bg-[var(--gold)] px-3 py-0.5 text-xs font-extrabold text-black">Popular</span>}
                </div>
                <p className="muted mt-1 text-sm">{s.time}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="gold text-2xl font-extrabold tabular-nums">{s.price} <small className="muted text-xs font-semibold">{shop.currency}</small></span>
                <ArrowUpRight className="gold -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
import { MapPin, Phone } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { shop, hours } from "@/config";
import { tel } from "@/lib/whatsapp";

export default function Hours() {
  const today = new Date().getDay(); // 0 = Sunday
  return (
    <Section id="hours" title="Hours & location">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <ul className="card h-full p-8">
            {hours.map((h, i) => (
              <li key={h.day} className={`u-group flex justify-between border-b border-white/5 py-3 last:border-0 ${i === today ? "gold font-extrabold" : "muted"}`}>
                <span className="u-hover flex items-center gap-2">{i === today && <i className="live-dot" />}{h.day}{i === today && " (today)"}</span>
                <span className="tabular-nums">{h.time ?? "Closed"}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <div className="card flex h-full flex-col justify-center p-8">
            <span className="icon-bubble"><MapPin size={26} /></span>
            <h3 className="mt-5 text-2xl font-bold"><span className="u-hover">Find us</span></h3>
            <p className="muted mt-2">{shop.address}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="btn-gold h-11 px-6"><a href={shop.mapsUrl}>Get directions</a></Button>
              <Button asChild variant="outline" className="btn-ghost h-11 px-6"><a href={tel}><Phone /> Call</a></Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
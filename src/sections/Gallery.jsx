import { useState } from "react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { shop, gallery } from "@/config";
import { wa } from "@/lib/whatsapp";

// If /gallery/N.jpg is missing, show /gallery/N.svg (the illustration) instead
const fallback = (i) => `/gallery/${(i % 6) + 1}.svg`;

export default function Gallery() {
  const [broken, setBroken] = useState({});
  return (
    <Section id="work" title="Recent work" intro="Real cuts from our chairs. Tap one to ask for the same look.">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {gallery.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 100}>
            <a href={wa(`Hi ${shop.name}, I'd like a cut like photo ${i + 1} in your gallery.`)}
               className="group relative block aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] transition-colors hover:border-[var(--gold)]">
              <img src={broken[i] ? fallback(i) : src} alt={`${shop.name} haircut ${i + 1}`} loading="lazy"
                   onError={() => !broken[i] && setBroken((b) => ({ ...b, [i]: true }))}
                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-4 text-sm font-bold text-[var(--gold)] transition-transform duration-300 group-hover:translate-y-0">
                Book this look
              </span>
            </a>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button asChild variant="outline" className="btn-ghost h-11 px-7"><a href={shop.tiktok}>See more on TikTok</a></Button>
      </div>
    </Section>
  );
}
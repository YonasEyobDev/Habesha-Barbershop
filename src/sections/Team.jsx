import { useState } from "react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { team } from "@/config";
import { wa } from "@/lib/whatsapp";

// Barber photo, or /team/barber-N.svg (the illustration) if the photo is missing
function Avatar({ m, i }) {
  const [bad, setBad] = useState(false);
  const src = bad || !m.photo ? `/team/barber-${(i % 3) + 1}.svg` : m.photo;
  return (
    <div className="aspect-[4/5] overflow-hidden bg-[#0f0f0f]">
      <img src={src} alt={m.name} loading="lazy" onError={() => setBad(true)}
           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
  );
}

export default function Team() {
  return (
    <Section id="team" title="Meet the barbers" intro="Book your favourite by name.">
      {/* 3 compact cards in a row on phones, roomier from the sm breakpoint up */}
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-3 sm:gap-6">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 100}>
            <a href={wa(`Hi, I'd like to book with ${m.name}.`)} className="card u-group group block overflow-hidden !rounded-2xl">
              <Avatar m={m} i={i} />
              <div className="p-3 sm:p-6">
                <h3 className="text-sm font-bold leading-tight sm:text-xl"><span className="u-hover">{m.name}</span></h3>
                <p className="gold text-[11px] font-semibold leading-tight sm:text-sm">{m.role}</p>
                {m.skill && <p className="muted mt-1 hidden text-sm sm:block">{m.skill}</p>}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
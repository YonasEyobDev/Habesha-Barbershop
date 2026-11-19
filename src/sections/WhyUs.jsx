import { Star, Users, Clock, Scissors } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { perks } from "@/config";

const icons = { star: Star, users: Users, clock: Clock, scissors: Scissors };

export default function WhyUs() {
  return (
    <Section id="why" title="Why choose us">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((p, i) => {
          const Icon = icons[p.icon] ?? Star;
          return (
            <Reveal key={p.title} delay={i * 100}>
              <div className="card u-group h-full p-8 text-center">
                <span className="icon-bubble"><Icon size={26} /></span>
                <h3 className="mt-5 text-xl font-bold"><span className="u-hover">{p.title}</span></h3>
                <p className="muted mt-2">{p.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
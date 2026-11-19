import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { steps } from "@/config";

// Numbers are fine here: booking really is a sequence
export default function HowItWorks() {
  return (
    <Section id="how" title="How booking works" intro="No app, no account. Just a message.">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <div className="card u-group h-full p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--orange)] text-xl font-extrabold text-black">{i + 1}</span>
              <h3 className="mt-5 text-xl font-bold"><span className="u-hover">{s.title}</span></h3>
              <p className="muted mt-2">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
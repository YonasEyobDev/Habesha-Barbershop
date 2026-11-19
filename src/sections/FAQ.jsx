import { ChevronDown } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { faqs } from "@/config";

// Native <details>: no extra library needed
export default function FAQ() {
  return (
    <Section id="faq" title="Questions">
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 80}>
            <details className="card u-group group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                <span className="u-hover">{f.q}</span>
                <ChevronDown className="gold shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="muted mt-3">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
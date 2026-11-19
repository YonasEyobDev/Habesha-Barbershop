import { Star } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { reviews } from "@/config";

export default function Reviews() {
  return (
    <Section id="reviews" title="What clients say">
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 100}>
            <figure className="card u-group h-full p-8">
              <div className="flex gap-1 text-[var(--gold)]" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((n) => <Star key={n} size={18} fill="currentColor" />)}
              </div>
              <blockquote className="mt-4 text-lg"><span className="u-hover">“{r.text}”</span></blockquote>
              <figcaption className="gold mt-5 text-sm font-bold">{r.name}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
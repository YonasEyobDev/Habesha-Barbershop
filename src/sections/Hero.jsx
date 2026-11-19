import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { shop, hours } from "@/config";
import { wa, tel } from "@/lib/whatsapp";

export default function Hero() {
  const today = hours[new Date().getDay()];
  const d = (ms) => ({ animationDelay: `${ms}ms` });
  return (
    <section id="top" className="hero-glow">
      <Container className="flex min-h-[80vh] flex-col items-center justify-center py-20 text-center">
        <span className="rise flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm" style={d(0)}>
          <i className="live-dot" /> {today.time ? `Open today ${today.time}` : "Closed today"}
        </span>
        <h1 className="rise gold mt-6 text-6xl font-extrabold leading-none md:text-8xl" style={d(120)}>
          <span className="u-hover">{shop.name}</span>
        </h1>
        <p className="rise muted mt-6 max-w-xl text-lg md:text-xl" style={d(240)}>{shop.tagline}</p>
        <div className="rise mt-9 flex flex-wrap justify-center gap-4" style={d(360)}>
          <Button asChild size="lg" className="btn-gold h-12 px-8 text-base"><a href={wa(`Hi ${shop.name}, I'd like to book a haircut.`)}><MessageCircle /> WhatsApp to book</a></Button>
          <Button asChild size="lg" variant="outline" className="btn-ghost h-12 px-8 text-base"><a href={tel}><Phone /> Call {shop.phoneDisplay}</a></Button>
        </div>
      </Container>
      <div className="pole h-3 w-full" aria-hidden="true" />
    </section>
  );
}
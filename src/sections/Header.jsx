import { CalendarDays, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { shop } from "@/config";
import { wa } from "@/lib/whatsapp";

const links = [["Services", "#services"], ["Work", "#work"], ["Team", "#team"], ["Reviews", "#reviews"], ["Hours", "#hours"], ["FAQ", "#faq"]];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)] shadow-[0_0_18px_rgba(250,204,21,.35)] transition-transform group-hover:rotate-[-12deg]">
            <Scissors size={20} />
          </span>
          <span className="leading-tight">
            <span className="gold block font-display text-lg font-extrabold">{shop.name}</span>
            <span className="gold block text-[10px] font-bold tracking-[.3em]">BARBER</span>
          </span>
        </a>
        <nav className="hidden gap-7 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
        </nav>
        <Button asChild className="btn-gold h-11 px-6"><a href={wa()}><CalendarDays /> Book Now</a></Button>
      </Container>
    </header>
  );
}
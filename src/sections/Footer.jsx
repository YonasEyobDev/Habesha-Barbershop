import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { shop } from "@/config";
import { wa, tel } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer>
      <div className="cta-band py-16 text-center">
        <Container>
          <h2 className="text-4xl font-extrabold md:text-6xl"><span className="u-hover">Ready for a fresh cut?</span></h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="btn-dark h-12 px-8 text-base"><a href={wa()}><MessageCircle /> WhatsApp to book</a></Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-2 border-black bg-transparent px-8 text-base font-bold text-black hover:bg-black/10 hover:text-black"><a href={tel}><Phone /> Call {shop.phoneDisplay}</a></Button>
          </div>
        </Container>
      </div>
      <p className="muted py-6 pb-24 text-center text-sm md:pb-6">
        © {new Date().getFullYear()} {shop.name} ·{" "}
        <a href={shop.tiktok} className="gold"><span className="u-hover">TikTok</span></a>
      </p>
    </footer>
  );
}
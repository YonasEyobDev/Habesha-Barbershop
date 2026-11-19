import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { wa, tel } from "@/lib/whatsapp";

// Phones: sticky bottom bar. Desktop: floating pill (bottom right).
export default function FloatingBook() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-white/10 bg-black/90 p-3 backdrop-blur md:hidden">
        <Button asChild className="btn-gold h-12 flex-1 text-base"><a href={wa()}><MessageCircle /> WhatsApp</a></Button>
        <Button asChild variant="outline" className="btn-ghost h-12 flex-1 text-base"><a href={tel}><Phone /> Call</a></Button>
      </div>
      <a href={wa()} className="btn-gold float-pulse fixed bottom-6 right-6 z-30 hidden items-center gap-2 px-6 py-4 md:flex">
        <MessageCircle size={20} /> Book on WhatsApp
      </a>
    </>
  );
}
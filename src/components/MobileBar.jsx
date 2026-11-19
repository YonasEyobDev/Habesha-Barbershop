import { Button } from "@/components/ui/button";
import { wa, tel } from "@/lib/whatsapp";

// Sticky bottom bar on phones, where TikTok traffic lands
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-[var(--bottle)]/15 bg-[var(--mist)] p-3 md:hidden">
      <Button asChild className="h-12 flex-1 bg-[var(--bottle)] text-base"><a href={wa()}>WhatsApp</a></Button>
      <Button asChild variant="outline" className="h-12 flex-1 border-[var(--bottle)] text-base text-[var(--bottle)]"><a href={tel}>Call</a></Button>
    </div>
  );
}
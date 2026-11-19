import { shop } from "@/config";

// WhatsApp link with a ready-typed message
export const wa = (msg = `Hi ${shop.name}, I'd like to book.`) =>
  `https://wa.me/${shop.phone}?text=${encodeURIComponent(msg)}`;

export const tel = `tel:+${shop.phone}`;
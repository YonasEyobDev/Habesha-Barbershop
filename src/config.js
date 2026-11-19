// ✏️ Edit ONLY this file (and the photos) to rebrand the site for any shop.

export const shop = {
  name: "Habesha Barbershop",
  tagline: "Fresh cuts. Clean fades. Walk in, walk out looking sharp.",
  phone: "251947902395", // international format, digits only
  phoneDisplay: "+251 947902395",
  address: "Bole Road, Addis Ababa",
  mapsUrl: "https://maps.google.com/?q=Bole+Road+Addis+Ababa",
  tiktok: "https://tiktok.com/@yourshop",
  currency: "ETB",
};

export const steps = [
  { title: "Pick your service", text: "Choose a cut or a combo from the price list." },
  { title: "Message us on WhatsApp", text: "One tap sends your request. We reply with a time." },
  { title: "Show up and relax", text: "Your barber is ready when you walk in." },
];

export const services = [
  { name: "Classic haircut", price: 250, time: "30 min" },
  { name: "Fade + line-up", price: 350, time: "45 min" },
  { name: "Beard trim & shape", price: 200, time: "20 min" },
  { name: "Cut + beard combo", price: 500, time: "60 min", popular: true },
  { name: "Hair wash & style", price: 300, time: "30 min" },
  { name: "Kids cut (under 12)", price: 180, time: "25 min" },
];

// Photos live in /public/gallery. Each name below is the exact file used.
// To use a real photo, put it in that folder and change the extension, e.g. "1.svg" -> "1.jpg"
export const gallery = ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg"].map((f) => `/gallery/${f}`);

// Photos live in /public/team
export const team = [
  { name: "Dawit", role: "Head barber", skill: "Skin fades and sharp line-ups", photo: "/team/barber-1.svg" },
  { name: "Selam", role: "Stylist", skill: "Colour, braids and styling", photo: "/team/barber-2.svg" },
  { name: "Yonas", role: "Barber", skill: "Beards and classic cuts", photo: "/team/barber-3.svg" },
];

export const reviews = [
  { name: "Abel T.", text: "Best fade in Bole. Booked on WhatsApp and was in the chair in five minutes." },
  { name: "Meron K.", text: "Clean shop, friendly team, and my braids lasted weeks." },
  { name: "Samuel G.", text: "My son hates haircuts but asks to come back here. That says it all." },
];

// Sunday first
export const hours = [
  { day: "Sunday", time: "10:00 – 18:00" },
  { day: "Monday", time: "08:00 – 20:00" },
  { day: "Tuesday", time: "08:00 – 20:00" },
  { day: "Wednesday", time: "08:00 – 20:00" },
  { day: "Thursday", time: "08:00 – 20:00" },
  { day: "Friday", time: "08:00 – 21:00" },
  { day: "Saturday", time: "08:00 – 21:00" },
];

export const faqs = [
  { q: "Do I need an account to book?", a: "No. Send us a WhatsApp message and we confirm your slot." },
  { q: "Do you take walk-ins?", a: "Yes, when a chair is free. Booking guarantees your time." },
  { q: "How do I pay?", a: "Cash or mobile money at the shop, after your cut." },
  { q: "Can I cancel or reschedule?", a: "Of course. Just message us on WhatsApp a few hours ahead." },
];

// Icons: "star" | "users" | "clock" | "scissors"
export const perks = [
  { icon: "star", title: "Regulars' favourite", text: "A relaxed shop where you're a regular by your second visit." },
  { icon: "users", title: "Skilled barbers", text: "Fades, beards and styles from people who do it every day." },
  { icon: "clock", title: "Book in seconds", text: "One WhatsApp message. No app and no account." },
  { icon: "scissors", title: "Clean and careful", text: "Fresh tools and a clean chair for every client." },
];
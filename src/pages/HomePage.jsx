// The page: sections render in this exact order
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import WhyUs from "@/sections/WhyUs";
import Services from "@/sections/Services";
import Gallery from "@/sections/Gallery";
import Team from "@/sections/Team";
import HowItWorks from "@/sections/HowItWorks";
import Reviews from "@/sections/Reviews";
import Hours from "@/sections/Hours";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import Marquee from "@/components/Marquee";
import FloatingBook from "@/components/FloatingBook";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <WhyUs />
        <Services />
        <Gallery />
        <Team />
        <HowItWorks />
        <Reviews />
        <Hours />
        <FAQ />
      </main>
      <Footer />
      <FloatingBook />
    </>
  );
}
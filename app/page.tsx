import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "N Spasić Gradnja — Renoviranje i Adaptacija Stanova",
  description:
    "Vaš partner za savršeno renoviranje i adaptaciju stanova u Srbiji. Sa preko 10 godina iskustva: adaptacije, vodoinstalacije, keramičarski radovi, hausmajstor. Pozovite 064-2022-216.",
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

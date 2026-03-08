import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <About />
        <HeroStats />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

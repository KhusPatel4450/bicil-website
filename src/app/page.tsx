import DigitalPetalsShader from "@/components/DigitalPetalsShader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Team from "@/components/Team";
import Publications from "@/components/Publications";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import Funding from "@/components/Funding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <DigitalPetalsShader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Team />
        <Publications />
        <News />
        <Gallery />
        <Funding />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

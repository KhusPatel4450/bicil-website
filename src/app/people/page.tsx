import type { Metadata } from "next";
import DigitalPetalsShader from "@/components/DigitalPetalsShader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PeopleContent from "@/components/PeopleContent";

export const metadata: Metadata = {
  title: "Our People | BICIL · Brock University",
  description:
    "Meet the researchers at the Bio-Inspired Computational Intelligence Lab at Brock University — faculty, graduate students, and alumni working on evolutionary computation and swarm intelligence.",
};

export default function PeoplePage() {
  return (
    <>
      <DigitalPetalsShader />
      <Navbar />
      <main>
        <PeopleContent />
      </main>
      <Footer />
    </>
  );
}

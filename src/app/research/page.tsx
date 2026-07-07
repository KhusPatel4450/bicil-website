import type { Metadata } from "next";
import DigitalPetalsShader from "@/components/DigitalPetalsShader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResearchContent from "@/components/ResearchContent";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore the research areas and publications of the Bio-Inspired Computational Intelligence Lab (BICIL) at Brock University — evolutionary computation, swarm intelligence, PSO, genetic algorithms, multi-objective optimization, and reinforcement learning.",
};

export default function ResearchPage() {
  return (
    <>
      <DigitalPetalsShader />
      <Navbar />
      <main>
        <ResearchContent />
      </main>
      <Footer />
    </>
  );
}

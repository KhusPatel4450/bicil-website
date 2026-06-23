import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bio-Inspired Computational Intelligence Lab | Brock University",
  description:
    "Research lab at Brock University specializing in evolutionary computation, swarm intelligence, reinforcement learning, and multi-objective optimization. Led by Prof. Beatrice Ombuki-Berman.",
  keywords: [
    "evolutionary computation",
    "swarm intelligence",
    "particle swarm optimization",
    "genetic algorithms",
    "multi-objective optimization",
    "Brock University",
    "computational intelligence",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#091628] text-white">{children}</body>
    </html>
  );
}

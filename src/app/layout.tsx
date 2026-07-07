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
  title: {
    default: "BICIL | Bio-Inspired Computational Intelligence Lab · Brock University",
    template: "%s | BICIL · Brock University",
  },
  description:
    "The Bio-Inspired Computational Intelligence Lab (BICIL) at Brock University, led by Prof. Beatrice Ombuki-Berman, conducts research in evolutionary computation, swarm intelligence, particle swarm optimization (PSO), genetic algorithms, multi-objective optimization, and reinforcement learning.",
  keywords: [
    "BICIL",
    "Bio-Inspired Computational Intelligence Lab",
    "Beatrice Ombuki-Berman",
    "Brock University",
    "Brock University Computer Science",
    "evolutionary computation",
    "swarm intelligence",
    "particle swarm optimization",
    "PSO",
    "genetic algorithms",
    "ant colony optimization",
    "ACO",
    "multi-objective optimization",
    "NSGA-II",
    "reinforcement learning",
    "computational intelligence",
    "bio-inspired algorithms",
    "feature selection",
    "optimization research",
    "St. Catharines Ontario research lab",
    "Canada AI research",
  ],
  authors: [{ name: "Prof. Beatrice Ombuki-Berman" }],
  creator: "BICIL – Brock University",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "BICIL – Bio-Inspired Computational Intelligence Lab",
    title: "BICIL | Bio-Inspired Computational Intelligence Lab · Brock University",
    description:
      "Research lab at Brock University led by Prof. Beatrice Ombuki-Berman, specialising in evolutionary computation, swarm intelligence, PSO, genetic algorithms, and multi-objective optimisation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BICIL – Bio-Inspired Computational Intelligence Lab, Brock University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BICIL | Bio-Inspired Computational Intelligence Lab · Brock University",
    description:
      "Research lab at Brock University specialising in evolutionary computation, swarm intelligence, and multi-objective optimisation. Led by Prof. Beatrice Ombuki-Berman.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import teamData from "@/data/team.json";

type Student = (typeof teamData.students)[number];

function obfuscate(email: string) {
  return email
    .replace("@", " [at] ")
    .replace(/\./g, " [dot] ");
}

function degreeLabel(role: string) {
  if (role === "Doctoral Researcher") return "PhD Researcher";
  if (role === "Graduate Researcher") return "MSc Researcher";
  return "Undergraduate Researcher";
}

export async function generateStaticParams() {
  return teamData.students.map((s) => ({ slug: (s as Student & { slug: string }).slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = (teamData.students as (Student & { slug: string })[]).find(
    (s) => s.slug === slug
  );
  if (!member) return {};
  return {
    title: `${member.name} | BICIL · Brock University`,
    description: member.focus ?? undefined,
  };
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = (teamData.students as (Student & { slug: string; email: string })[]).find(
    (s) => s.slug === slug
  );
  if (!member) notFound();

  const label = degreeLabel(member.role);
  const links = ((member.links ?? []) as { label: string; url: string }[]);
  const interests = ((member.interests ?? []) as string[]);
  const hobbies = ((member.hobbies ?? []) as string[]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#091628]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-24">

          {/* Back */}
          <Link
            href="/people"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-12 transition-colors group focus:outline-none focus-visible:underline"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Team
          </Link>

          {/* Profile header */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">

            {/* Photo */}
            <div className="flex-shrink-0">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-48 md:w-56 h-auto object-contain rounded-sm border border-white/8"
                />
              ) : (
                <div className="w-48 h-48 flex items-center justify-center bg-gradient-to-br from-[#1a3a5c] to-[#0d2035] border border-white/8">
                  <span className="text-4xl font-mono font-bold text-white/25">
                    {member.initials}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-[family-name:var(--font-inter)] tracking-[0.2em] text-white/40 uppercase mb-3">
                {label}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {member.name}
              </h1>

              {/* Contact */}
              <div className="flex flex-col gap-1.5 mb-6">
                {member.email && (
                  <p className="text-white/50 text-sm font-mono">
                    ✉&nbsp; {obfuscate(member.email)}
                  </p>
                )}
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4BBFCF] hover:text-white text-sm transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.url.replace(/^https?:\/\//, "")}
                  </a>
                ))}
              </div>

              {/* Research focus / bio */}
              {member.focus && (
                <p className="text-white/65 leading-relaxed text-[15px] max-w-2xl">
                  {member.focus}
                </p>
              )}
            </div>
          </div>

          {/* Research Interests */}
          {interests.length > 0 && (
            <div className="mt-14 border-t border-white/5 pt-10">
              <p className="text-[10px] font-[family-name:var(--font-inter)] uppercase tracking-[0.2em] text-white/40 mb-5">
                Research Interests
              </p>
              <div className="flex flex-wrap gap-2.5">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-white/65 border border-white/12 px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Hobbies */}
          {hobbies.length > 0 && (
            <div className="mt-10 border-t border-white/5 pt-10">
              <p className="text-[10px] font-[family-name:var(--font-inter)] uppercase tracking-[0.2em] text-white/40 mb-5">
                Hobbies
              </p>
              <div className="flex flex-wrap gap-2.5">
                {hobbies.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-white/65 border border-white/12 px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}

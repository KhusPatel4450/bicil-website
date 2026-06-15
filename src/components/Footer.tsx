const EXPLORE = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/#research" },
  { label: "Team", href: "/people" },
  { label: "Publications", href: "/#publications" },
  { label: "News", href: "/#news" },
  { label: "Contact", href: "/#contact" },
];

const LINKS = [
  {
    label: "Brock CS Department",
    href: "https://brocku.ca/mathematics-science/computer-science/",
  },
  { label: "Google Scholar", href: "https://scholar.google.com" },
  { label: "NSERC", href: "https://www.nserc-crsng.gc.ca/" },
  { label: "GECCO Conference", href: "https://gecco-2024.sigevo.org/" },
  { label: "IEEE TEVC", href: "https://cis.ieee.org/publications/t-evolutionary-computation" },
];

export default function Footer() {
  return (
    <footer
      className="border-t py-12 lg:py-14"
      style={{ background: "#050A14", borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#2A7FC1] rounded-sm flex items-center justify-center text-white text-xs font-bold font-serif select-none">
                BI
              </div>
              <span className="text-white font-semibold text-sm">
                BICIL{" "}
                <span className="text-[#3DAF88] font-normal">
                  · Brock University
                </span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Bio-Inspired Computational Intelligence Lab
              <br />
              Department of Computer Science
              <br />
              Brock University, St. Catharines, Ontario
            </p>
            <p className="text-white/40 text-xs mt-4">
              500 Glenridge Ave · St. Catharines, ON L2S 3A1 · Canada
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <p className="text-white/65 text-[10px] uppercase tracking-widest mb-4 font-medium">
              Explore
            </p>
            <ul className="space-y-2.5">
              {EXPLORE.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-white text-sm transition-colors focus:outline-none focus-visible:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* External links */}
          <nav aria-label="External links">
            <p className="text-white/65 text-[10px] uppercase tracking-widest mb-4 font-medium">
              Links
            </p>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-1 focus:outline-none focus-visible:underline"
                  >
                    {l.label}
                    <svg
                      className="w-3 h-3 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Bio-Inspired Computational
            Intelligence Lab, Brock University. All rights reserved.
          </p>
          <p className="text-white/35 text-xs">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

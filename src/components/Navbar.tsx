"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const HASH_LINKS = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const resolve = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm shadow-slate-200/80"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href={isHome ? "#hero" : "/"}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFCF] rounded-sm"
          >
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="w-10 h-10 object-contain flex-shrink-0"
              style={{ mixBlendMode: "multiply" }}
            />
            <span className="text-slate-900 font-semibold text-base hidden sm:block">BICIL</span>
            <span className="text-slate-300 hidden sm:block mx-1">|</span>
            <img
              src="/brock-logo.png"
              alt="Brock University"
              className="h-8 object-contain hidden sm:block"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {HASH_LINKS.slice(0, 2).map((link) => (
              <a
                key={link.href}
                href={resolve(link.href)}
                className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:text-slate-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/people"
              className={`text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:text-slate-900 ${
                pathname === "/people"
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Team
            </a>
            {HASH_LINKS.slice(2).map((link) => (
              <a
                key={link.href}
                href={resolve(link.href)}
                className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-700 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFCF]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-slate-200 px-6 py-5 space-y-4">
          {HASH_LINKS.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={resolve(link.href)}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-500 hover:text-slate-900 font-medium transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/people"
            onClick={() => setMenuOpen(false)}
            className={`block font-medium transition-colors py-1 ${
              pathname === "/people" ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Team
          </a>
          {HASH_LINKS.slice(2).map((link) => (
            <a
              key={link.href}
              href={resolve(link.href)}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-500 hover:text-slate-900 font-medium transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

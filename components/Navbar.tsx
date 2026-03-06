"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { hash: "usluge", label: "Usluge" },
  { hash: "o-nama", label: "O nama" },
  { hash: "kako-radimo", label: "Kako radimo" },
  { hash: "galerija", label: "Galerija" },
  { hash: "kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  function navHref(hash: string) {
    return isHome ? `#${hash}` : `/#${hash}`;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2f4e] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#f97316] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">N</span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm tracking-wide uppercase">
                Spasić Gradnja
              </div>
              <div className="text-[#f97316] text-xs tracking-widest uppercase">
                Renoviranje &amp; Adaptacija
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={navHref(link.hash)}
                className="text-gray-300 hover:text-[#f97316] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:0642022216"
            className="hidden md:flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-4 py-2 rounded text-sm font-semibold transition-colors duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            064-2022-216
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#243d63] py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={navHref(link.hash)}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-[#f97316] text-sm font-medium px-2 py-1 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0642022216"
              className="flex items-center gap-2 bg-[#f97316] text-white px-4 py-2 rounded text-sm font-semibold w-fit mt-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              064-2022-216
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

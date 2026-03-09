import PhoneLink from "@/components/PhoneLink";

const navLinks = [
  { href: "#usluge", label: "Usluge" },
  { href: "#o-nama", label: "O nama" },
  { href: "#kako-radimo", label: "Kako radimo" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111d2e] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
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
            </a>
            <p className="text-sm leading-relaxed">
              Vaš pouzdan partner za savršeno renoviranje i adaptaciju stanova.
              Sa preko 10 godina iskustva, garantujemo kvalitet.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigacija
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#f97316] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h4>
            <div className="space-y-3 text-sm">
              <PhoneLink
                href="tel:+381642022216"
                className="flex items-center gap-2 hover:text-[#f97316] transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-[#f97316] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                064-2022-216
              </PhoneLink>
              <a
                href="mailto:nspasicgradnja@gmail.com"
                className="flex items-center gap-2 hover:text-[#f97316] transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-[#f97316] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                nspasicgradnja@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>&copy; {new Date().getFullYear()} N Spasić Gradnja. Sva prava zadržana.</p>
          <p className="text-gray-400">
            Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f97316] transition-colors duration-200"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

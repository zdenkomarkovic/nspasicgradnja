import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center  overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/1.webp"
          alt="N Spasić Gradnja"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2f4e]/80 via-[#1a2f4e]/50 to-[#1a2f4e]/20" />
      </div>

      {/* Orange accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f97316]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
              <span className="text-[#f97316] text-sm font-medium">10+ godina iskustva</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Vaš partner za <span className="text-[#f97316]">savršeno renoviranje</span> i
              adaptaciju stanova
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
              Radimo sve završne radove u građevini. Naš stručan tim pruža kvalitetne usluge koje
              transformišu vaš prostor uz pristupačne cene.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-8 py-4 rounded font-semibold text-base transition-colors duration-200 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Kontaktirajte nas
              </a>
              <a
                href="#usluge"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#f97316] text-white hover:text-[#f97316] px-8 py-4 rounded font-semibold text-base transition-all duration-200"
              >
                Naše usluge
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {[
                { value: "10+", label: "Godina iskustva" },
                { value: "200+", label: "Zadovoljnih klijenata" },
                { value: "100%", label: "Zagarantovani kvalitet" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[#f97316]">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: big image */}
          <div className="hidden lg:block relative h-[560px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/2.jpg"
              alt="N Spasić Gradnja radovi"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f4e]/50 to-transparent" />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 bg-[#f97316] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
              Kvalitet zagarantovan
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs uppercase tracking-widest">Skroluj</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}

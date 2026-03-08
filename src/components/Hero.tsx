export default function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-[#1a2f4e] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #f97316 0px,
              #f97316 1px,
              transparent 1px,
              transparent 60px
            )`,
          }}
        />
      </div>

      {/* Orange accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f97316]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-0">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 sm:mb-6">
            Vaš partner za{" "}
            <span className="text-[#f97316]">savršeno renoviranje</span> i
            adaptaciju stanova
          </h1>

          <p className="text-gray-300 text-sm sm:text-xl mb-5 sm:mb-10 leading-relaxed max-w-2xl">
            Radimo sve završne radove u građevini. Naš stručan tim pruža
            kvalitetne usluge koje transformišu vaš prostor uz pristupačne
            cene.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-6 py-3 sm:py-4 rounded font-semibold text-sm sm:text-base transition-colors duration-200 shadow-lg"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Kontaktirajte nas
            </a>
            <a
              href="#usluge"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#f97316] text-white hover:text-[#f97316] px-6 py-3 sm:py-4 rounded font-semibold text-sm sm:text-base transition-all duration-200"
            >
              Naše usluge
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs uppercase tracking-widest">Skroluj</span>
        <div className="w-px h-6 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}

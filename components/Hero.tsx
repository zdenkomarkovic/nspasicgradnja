import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/1.webp"
          alt="N Spasić Gradnja"
          fill
          className="object-cover "
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2f4e]/90 via-[#1a2f4e]/60 to-[#1a2f4e]/20" />
      </div>

      {/* Orange accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f97316]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: text */}
          <div>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 sm:mb-6">
              Vaš partner za <span className="text-[#f97316]">renoviranje</span>, adaptacije i{" "}
              <span className="text-[#f97316]">kućne popravke</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-xl mb-4 sm:mb-8 leading-relaxed">
              Radimo sve završne radove u građevini — od kompletnih adaptacija stanova do sitnih
              kućnih popravki. Jedan broj telefona, sve je rešeno.
            </p>

            {/* Two main services highlight */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-8">
              <a
                href="/usluge/adaptacije"
                className="group flex items-center gap-3 bg-white/5 hover:bg-[#f97316]/15 border border-white/10 hover:border-[#f97316]/50 rounded-xl px-4 py-3 transition-all duration-200"
              >
                <div className="w-9 h-9 bg-[#f97316]/20 group-hover:bg-[#f97316] rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200">
                  <svg
                    className="w-5 h-5 text-[#f97316] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Adaptacije</div>
                  <div className="text-gray-200 text-xs">Renoviranje stanova</div>
                </div>
              </a>
              <a
                href="/usluge/hausmajstor"
                className="group flex items-center gap-3 bg-white/5 hover:bg-[#f97316]/15 border border-white/10 hover:border-[#f97316]/50 rounded-xl px-4 py-3 transition-all duration-200"
              >
                <div className="w-9 h-9 bg-[#f97316]/20 group-hover:bg-[#f97316] rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200">
                  <svg
                    className="w-5 h-5 text-[#f97316] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Hausmajstor</div>
                  <div className="text-gray-200 text-xs">Sve kućne popravke</div>
                </div>
              </a>
              <a
                href="/usluge/vodoinstalacije"
                className="group flex items-center gap-3 bg-white/5 hover:bg-[#f97316]/15 border border-white/10 hover:border-[#f97316]/50 rounded-xl px-4 py-3 transition-all duration-200"
              >
                <div className="w-9 h-9 bg-[#f97316]/20 group-hover:bg-[#f97316] rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200">
                  <svg
                    className="w-5 h-5 text-[#f97316] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Vodoinstalacije</div>
                  <div className="text-gray-200 text-xs">Instalacije i popravke</div>
                </div>
              </a>
              <a
                href="/usluge/keramicarski-radovi"
                className="group flex items-center gap-3 bg-white/5 hover:bg-[#f97316]/15 border border-white/10 hover:border-[#f97316]/50 rounded-xl px-4 py-3 transition-all duration-200"
              >
                <div className="w-9 h-9 bg-[#f97316]/20 group-hover:bg-[#f97316] rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200">
                  <svg
                    className="w-5 h-5 text-[#f97316] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Keramičarski radovi</div>
                  <div className="text-gray-200 text-xs">Pločice za sve prostorije</div>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-6 py-3 sm:py-4 rounded font-semibold text-sm sm:text-base transition-colors duration-200 shadow-lg"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
                Kontaktirajte nas
              </a>
              <a
                href="#usluge"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#f97316] text-white hover:text-[#f97316] px-6 py-3 sm:py-4 rounded font-semibold text-sm sm:text-base transition-all duration-200"
              >
                Sve usluge
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
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
    </section>
  );
}

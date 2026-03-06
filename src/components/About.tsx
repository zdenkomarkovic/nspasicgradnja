const badges = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Stručan Tim",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Poverljiv Partner",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    label: "Vrhunjski Materijali",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Pristupačne Cene",
  },
];

export default function About() {
  return (
    <section id="o-nama" className="py-20 bg-[#1a2f4e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wider">
                O nama
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Savršeno Renoviranje i{" "}
              <span className="text-[#f97316]">Adaptacija Stanova</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Radimo sve završne radove u građevini. Sa preko{" "}
              <strong className="text-white">10 godina iskustva</strong>, naš
              tim pruža kvalitetne usluge koje transformišu vaš prostor.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Svaki projekat tretiramo sa maksimalnom pažnjom i profesionalnošću.
              Koristimo isključivo vrhunske materijale i garantujemo kvalitet
              izvođenja radova u dogovorenim rokovima.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-[#f97316]/30 transition-colors duration-200"
                >
                  <div className="text-[#f97316] shrink-0">{badge.icon}</div>
                  <span className="text-white text-sm font-medium">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "10+", label: "Godina iskustva", sub: "u građevinskoj industriji" },
              { value: "200+", label: "Projekata", sub: "uspešno realizovanih" },
              { value: "100%", label: "Zadovoljnih", sub: "klijenata" },
              { value: "5★", label: "Ocena", sub: "kod naših klijenata" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#f97316]/30 hover:bg-[#f97316]/5 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#f97316] mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Adaptacije i Renoviranje",
    description:
      "Kompletne adaptacije stanova i kuća. Od rušenja pregradnih zidova do potpunog preuređenja prostora po vašoj želji i viziji.",
    features: ["Adaptacija prostora", "Rušenje i zidanje", "Gletovanje i farbanje", "Postavljanje podova"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Vodoinstalacije",
    description:
      "Profesionalni vodoinstalater za sve vrste instalacija, popravke i održavanje. Brza reakcija i pouzdano rešenje svih kvarova.",
    features: ["Nove instalacije", "Popravke i servis", "Zamena cevi", "Sanitarni čvorovi"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Keramičarski Radovi",
    description:
      "Precizno polaganje keramičkih pločica za podove i zidove u kupatilima, kuhinjama i svim ostalim prostorijama.",
    features: ["Postavljanje pločica", "Kupatila i kuhinje", "Terasa i balkoni", "Rezanje i obrada"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Hausmajstor",
    description:
      "Sve kućne popravke na jednom mestu. Brza i pouzdana usluga za sve sitne i veće kvarove u vašem domu.",
    features: ["Kućne popravke", "Montaža nameštaja", "Elektro popravke", "Brza intervencija"],
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wider">
              Naše usluge
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2f4e] mb-4">
            Šta nudimo
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Pružamo kompletne usluge renoviranja i adaptacije — sve na jednom mestu.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#f97316]/20 transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-[#1a2f4e]/5 group-hover:bg-[#f97316]/10 rounded-2xl flex items-center justify-center text-[#1a2f4e] group-hover:text-[#f97316] transition-all duration-300 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1a2f4e] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-4 h-4 bg-[#f97316]/10 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-[#1a2f4e] hover:bg-[#243d63] text-white px-8 py-4 rounded font-semibold transition-colors duration-200"
          >
            Zatražite besplatnu ponudu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

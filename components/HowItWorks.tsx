const steps = [
  {
    number: "01",
    title: "Konsultacije",
    description:
      "Zatražite konsultacije za adaptaciju stana i ostvarite svoj san o savršenom prostoru! Razgovaramo o vašim potrebama i procenjujemo obim radova.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    action: { label: "Kontakt", href: "#kontakt" },
  },
  {
    number: "02",
    title: "Ponuda",
    description:
      "Pogledajte našu atraktivnu ponudu za renovaciju i ostvarite svoj san o savršenstvu! Dajemo transparentnu i detaljnu ponudu bez skrivenih troškova.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    action: { label: "Usluge", href: "#usluge" },
  },
  {
    number: "03",
    title: "Realizacija",
    description:
      "Sprovodimo idejno rešenje u delo. Kvalitetna realizacija je zagarantovana! Koristimo vrhunske materijale i poštujemo dogovorene rokove.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    action: { label: "Galerija", href: "#galerija" },
  },
];

export default function HowItWorks() {
  return (
    <section id="kako-radimo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wider">
              Kako radimo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2f4e] mb-4">
            Tri jednostavna koraka
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Jednostavan proces od konsultacija do realizacije vašeg savršenog prostora.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-[#f97316]/20 -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#f97316]/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-8 bg-[#f97316] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-[#1a2f4e]/5 group-hover:bg-[#f97316]/10 rounded-xl flex items-center justify-center text-[#1a2f4e] group-hover:text-[#f97316] transition-all duration-300 mb-6 mt-2">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1a2f4e] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {step.description}
              </p>
              <a
                href={step.action.href}
                className="inline-flex items-center gap-1 text-[#f97316] font-semibold text-sm hover:gap-2 transition-all duration-200"
              >
                {step.action.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Arrow connector (desktop, not last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-[#f97316]/30 rounded-full items-center justify-center z-10">
                  <svg className="w-4 h-4 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

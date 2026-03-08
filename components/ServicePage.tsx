import Image from "next/image";
import Link from "next/link";

interface FAQ {
  q: string;
  a: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string[];
  images: string[];
  features: { title: string; description: string }[];
  faqs: FAQ[];
  breadcrumb: string;
}

export default function ServicePage({
  title,
  subtitle,
  description,
  images,
  features,
  faqs,
  breadcrumb,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a2f4e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#f97316] transition-colors">
              Početna
            </Link>
            <span>/</span>
            <Link href="/#usluge" className="hover:text-[#f97316] transition-colors">
              Usluge
            </Link>
            <span>/</span>
            <span className="text-[#f97316]">{breadcrumb}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wider">
                Naše usluge
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a2f4e] mb-6">O usluzi</h2>
              <div className="space-y-4">
                {description.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-6 py-3 rounded font-semibold transition-colors duration-200"
                >
                  Zatražite besplatnu ponudu
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Main image */}
            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={images[0]!}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2f4e]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a2f4e] mb-10 text-center">Šta je uključeno</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-[#f97316]/20 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 bg-[#f97316]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1a2f4e] mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      {images.length > 1 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1a2f4e] mb-8 text-center">Galerija radova</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.slice(1).map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <Image
                    src={src}
                    alt={`${title} - primer ${i + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a2f4e] mb-10 text-center">
            Često postavljana pitanja
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="flex items-start gap-4 p-6">
                  <div className="w-6 h-6 bg-[#f97316] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">?</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a2f4e] mb-2">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#1a2f4e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Spremni ste da počnete?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Kontaktirajte nas danas i dobijte besplatnu procenu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0642022216"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-8 py-4 rounded font-semibold transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              064-2022-216
            </a>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#f97316] text-white hover:text-[#f97316] px-8 py-4 rounded font-semibold transition-all duration-200"
            >
              Pošaljite upit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hausmajstor - Kućne Popravke | N Spasić Gradnja",
  description:
    "Sve kućne popravke na jednom mestu — montaža nameštaja, sitni elektroradovi, popravke, farbanje, silikoniranje i još mnogo toga. Brza i pouzdana usluga.",
};

const categories = [
  {
    title: "Montaža i ugradnja",
    icon: "🔧",
    services: [
      "Montaža kupljenog nameštaja (IKEA i ostali)",
      "Ugradnja kuhinjskih elemenata i ploče za kuvanje",
      "Montaža TV nosača i polica",
      "Ugradnja ugradbenih ormara",
      "Montaža ogledala, slika i dekoracija",
      "Ugradnja roletni, žaluzina i zavesa",
      "Montaža klima uređaja (instalacija i konzola)",
      "Ugradnja kućanskih aparata (mašine za sudove, veš...)",
    ],
  },
  {
    title: "Vrata, prozori i podovi",
    icon: "🚪",
    services: [
      "Podešavanje i regulisanje šarki na vratima",
      "Zamena i ugradnja brava i cilindara",
      "Popravka škripanja i nadimanja vrata",
      "Ugradnja pragova i lajsni",
      "Zaptivanje prozora i vrata od propuha",
      "Zamena zaptivki na prozorima i terasnim vratima",
      "Popravka ili zamena brava na balkonu",
      "Lepljenje i popravljanje podnih lajsni",
    ],
  },
  {
    title: "Zidovi i bojenje",
    icon: "🎨",
    services: [
      "Farbanje jedne prostorije ili celog stana",
      "Krpljenje rupa i pukotina u zidu",
      "Sitno gletovanje pre farbanja",
      "Postavljanje tapeta",
      "Skidanje starih tapeta",
      "Bušenje zidova i montaža tiplova",
      "Ugradnja utičnica za TV i klima",
      "Postavljanje dekorativnih panela i okvira",
    ],
  },
  {
    title: "Vodovod i sanitarije",
    icon: "🚿",
    services: [
      "Zamena slavinskog kartuša",
      "Popravka curenja slavine ili wc kazaneta",
      "Silikoniranje kade, tuša i sudopere",
      "Zamena wc daske",
      "Ugradnja i zamena slavina",
      "Čišćenje i odčepljivanje odvoda",
      "Montaža tuš kabine",
      "Zamena sifona i odvodnih cevi",
    ],
  },
  {
    title: "Elektrika i osvetljenje",
    icon: "💡",
    services: [
      "Zamena prekidača i utičnica",
      "Montaža lustera i plafonskog osvetljenja",
      "Ugradnja LED traka i spot svetiljki",
      "Zamena osigurača i automatskih osigurača",
      "Montaža interfona",
      "Ugradnja zvona",
      "Premeštanje utičnica (bez probijanja zidova)",
      "Montaža razdjelnika i produžnih kablova",
    ],
  },
  {
    title: "Ostale sitne popravke",
    icon: "🛠️",
    services: [
      "Popravka ili zamena brave na poštanskom sandučetu",
      "Montaža zaštitnih mreža na prozorima",
      "Ugradnja hvataljki i kuka u kupatilu",
      "Postavljanje gumenih podloški i antikliznih traka",
      "Popravka garderobera i fioka",
      "Zaptivanje terasa i balkona silikonom",
      "Popravka i zamena kvake",
      "Sitne opravke na tavanicama i plafonu",
    ],
  },
];

const faqs = [
  {
    q: "Kako da zakažem dolazak hausmajstora?",
    a: "Pozovite nas na 064-2022-216 ili pošaljite upit putem kontakt forme. Dogovaramo termin u roku od 1–2 radna dana, a moguće je i vikend po dogovoru.",
  },
  {
    q: "Kako se naplaćuje usluga?",
    a: "Naplaćujemo po poslu — paušal po dolasku + materijal ukoliko je potreban. Uvek unapred kažemo cenu pre nego što počnemo, bez skrivenih troškova.",
  },
  {
    q: "Mogu li da napravim listu više popravki odjednom?",
    a: "Apsolutno — to je i preporučeno. Napravite listu svega što treba, pošaljite nam je unapred i majstor dolazi spreman sa odgovarajućim alatom i delovima.",
  },
  {
    q: "Šta ako treba kupiti delove ili materijal?",
    a: "Ako majstor nema potreban deo pri sebi, organizujemo nabavku i vraćamo se da završimo posao. Dajemo vam potvrdu o troškovima materijala.",
  },
  {
    q: "Da li dolazite i za jednu malu popravku?",
    a: "Da, dolazimo i za jednu jedinu popravku — bez obzira koliko mala bila. Vaše zadovoljstvo je naš prioritet.",
  },
];

export default function HausmajstorPage() {
  const images = [
    "/IMG-20260123-WA0036.jpg",
    "/IMG-20260123-WA0024.jpg",
    "/IMG-20260123-WA0025.jpg",
    "/IMG-20260123-WA0026.jpg",
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a2f4e] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#f97316] transition-colors">Početna</Link>
            <span>/</span>
            <Link href="/#usluge" className="hover:text-[#f97316] transition-colors">Usluge</Link>
            <span>/</span>
            <span className="text-[#f97316]">Hausmajstor</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wider">Naše usluge</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Hausmajstor — Sve Kućne Popravke
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Jedan poziv, sve je rešeno. Brza i pouzdana usluga za sve popravke i montažne radove u vašem domu — od sitnica do kompletnijih zadataka.
            </p>
          </div>
        </div>
      </section>

      {/* Intro + slika */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1a2f4e] mb-6">O usluzi</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Svaki dom s vremenom nakuplja sitne popravke koje se odlažu — nagnuta vrata, odlepljena lajsna, pokvaren slavinski kartuš, polica koja treba da se montira. Umesto da tražite različite majstore za svaki problem, naš hausmajstor dolazi i rešava sve odjednom.
                </p>
                <p>
                  Majstor dolazi opremljen alatom i najčešće korišćenim rezervnim delovima, tako da se većina popravki rešava odmah pri prvoj poseti — bez čekanja na delove ili ponovnih dolazaka.
                </p>
                <p>
                  Usluga je idealna za stanodavce, starije osobe i sve koji žele da imaju pouzdanog majstora na jednom broju telefona. Napravite listu svega što treba i pošaljite nam je — dolazimo pripremljeni.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="tel:0642022216"
                  className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-6 py-3 rounded font-semibold transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Pozovite: 064-2022-216
                </a>
              </div>
            </div>
            <div className="relative h-80 lg:h-[440px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={images[0]!}
                alt="Hausmajstor usluge"
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

      {/* Kategorije usluga */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2f4e] mb-3">
              Kompletna lista usluga
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Sve što možemo da uradimo za vas — u jednoj poseti ili po pozivu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-[#f97316]/20 transition-all duration-200"
              >
                <div className="bg-[#1a2f4e] px-6 py-4 flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-white font-bold">{cat.title}</h3>
                </div>
                <ul className="p-5 space-y-2.5">
                  {cat.services.map((service) => (
                    <li key={service} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <div className="w-4 h-4 bg-[#f97316]/15 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            Ne vidite šta vam treba? Pozovite nas — rešavamo i sve ostalo što nije na listi.
          </p>
        </div>
      </section>

      {/* Galerija */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a2f4e] mb-8 text-center">Galerija radova</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.slice(1).map((src, i) => (
              <div key={src} className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                <Image
                  src={src}
                  alt={`Hausmajstor - primer ${i + 2}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a2f4e] mb-10 text-center">
            Često postavljana pitanja
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-start gap-4">
                <div className="w-6 h-6 bg-[#f97316] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">?</span>
                </div>
                <div>
                  <p className="font-semibold text-[#1a2f4e] mb-2">{faq.q}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2f4e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Imate listu popravki?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Pošaljite nam je unapred i dolazimo pripremljeni — sve u jednoj poseti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0642022216"
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-8 py-4 rounded font-semibold transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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

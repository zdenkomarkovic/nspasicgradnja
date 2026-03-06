"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(
      `Upit za renoviranje - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Ime i prezime: ${formData.name}\nTelefon: ${formData.phone}\nEmail: ${formData.email}\n\nPoruka:\n${formData.message}`
    );
    window.location.href = `mailto:nspasicgradnja@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wider">
              Kontakt
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2f4e] mb-4">
            Kontaktirajte nas
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Zatražite besplatnu konsultaciju i dobijte ponudu za vaš projekat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#1a2f4e] mb-6">
                Informacije za kontakt
              </h3>

              <div className="space-y-5">
                <a
                  href="tel:0642022216"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#f97316]/10 rounded-xl flex items-center justify-center text-[#f97316] shrink-0 group-hover:bg-[#f97316] group-hover:text-white transition-all duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                      Telefon
                    </div>
                    <div className="text-[#1a2f4e] font-semibold group-hover:text-[#f97316] transition-colors duration-200">
                      064-2022-216
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:nspasicgradnja@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#f97316]/10 rounded-xl flex items-center justify-center text-[#f97316] shrink-0 group-hover:bg-[#f97316] group-hover:text-white transition-all duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                      Email
                    </div>
                    <div className="text-[#1a2f4e] font-semibold group-hover:text-[#f97316] transition-colors duration-200">
                      nspasicgradnja@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f97316]/10 rounded-xl flex items-center justify-center text-[#f97316] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                      Radno vreme
                    </div>
                    <div className="text-[#1a2f4e] font-semibold">
                      Pon – Sub: 08:00 – 20:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-[#1a2f4e] rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Hitna intervencija?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Pozovite nas odmah i naš tim ce reagovati što je pre moguće.
              </p>
              <a
                href="tel:0642022216"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-5 py-2.5 rounded font-semibold text-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Pozovite: 064-2022-216
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2f4e] mb-2">
                  Hvala vam!
                </h3>
                <p className="text-gray-500">
                  Vaš upit je prosleđen. Kontaktiraćemo vas uskoro.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Ime i prezime *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vaše ime i prezime"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Broj telefona *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06x xxx xxxx"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email adresa
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vas@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] transition-colors duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Poruka *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Opišite vaš projekat ili šta vam je potrebno..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f97316] hover:bg-[#ea6c0a] text-white py-3.5 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Pošaljite upit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

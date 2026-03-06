"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/IMG-20260123-WA0024.jpg",
  "/IMG-20260123-WA0025.jpg",
  "/IMG-20260123-WA0026.jpg",
  "/IMG-20260123-WA0027.jpg",
  "/IMG-20260123-WA0028.jpg",
  "/IMG-20260123-WA0029.jpg",
  "/IMG-20260123-WA0030.jpg",
  "/IMG-20260123-WA0031.jpg",
  "/IMG-20260123-WA0032.jpg",
  "/IMG-20260123-WA0033.jpg",
  "/IMG-20260123-WA0034.jpg",
  "/IMG-20260123-WA0035.jpg",
  "/IMG-20260123-WA0036.jpg",
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="galerija" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wider">
              Galerija
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2f4e] mb-4">
            Naši radovi
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Pogledajte neke od naših realizovanih projekata.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightbox(src)}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f97316]"
            >
              <Image
                src={src}
                alt={`Projekat ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#1a2f4e]/0 group-hover:bg-[#1a2f4e]/40 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            onClick={() => setLightbox(null)}
            aria-label="Zatvori"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Uvecana slika"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}

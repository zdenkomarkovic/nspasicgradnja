import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = buildMetadata({
  title: "N Spasić Gradnja — Renoviranje i Adaptacija Stanova",
  description:
    "Vaš partner za savršeno renoviranje i adaptaciju stanova u Srbiji. Sa preko 10 godina iskustva pružamo kvalitetne usluge: adaptacije, vodoinstalacije, keramičarski radovi, hausmajstor. Pozovite 064-2022-216.",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "N Spasić Gradnja",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Renoviranje i adaptacija stanova, vodoinstalacije, keramičarski radovi i hausmajstor usluge u Srbiji. Više od 10 godina iskustva.",
  telephone: "+381642022216",
  email: "nspasicgradnja@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RS",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Građevinske usluge",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Adaptacije i Renoviranje Stanova",
          url: `${SITE_URL}/usluge/adaptacije`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vodoinstalacije",
          url: `${SITE_URL}/usluge/vodoinstalacije`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Keramičarski Radovi",
          url: `${SITE_URL}/usluge/keramicarski-radovi`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hausmajstor — Kućne Popravke",
          url: `${SITE_URL}/usluge/hausmajstor`,
        },
      },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16751541983"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16751541983');
          `}
        </Script>
        <JsonLd data={localBusinessSchema} />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N Spasić Gradnja - Renoviranje i Adaptacija Stanova",
  description:
    "Vaš partner za savršeno renoviranje i adaptaciju stanova. Sa preko 10 godina iskustva pružamo kvalitetne usluge: adaptacije, vodoinstalacije, keramičarski radovi, hausmajstor.",
  keywords:
    "renoviranje, adaptacija stanova, vodoinstalacije, keramičarski radovi, hausmajstor, Srbija",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

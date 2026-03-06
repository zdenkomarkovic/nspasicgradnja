import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Vodoinstalacije | N Spasić Gradnja",
  description:
    "Profesionalne vodoinstalacije — nove instalacije, popravke kvarova, zamena cevi, sanitarni čvorovi. Brza reakcija i pouzdano rešenje.",
};

export default function VodoinstalacijePage() {
  return (
    <ServicePage
      breadcrumb="Vodoinstalacije"
      title="Profesionalne Vodoinstalacije"
      subtitle="Brza i pouzdana rešenja za sve vrste vodoinstalaterskih radova — od novih instalacija do hitnih popravki kvarova."
      description={[
        "Vodoinstalaterski kvarovi mogu da nastanu u najnepovoljnijem trenutku — puknuta cev, začepljeni odvodi ili neispravna slavina mogu napraviti ozbiljnu štetu ako se ne reše brzo i stručno. Naš tim iskusnih vodoinstalatera dostupan je da reši svaki problem profesionalno i efikasno.",
        "Osim hitnih intervencija, izvodimo i kompletne vodoinstalaterske radove pri adaptacijama — postavljanje novih instalacija za vodovod i kanalizaciju, ugradnju sanitarnih uređaja, bojlera, radijatora i sistema grejanja.",
        "Koristimo cevi i fitinge proverenih proizvođača koji garantuju dugotrajnost i pouzdanost instalacija. Svaki rad se izvodi po važećim standardima i uz poštovanje tehničkih normi.",
        "Pre početka radova detaljno pregledamo stanje postojećih instalacija i dajemo preporuke. Transparentno objašnjavamo šta je potrebno uraditi i zašto, bez skrivenih troškova.",
      ]}
      images={[
        "/IMG-20260123-WA0028.jpg",
        "/IMG-20260123-WA0029.jpg",
        "/IMG-20260123-WA0030.jpg",
        "/IMG-20260123-WA0031.jpg",
      ]}
      features={[
        {
          title: "Nove instalacije",
          description:
            "Kompletno projektovanje i postavljanje vodovodnih i kanalizacionih instalacija pri adaptacijama i izgradnji.",
        },
        {
          title: "Popravke kvarova",
          description:
            "Brzo pronalaženje i otklanjanje svih vrsta kvarova — curenje, pucanje cevi, začepljenja, neispravan pribor.",
        },
        {
          title: "Zamena cevi",
          description:
            "Zamena dotrajalih starih cevi modernim materijalima (PP, PEX, inox) uz minimalno rušenje.",
        },
        {
          title: "Sanitarni čvorovi",
          description:
            "Kompletna ugradnja kupatilske i kuhinjske opreme — WC školjke, lavaboi, tuševi, kade, slavine.",
        },
        {
          title: "Bojleri i grejanje",
          description:
            "Ugradnja i servis bojlera, radijatora, podnog grejanja i svih sistema za zagrevanje vode.",
        },
        {
          title: "Hitne intervencije",
          description:
            "Brza reakcija pri hitnim kvarovima — curenje, poplava. Dostupni smo za hitne slučajeve.",
        },
      ]}
      faqs={[
        {
          q: "Koliko brzo možete doći pri hitnom kvaru?",
          a: "Trudimo se da odgovorimo na hitne pozive u što kraćem roku. U slučaju hitne intervencije (poplava, pukla cev), kontaktirajte nas odmah na 064-2022-216.",
        },
        {
          q: "Kako da znam da li mi treba zamena cevi ili samo popravka?",
          a: "Naš majstor će pri obilasku proceniti stanje instalacija i dati vam iskrenu preporuku — da li je isplativije popraviti ili zameniti. Obilazak je besplatan.",
        },
        {
          q: "Koliko košta ugradnja novog kupatila?",
          a: "Cena zavisi od veličine prostora i odabrane opreme. Kontaktirajte nas za besplatnu procenu — posle obilaska prostora i odabira opreme, dajemo fiksnu ponudu.",
        },
        {
          q: "Da li radite i na terasi ili u zajedničkim prostorijama zgrade?",
          a: "Da, radimo sve vrste vodoinstalaterskih radova — u stanu, na terasi, u podrumu, garaži i zajedničkim instalacionim šahtovima.",
        },
        {
          q: "Koliko traje ugradnja novog bojlera?",
          a: "Ugradnja standardnog bojlera traje 2–4 sata. Ako je potrebna i nova instalacija (cevi, elektrika), vreme može biti duže.",
        },
      ]}
    />
  );
}

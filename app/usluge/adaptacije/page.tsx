import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Adaptacije i Renoviranje Stanova",
  description:
    "Kompletne adaptacije i renoviranje stanova i kuća u Srbiji. Rušenje pregradnih zidova, gletovanje, farbanje, postavljanje podova i sve završne radove. Besplatna konsultacija.",
  url: `${SITE_URL}/usluge/adaptacije`,
});

export default function AdaptacijePage() {
  return (
    <ServicePage
      breadcrumb="Adaptacije i Renoviranje"
      title="Adaptacije i Renoviranje Stanova"
      subtitle="Kompletna transformacija vašeg prostora — od ideje do savršenog doma. Radimo sve faze adaptacije uz garantovani kvalitet i poštovanje rokova."
      description={[
        "Adaptacija stana je veliki korak koji zahteva iskusne i pouzdane majstore. Sa više od 10 godina iskustva u ovoj oblasti, naš tim je izveo stotine uspešnih projekata — od manjih renoviranja do kompletnih adaptacija od nule.",
        "Svaki projekat počinje detaljnom konsultacijom gde pažljivo slušamo vaše potrebe i želje. Zajedno definišemo obim radova, biramo materijale i dogovaramo rokove. Transparentna komunikacija tokom celog projekta osigurava da ste uvek u toku sa napretkom radova.",
        "Koristimo isključivo sertifikovane materijale od proverenih dobavljača. Naši majstori su specijalizovani za sve vrste završnih radova — od rušenja i zidanja, gletovanja i farbanja, do postavljanja podnih obloga i ugradnje enterijera.",
        "Po završetku radova, prostor ostavljamo čist i ureden, a vi dobijate garanciju na izvedene radove. Vaše zadovoljstvo je naš najveći uspeh.",
      ]}
      images={["/a (5).jpg", "/a (6).jpg", "/a (15).jpg", "/a (16).jpg"]}
      features={[
        {
          title: "Rušenje i zidanje",
          description:
            "Uklanjanje starih pregradnih zidova i izgradnja novih prema vašem novom rasporedu prostora.",
        },
        {
          title: "Gletovanje i farbanje",
          description:
            "Fino gletovanje zidova i plafona do glatke površine, kao i profesionalno farbanje u željenim bojama.",
        },
        {
          title: "Postavljanje podova",
          description:
            "Ugradnja laminata, parketa, vinila i svih vrsta podnih obloga uz precizno nivelisanje podloge.",
        },
        {
          title: "Ugradnja vrata i prozora",
          description:
            "Montaža unutrašnjih vrata, prozorskih okvira i pratećih elemenata sa preciznim zaptivanjem.",
        },
        {
          title: "Enterijerni radovi",
          description:
            "Postavljanje spuštenih plafona, ugradnja ugradbenih ormara i drugi enterijerni detalji.",
        },
        {
          title: "Čišćenje i predaja",
          description:
            "Po završetku svih radova vršimo kompletno čišćenje i uredno predajemo prostor.",
        },
      ]}
      faqs={[
        {
          q: "Koliko dugo traje adaptacija stana?",
          a: "Vreme trajanja zavisi od obima radova. Manija renoviranja (farbanje, laminat) traju 3–7 dana, dok kompletna adaptacija od nule može trajati 4–8 nedelja. Tačan rok utvrđujemo pri prvoj konsultaciji.",
        },
        {
          q: "Da li radite i manje popravke ili samo kompletne adaptacije?",
          a: "Radimo projekte svih obima — od manjih popravki i osvežavanja, do kompletnih adaptacija. Kontaktirajte nas i opisite šta vam je potrebno.",
        },
        {
          q: "Ko obezbeđuje materijal?",
          a: "Možemo da obezbeđujemo materijal mi (uz fakturu i garanciju), ili vi kupujete materijal po našoj specifikaciji — kako vama odgovara.",
        },
        {
          q: "Da li dajete garanciju na radove?",
          a: "Da, dajemo pismenu garanciju na sve izvedene radove. Rok garancije zavisi od vrste radova i dogovorimo ga pre početka.",
        },
        {
          q: "Da li morate da vidite prostor pre davanja ponude?",
          a: "Za preciznu ponudu obavezno je da naš majstor obiđe prostor. Obilazak i konsultacija su besplatni i bez obaveza.",
        },
      ]}
    />
  );
}

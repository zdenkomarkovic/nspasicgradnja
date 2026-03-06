import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Keramičarski Radovi | N Spasić Gradnja",
  description:
    "Precizno polaganje keramičkih pločica za podove i zidove — kupatila, kuhinje, terase, balkoni. Savršena funga i ravne ivice zagarantovane.",
};

export default function KeramicarskiRadoviPage() {
  return (
    <ServicePage
      breadcrumb="Keramičarski radovi"
      title="Keramičarski Radovi"
      subtitle="Precizno i uredno polaganje pločica za sve prostorije — savršena funga, ravne ivice i dugotrajni rezultat koji se primeti."
      description={[
        "Keramičarski radovi su jedan od najvažnijih segmenata pri renoviranju — pogrešno položene pločice ili loša funga mogu upropastiti celokupni vizuelni efekat prostora. Naši keramičari imaju dugogodišnje iskustvo i pažnju posvećenu svakom detalju.",
        "Radimo sa svim vrstama pločica — keramika, porcelan, mozaik, kamen i veliki format. Bez obzira da li renovirate malo kupatilo ili veliku terasnu površinu, svaki posao završavamo sa jednakom pažnjom.",
        "Pre polaganja pločica pažljivo pripremamo podlogu — nivelisanje, lepak odgovarajuće klase i precizno rezanje pločica oko svih prepreka. Koristimo isključivo materijale za fugovanje i lepljenje proverenih brendova koji garantuju dugotrajnost.",
        "Posebno pažljivo radimo u mokrim prostorima (kupatilo, kuhinja) gde je hidroizolacija podloge ključna. Sve radove izvodimo u skladu sa tehničkim normama za mokre prostorije.",
      ]}
      images={[
        "/IMG-20260123-WA0032.jpg",
        "/IMG-20260123-WA0033.jpg",
        "/IMG-20260123-WA0034.jpg",
        "/IMG-20260123-WA0035.jpg",
      ]}
      features={[
        {
          title: "Kupatila i kuhinje",
          description:
            "Kompletno postavljanje pločica u mokrim prostorijama sa prethodnom hidroizolacijom podloge.",
        },
        {
          title: "Podovi i zidovi",
          description:
            "Polaganje podnih i zidnih pločica svih formata i materijala uz precizno rezanje i fugovane.",
        },
        {
          title: "Terase i balkoni",
          description:
            "Postavljanje pločica otpornih na atmosferske uticaje uz adekvatni pad za odvodnjavanje.",
        },
        {
          title: "Mozaik i dekorativne pločice",
          description:
            "Postavljanje mozaika, ukrasnih bordura i dekorativnih elemenata za poseban vizuelni efekat.",
        },
        {
          title: "Veliki formati",
          description:
            "Ugradnja pločica velikog formata (60×60, 60×120 i više) uz precizno nivelisanje i lepak visoke čvrstoće.",
        },
        {
          title: "Rezanje i obrada",
          description:
            "Precizno rezanje pločica oko sifona, cevi, ugaonika i svih detalja uz profesionalnu opremu.",
        },
      ]}
      faqs={[
        {
          q: "Koliko dugo moram da čekam pre nego što mogu koristiti kupatilo?",
          a: "Lepak se suši 24 sata, a funga 24–48 sati. Preporučujemo da kupatilo ne koristite 48 sati od završetka fugovnja radi najboljeg rezultata.",
        },
        {
          q: "Da li pomažete pri odabiru pločica i dezena?",
          a: "Rado ćemo vam dati preporuke za kombinacije boja i formata na osnovu vašeg prostora i ukusa. Iskustvo nam govori šta izgleda dobro u praksi.",
        },
        {
          q: "Ko kupuje pločice — ja ili vi?",
          a: "Najčešće klijenti sami biraju i kupuju pločice (uz naš savet oko količine), a mi obezbeđujemo sav materijal za ugradnju (lepak, funga, hidroizolacija). Možemo i mi nabaviti sve ako to preferirate.",
        },
        {
          q: "Šta ako se pločica odlijepi posle nekog vremena?",
          a: "Dajemo garanciju na sve izvedene radove. Ako do problema dođe usled greške u izvedbi, dolazimo i popravljamo bez dodatnih troškova.",
        },
        {
          q: "Možete li da skinete stare pločice i postavite nove?",
          a: "Da, radimo kompletnu pripremu — skidanje starih pločica, poravnanje podloge i ugradnju novih. Procena stanja podloge se radi pri obillasku.",
        },
      ]}
    />
  );
}

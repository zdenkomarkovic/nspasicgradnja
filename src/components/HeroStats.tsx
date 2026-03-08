const stats = [
  { value: "10+", label: "Godina iskustva" },
  { value: "200+", label: "Zadovoljnih klijenata" },
  { value: "100%", label: "Zagarantovani kvalitet" },
];

export default function HeroStats() {
  return (
    <section className="bg-[#f97316] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm sm:text-base mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Check, X } from "lucide-react";

type CompareValue = "YES" | "NO" | "LOW" | "HIGH";

interface Row {
  feature: string;
  hyprfit: CompareValue;
  fitnessApp: CompareValue;
  trainer: CompareValue;
}

const rows: Row[] = [
  { feature: "Cost", hyprfit: "LOW", fitnessApp: "HIGH", trainer: "HIGH" },
  { feature: "Truly Personalized Workouts", hyprfit: "YES", fitnessApp: "NO", trainer: "NO" },
  { feature: "Adapts As You Train", hyprfit: "YES", fitnessApp: "NO", trainer: "NO" },
  { feature: "In‑Workout Feedback", hyprfit: "YES", fitnessApp: "NO", trainer: "YES" },
  { feature: "24/7 Access", hyprfit: "YES", fitnessApp: "NO", trainer: "NO" },
  { feature: "Wearable Integration", hyprfit: "YES", fitnessApp: "YES", trainer: "NO" },
  { feature: "Hassle‑free progress tracking", hyprfit: "YES", fitnessApp: "NO", trainer: "NO" },
  { feature: "AI Nutrition Plans", hyprfit: "YES", fitnessApp: "NO", trainer: "NO" },
];

function CellValue({ v, emphasize }: { v: CompareValue; emphasize?: boolean }) {
  if (v === "YES") {
    return (
      <div className="flex items-center justify-center">
        <Check className={`w-5 h-5 ${emphasize ? "text-primary" : "text-green-500"}`} aria-hidden="true" />
        <span className="sr-only">Yes</span>
      </div>
    );
  }
  if (v === "NO") {
    return (
      <div className="flex items-center justify-center">
        <X className="w-5 h-5 text-red-500" aria-hidden="true" />
        <span className="sr-only">No</span>
      </div>
    );
  }
  if (v === "LOW") {
    return <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${emphasize ? "bg-primary/15 text-primary" : "bg-white/10 text-white/80"}`}>Low</span>;
  }
  return <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-red-500/15 text-red-400">High</span>;
}

const CompareSection = () => {
  return (
    <section id="compare" className="section-anchor py-20 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Why Hyprfit Wins</h2>
        <p className="text-white/80 mt-3 mb-10 max-w-2xl mx-auto">See the difference at a glance.</p>

        <div className="overflow-hidden rounded-2xl bg-black/20 border border-white/10">
          <table className="w-full text-left">
            <thead>
              <tr className="text-white/80 text-sm">
                <th className="px-4 py-4 font-semibold w-[36%] text-left">Feature</th>
                <th className="px-4 py-4 font-semibold text-center">
                  <div className="bg-gradient-to-b from-primary/20 to-primary/5 px-3 py-2 rounded-xl inline-block">Hyprfit</div>
                </th>
                <th className="px-4 py-4 font-semibold text-center">Other Fitness Apps</th>
                <th className="px-4 py-4 font-semibold text-center">Personal Trainer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 [&>tr:nth-child(odd)]:bg-white/5">
              {rows.map((r, i) => (
                <tr key={r.feature} className="text-white/85">
                  <td className="px-4 py-4 text-left text-white/85 text-sm">{r.feature}</td>
                  <td className={`px-4 py-4 text-center ${"bg-primary/10"}`}>
                    <CellValue v={r.hyprfit} emphasize />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <CellValue v={r.fitnessApp} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <CellValue v={r.trainer} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-white/60 text-xs mt-4">*Compared with leading apps and average trainer rates</p>

        <a
          href="#pricing"
          className="mt-6 inline-flex btn-accent items-center justify-center"
        >
          Experience The Difference →
        </a>
      </div>
    </section>
  );
};

export default CompareSection;

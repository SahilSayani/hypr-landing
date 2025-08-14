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
  { feature: "Unlimited Personalized Workouts", hyprfit: "YES", fitnessApp: "NO", trainer: "NO" },
  { feature: "24/7 Access", hyprfit: "YES", fitnessApp: "NO", trainer: "NO" },
  { feature: "Continuous Adaptation and Learning", hyprfit: "YES", fitnessApp: "NO", trainer: "NO" },
  { feature: "Realtime In-Workout Feedback", hyprfit: "YES", fitnessApp: "NO", trainer: "YES" },
  { feature: "Holistic Wellness Tracking", hyprfit: "YES", fitnessApp: "YES", trainer: "NO" },
  { feature: "User Customizable Workouts", hyprfit: "YES", fitnessApp: "NO", trainer: "NO" },
  { feature: "Wearables Integration", hyprfit: "YES", fitnessApp: "YES", trainer: "NO" },
  { feature: "Reward System", hyprfit: "YES", fitnessApp: "NO", trainer: "NO" },
  { feature: "Safe & Harassment-Free", hyprfit: "YES", fitnessApp: "NO", trainer: "NO" },
];

function CellValue({ v, emphasize }: { v: CompareValue; emphasize?: boolean }) {
  if (v === "YES") {
    return (
      <div className="flex items-center justify-center gap-2">
        <Check className={`w-4 h-4 ${emphasize ? "text-primary" : "text-secondary"}`} />
        <span className={`text-xs font-semibold tracking-wide ${emphasize ? "text-primary" : "text-foreground/80"}`}>YES</span>
      </div>
    );
  }
  if (v === "NO") {
    return (
      <div className="flex items-center justify-center gap-2">
        <X className="w-4 h-4 text-destructive" />
        <span className="text-xs font-semibold tracking-wide text-foreground/60">NO</span>
      </div>
    );
  }
  if (v === "LOW") {
    return <span className={`text-xs font-bold ${emphasize ? "text-primary" : "text-foreground/80"}`}>LOW</span>;
  }
  return <span className="text-xs font-bold text-foreground/60">HIGH</span>;
}

const CompareSection = () => {
  return (
    <section id="compare" className="section-anchor py-20 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">How We Compare</h2>
        <p className="text-white/80 mt-3 mb-10 max-w-2xl mx-auto">
          See why thousands choose Hyprfit over expensive trainers and generic apps.
        </p>

        <div className="overflow-hidden rounded-2xl bg-black/20 border border-white/10">
          <table className="w-full text-left">
            <thead>
              <tr className="text-white/80 text-sm">
                <th className="px-4 py-4 font-semibold w-[34%]">Feature/USP</th>
                <th className="px-4 py-4 font-semibold text-center">
                  <div className="bg-gradient-to-b from-primary/20 to-primary/5 px-3 py-2 rounded-xl inline-block">Hyprfit App</div>
                </th>
                <th className="px-4 py-4 font-semibold text-center">Fitness App + Online Trainer</th>
                <th className="px-4 py-4 font-semibold text-center">Physical Trainer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((r, i) => (
                <tr key={r.feature} className="text-white/85">
                  <td className="px-4 py-5 text-left text-white/85 text-sm">{r.feature}</td>
                  <td className={`px-4 py-5 text-center ${"bg-primary/10"}`}>
                    <CellValue v={r.hyprfit} emphasize />
                  </td>
                  <td className="px-4 py-5 text-center">
                    <CellValue v={r.fitnessApp} />
                  </td>
                  <td className="px-4 py-5 text-center">
                    <CellValue v={r.trainer} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-white/60 text-xs mt-4">*Based on comparison with leading fitness apps and average personal trainer costs</p>

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

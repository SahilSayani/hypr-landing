import { Briefcase, User, Trophy, Heart } from "lucide-react";

const audienceTypes = [
  {
    icon: Briefcase,
    title: "The Overwhelmed Professional",
    tag: "Time‑crunched, goal‑focused",
    description: "45 minutes max, packed calendar. High‑impact sessions that fit between meetings.",
    perfect: [
      "15–45 min",
      "Schedule‑based",
      "Energy optimization"
    ]
  },
  {
    icon: User,
    title: "The Confused Beginner",
    tag: "Ready to start, need direction",
    description: "Motivated but overwhelmed. A clear, friendly path—no complexity.",
    perfect: [
      "Step‑by‑step",
      "Form help",
      "Confidence"
    ]
  },
  {
    icon: Trophy,
    title: "The Serious Athlete",
    tag: "Performance‑driven perfectionist",
    description: "Done with guesswork. Data, precision, and strategies to smash plateaus.",
    perfect: [
      "Advanced analytics",
      "Performance",
      "Recovery"
    ]
  },
  {
    icon: Heart,
    title: "The Comeback Champion",
    tag: "Reclaiming your former self",
    description: "Life happened. Rebuild without starting from zero—or repeating mistakes.",
    perfect: [
      "Smart progression",
      "Injury prevention",
      "Habit rebuild"
    ]
  }
];

const AudienceSection = () => {
  return (
    <section id="who" className="section-anchor py-14 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built For Real People With Real Lives
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Hyprfit adapts to your goals—at every stage.
          </p>
        </div>

        {/* Audience Grid (simple, balanced) */}
        <div className="grid lg:grid-cols-2 gap-6">
          {audienceTypes.map((type, index) => (
            <div
              key={index}
              className="glass-card relative overflow-hidden p-5 group transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(13,110,253,0.2)]"
            >
              {/* Bento glow overlay */}
              <div
                className="pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent" />
              </div>

              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_10px_40px_rgba(13,110,253,0.25)]">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {type.title}
                  </h3>
                  <span className="inline-block bg-secondary/20 text-secondary px-2.5 py-1 rounded-full text-xs font-medium">
                    {type.tag}
                  </span>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed mb-3">
                {type.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {type.perfect.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-white/80 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Subtle highlight ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
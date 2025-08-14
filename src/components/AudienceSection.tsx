import { Briefcase, User, Trophy, Heart } from "lucide-react";

const audienceTypes = [
  {
    icon: Briefcase,
    title: "The Overwhelmed Professional",
    tag: "Time-Crunched but Goal-Focused",
    description: "You've got 45 minutes max and a packed calendar. You need workouts that deliver maximum impact in minimum time, fitting seamlessly around your meetings and deadlines.",
    perfect: [
      "15-45 minute workouts",
      "Schedule-based planning", 
      "Energy optimization"
    ]
  },
  {
    icon: User,
    title: "The Confused Beginner",
    tag: "Ready to Start, Need Direction",
    description: "You're motivated but overwhelmed by conflicting advice. You want a clear, proven path forward without the intimidation factor of complex routines.",
    perfect: [
      "Step-by-step guidance",
      "Form tutorials",
      "Confidence building"
    ]
  },
  {
    icon: Trophy,
    title: "The Serious Athlete",
    tag: "Performance-Driven Perfectionist",
    description: "You're done with guesswork and generic advice. You demand data-driven insights, precision tracking, and advanced strategies to break through plateaus.",
    perfect: [
      "Advanced analytics",
      "Performance optimization",
      "Recovery insights"
    ]
  },
  {
    icon: Heart,
    title: "The Comeback Champion",
    tag: "Reclaiming Your Former Self",
    description: "You used to be in great shape, but life happened. Now you're ready to reclaim your health without starting completely from scratch or repeating past mistakes.",
    perfect: [
      "Smart progression",
      "Injury prevention",
      "Habit rebuilding"
    ]
  }
];

const AudienceSection = () => {
  return (
    <section id="who" className="section-anchor py-16 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built For Real People With Real Lives
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            No matter where you are in your fitness journey, Hyprfit adapts to your unique situation and goals.
          </p>
        </div>

        {/* Audience Grid (simple, balanced) */}
        <div className="grid lg:grid-cols-2 gap-6">
          {audienceTypes.map((type, index) => (
            <div
              key={index}
              className="glass-card relative overflow-hidden p-6 group transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(13,110,253,0.2)]"
            >
              {/* Bento glow overlay */}
              <div
                className="pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/10 to-transparent" />
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_10px_40px_rgba(13,110,253,0.25)]">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {type.title}
                  </h3>
                  <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                    {type.tag}
                  </span>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed mb-4">
                {type.description}
              </p>

              <div>
                <p className="text-white font-semibold mb-2">Perfect for:</p>
                <ul className="space-y-2">
                  {type.perfect.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-white/70">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
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
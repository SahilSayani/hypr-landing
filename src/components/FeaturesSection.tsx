import { Brain, Utensils, Activity, Users, Target, Dumbbell } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Coached Workouts",
    description: "Custom routines for every fitness level, dynamically adjusted as you progress.",
  },
  {
    icon: Utensils,
    title: "Smart Nutrition Logging",
    description: "FatSecret-powered global database + hyperlocal Indian food tracking.",
  },
  {
    icon: Activity,
    title: "Real-Time Insights",
    description: "Sync with Google Fit, Apple Health, and wearables for live feedback.",
  },
  {
    icon: Target,
    title: "The Ultimate Healthy Living Blueprint",
    description: "Our 7-step system to master workouts, meals, mindset, and more.",
  },
  {
    icon: Users,
    title: "Community & Accountability",
    description: "Join like-minded achievers pushing towards their goals.",
  },
  {
    icon: Dumbbell,
    title: "Custom Workouts",
    description: "create your own custom workouts routines",
  },
];

// SpotlightCard component adapted from reactbits.dev (no external deps)
const SpotlightCard = ({ children, className = "", style }: { children: any; className?: string; style?: any }) => {
  const updateFromEvent = (e: any) => {
    const target = e.currentTarget as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const clientX = (e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0);
    const clientY = (e.clientY ?? (e.touches && e.touches[0]?.clientY) ?? 0);
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };
  const handleMouseMove = (e: any) => updateFromEvent(e);
  const handlePointerMove = (e: any) => updateFromEvent(e);
  const handleTouchMove = (e: any) => updateFromEvent(e);
  const handleMouseEnter = (e: any) => updateFromEvent(e);
  return (
    <div
      onMouseMove={handleMouseMove}
      onPointerMove={handlePointerMove}
      onTouchMove={handleTouchMove}
      onMouseEnter={handleMouseEnter}
      className={`relative group rounded-2xl border border-border bg-card/50 overflow-hidden pointer-events-auto ${className}`}
      style={style}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(240px circle at var(--mouse-x) var(--mouse-y), hsl(var(--secondary) / 0.22) 0%, hsl(var(--secondary) / 0.22) 35%, transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="section-anchor py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section">
            Why Hyprfit Users Get 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 3x Better Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            It's not magic. It's intelligent technology that actually understands how humans work.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="feature-card p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
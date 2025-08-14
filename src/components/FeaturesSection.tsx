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
            <div 
              key={index} 
              className="feature-card group"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
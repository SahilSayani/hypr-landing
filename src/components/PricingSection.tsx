import { Check, Heart } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "₹749",
    period: "/month",
    description: "Perfect for trying it out",
    features: [
      "AI-powered workout plans",
      "Smart nutrition tracking",
      "Basic progress analytics",
      "Community access",
      "Email support"
    ],
    popular: false
  },
  {
    name: "6-Month Plan",
    price: "₹949",
    period: "/month",
    originalPrice: "₹4,494",
    finalPrice: "₹5,694",
    description: "Save ₹1,498 - Most Popular",
    features: [
      "Everything in Monthly",
      "Advanced analytics",
      "Priority support",
      "Meal planning",
      "Wearable integrations",
      "Custom coaching insights"
    ],
    popular: true
  },
  {
    name: "Annual",
    price: "₹7,490",
    period: "/year",
    originalPrice: "₹8,988",
    description: "Serious commitment = serious results",
    features: [
      "Everything in 6-Month",
      "1-on-1 coach check-ins",
      "Advanced recovery tracking",
      "Nutrition photo analysis",
      "Premium community access",
      "Early access to new features"
    ],
    popular: false
  },
  {
    name: "3-Month Plan", 
    price: "₹1,499",
    period: "/month",
    originalPrice: "₹4,497",
    finalPrice: "₹2,247",
    description: "Perfect for quick wins",
    features: [
      "Everything in Monthly",
      "Progress tracking",
      "Basic meal suggestions",
      "Workout reminders",
      "Goal setting tools"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-anchor py-20 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Investment in Your Future Self
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Less than your monthly coffee budget. More valuable than a personal trainer.
          </p>
        </div>
        
        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-bold rounded-t-2xl">
                  Most Popular
                </div>
              )}
              
              <div className={`${plan.popular ? 'mt-8' : ''}`}>
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-sm text-muted-foreground">
                      <span className="line-through">{plan.originalPrice}</span>
                      {plan.finalPrice && <span className="ml-2 font-semibold">Total: {plan.finalPrice}</span>}
                    </div>
                  )}
                </div>
                
                <a
                  href="https://getwaitlist.com/waitlist/29766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full mb-6 ${plan.popular ? 'btn-accent' : 'btn-hero'} inline-flex items-center justify-center rounded-2xl`}
                >
                  Choose Plan
                </a>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Money Back Guarantee */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
            <Heart className="w-5 h-5 text-secondary" />
            <span className="text-white font-medium">
              14-Day Money-Back Guarantee - If you don't see real progress, get every rupee back.
            </span>
          </div>
          <p className="text-white/60 text-sm mt-4">
            Compare: Personal trainer ₹3,000+/month • Nutritionist ₹2,000+/month • Hyprfit: ₹749/month
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
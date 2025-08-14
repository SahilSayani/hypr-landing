import { Check, Heart } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "₹749",
    period: "/month",
    originalPrice: "₹999",
    discount: "25% off",
    description: "Perfect for getting started",
    monthlyRate: undefined,
    billedNote: undefined,
    features: [
      "All AI coaching features",
      "Unlimited workouts",
      "Basic nutrition tracking",
      "Community access",
    ],
    popular: false,
  },
  {
    name: "3-Month Plan",
    price: "₹1,499",
    period: "/month",
    discount: "50% off monthly rate",
    description: "Build lasting habits",
    monthlyRate: "₹500/month",
    billedNote: "Billed quarterly",
    features: [
      "Everything in Monthly",
      "Advanced analytics",
      "Priority support",
      "Habit tracking tools",
    ],
    popular: false,
  },
  {
    name: "6-Month Plan",
    price: "₹2,549",
    period: "",
    discount: "57% off monthly rate",
    description: "Serious commitment = serious results",
    monthlyRate: "₹425/month",
    billedNote: "Billed every 6 months",
    features: [
      "Everything in 3-Month",
      "1-on-1 coaching calls",
      "Custom meal plans",
      "Progress guarantees",
    ],
    popular: false,
  },
  {
    name: "Annual",
    price: "₹3,999",
    period: "",
    originalPrice: "₹8,988",
    discount: "67% off monthly rate",
    description: "Best value for transformation",
    monthlyRate: "₹333/month",
    billedNote: "Billed annually",
    features: [
      "Everything included",
      "Premium integrations",
      "VIP community access",
      "Lifetime updates",
    ],
    popular: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-anchor py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            Choose Your Transformation Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your journey with any plan. Upgrade or downgrade anytime. Your progress stays with you.
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
                <span className="absolute -top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Most Popular</span>
              )}
              
              <div className={`${plan.popular ? 'mt-2' : ''}`}>
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    {plan.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                    )}
                  </div>
                  {plan.monthlyRate && (
                    <div className="text-sm text-muted-foreground">{plan.monthlyRate}</div>
                  )}
                  {plan.discount && (
                    <div className="mt-2 inline-flex items-center rounded-full bg-green-100 text-green-700 text-xs font-semibold px-2 py-1">
                      {plan.discount}
                    </div>
                  )}
                </div>
                
                <a
                  href="https://getwaitlist.com/waitlist/29766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full mb-2 ${plan.popular ? 'btn-hero' : 'btn-secondary'} inline-flex items-center justify-center rounded-2xl`}
                >
                  Get Started
                </a>
                {plan.billedNote && (
                  <div className="text-xs text-muted-foreground mb-4 text-center">{plan.billedNote}</div>
                )}
                
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
            <span className="text-foreground font-medium">
              14-Day Money-Back Guarantee - If you don't see real progress, get every rupee back.
            </span>
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            Compare: Personal trainer ₹3,000+/month • Nutritionist ₹2,000+/month • Hyprfit: ₹749/month
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
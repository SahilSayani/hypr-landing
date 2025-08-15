import { Check, Heart } from "lucide-react";
import React, { useRef, useState } from "react";

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

type TiltedCardProps = {
  className?: string;
  children: React.ReactNode;
  glare?: boolean;
  maxTilt?: number;
  scale?: number;
};

function TiltedCard({ className = "", children, glare = true, maxTilt = 12, scale = 1.015 }: TiltedCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>("rotateX(0deg) rotateY(0deg) scale(1)");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rX = (0.5 - py) * (maxTilt * 2); // invert y for natural tilt
    const rY = (px - 0.5) * (maxTilt * 2);
    setTransform(`rotateX(${rX.toFixed(2)}deg) rotateY(${rY.toFixed(2)}deg) scale(${scale})`);
    if (glare) {
      setGlareStyle({
        background: `radial-gradient(600px circle at ${px * 100}% ${py * 100}%, hsl(var(--secondary)/0.0), transparent 40%)`,
      });
    }
  };

  const onLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg) scale(1)");
    if (glare) setGlareStyle({});
  };

  return (
    <div className="relative [perspective:1000px]">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`will-change-transform transition-transform duration-150 ease-out ${className}`}
        style={{ transform }}
      >
        {glare && <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl" style={glareStyle} />}
        {children}
      </div>
    </div>
  );
}

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className="relative group h-full">
              <TiltedCard
                glare={false}
                className={`pricing-card ${plan.popular ? 'popular' : ''} relative overflow-hidden h-full flex flex-col min-h-[28rem] md:min-h-[30rem] transition-all duration-300 border border-secondary/20 hover:border-secondary/40 hover:shadow-[0_15px_40px_-15px_hsl(var(--secondary)/0.45)]`}
              >
                {plan.popular && (
                  <span className="absolute top-3 right-3 bg-gradient-to-r from-secondary to-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow ring-1 ring-white/10">Most Popular</span>
                )}
              
              <div className={`${plan.popular ? 'mt-2' : ''} flex flex-col h-full`}>
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
                    <div className="mt-2 inline-flex items-center rounded-full bg-primary/15 text-primary text-xs font-semibold px-2 py-1">
                      {plan.discount}
                    </div>
                  )}
                </div>
                {/* Spacer to push CTA and features to bottom for consistent card height */}
                <div className="mt-auto" />
                
                <a
                  href="https://getwaitlist.com/waitlist/29766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full mb-2 ${plan.popular ? 'btn-hero' : 'btn-secondary'} inline-flex items-center justify-center rounded-2xl`}
                >
                  Get Started
                </a>
                <div className="text-xs text-muted-foreground mb-4 text-center min-h-5">{plan.billedNote ?? ""}</div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </TiltedCard>
              {/* External secondary glow (outside the card only) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-24 -z-10 opacity-0 group-hover:opacity-100 transition duration-500 blur-3xl bg-[radial-gradient(ellipse_at_center,_hsl(var(--secondary)/0.28)_0%,_transparent_60%)]"
              />
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
import { Zap, Check } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-[900px] rounded-full bg-gradient-to-tr from-primary/25 via-secondary/20 to-transparent blur-3xl opacity-70" />
      </div>
      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 transition-colors text-foreground px-4 py-2 rounded-full text-sm font-medium mb-12 mt-12">
          <Zap className="w-4 h-4" />
          Join the waitlist for early access
        </div>
        
        {/* Main Headline */}
        <h1 className="heading-hero mb-8">
          Finally, A Fitness App<br />
          That <span className="text-primary">Actually Works</span> For You
        </h1>
        
        {/* Subheadline */}
        <p className="text-hero max-w-4xl mx-auto mb-12">
          Skip the cookie-cutter plans. Get AI that studies your body, learns your lifestyle, 
          and creates a fitness journey that fits your real life — not someone else's highlight reel.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://getwaitlist.com/waitlist/29766"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero text-base min-w-[280px] inline-flex items-center justify-center rounded-2xl"
          >
            Start Your Free Transformation
          </a>

          <a
            href="#results"
            className="btn-secondary text-base min-w-[280px] inline-flex items-center justify-center rounded-2xl"
          >
            See Real Results (2 min)
          </a>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            Cancel anytime
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            Results in 14 days
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
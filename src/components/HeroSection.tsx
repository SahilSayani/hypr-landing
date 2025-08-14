import { useEffect, useState } from "react";
import { Zap, Check } from "lucide-react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center bg-background px-6 py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-[1000px] rounded-full bg-gradient-to-tr from-primary/25 via-secondary/20 to-transparent blur-3xl opacity-70" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center gap-12">
        {/* Left: Copy */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 transition-colors text-foreground px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Join the waitlist for early access
          </div>

          {/* Main Headline */}
          <h1 className="heading-hero mb-6 leading-[1.12] md:leading-[1.1]">
            <span className="whitespace-nowrap">A Fitness App</span>
            <br />
            That <span className="text-primary">Actually Works</span> For You
          </h1>

          {/* Subheadline */}
          <p className="text-hero max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-10">
            Skip the cookie-cutter plans. Get AI that studies your body, learns your lifestyle, and adapts every week to keep you progressing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
            <a
              href="https://getwaitlist.com/waitlist/29766"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero text-base min-w-[240px] inline-flex items-center justify-center rounded-2xl"
            >
              Start Your Free Transformation
            </a>

            <a
              href="#results"
              className="btn-secondary text-base min-w-[240px] inline-flex items-center justify-center rounded-2xl"
            >
              See Real Results (2 min)
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-muted-foreground text-sm">
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

        {/* Right: CSS phone mock */}
        <div className="flex justify-center lg:justify-end">
          <div
            className={`group [perspective:1600px] mr-0 lg:mr-12 xl:mr-20 will-change-transform transition-all duration-700 ease-out motion-reduce:transition-none ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
          >
            <div className="relative w-[270px] sm:w-[320px] aspect-[9/19] rounded-[2rem] border border-border shadow-glass bg-gradient-dark p-2">
            {/* Camera notch */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-5 w-36 rounded-b-2xl bg-foreground/80" />

            {/* Screen */}
            <div className="h-full w-full rounded-[1.7rem] overflow-hidden bg-foreground text-white flex flex-col">
              {/* Status bar */}
              <div className="px-4 pt-4 pb-2 text-xs text-white/70 flex items-center justify-between">
                <span>09:41</span>
                <div className="flex gap-1">
                  <span className="inline-block h-3 w-3 rounded-full bg-green-400/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="inline-block h-3 w-3 rounded-full bg-red-400/80" />
                </div>
              </div>

              {/* Header */}
              <div className="px-4">
                <div className="text-sm text-white/70">Today</div>
                <div className="text-xl font-semibold">Your Adaptive Plan</div>
              </div>

              {/* Top metrics */}
              <div className="mt-3 px-4 space-y-3">
                {/* Workout Card */}
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-white/70">AI Workout</div>
                      <div className="font-semibold">Full Body Adaptive</div>
                    </div>
                    <span className="px-2 py-1 text-[10px] rounded-full bg-primary/20 text-white">45 min</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-[10px] text-white/80">
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Focus: Strength</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Sets: 12</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Avg RPE: 7</span>
                  </div>
                </div>

                {/* Nutrition Card */}
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/70">Nutrition</div>
                      <div className="font-semibold">Macros for Today</div>
                    </div>
                    <span className="px-2 py-1 text-[10px] rounded-full bg-secondary/20 text-white">Smart</span>
                  </div>
                  <div className="mt-2 space-y-2 text-[10px]">
                    <div>
                      <div className="flex items-center justify-between text-white/70">
                        <span>Protein</span><span>95/120g</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full w-[78%] bg-secondary"></div></div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-white/70">
                        <span>Carbs</span><span>140/200g</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full w-[70%] bg-primary"></div></div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-white/70">
                        <span>Fats</span><span>40/60g</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full w-[66%] bg-green-400"></div></div>
                    </div>
                  </div>
                </div>

                {/* Habit/Steps Card */}
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/70">Daily Goal</div>
                      <div className="font-semibold">Steps</div>
                    </div>
                    <div className="text-xs text-white/70">6,200/8,000</div>
                  </div>
                  <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-secondary to-primary" />
                  </div>
                </div>
              </div>

              {/* Spacer to push graph to bottom */}
              <div className="flex-1" />

              {/* Progress Graph */}
              <div className="px-4 pb-2">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-white/70">Progress</div>
                    <div className="text-[10px] text-white/60">Last 7 days</div>
                  </div>
                  <svg viewBox="0 0 280 80" className="w-full h-20">
                    <defs>
                      <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#C7FF00" />
                        <stop offset="100%" stopColor="#0D6EFD" />
                      </linearGradient>
                      <linearGradient id="fillGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#C7FF00" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#0D6EFD" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
                      <line x1="0" y1="20" x2="280" y2="20" />
                      <line x1="0" y1="40" x2="280" y2="40" />
                      <line x1="0" y1="60" x2="280" y2="60" />
                    </g>
                    {/* Area fill */}
                    <path d="M0,65 C35,60 70,68 105,50 C140,38 175,55 210,42 C240,30 260,36 280,28 L280,80 L0,80 Z" fill="url(#fillGrad)" />
                    {/* Line */}
                    <path d="M0,65 C35,60 70,68 105,50 C140,38 175,55 210,42 C240,30 260,36 280,28" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
                    {/* Points */}
                    <g fill="#fff">
                      <circle cx="0" cy="65" r="2" fill="#C7FF00" />
                      <circle cx="70" cy="68" r="2" fill="#A0FF33" />
                      <circle cx="140" cy="38" r="2" fill="#7CD1FF" />
                      <circle cx="210" cy="42" r="2" fill="#4FB2FF" />
                      <circle cx="280" cy="28" r="2" fill="#0D6EFD" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="px-10 pb-5 pt-3">
                <div className="mx-auto h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-around text-white/70 text-xs">
                  <div className="px-3 py-1 rounded-full bg-white/10 text-white">Plan</div>
                  <div className="px-3 py-1">Coach</div>
                  <div className="px-3 py-1">Track</div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
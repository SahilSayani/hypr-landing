import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Animated CountUp for stats with gradient text
function CountUp({ value, duration = 3500, className = "" }: { value: string; duration?: number; className?: string }) {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const startedRef = useRef(false);
  const [display, setDisplay] = useState<string>(value);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const str = value.trim();
    const numMatch = str.match(/-?\d*\.?\d+/);
    if (!numMatch) {
      setDisplay(str);
      return;
    }

    const numStr = numMatch[0];
    const startIdx = str.indexOf(numStr);
    const prefix = str.slice(0, startIdx);
    const suffix = str.slice(startIdx + numStr.length);
    const target = parseFloat(numStr);
    const decimals = (numStr.split(".")[1]?.length) || 0;

    let startTime: number | null = null;

    const startDisplay = `${prefix}${(0).toFixed(decimals)}${suffix}`;
    setDisplay(startDisplay);

    const animate = (t: number) => {
      if (startTime === null) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = target * eased;
      const formatted = current.toFixed(decimals);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        // ensure exact final value
        setDisplay(`${prefix}${numStr}${suffix}`);
      }
    };

    const trigger = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      frameRef.current = requestAnimationFrame(animate);
    };

    if ("IntersectionObserver" in window) {
      // If already in view on mount, trigger immediately
      const rect = el.getBoundingClientRect();
      const alreadyInView = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
      if (alreadyInView) {
        trigger();
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              trigger();
              io.disconnect();
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -10% 0px" }
      );
      io.observe(el);
      return () => {
        io.disconnect();
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      };
    } else {
      trigger();
      return () => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      };
    }
  }, [value, duration]);

  return (
    <span ref={spanRef} className={className}>
      {display}
    </span>
  );
}

const testimonials = [
  {
    name: "Priya M.",
    role: "Marketing Director, Delhi",
    avatar: "P",
    quote: "I lost 15kg in 4 months without giving up my morning chai or weekend family dinners. Hyprfit actually gets how Indian families eat.",
    rating: 5
  },
  {
    name: "Sahil S.",
    role: "Software Engineer, Mumbai", 
    avatar: "S",
    quote: "Finally hit my deadlift PR after 2 years of plateaus. The AI figured out what my old trainer couldn't - I was overtraining.",
    rating: 5
  }
];

const stats = [
  { value: "87%", label: "Stick to their plan" },
  { value: "3.2x", label: "Faster results" },
  { value: "14 days", label: "To see changes" }
];

const TestimonialSection = () => {
  return (
    <section id="results" className="section-anchor py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section">Real People, Real Transformations</h2>
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="feature-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              <blockquote className="text-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-16 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="mb-2 group-hover:scale-110 transition-transform">
                <CountUp
                  value={stat.value}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                />
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
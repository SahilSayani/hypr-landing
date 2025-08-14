import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

type PillItem = {
  label: string;
  href: string;
};

type PillNavProps = {
  items: PillItem[];
  initialLoadAnimation?: boolean;
  className?: string;
};

// Pill navigation with animated active indicator, inspired by reactbits.dev's Pill Nav
const PillNav: React.FC<PillNavProps> = ({ items, initialLoadAnimation = false, className = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicator, setIndicator] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const [loaded, setLoaded] = useState(!initialLoadAnimation);

  // Set initial active based on hash
  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : "";
    if (!hash) return;
    const idx = items.findIndex((i) => i.href === hash);
    if (idx >= 0) setActiveIndex(idx);
  }, [items]);

  // Measure active pill position
  const measure = () => {
    const container = containerRef.current;
    const el = itemRefs.current[activeIndex];
    if (!container || !el) return;
    const containerRect = container.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const left = rect.left - containerRect.left;
    const width = rect.width;
    setIndicator({ left, width });
  };

  useLayoutEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, items.length]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    // Recalculate after fonts load/layout settle
    const id = window.setTimeout(measure, 50);
    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    if (initialLoadAnimation) {
      const id = window.setTimeout(() => setLoaded(true), 60);
      return () => window.clearTimeout(id);
    }
  }, [initialLoadAnimation]);

  return (
    <div
      ref={containerRef}
      className={
        "relative inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm " +
        (className || "")
      }
      aria-label="Primary"
      role="navigation"
    >
      {/* Active indicator */}
      <div
        className={
          "absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 will-change-transform " +
          (loaded ? "opacity-100 scale-100" : "opacity-0 scale-95")
        }
        style={{ left: indicator.left, width: indicator.width }}
        aria-hidden
      />

      {/* Items */}
      {items.map((item, i) => {
        const isActive = i === activeIndex;
        return (
          <a
            key={item.href}
            href={item.href}
            ref={(el) => (itemRefs.current[i] = el)}
            onClick={() => setActiveIndex(i)}
            className={
              "relative z-10 rounded-full px-3 py-1.5 text-sm font-medium transition-colors md:px-4 md:py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 " +
              (isActive ? "text-white" : "text-black/80 hover:text-black")
            }
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
};

export default PillNav;

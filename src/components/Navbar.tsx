import { Menu, X } from "lucide-react";
import PillNav from "@/components/PillNav";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasLogo, setHasLogo] = useState(true);
  const links = [
    { href: "#features", label: "Features" },
    { href: "#who", label: "Who is it for" },
    { href: "#results", label: "Results" },
    { href: "#faq", label: "FAQ" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-scrolled={scrolled}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          : "glass border-white/10"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 ${scrolled ? 'py-2' : 'py-3'}`}>
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 min-w-0">
            {hasLogo ? (
              <picture>
                <source srcSet={`${import.meta.env.BASE_URL}logo-hyprfit.svg`} type="image/svg+xml" />
                <img
                  src={`${import.meta.env.BASE_URL}logo-hyprfit.png`}
                  alt="Hyprfit"
                  className="h-auto w-32"
                  onError={() => setHasLogo(false)}
                />
              </picture>
            ) : (
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
                <span className="text-lg font-bold text-white tracking-tight">HYPRFIT</span>
              </div>
            )}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <PillNav items={links} initialLoadAnimation={true} />
            <a
              href="https://getwaitlist.com/waitlist/29766"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center justify-center rounded-2xl"
            >
              Get Early Access
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/90 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-3 rounded-xl border border-white/10 bg-background/80 p-4 shadow-lg">
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block w-full rounded-lg px-3 py-2 text-white/90 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href="https://getwaitlist.com/waitlist/29766"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-hero inline-flex items-center justify-center rounded-2xl"
                onClick={() => setOpen(false)}
              >
                Get Early Access
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
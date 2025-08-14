const ProblemSection = () => {
  return (
    <section id="how" className="section-anchor py-20 bg-gradient-to-br from-foreground to-foreground/90">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Problem */}
          <div className="text-center lg:text-left">
            <h2 className="text-secondary text-lg font-semibold mb-4 uppercase tracking-wide">
              The Brutal Truth
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              95% of fitness apps give you the same generic workout that worked for their trainer's cousin's friend.
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Meanwhile, you're stuck doing burpees at 6 AM wondering why you're not seeing results after 3 months of "pushing through."
            </p>
          </div>
          
          {/* Right Column - Solution */}
          <div className="text-center lg:text-left">
            <h2 className="text-secondary text-lg font-semibold mb-4 uppercase tracking-wide">
              What If Fitness Actually Fit Your Life?
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Hyprfit doesn't guess. It learns.
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Your schedule, your energy levels, your food preferences, even your motivation patterns.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Then it builds a plan that evolves with you — not against you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
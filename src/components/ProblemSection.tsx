const ProblemSection = () => {
  return (
    <section id="how" className="section-anchor py-20 bg-gradient-to-br from-foreground to-foreground/90">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Problem */}
          <div className="text-center lg:text-left">
            <h2 className="text-secondary text-lg font-semibold mb-4 uppercase tracking-wide">
            <span className="italic">The Brutal Truth</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Most fitness apps hand you the <span className="text-primary">same </span> template workouts.
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              You push harder—but progress barely moves.
            </p>
          </div>
          
          {/* Right Column - Solution */}
          <div className="text-center lg:text-left">
            <h2 className="text-secondary text-lg font-semibold mb-4 uppercase tracking-wide">
            <span className="italic">What If Fitness Actually Fit Your Life?</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Hyprfit doesn't guess. <span className="text-primary">It learns.</span>
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-2">
              It adapts to your schedule, energy, and preferences.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Your plan updates in real time—so you keep progressing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
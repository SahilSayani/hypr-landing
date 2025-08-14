import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="feature-card bg-gradient-to-br from-card to-muted/20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Stop Guessing. 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Start Progressing.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join thousands who've already discovered what happens when fitness finally fits their life.
          </p>
          
          <a
            href="https://getwaitlist.com/waitlist/29766"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero text-lg px-12 py-4 group inline-flex items-center justify-center rounded-2xl"
          >
            Reserve My Spot – It's Free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="text-sm text-muted-foreground mt-6">
            Your transformation starts today
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
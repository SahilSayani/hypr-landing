import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import AudienceSection from "@/components/AudienceSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <AudienceSection />
      <TestimonialSection />
      <PricingSection />
      {/* Anchor for FAQ nav link */}
      <div id="faq" className="section-anchor" />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;

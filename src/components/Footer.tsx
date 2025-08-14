import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Hyprfit</span>
          </div>
          
          {/* Tagline */}
          <div className="text-white/80 text-center">
            Your AI-Powered Fitness Partner
          </div>
          
          {/* Copyright */}
          <div className="text-white/60 text-sm">
            © 2024 Hyprfit. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
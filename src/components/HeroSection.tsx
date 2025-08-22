import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import redditDominationBg from "@/assets/reddit-domination-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI-Generated Video Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse"
        style={{ backgroundImage: `url(${redditDominationBg})` }}
      ></div>
      
      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      
      {/* Animated Energy Effects */}
      <div className="absolute inset-0 bg-gradient-red-glow opacity-10 animate-pulse [animation-duration:3s]"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse [animation-duration:4s]"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse [animation-duration:5s]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse [animation-duration:6s]"></div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="font-display text-4xl sm:text-6xl md:text-9xl font-black mb-6 animate-luxury-fade-in">
          <span className="luxury-text">DOMINATE</span>
          <br />
          <span className="text-foreground">REDDIT</span>
          <br />
          <span className="text-muted-foreground font-heading text-2xl sm:text-4xl md:text-6xl font-bold">— Organically.</span>
        </h1>
        
        <p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-luxury-fade-in [animation-delay:0.3s] leading-relaxed">
          Next-level Reddit growth for <span className="text-accent font-semibold">influencers</span>, 
          <span className="text-accent font-semibold"> agencies</span>, and 
          <span className="text-accent font-semibold"> AI brands</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-luxury-fade-in [animation-delay:0.6s]">
          <Button 
            className="glow-button text-lg"
            onClick={() => window.location.href = '/booking'}
          >
            Book a Strategy Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 animate-luxury-fade-in [animation-delay:0.9s]">
          <p className="text-muted-foreground text-sm mb-4 font-heading font-semibold tracking-wider">
            TRUSTED BY TOP CREATORS
          </p>
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-8 text-muted-foreground/60">
            <div className="text-2xl font-bold">500K+</div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-2xl font-bold">UPVOTES</div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-2xl font-bold">10M+</div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-2xl font-bold">REACH</div>
          </div>
          {/* Mobile Layout */}
          <div className="md:hidden grid grid-cols-2 gap-4 text-center text-muted-foreground/60 max-w-xs mx-auto">
            <div className="flex flex-col">
              <div className="text-xl font-bold">500K+</div>
              <div className="text-sm font-semibold">UPVOTES</div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold">10M+</div>
              <div className="text-sm font-semibold">REACH</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
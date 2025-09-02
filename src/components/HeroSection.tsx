import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import redditAnimationBg from "@/assets/reddit-animation-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Reddit Animation Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 animate-continuous-pulse"
        style={{ backgroundImage: `url(${redditAnimationBg})` }}
      ></div>
      
      {/* Rich Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80"></div>
      
      {/* Animated Reddit Energy Effects - 24/7 Animation */}
      <div className="absolute inset-0 bg-gradient-reddit opacity-8 animate-continuous-pulse [animation-duration:4s]"></div>
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-primary/15 rounded-full mobile-blur-reduced animate-continuous-pulse [animation-duration:5s]"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-36 sm:w-72 h-36 sm:h-72 bg-accent/15 rounded-full mobile-blur-reduced animate-continuous-pulse [animation-duration:6s]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-primary/8 rounded-full mobile-blur-reduced animate-continuous-pulse [animation-duration:7s]"></div>
      
      {/* Floating Reddit Elements Animation */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 opacity-20 animate-luxury-logo-float">
        <div className="w-full h-full bg-primary/30 rounded-full flex items-center justify-center text-2xl">↑</div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-14 h-14 sm:w-20 sm:h-20 opacity-15 animate-luxury-logo-float [animation-delay:2s]">
        <div className="w-full h-full bg-accent/30 rounded-full flex items-center justify-center text-xl">🔥</div>
      </div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 w-full lg:max-w-6xl lg:mx-auto">
        <h1 className="font-display mobile-hero-text font-black mb-4 sm:mb-6 animate-luxury-fade-in leading-tight">
          <span className="luxury-text" style={{ 
            WebkitTextStroke: '3px hsl(var(--background))',
            textShadow: '4px 4px 0px hsl(var(--background)), -4px -4px 0px hsl(var(--background)), 4px -4px 0px hsl(var(--background)), -4px 4px 0px hsl(var(--background))'
          }}>DOMINATE</span>
          <br />
          <span className="text-foreground" style={{ 
            WebkitTextStroke: '3px hsl(var(--background))',
            textShadow: '4px 4px 0px hsl(var(--background)), -4px -4px 0px hsl(var(--background)), 4px -4px 0px hsl(var(--background)), -4px 4px 0px hsl(var(--background))'
          }}>REDDIT</span>
          <br />
          <span className="text-muted-foreground font-heading text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold" style={{ 
            WebkitTextStroke: '2px hsl(var(--background))',
            textShadow: '3px 3px 0px hsl(var(--background)), -3px -3px 0px hsl(var(--background)), 3px -3px 0px hsl(var(--background)), -3px 3px 0px hsl(var(--background))'
          }}>— Organically.</span>
        </h1>
        
        <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto animate-luxury-fade-in [animation-delay:0.3s] leading-relaxed px-2" style={{ 
          WebkitTextStroke: '1px hsl(var(--background))',
          textShadow: '2px 2px 0px hsl(var(--background)), -2px -2px 0px hsl(var(--background)), 2px -2px 0px hsl(var(--background)), -2px 2px 0px hsl(var(--background))'
        }}>
          Premium Reddit growth for <span className="text-accent font-semibold">start-ups</span>, 
          <span className="text-accent font-semibold"> content creators</span>, 
          <span className="text-accent font-semibold"> AI influencers</span>, 
          <span className="text-accent font-semibold"> Forex & Crypto projects</span>, and 
          <span className="text-accent font-semibold"> meme coins</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-luxury-fade-in [animation-delay:0.6s]">
          <Button 
            className="glow-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            onClick={() => window.location.href = '/booking'}
          >
            Book a FREE call
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </Button>
          
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-12 md:mt-16 animate-luxury-fade-in [animation-delay:0.9s]">
          <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 font-heading font-semibold tracking-wider">
            TRUSTED BY TOP CREATORS
          </p>
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-muted-foreground/60">
            <div className="text-xl lg:text-2xl font-bold">500K+</div>
            <div className="w-px h-6 lg:h-8 bg-border"></div>
            <div className="text-xl lg:text-2xl font-bold">UPVOTES</div>
            <div className="w-px h-6 lg:h-8 bg-border"></div>
            <div className="text-xl lg:text-2xl font-bold">10M+</div>
            <div className="w-px h-6 lg:h-8 bg-border"></div>
            <div className="text-xl lg:text-2xl font-bold">REACH</div>
          </div>
          {/* Mobile Layout */}
          <div className="md:hidden grid grid-cols-2 gap-3 sm:gap-4 text-center text-muted-foreground/60 max-w-xs mx-auto">
            <div className="flex flex-col bg-card/30 backdrop-blur-sm rounded-lg p-3 border border-border/10">
              <div className="text-lg sm:text-xl font-bold">500K+</div>
              <div className="text-xs sm:text-sm font-semibold">UPVOTES</div>
            </div>
            <div className="flex flex-col bg-card/30 backdrop-blur-sm rounded-lg p-3 border border-border/10">
              <div className="text-lg sm:text-xl font-bold">10M+</div>
              <div className="text-xs sm:text-sm font-semibold">REACH</div>
            </div>
          </div>
          
          {/* Collaboration Text */}
          <div className="mt-6 sm:mt-8 animate-luxury-fade-in [animation-delay:1.2s]">
            <p className="text-muted-foreground/60 text-xs sm:text-sm text-center">
              Collaborating with{" "}
              <a 
                href="https://www.reddaccounts.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground/80 hover:text-accent transition-colors underline underline-offset-2"
              >
                Reddaccounts
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
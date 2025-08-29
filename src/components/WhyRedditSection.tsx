import { Target, TrendingUp, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Target Niche Communities",
    description: "Precision targeting of high-value subreddits where your ideal audience lives and engages."
  },
  {
    icon: TrendingUp,
    title: "Authentic Audience Building", 
    description: "Organic growth strategies that build genuine connections and long-term brand loyalty."
  },
  {
    icon: Users,
    title: "High ROI & Brand Trust",
    description: "Convert Reddit engagement into measurable business results with authentic community presence."
  },
  {
    icon: Shield,
    title: "Platform-Safe Methods",
    description: "100% compliant growth tactics that protect your brand reputation and account safety."
  }
];

const WhyRedditSection = () => {
  return (
    <section className="mobile-section-padding px-4 sm:px-6 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Why <span className="luxury-text">Reddit</span> Dominates
          </h2>
          <p className="font-body mobile-text-responsive text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            While others chase vanity metrics on saturated platforms, smart brands build authentic communities 
            where conversations drive real business results.
          </p>
        </div>
        
        <div className="grid mobile-grid-responsive gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="luxury-card mobile-card-padding text-center animate-luxury-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-primary rounded-full mb-3 sm:mb-4 md:mb-6 shadow-red-glow">
                <feature.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground leading-tight">
                {feature.title}
              </h3>
              
              <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Statistics */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
          <div className="luxury-card mobile-card-padding">
            <div className="text-2xl sm:text-3xl md:text-4xl font-display font-black luxury-text mb-1 sm:mb-2">430M+</div>
            <div className="font-heading font-semibold text-muted-foreground text-xs sm:text-sm md:text-base">Monthly Active Users</div>
          </div>
          <div className="luxury-card mobile-card-padding">
            <div className="text-2xl sm:text-3xl md:text-4xl font-display font-black luxury-text mb-1 sm:mb-2">100K+</div>
            <div className="font-heading font-semibold text-muted-foreground text-xs sm:text-sm md:text-base">Active Communities</div>
          </div>
          <div className="luxury-card mobile-card-padding">
            <div className="text-2xl sm:text-3xl md:text-4xl font-display font-black luxury-text mb-1 sm:mb-2">52min</div>
            <div className="font-heading font-semibold text-muted-foreground text-xs sm:text-sm md:text-base">Average Daily Usage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRedditSection;
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
    <section className="py-24 px-6 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Why <span className="luxury-text">Reddit</span> Dominates
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            While others chase vanity metrics on saturated platforms, smart brands build authentic communities 
            where conversations drive real business results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="luxury-card p-8 text-center animate-luxury-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-red-glow">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-heading text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="font-body text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="luxury-card p-8">
            <div className="text-4xl font-display font-black luxury-text mb-2">430M+</div>
            <div className="font-heading font-semibold text-muted-foreground">Monthly Active Users</div>
          </div>
          <div className="luxury-card p-8">
            <div className="text-4xl font-display font-black luxury-text mb-2">100K+</div>
            <div className="font-heading font-semibold text-muted-foreground">Active Communities</div>
          </div>
          <div className="luxury-card p-8">
            <div className="text-4xl font-display font-black luxury-text mb-2">52min</div>
            <div className="font-heading font-semibold text-muted-foreground">Average Daily Usage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRedditSection;
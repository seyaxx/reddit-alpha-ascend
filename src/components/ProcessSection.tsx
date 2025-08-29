import { Search, Target, Rocket, TrendingUp, BarChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "Deep analysis of your brand, competitors, and target communities to identify optimal opportunities.",
    details: ["Brand audit", "Competitor research", "Audience mapping", "Opportunity analysis"]
  },
  {
    number: "02", 
    icon: Target,
    title: "Strategy",
    description: "Custom Reddit growth blueprint with precise targeting, content pillars, and engagement tactics.",
    details: ["Subreddit selection", "Content strategy", "Posting schedule", "Engagement plan"]
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch",
    description: "Systematic execution of your Reddit presence with native content and authentic community building.",
    details: ["Content creation", "Strategic posting", "Community engagement", "Relationship building"]
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimization", 
    description: "Continuous refinement based on performance data to maximize engagement and conversions.",
    details: ["Performance analysis", "Strategy adjustment", "A/B testing", "Scale planning"]
  },
  {
    number: "05",
    icon: BarChart,
    title: "Scale",
    description: "Expand successful tactics across multiple communities for exponential brand growth.",
    details: ["Multi-community expansion", "Viral amplification", "Authority establishment", "ROI optimization"]
  }
];

const ProcessSection = () => {
  return (
    <section className="mobile-section-padding px-4 sm:px-6 bg-gradient-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-red-glow opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">
            Our <span className="luxury-text">Process</span>
          </h2>
          <p className="font-body mobile-text-responsive text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4">
            A systematic approach to Reddit domination that has generated millions of organic impressions 
            and thousands of high-value conversions for our clients.
          </p>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
            
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className="relative flex flex-col items-center animate-luxury-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Circle */}
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-red-glow mb-8 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {step.number}
                  </div>
                  
                  {/* Content Card */}
                  <div className="luxury-card p-6 w-64 h-64 text-center group hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
                        {step.title}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <ul className="space-y-1 text-xs text-muted-foreground/80">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="flex items-start space-x-4 sm:space-x-6 animate-luxury-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Circle with Line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-12 sm:w-16 h-12 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-red-glow">
                  <step.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary-foreground" />
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 sm:w-6 h-5 sm:h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xs">
                    {step.number}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-primary to-accent mt-3 sm:mt-4"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="luxury-card mobile-card-padding flex-1">
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {step.details.map((detail, idx) => (
                    <span 
                      key={idx}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-muted rounded-full text-xs text-muted-foreground border border-border/20"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Timeline Stats */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          <div className="luxury-card mobile-card-padding">
            <div className="text-2xl sm:text-3xl font-display font-black luxury-text mb-1 sm:mb-2">7-14</div>
            <div className="font-heading text-xs sm:text-sm font-semibold text-muted-foreground">Days to Launch</div>
          </div>
          <div className="luxury-card mobile-card-padding">
            <div className="text-2xl sm:text-3xl font-display font-black luxury-text mb-1 sm:mb-2">30-90</div>
            <div className="font-heading text-xs sm:text-sm font-semibold text-muted-foreground">Days to Results</div>
          </div>
          <div className="luxury-card mobile-card-padding">
            <div className="text-2xl sm:text-3xl font-display font-black luxury-text mb-1 sm:mb-2">24/7</div>
            <div className="font-heading text-xs sm:text-sm font-semibold text-muted-foreground">Monitoring</div>
          </div>
          <div className="luxury-card mobile-card-padding">
            <div className="text-2xl sm:text-3xl font-display font-black luxury-text mb-1 sm:mb-2">∞</div>
            <div className="font-heading text-xs sm:text-sm font-semibold text-muted-foreground">Scaling Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
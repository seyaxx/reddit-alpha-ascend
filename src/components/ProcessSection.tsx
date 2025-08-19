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
    <section className="py-24 px-6 bg-gradient-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-red-glow opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Our <span className="luxury-text">Process</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
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
                  <div className="luxury-card p-6 w-64 text-center group hover:scale-105 transition-transform duration-300">
                    <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
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
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="flex items-start space-x-6 animate-luxury-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Circle with Line */}
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-red-glow">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xs">
                    {step.number}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-accent mt-4"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="luxury-card p-6 flex-1">
                <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.details.map((detail, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border border-border/20"
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="luxury-card p-6">
            <div className="text-3xl font-display font-black luxury-text mb-2">7-14</div>
            <div className="font-heading text-sm font-semibold text-muted-foreground">Days to Launch</div>
          </div>
          <div className="luxury-card p-6">
            <div className="text-3xl font-display font-black luxury-text mb-2">30-90</div>
            <div className="font-heading text-sm font-semibold text-muted-foreground">Days to Results</div>
          </div>
          <div className="luxury-card p-6">
            <div className="text-3xl font-display font-black luxury-text mb-2">24/7</div>
            <div className="font-heading text-sm font-semibold text-muted-foreground">Monitoring</div>
          </div>
          <div className="luxury-card p-6">
            <div className="text-3xl font-display font-black luxury-text mb-2">∞</div>
            <div className="font-heading text-sm font-semibold text-muted-foreground">Scaling Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
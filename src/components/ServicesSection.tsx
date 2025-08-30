import { Search, Target, MessageSquare, Users, BarChart3, Zap } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Audience Profiling",
    description: "Deep-dive analysis to identify your perfect Reddit communities and audience demographics.",
    features: ["Competitor analysis", "Subreddit research", "User behavior mapping", "Opportunity identification"],
    path: "/services/audience-profiling"
  },
  {
    icon: Target,
    title: "Subreddit Strategy",
    description: "Precision-crafted strategies to dominate your niche communities with surgical accuracy.",
    features: ["Content calendar planning", "Posting optimization", "Community rule compliance", "Timing analysis"],
    path: "/services/subreddit-strategy"
  },
  {
    icon: MessageSquare,
    title: "Content Crafting",
    description: "Native-feeling posts that blend seamlessly into communities while driving brand awareness.",
    features: ["Value-first content", "Community-specific tone", "Viral potential optimization", "A/B testing"],
    path: "/services/content-crafting"
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Strategic commenting and community building that establishes authentic brand presence.",
    features: ["Authentic interactions", "Relationship building", "Trust establishment", "Organic boosting"],
    path: "/services/community-engagement"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Comprehensive reporting tracking ROI, engagement, and conversion metrics.",
    features: ["Real-time tracking", "ROI calculation", "Conversion analysis", "Growth projections"],
    path: "/services/performance-analytics"
  },
  {
    icon: Zap,
    title: "Rapid Scaling",
    description: "Accelerated growth protocols for brands ready to dominate multiple communities.",
    features: ["Multi-subreddit campaigns", "Cross-promotion tactics", "Viral amplification", "Authority building"],
    path: "/services/rapid-scaling"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="w-full lg:max-w-7xl lg:mx-auto relative">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            <span className="luxury-text">Premium</span> Services
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive Reddit growth solutions designed for serious brands 
            who demand measurable results and authentic engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="luxury-card p-6 sm:p-8 group cursor-pointer animate-luxury-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.location.href = service.path}
            >
              {/* Icon Header */}
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-gradient-primary rounded-xl mr-3 sm:mr-4 shadow-red-glow group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="font-body text-muted-foreground mb-6 text-base sm:text-lg leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="luxury-card p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Ready to <span className="luxury-text">Dominate</span> Your Niche?
            </h3>
            <p className="font-body text-muted-foreground mb-8 text-base sm:text-lg leading-relaxed">
              Get a custom Reddit growth strategy tailored specifically to your brand and objectives.
            </p>
            <button 
              className="glow-button text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4"
              onClick={() => window.location.href = '/booking'}
            >
              Get Your Custom Strategy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
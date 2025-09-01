import { Search, Target, MessageSquare, Users, BarChart3, Zap } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Dedicated 5G Proxy",
    description: "Private, non-rotating, shadowban-safe proxy exclusively for your account.",
    features: ["Private 5G connection", "Non-rotating IP", "Shadowban protection", "Maximum safety"],
    path: "/services/subreddit-strategy"
  },
  {
    icon: Users,
    title: "Manual Posting",
    description: "Personal posting by me - no VAs, no outsourcing, no automation.",
    features: ["Direct personal management", "No third-party involvement", "Expert execution", "Quality guarantee"],
    path: "/services/community-engagement"
  },
  {
    icon: MessageSquare,
    title: "Custom Content Plan",
    description: "Tailored content strategy designed specifically for your niche and audience.",
    features: ["Niche-specific approach", "Strategic planning", "Content optimization", "Viral potential focus"],
    path: "/services/content-crafting"
  },
  {
    icon: Search,
    title: "Curated Subreddit List",
    description: "Hand-picked communities for maximum exposure and engagement in your target market.",
    features: ["Expert community selection", "Maximum reach optimization", "Niche targeting", "Engagement focus"],
    path: "/services/audience-profiling"
  },
  {
    icon: BarChart3,
    title: "4K-Safe Uploads",
    description: "High-quality media uploads with no compression or quality loss.",
    features: ["4K resolution support", "No quality degradation", "Professional presentation", "Media optimization"],
    path: "/services/performance-analytics"
  },
  {
    icon: Zap,
    title: "Full Account Ownership",
    description: "Complete ownership transfer - accounts are yours after collaboration ends.",
    features: ["Permanent ownership", "No ongoing dependencies", "Asset retention", "Long-term value"],
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
            <span className="luxury-text">Reddit Marketing</span> Management
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
            Premium service for start-ups, businesses, content creators, AI influencers, Forex & Crypto projects, and meme coins. 
            3+ years experience, manual work only, private 5G proxies, and real results.
          </p>
          
          {/* Pricing Section */}
          <div className="luxury-card p-6 sm:p-8 max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="border border-primary/20 rounded-lg p-4">
                <div className="text-2xl font-bold luxury-text">€500</div>
                <div className="text-sm text-muted-foreground">per month/account</div>
              </div>
              <div className="border border-primary/20 rounded-lg p-4">
                <div className="text-2xl font-bold luxury-text">€50</div>
                <div className="text-sm text-muted-foreground">Reddit account (one-time)</div>
              </div>
              <div className="border border-primary/20 rounded-lg p-4">
                <div className="text-2xl font-bold luxury-text">€50</div>
                <div className="text-sm text-muted-foreground">Proxy per month</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Payment via Bank Transfer / Revolut / Crypto • Discounts for multiple accounts</p>
          </div>
          
          {/* Results Promise */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-gradient-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="text-lg font-bold text-accent">25-30 subs/day</div>
              <div className="text-sm text-muted-foreground">Free sites after 2-3 weeks</div>
            </div>
            <div className="bg-gradient-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="text-lg font-bold text-accent">10-12 subs/day</div>
              <div className="text-sm text-muted-foreground">Paid sites after 2-3 weeks</div>
            </div>
          </div>
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
        
        {/* Additional Service Features */}
        <div className="mt-16 sm:mt-20">
          <div className="luxury-card p-6 sm:p-8 max-w-5xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-6 text-center">
              <span className="luxury-text">Additional</span> Service Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-lg font-bold mb-2">Direct Moderator Connections</div>
                <p className="text-sm text-muted-foreground">Established relationships with key subreddit moderators</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold mb-2">Flexible Content Delivery</div>
                <p className="text-sm text-muted-foreground">Via Telegram or Google Drive - your choice</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold mb-2">Legal Contract Option</div>
                <p className="text-sm text-muted-foreground">Professional legal documentation available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Refund Policy & Guarantees */}
        <div className="mt-8 sm:mt-12">
          <div className="luxury-card p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-6 text-center">
              <span className="luxury-text">Guarantees</span> & Policy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div className="border border-accent/20 rounded-lg p-4">
                <div className="text-lg font-bold text-accent mb-2">50% Refund Policy</div>
                <p className="text-sm text-muted-foreground">First 2 weeks if unsatisfied (Revolut/Crypto only)</p>
              </div>
              <div className="border border-accent/20 rounded-lg p-4">
                <div className="text-lg font-bold text-accent mb-2">Free Account Refill</div>
                <p className="text-sm text-muted-foreground">If banned in first week, free replacement included</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Important:</strong> 30-day timer starts only when link is in bio (not during setup). 
                Looking for serious, long-term collaborations, not 1-month experiments.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="luxury-card p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Ready to <span className="luxury-text">Dominate</span> Reddit?
            </h3>
            <p className="font-body text-muted-foreground mb-8 text-base sm:text-lg leading-relaxed">
              I don't take every creator. Let me review your profile first to ensure Reddit is the right fit for long-term success.
            </p>
            <button 
              className="glow-button text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4"
              onClick={() => window.location.href = '/booking'}
            >
              Apply for Partnership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
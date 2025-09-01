import { Award, Target, TrendingUp, Users, Shield, Zap } from "lucide-react";

const achievements = [
  {
    icon: Shield,
    title: "Private 5G Proxies & Safe Methods",
    description: "Exclusive access to private 5G proxy network and proven safe posting methods that minimize risk of penalties or shadowbans"
  },
  {
    icon: Target,
    title: "Manual Posting Only", 
    description: "100% manual work with no automation, bots, or VAs. Every post is crafted and placed by experienced Reddit specialists"
  },
  {
    icon: Users,
    title: "Direct Moderator Relationships",
    description: "Established connections with key moderators across major subreddits for better post visibility and community access"
  },
  {
    icon: TrendingUp,
    title: "Guaranteed Daily Growth",
    description: "Service typically brings 30+ subscribers or users acquired per platform daily for established creators after initial growth period"
  },
  {
    icon: Award,
    title: "4K-Safe Upload & Content Strategy",
    description: "Professional content optimization with 4K-safe uploads, custom posting schedules, and tailored content plans for maximum engagement"
  },
  {
    icon: Zap,
    title: "Full Account Ownership & Legal Contracts",
    description: "Complete account ownership transfer, legal service agreements, and flexible delivery via Telegram or Drive for total transparency"
  }
];

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-red-glow opacity-10"></div>
      <div className="absolute top-12 md:top-20 right-12 md:right-20 w-32 md:w-64 h-32 md:h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="w-full lg:max-w-7xl lg:mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Founder Avatar & Story */}
          <div className="animate-luxury-slide-in order-2 lg:order-1">
            <div className="relative mb-8">
              {/* Founder Image with Fire Aura */}
              <div className="relative w-64 md:w-72 h-80 md:h-96 mx-auto lg:mx-0">
                {/* Fire Aura Animation */}
                <div className="absolute inset-0 rounded-2xl animate-fire-aura"></div>
                <div className="absolute inset-0 rounded-2xl animate-fire-aura-alt"></div>
                
                {/* Main Image Container */}
                <div className="relative w-full h-full bg-gradient-primary rounded-2xl shadow-luxury overflow-hidden">
                  <img 
                    src="/lovable-uploads/90bad0b7-a36c-4b65-8678-4f2c41eafa5a.png"
                    alt="REDSEYA Founder"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Subtle overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Founder Label */}
                  <div className="absolute bottom-4 md:bottom-6 left-0 right-0 text-center">
                    <div className="font-heading text-xs md:text-sm font-bold text-white bg-black/60 backdrop-blur-sm rounded-lg px-3 md:px-4 py-1 md:py-2 inline-block border border-primary/30">
                      REDSEYA FOUNDER
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Led by <span className="luxury-text">Experience</span>
                <br />Built on <span className="luxury-text">Results</span>
              </h2>
              
              <p className="font-body text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                I've spent half a decade mastering Reddit's unique ecosystem, turning anonymous interactions 
                into massive business opportunities for brands that refuse to settle for mediocrity.
              </p>
              
              <p className="font-body text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                While others chase trends, I build systems. While others buy fake engagement, 
                I cultivate authentic communities that drive real revenue and lasting brand loyalty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  className="glow-button text-base md:text-lg font-bold"
                  onClick={() => window.location.href = '/booking'}
                >
                  Work With Me
                </button>
                <button 
                  className="gold-button text-base md:text-lg font-bold"
                  onClick={() => window.open('https://t.me/teodorxseya', '_blank')}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          
          {/* Right: Achievements Grid */}
          <div className="animate-luxury-fade-in [animation-delay:0.3s] order-1 lg:order-2">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center lg:text-left">
              Why <span className="luxury-text">Top Brands</span> Choose Us
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className="luxury-card p-4 md:p-6 animate-luxury-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-red-glow">
                      <achievement.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <h4 className="font-heading text-base md:text-lg font-bold mb-2 text-foreground">
                        {achievement.title}
                      </h4>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Philosophy Section */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="luxury-card p-6 md:p-12 max-w-5xl mx-auto">
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 md:mb-8">
              The <span className="luxury-text">REDSEYA</span> Philosophy
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
              <div className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-display font-black luxury-text mb-3">AUTHENTIC</div>
                <p className="font-body text-muted-foreground text-sm md:text-base">
                  No bots, no fake accounts, no shortcuts. Every upvote, comment, and connection is genuine human engagement.
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-display font-black luxury-text mb-3">STRATEGIC</div>
                <p className="font-body text-muted-foreground text-sm md:text-base">
                  Every action is calculated, every post optimized, every community carefully selected for maximum impact.
                </p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-display font-black luxury-text mb-3">RESULTS-DRIVEN</div>
                <p className="font-body text-muted-foreground text-sm md:text-base">
                  We don't measure success by vanity metrics. Revenue, conversions, and ROI are our only benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
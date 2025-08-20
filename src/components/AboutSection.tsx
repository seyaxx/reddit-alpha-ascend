import { Award, Target, TrendingUp, Users, Shield, Zap } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "5+ Years Reddit Mastery",
    description: "Deep platform expertise across every major subreddit category"
  },
  {
    icon: Target,
    title: "500K+ Successful Posts", 
    description: "Proven track record of dominating niche communities organically"
  },
  {
    icon: TrendingUp,
    title: "10M+ Organic Impressions",
    description: "Generated massive authentic reach without paid promotion"
  },
  {
    icon: Users,
    title: "50+ Industries Served",
    description: "From tech startups to luxury brands - we speak every language"
  },
  {
    icon: Shield,
    title: "Expert Risk Management",
    description: "Strategic approach minimizing penalties using proven safe methods"
  },
  {
    icon: Zap,
    title: "Average 300% ROI",
    description: "Consistent delivery of measurable business results and growth"
  }
];

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-red-glow opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Founder Avatar & Story */}
          <div className="animate-luxury-slide-in">
            <div className="relative mb-8">
              {/* Founder Image with Fire Aura */}
              <div className="relative w-72 h-96 mx-auto">
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
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <div className="font-heading text-sm font-bold text-white bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 inline-block border border-primary/30">
                      REDSEYA FOUNDER
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-5xl font-bold mb-6">
                Led by <span className="luxury-text">Experience</span>
                <br />Built on <span className="luxury-text">Results</span>
              </h2>
              
              <p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed">
                I've spent half a decade mastering Reddit's unique ecosystem, turning anonymous interactions 
                into massive business opportunities for brands that refuse to settle for mediocrity.
              </p>
              
              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                While others chase trends, I build systems. While others buy fake engagement, 
                I cultivate authentic communities that drive real revenue and lasting brand loyalty.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  className="glow-button text-lg font-bold"
                  onClick={() => window.location.href = '/booking'}
                >
                  Work With Me
                </button>
                <button 
                  className="gold-button text-lg font-bold"
                  onClick={() => window.open('https://t.me/teodorxseya', '_blank')}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          
          {/* Right: Achievements Grid */}
          <div className="animate-luxury-fade-in [animation-delay:0.3s]">
            <h3 className="font-heading text-4xl font-bold mb-12 text-center lg:text-left">
              Why <span className="luxury-text">Top Brands</span> Choose Us
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className="luxury-card p-6 animate-luxury-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-red-glow">
                      <achievement.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <h4 className="font-heading text-lg font-bold mb-2 text-foreground">
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
        <div className="mt-24 text-center">
          <div className="luxury-card p-12 max-w-5xl mx-auto">
            <h3 className="font-heading text-4xl font-bold mb-8">
              The <span className="luxury-text">REDSEYA</span> Philosophy
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-2xl font-display font-black luxury-text mb-3">AUTHENTIC</div>
                <p className="font-body text-muted-foreground">
                  No bots, no fake accounts, no shortcuts. Every upvote, comment, and connection is genuine human engagement.
                </p>
              </div>
              
              <div>
                <div className="text-2xl font-display font-black luxury-text mb-3">STRATEGIC</div>
                <p className="font-body text-muted-foreground">
                  Every action is calculated, every post optimized, every community carefully selected for maximum impact.
                </p>
              </div>
              
              <div>
                <div className="text-2xl font-display font-black luxury-text mb-3">RESULTS-DRIVEN</div>
                <p className="font-body text-muted-foreground">
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
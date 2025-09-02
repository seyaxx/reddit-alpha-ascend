import { Users, Star, Trophy, Target, Zap, Award } from "lucide-react";
import redditAnimationBg from "@/assets/reddit-animation-bg.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Teodor Seya",
      role: "Founder & CEO",
      experience: "5+ years dominating Reddit's ecosystem. Built viral campaigns reaching 50M+ users. Expert in organic growth, community psychology, and viral content strategies.",
      icon: Trophy,
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "Claudiu",
      role: "Senior Reddit Strategist",
      experience: "4 years of pure Reddit mastery. Specializes in subreddit infiltration, authentic community building, and turning lurkers into loyal followers through psychological triggers.",
      icon: Star,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Jan",
      role: "Community Growth Manager",
      experience: "4 years building Reddit empires. Master of engagement psychology, comment threading strategies, and turning negative sentiment into brand advocacy.",
      icon: Users,
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Glory",
      role: "Reddit Analytics Specialist",
      experience: "3 years cracking Reddit's algorithm. Data scientist who identifies trending patterns, optimal posting times, and viral content formulas that guarantee upvotes.",
      icon: Target,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Sara",
      role: "Viral Content Creator",
      experience: "2 years crafting Reddit-specific content. Expert in meme culture, subreddit linguistics, and creating thumb-stopping visuals that Reddit users can't ignore.",
      icon: Zap,
      gradient: "from-yellow-500 to-red-500"
    },
    {
      name: "Eduard",
      role: "Reddit Growth Hacker",
      experience: "1 year of explosive growth tactics. Specializes in rapid account scaling, karma farming strategies, and turning Reddit traffic into business results.",
      icon: Award,
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-40"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${redditAnimationBg})` }}></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl font-black mb-6">
            Meet Our <span className="luxury-text">Elite Team</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            The masterminds behind Reddit's most successful organic growth campaigns
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="luxury-text">Executive Team</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading professionals delivering exceptional results through strategic Reddit marketing excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div
                  key={member.name}
                  className="group bg-card/50 backdrop-blur-sm border-2 border-border/20 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-luxury hover:-translate-y-2 animate-luxury-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Avatar Placeholder with Icon */}
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background"></div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">
                      {member.name}
                    </h3>
                    <p className="font-body text-accent font-semibold mb-4 text-lg">
                      {member.role}
                    </p>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {member.experience}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready to Work with <span className="luxury-text">Our Team</span>?
              </h3>
              <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let our expert team craft a custom Reddit growth strategy that delivers real results for your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="glow-button text-lg font-bold"
                  onClick={() => window.location.href = '/booking'}
                >
                  Start Your Campaign
                </button>
                <button 
                  className="gold-button text-lg font-bold"
                  onClick={() => window.open('https://t.me/teodorxseya', '_blank')}
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
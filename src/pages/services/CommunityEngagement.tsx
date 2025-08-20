import { ArrowLeft, Users, MessageCircle, HandHeart, Star, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunityEngagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-8 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-xl mb-6 shadow-red-glow">
            <Users className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            <span className="luxury-text">Community</span> Engagement
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategic commenting and community building that establishes authentic brand presence. 
            We don't just post and ghost - we build lasting relationships that drive business results.
          </p>
        </div>

        {/* Engagement Strategy */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Engagement <span className="luxury-text">Strategy</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <MessageCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Authentic Interactions</h3>
                  <p className="text-muted-foreground">Genuine conversations that add value to discussions rather than obvious promotional tactics.</p>
                </div>
              </div>
              <div className="flex items-start">
                <HandHeart className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Relationship Building</h3>
                  <p className="text-muted-foreground">Long-term relationship cultivation with community members, moderators, and influencers.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Star className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Trust Establishment</h3>
                  <p className="text-muted-foreground">Systematic approach to building brand credibility through consistent, helpful participation.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Reputation Management</h3>
                  <p className="text-muted-foreground">Proactive monitoring and management of brand mentions and community sentiment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Organic Boosting</h3>
                  <p className="text-muted-foreground">Strategic engagement that naturally amplifies your content through community support.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Community Integration</h3>
                  <p className="text-muted-foreground">Seamless integration into community culture, becoming a valued member rather than an outsider.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Tactics */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            Engagement <span className="luxury-text">Tactics</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="luxury-card p-8 text-center h-80 flex flex-col justify-center">
              <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">Strategic Commenting</h3>
              <p className="text-muted-foreground text-sm flex-1">Thoughtful, value-added comments on high-visibility posts that showcase expertise.</p>
            </div>
            <div className="luxury-card p-8 text-center h-80 flex flex-col justify-center">
              <HandHeart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">Community Support</h3>
              <p className="text-muted-foreground text-sm flex-1">Proactive help and support to community members, building goodwill and reputation.</p>
            </div>
            <div className="luxury-card p-8 text-center h-80 flex flex-col justify-center">
              <Star className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-4">Thought Leadership</h3>
              <p className="text-muted-foreground text-sm flex-1">Industry insights and expert opinions that position your brand as an authority.</p>
            </div>
          </div>
        </div>

        {/* Community Building Framework */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Community Building <span className="luxury-text">Framework</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Listen</h3>
              <p className="text-muted-foreground text-sm">Monitor conversations and understand community needs and pain points.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Engage</h3>
              <p className="text-muted-foreground text-sm">Participate authentically in discussions with valuable contributions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <HandHeart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Support</h3>
              <p className="text-muted-foreground text-sm">Provide genuine help and support to build trust and relationships.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Lead</h3>
              <p className="text-muted-foreground text-sm">Establish thought leadership and become a respected community voice.</p>
            </div>
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            Success <span className="luxury-text">Metrics</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="luxury-card p-6 text-center">
              <div className="text-3xl font-bold luxury-text mb-2">85%</div>
              <div className="text-muted-foreground text-sm">Comment Response Rate</div>
            </div>
            <div className="luxury-card p-6 text-center">
              <div className="text-3xl font-bold luxury-text mb-2">150%</div>
              <div className="text-muted-foreground text-sm">Organic Reach Increase</div>
            </div>
            <div className="luxury-card p-6 text-center">
              <div className="text-3xl font-bold luxury-text mb-2">300%</div>
              <div className="text-muted-foreground text-sm">Brand Mention Growth</div>
            </div>
            <div className="luxury-card p-6 text-center">
              <div className="text-3xl font-bold luxury-text mb-2">95%</div>
              <div className="text-muted-foreground text-sm">Positive Sentiment</div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="luxury-card p-12 mb-16 bg-gradient-to-r from-card to-muted/30">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Engagement <span className="luxury-text">Deliverables</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Daily engagement across 10+ communities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Relationship building with key influencers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Weekly engagement performance reports
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Community sentiment monitoring
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Crisis management and reputation protection
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Organic content amplification strategies
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Community partnership opportunities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Long-term community growth plans
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-heading text-3xl font-bold mb-6">
            Ready to Build <span className="luxury-text">Authentic</span> Relationships?
          </h3>
          <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Transform your brand from unknown to trusted community member through strategic engagement.
          </p>
          <Button 
            className="glow-button text-xl font-bold px-12 py-6"
            onClick={() => window.location.href = '/booking'}
          >
            Start Building Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityEngagement;
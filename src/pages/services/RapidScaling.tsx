import { ArrowLeft, Zap, Rocket, Globe, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const RapidScaling = () => {
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
            <Zap className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            <span className="luxury-text">Rapid</span> Scaling
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Accelerated growth protocols for brands ready to dominate multiple communities. 
            When you're ready to go from single subreddit success to Reddit-wide authority, we make it happen fast.
          </p>
        </div>

        {/* Scaling Strategy */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Scaling <span className="luxury-text">Strategy</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Globe className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Multi-Subreddit Campaigns</h3>
                  <p className="text-muted-foreground">Coordinated campaigns across 20+ relevant subreddits with tailored messaging for each community.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Rocket className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Cross-Promotion Tactics</h3>
                  <p className="text-muted-foreground">Strategic cross-pollination between communities to maximize reach and engagement amplification.</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Viral Amplification</h3>
                  <p className="text-muted-foreground">Systematic approach to creating viral content that spreads organically across Reddit's ecosystem.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Authority Building</h3>
                  <p className="text-muted-foreground">Establish your brand as the go-to authority across your entire industry vertical on Reddit.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Exponential Growth</h3>
                  <p className="text-muted-foreground">Scaling strategies designed to achieve 10x growth in reach and engagement within 90 days.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Sustainable Systems</h3>
                  <p className="text-muted-foreground">Scalable processes and systems that maintain quality while increasing volume exponentially.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scaling Phases */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            Scaling <span className="luxury-text">Phases</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="luxury-card p-8 text-center h-80 flex flex-col justify-center">
              <div className="text-3xl font-bold luxury-text mb-4">Phase 1</div>
              <h3 className="font-heading text-xl font-bold mb-4">Foundation</h3>
              <p className="text-muted-foreground text-sm flex-1">Establish strong presence in 5-10 core communities with proven engagement strategies.</p>
              <div className="text-xs text-accent mt-4">Weeks 1-4</div>
            </div>
            <div className="luxury-card p-8 text-center h-80 flex flex-col justify-center">
              <div className="text-3xl font-bold luxury-text mb-4">Phase 2</div>
              <h3 className="font-heading text-xl font-bold mb-4">Expansion</h3>
              <p className="text-muted-foreground text-sm flex-1">Scale to 20+ communities with coordinated campaigns and cross-promotion tactics.</p>
              <div className="text-xs text-accent mt-4">Weeks 5-8</div>
            </div>
            <div className="luxury-card p-8 text-center h-80 flex flex-col justify-center">
              <div className="text-3xl font-bold luxury-text mb-4">Phase 3</div>
              <h3 className="font-heading text-xl font-bold mb-4">Domination</h3>
              <p className="text-muted-foreground text-sm flex-1">Achieve authority status across your entire vertical with viral content and thought leadership.</p>
              <div className="text-xs text-accent mt-4">Weeks 9-12</div>
            </div>
          </div>
        </div>

        {/* Scaling Tactics */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Advanced <span className="luxury-text">Tactics</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Network Effects</h3>
              <p className="text-muted-foreground text-sm">Leverage Reddit's interconnected nature for maximum amplification.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Viral Engineering</h3>
              <p className="text-muted-foreground text-sm">Scientific approach to creating shareable, viral content.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Influencer Network</h3>
              <p className="text-muted-foreground text-sm">Build relationships with key Reddit influencers and power users.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-3">Trend Hijacking</h3>
              <p className="text-muted-foreground text-sm">Capitalize on trending topics for maximum visibility.</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            Scaling <span className="luxury-text">Results</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="luxury-card p-6 text-center">
              <div className="text-3xl font-bold luxury-text mb-2">20+</div>
              <div className="text-muted-foreground text-sm">Active Communities</div>
            </div>
            <div className="luxury-card p-6 text-center">
              <div className="text-3xl font-bold luxury-text mb-2">1M+</div>
              <div className="text-muted-foreground text-sm">Monthly Impressions</div>
            </div>
            <div className="luxury-card p-6 text-center">
              <div className="text-3xl font-bold luxury-text mb-2">10x</div>
              <div className="text-muted-foreground text-sm">Growth in 90 Days</div>
            </div>
            <div className="luxury-card p-6 text-center">
              <div className="text-3xl font-bold luxury-text mb-2">500%</div>
              <div className="text-muted-foreground text-sm">ROI Increase</div>
            </div>
          </div>
        </div>

        {/* Investment & Timeline */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Scaling <span className="luxury-text">Investment</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Multi-community strategic campaigns
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Dedicated scaling team of 5+ specialists
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Advanced analytics and reporting
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Crisis management and reputation protection
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">Timeline</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/20">
                  <span className="text-muted-foreground">Week 1-2</span>
                  <span className="font-semibold">Strategy & Setup</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/20">
                  <span className="text-muted-foreground">Week 3-6</span>
                  <span className="font-semibold">Initial Scaling</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/20">
                  <span className="text-muted-foreground">Week 7-10</span>
                  <span className="font-semibold">Rapid Expansion</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Week 11-12</span>
                  <span className="font-semibold">Authority Status</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="luxury-card p-12 mb-16 bg-gradient-to-r from-card to-muted/30">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Scaling <span className="luxury-text">Deliverables</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Multi-community campaign execution
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Viral content creation and distribution
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Influencer relationship building
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Authority positioning strategies
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Advanced performance tracking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Scalable growth systems
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Competitive intelligence reports
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Long-term domination roadmap
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-heading text-3xl font-bold mb-6">
            Ready to <span className="luxury-text">Scale</span> Exponentially?
          </h3>
          <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Take your Reddit presence from good to industry-dominating in just 90 days.
          </p>
          <Button 
            className="glow-button text-xl font-bold px-12 py-6"
            onClick={() => window.location.href = '/booking'}
          >
            Start Scaling Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RapidScaling;
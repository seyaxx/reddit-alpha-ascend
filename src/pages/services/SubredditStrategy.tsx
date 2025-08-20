import { ArrowLeft, Target, Calendar, Zap, Shield, Compass, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SubredditStrategy = () => {
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
            <Target className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            <span className="luxury-text">Subreddit</span> Strategy
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Precision-crafted strategies to dominate your niche communities with surgical accuracy. 
            We don't spray and pray - we strike with calculated precision.
          </p>
        </div>

        {/* Strategy Components */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Strategic <span className="luxury-text">Components</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Content Calendar Mastery</h3>
                  <p className="text-muted-foreground">Meticulously planned posting schedules that maximize visibility and engagement while respecting community rhythms.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Timing Optimization</h3>
                  <p className="text-muted-foreground">Data-driven posting schedules based on when your target audience is most active and receptive.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Rule Compliance Framework</h3>
                  <p className="text-muted-foreground">Comprehensive systems to ensure every post follows community guidelines while maximizing impact.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Compass className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Community Navigation</h3>
                  <p className="text-muted-foreground">Strategic approach to building relationships with moderators and key community members.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Engagement Targeting</h3>
                  <p className="text-muted-foreground">Precision targeting of high-value discussions and threads for maximum brand exposure.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Success Metrics</h3>
                  <p className="text-muted-foreground">Clear KPIs and benchmarks to measure strategy effectiveness and ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            Our <span className="luxury-text">Approach</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="luxury-card p-6 text-center h-64 flex flex-col justify-center">
              <div className="text-2xl font-bold luxury-text mb-3">Research</div>
              <p className="text-muted-foreground text-sm">Deep-dive into community culture, moderator preferences, and posting patterns.</p>
            </div>
            <div className="luxury-card p-6 text-center h-64 flex flex-col justify-center">
              <div className="text-2xl font-bold luxury-text mb-3">Plan</div>
              <p className="text-muted-foreground text-sm">Create detailed content calendars with optimal timing and community-specific approaches.</p>
            </div>
            <div className="luxury-card p-6 text-center h-64 flex flex-col justify-center">
              <div className="text-2xl font-bold luxury-text mb-3">Execute</div>
              <p className="text-muted-foreground text-sm">Launch campaigns with precision timing and careful adherence to community guidelines.</p>
            </div>
            <div className="luxury-card p-6 text-center h-64 flex flex-col justify-center">
              <div className="text-2xl font-bold luxury-text mb-3">Optimize</div>
              <p className="text-muted-foreground text-sm">Continuously refine strategies based on performance data and community feedback.</p>
            </div>
          </div>
        </div>

        {/* Strategy Types */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Strategy <span className="luxury-text">Types</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Rapid Entry</h3>
              <p className="text-muted-foreground">Fast-track strategies for quick community integration and immediate visibility.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Authority Building</h3>
              <p className="text-muted-foreground">Long-term positioning strategies to establish your brand as a trusted authority.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Viral Optimization</h3>
              <p className="text-muted-foreground">Strategies designed to maximize viral potential and organic reach.</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="luxury-card p-12 mb-16 bg-gradient-to-r from-card to-muted/30">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Strategy <span className="luxury-text">Deliverables</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  30/60/90-day strategic roadmaps
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Community-specific content calendars
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Posting schedule optimization guides
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Rule compliance checklists
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Engagement amplification tactics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Crisis management protocols
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Performance tracking frameworks
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Competitive positioning strategies
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-heading text-3xl font-bold mb-6">
            Ready to <span className="luxury-text">Dominate</span> Your Communities?
          </h3>
          <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get a customized subreddit strategy that turns communities into your biggest growth engine.
          </p>
          <Button 
            className="glow-button text-xl font-bold px-12 py-6"
            onClick={() => window.location.href = '/booking'}
          >
            Get Your Strategy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubredditStrategy;
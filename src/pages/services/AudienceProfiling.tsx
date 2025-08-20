import { ArrowLeft, Search, Target, Users, TrendingUp, Eye, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AudienceProfiling = () => {
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
            <Search className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            <span className="luxury-text">Audience</span> Profiling
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deep-dive analysis to identify your perfect Reddit communities and audience demographics. 
            We don't guess where your audience is - we find them with surgical precision.
          </p>
        </div>

        {/* What We Do */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            What We <span className="luxury-text">Discover</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Target className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Perfect Subreddits</h3>
                  <p className="text-muted-foreground">We identify exactly which communities your ideal customers hang out in, including hidden gems your competitors haven't found.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">User Behavior Patterns</h3>
                  <p className="text-muted-foreground">Deep analysis of how your target audience behaves, what content they engage with, and when they're most active.</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Growth Opportunities</h3>
                  <p className="text-muted-foreground">Untapped communities and emerging trends that represent massive growth potential for your brand.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Eye className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Competitor Intelligence</h3>
                  <p className="text-muted-foreground">Detailed analysis of what your competitors are doing right (and wrong) so you can outmaneuver them.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Search className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Content Gaps</h3>
                  <p className="text-muted-foreground">We find exactly what your audience wants but isn't getting, giving you the perfect content opportunities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Validation Framework</h3>
                  <p className="text-muted-foreground">Proven methodology to validate opportunities before you invest time and resources.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            Our <span className="luxury-text">Process</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="luxury-card p-8 text-center">
              <div className="text-3xl font-bold luxury-text mb-4">01</div>
              <h3 className="font-heading text-xl font-bold mb-4">Data Collection</h3>
              <p className="text-muted-foreground">We scrape and analyze thousands of subreddits, posts, and user interactions to build a comprehensive picture of your market.</p>
            </div>
            <div className="luxury-card p-8 text-center">
              <div className="text-3xl font-bold luxury-text mb-4">02</div>
              <h3 className="font-heading text-xl font-bold mb-4">Pattern Analysis</h3>
              <p className="text-muted-foreground">Advanced algorithms identify patterns, trends, and opportunities that human analysis would miss.</p>
            </div>
            <div className="luxury-card p-8 text-center">
              <div className="text-3xl font-bold luxury-text mb-4">03</div>
              <h3 className="font-heading text-xl font-bold mb-4">Strategic Report</h3>
              <p className="text-muted-foreground">You receive a detailed report with actionable insights and a clear roadmap for Reddit domination.</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="luxury-card p-12 mb-16 bg-gradient-to-r from-card to-muted/30">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            What You'll <span className="luxury-text">Get</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Complete subreddit database with engagement metrics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Audience demographic breakdown and psychographics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Competitor analysis and positioning opportunities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Content themes that drive highest engagement
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Optimal posting times and frequency recommendations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Growth opportunity matrix with ROI projections
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  90-day action plan with measurable milestones
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Ongoing monitoring and optimization recommendations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-heading text-3xl font-bold mb-6">
            Ready to Find Your Perfect <span className="luxury-text">Audience</span>?
          </h3>
          <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Stop wasting time on guesswork. Get the data-driven insights you need to dominate Reddit.
          </p>
          <Button 
            className="glow-button text-xl font-bold px-12 py-6"
            onClick={() => window.location.href = '/booking'}
          >
            Start Your Analysis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudienceProfiling;
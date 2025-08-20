import { ArrowLeft, BarChart3, TrendingUp, Target, Eye, DollarSign, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PerformanceAnalytics = () => {
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
            <BarChart3 className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            <span className="luxury-text">Performance</span> Analytics
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive reporting tracking ROI, engagement, and conversion metrics. 
            We don't just show you pretty numbers - we deliver actionable insights that drive business decisions.
          </p>
        </div>

        {/* Analytics Framework */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Analytics <span className="luxury-text">Framework</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Real-Time Tracking</h3>
                  <p className="text-muted-foreground">Live monitoring of post performance, engagement rates, and audience growth across all communities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <DollarSign className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">ROI Calculation</h3>
                  <p className="text-muted-foreground">Precise measurement of return on investment with attribution modeling and revenue tracking.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Conversion Analysis</h3>
                  <p className="text-muted-foreground">Detailed conversion funnel analysis from Reddit engagement to final purchase decisions.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Eye className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Growth Projections</h3>
                  <p className="text-muted-foreground">Data-driven forecasting and growth modeling based on current performance trends.</p>
                </div>
              </div>
              <div className="flex items-start">
                <BarChart3 className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Competitive Benchmarking</h3>
                  <p className="text-muted-foreground">Performance comparison against competitors and industry standards.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Actionable Insights</h3>
                  <p className="text-muted-foreground">Clear recommendations and next steps based on data analysis and trends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            Key <span className="luxury-text">Metrics</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="luxury-card p-6 text-center h-48 flex flex-col justify-center">
              <TrendingUp className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-heading text-lg font-bold mb-2">Engagement Rate</h3>
              <p className="text-muted-foreground text-sm">Comments, upvotes, shares, and discussion quality metrics</p>
            </div>
            <div className="luxury-card p-6 text-center h-48 flex flex-col justify-center">
              <Eye className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-heading text-lg font-bold mb-2">Reach & Impressions</h3>
              <p className="text-muted-foreground text-sm">Total audience reached and content visibility metrics</p>
            </div>
            <div className="luxury-card p-6 text-center h-48 flex flex-col justify-center">
              <Target className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-heading text-lg font-bold mb-2">Conversion Rate</h3>
              <p className="text-muted-foreground text-sm">Reddit traffic to website conversions and sales attribution</p>
            </div>
            <div className="luxury-card p-6 text-center h-48 flex flex-col justify-center">
              <DollarSign className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-heading text-lg font-bold mb-2">Revenue Impact</h3>
              <p className="text-muted-foreground text-sm">Direct revenue attribution and customer lifetime value</p>
            </div>
          </div>
        </div>

        {/* Reporting Dashboard */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Reporting <span className="luxury-text">Dashboard</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Real-Time Dashboard</h3>
              <p className="text-muted-foreground">Live performance tracking with automated alerts and notifications.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Weekly Reports</h3>
              <p className="text-muted-foreground">Comprehensive weekly analysis with insights and optimization recommendations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Monthly Deep Dive</h3>
              <p className="text-muted-foreground">Detailed monthly analysis with strategic recommendations and planning.</p>
            </div>
          </div>
        </div>

        {/* Performance Tracking */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            What We <span className="luxury-text">Track</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="luxury-card p-8">
              <h3 className="font-heading text-xl font-bold mb-6">Engagement Metrics</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Upvote/downvote ratios and trending analysis
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Comment engagement and discussion quality
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Share and cross-posting metrics
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Community growth and follower acquisition
                </li>
              </ul>
            </div>
            <div className="luxury-card p-8">
              <h3 className="font-heading text-xl font-bold mb-6">Business Metrics</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Website traffic and referral quality
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Lead generation and conversion tracking
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Sales attribution and revenue impact
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Brand awareness and sentiment analysis
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="luxury-card p-12 mb-16 bg-gradient-to-r from-card to-muted/30">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Analytics <span className="luxury-text">Deliverables</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Real-time performance dashboard access
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Weekly performance reports with insights
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Monthly strategic analysis and recommendations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Competitor benchmarking reports
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  ROI calculation and attribution modeling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Growth projections and forecasting
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Custom KPI tracking and alerts
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Optimization recommendations and action plans
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-heading text-3xl font-bold mb-6">
            Ready for <span className="luxury-text">Data-Driven</span> Growth?
          </h3>
          <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get the insights you need to optimize your Reddit strategy and maximize ROI.
          </p>
          <Button 
            className="glow-button text-xl font-bold px-12 py-6"
            onClick={() => window.location.href = '/booking'}
          >
            Start Tracking Performance
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;
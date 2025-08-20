import { ArrowLeft, MessageSquare, Lightbulb, Heart, TrendingUp, Edit3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContentCrafting = () => {
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
            <MessageSquare className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            <span className="luxury-text">Content</span> Crafting
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Native-feeling posts that blend seamlessly into communities while driving brand awareness. 
            We create content that doesn't feel like marketing - because the best marketing doesn't feel like marketing.
          </p>
        </div>

        {/* Content Philosophy */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Our Content <span className="luxury-text">Philosophy</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Lightbulb className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Value-First Approach</h3>
                  <p className="text-muted-foreground">Every piece of content delivers genuine value before any promotional message. We solve problems first, sell second.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Community-Native Tone</h3>
                  <p className="text-muted-foreground">Content that speaks the language of each community, respecting their culture and communication style.</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Viral Potential Optimization</h3>
                  <p className="text-muted-foreground">Strategic elements designed to maximize shareability and organic amplification.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Edit3 className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">A/B Testing Framework</h3>
                  <p className="text-muted-foreground">Continuous optimization through systematic testing of headlines, formats, and posting approaches.</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Engagement Engineering</h3>
                  <p className="text-muted-foreground">Content structured to naturally encourage comments, discussions, and community interaction.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">Brand Integration</h3>
                  <p className="text-muted-foreground">Subtle brand messaging that builds awareness without triggering promotional resistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Types */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-12 text-center">
            Content <span className="luxury-text">Types</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="luxury-card p-6 text-center h-48 flex flex-col justify-center">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-heading text-lg font-bold mb-2">Educational</h3>
              <p className="text-muted-foreground text-sm">Tutorials, guides, and how-to content that establishes expertise.</p>
            </div>
            <div className="luxury-card p-6 text-center h-48 flex flex-col justify-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-heading text-lg font-bold mb-2">Problem-Solving</h3>
              <p className="text-muted-foreground text-sm">Direct solutions to community pain points and challenges.</p>
            </div>
            <div className="luxury-card p-6 text-center h-48 flex flex-col justify-center">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-heading text-lg font-bold mb-2">Discussion Starters</h3>
              <p className="text-muted-foreground text-sm">Thought-provoking questions and controversial takes.</p>
            </div>
            <div className="luxury-card p-6 text-center h-48 flex flex-col justify-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-heading text-lg font-bold mb-2">Data-Driven</h3>
              <p className="text-muted-foreground text-sm">Research, statistics, and insights that inform decisions.</p>
            </div>
          </div>
        </div>

        {/* Content Process */}
        <div className="luxury-card p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Our Creation <span className="luxury-text">Process</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold">1</div>
              <h3 className="font-heading text-lg font-bold mb-2">Research</h3>
              <p className="text-muted-foreground text-sm">Deep community analysis and trend identification</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold">2</div>
              <h3 className="font-heading text-lg font-bold mb-2">Ideation</h3>
              <p className="text-muted-foreground text-sm">Creative brainstorming aligned with community interests</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold">3</div>
              <h3 className="font-heading text-lg font-bold mb-2">Creation</h3>
              <p className="text-muted-foreground text-sm">Expert crafting with viral optimization techniques</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold">4</div>
              <h3 className="font-heading text-lg font-bold mb-2">Testing</h3>
              <p className="text-muted-foreground text-sm">A/B testing and performance optimization</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold">5</div>
              <h3 className="font-heading text-lg font-bold mb-2">Scaling</h3>
              <p className="text-muted-foreground text-sm">Amplification of high-performing content</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="luxury-card p-12 mb-16 bg-gradient-to-r from-card to-muted/30">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Content <span className="luxury-text">Deliverables</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Custom content calendar with 30+ pieces
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Community-specific content variations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Viral optimization guidelines
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Engagement-driving templates
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  A/B testing frameworks and results
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Performance tracking and analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Content repurposing strategies
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  Crisis content and damage control posts
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-heading text-3xl font-bold mb-6">
            Ready for Content That <span className="luxury-text">Converts</span>?
          </h3>
          <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get content that builds trust, drives engagement, and grows your brand organically.
          </p>
          <Button 
            className="glow-button text-xl font-bold px-12 py-6"
            onClick={() => window.location.href = '/booking'}
          >
            Start Creating
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentCrafting;
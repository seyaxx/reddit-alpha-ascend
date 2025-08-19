import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-8 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <h1 className="font-heading text-5xl font-bold mb-6">
            About <span className="luxury-text">REDSEYA</span>
          </h1>
        </div>

        <div className="luxury-card p-12 space-y-8">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
              Led by Experience. Built on Results.
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              REDSEYA is the premier organic Reddit growth service for influencers, digital agencies, 
              AI brands, and creators who demand excellence. We don't just grow your Reddit presence - 
              we build your digital empire.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
              Our Mission
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              To transform how brands approach Reddit marketing by delivering authentic, 
              high-impact organic growth that builds lasting communities and drives real business results. 
              No shortcuts, no fake engagement - just strategic excellence.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
              Why Choose REDSEYA?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-heading font-bold text-accent mb-2">Proven Expertise</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Years of experience navigating Reddit's complex ecosystem and community dynamics.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-heading font-bold text-accent mb-2">Authentic Growth</h4>
                <p className="font-body text-muted-foreground text-sm">
                  We build genuine engagement, not artificial metrics that damage your reputation.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-heading font-bold text-accent mb-2">Strategic Approach</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Every campaign is custom-crafted based on deep audience analysis and market research.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-heading font-bold text-accent mb-2">Measurable Results</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Transparent reporting and analytics that show real ROI and business impact.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
              Ready to Dominate Reddit?
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Join the elite brands that trust REDSEYA to build their Reddit presence. 
              No compromises, no shortcuts - just premium organic growth that delivers results.
            </p>
            <Button 
              className="glow-button text-lg font-bold"
              onClick={() => window.location.href = '/booking'}
            >
              Book Your Strategy Session
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
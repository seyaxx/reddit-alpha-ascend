import { ArrowRight, Calendar, MessageCircle, Trophy, ExternalLink } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-red-glow opacity-20"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
      
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Main CTA Content */}
        <div className="animate-luxury-fade-in">
          <h2 className="font-display text-6xl md:text-8xl font-black mb-8">
            Ready to <span className="luxury-text">DOMINATE</span>
            <br />
            <span className="text-foreground">Reddit?</span>
          </h2>
          
          <p className="font-body text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Stop watching competitors steal your audience. 
            Start building the Reddit presence that transforms your brand into an industry authority.
          </p>
        </div>
        
        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-luxury-slide-in [animation-delay:0.3s]">
          
          {/* Primary CTA */}
          <div className="luxury-card p-8 border-2 border-primary/30 relative group">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-lg group-hover:opacity-10 transition-opacity duration-300"></div>
            
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold mb-4">Strategy Session</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Get a custom Reddit growth plan tailored to your brand and objectives.
            </p>
            <button 
              className="glow-button w-full text-lg font-bold"
              onClick={() => window.location.href = '/booking'}
            >
              Book Free Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
              MOST POPULAR
            </div>
          </div>
          
          {/* Secondary CTA */}
          <div className="luxury-card p-8 group">
            <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold mb-4">Quick Chat</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Have questions? Get instant answers about our Reddit growth services.
            </p>
            <button 
              className="gold-button w-full text-lg font-bold"
              onClick={() => window.open('https://t.me/teodorxseya', '_blank')}
            >
              Start Chat
            </button>
          </div>
          
          {/* Instagram Follow Button */}
          <div className="mt-8 flex justify-center animate-luxury-fade-in [animation-delay:0.4s]">
            <button 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 flex items-center"
              onClick={() => window.open('https://www.instagram.com/teodorxseya?igsh=Y3B1Mzh4MWhhaHE5&utm_source=qr', '_blank')}
            >
              Follow on Instagram
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Urgency & Social Proof */}
        <div className="animate-luxury-fade-in [animation-delay:0.6s]">
          <div className="luxury-card p-8 max-w-4xl mx-auto bg-gradient-to-r from-card to-muted/30">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              <div className="text-center">
                <div className="text-3xl font-display font-black luxury-text mb-2">Limited</div>
                <div className="text-muted-foreground text-sm">
                  Only 5 new clients per month to ensure quality
                </div>
              </div>
              
              <div className="text-center border-l border-r border-border/20 md:px-8">
                <div className="text-3xl font-display font-black luxury-text mb-2">Fast</div>
                <div className="text-muted-foreground text-sm">
                  See results within 30 days
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-display font-black luxury-text mb-2">Proven</div>
                <div className="text-muted-foreground text-sm">
                  500K+ upvotes generated for satisfied clients
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final Push */}
        <div className="mt-16 animate-luxury-fade-in [animation-delay:0.9s]">
          <p className="font-heading text-lg font-semibold text-muted-foreground mb-8">
            Your competitors are already building their Reddit presence.
            <br />
            <span className="text-accent">Don't let them get ahead.</span>
          </p>
          
          <button 
            className="glow-button text-2xl font-black px-12 py-6"
            onClick={() => window.location.href = '/booking'}
          >
            CLAIM YOUR SPOT NOW
          </button>
          
          <p className="text-xs text-muted-foreground/60 mt-4">
            No spam, no pressure. Just results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
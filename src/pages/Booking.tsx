import { ArrowLeft, Calendar, Clock, Video, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Booking = () => {
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
            Book Your <span className="luxury-text">Discovery Call</span>
          </h1>
          <p className="font-body text-muted-foreground text-xl">
            Let's see if your business is the right fit for Reddit growth. We're selective and only work with brands we know we can scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Session Details */}
          <div className="space-y-8">
            <div className="luxury-card p-8">
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">
                What to Expect
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-red-glow flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      30-Minute Discovery Call
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      We'll analyze your business, present our offers, and determine if you're a good fit for Reddit growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-red-glow flex-shrink-0">
                    <Video className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      Google Meet Call
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      Face-to-face consultation to present our Reddit growth services and see if we're aligned.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-red-glow flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      Qualification Process
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      We don't work with everyone - only businesses we're confident we can successfully scale on Reddit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-red-glow flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      No Pressure Discovery
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      A genuine consultation to see if there's mutual fit - no high-pressure sales tactics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="luxury-card p-8 bg-gradient-dark">
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
                Direct Contact
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                Prefer to discuss your project directly? Connect with me on Telegram for immediate assistance.
              </p>
              <Button 
                className="gold-button font-bold w-full"
                onClick={() => window.open('https://t.me/teodorxseya', '_blank')}
              >
                Message on Telegram
              </Button>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="luxury-card p-8">
            <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">
              Schedule Your Discovery Call
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="font-heading text-sm font-bold text-foreground block mb-2">
                  Your Name *
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-accent focus:outline-none font-body"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="font-heading text-sm font-bold text-foreground block mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-accent focus:outline-none font-body"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-heading text-sm font-bold text-foreground block mb-2">
                  Company/Brand Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-accent focus:outline-none font-body"
                  placeholder="Your company or personal brand"
                />
              </div>

              <div>
                <label className="font-heading text-sm font-bold text-foreground block mb-2">
                  Current Monthly Budget Range
                </label>
                <select className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-accent focus:outline-none font-body">
                  <option value="">Select budget range</option>
                  <option value="1k-3k">$1,000 - $3,000</option>
                  <option value="3k-5k">$3,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k+">$10,000+</option>
                </select>
              </div>

              <div>
                <label className="font-heading text-sm font-bold text-foreground block mb-2">
                  Tell us about your Reddit goals
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-accent focus:outline-none font-body resize-none"
                  placeholder="What do you want to achieve on Reddit? Target audience, goals, current challenges, etc."
                ></textarea>
              </div>

              <Button 
                className="glow-button font-bold w-full text-lg py-4"
                onClick={() => window.open('https://calendly.com/teodorxseya/30min', '_blank')}
              >
                Book Your Discovery Call
              </Button>

              <p className="text-center font-body text-muted-foreground text-xs">
                By booking, you agree to our Privacy Policy. We'll send you a Google Meet link within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
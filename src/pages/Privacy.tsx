import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
            Privacy <span className="luxury-text">Policy</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="luxury-card p-12 space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
              Information We Collect
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include your name, email address, phone number, 
              and information about your Reddit accounts and marketing goals.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
              How We Use Your Information
            </h2>
            <ul className="font-body text-muted-foreground space-y-2">
              <li>• Provide, maintain, and improve our Reddit growth services</li>
              <li>• Communicate with you about your account and our services</li>
              <li>• Analyze usage patterns to enhance our service quality</li>
              <li>• Comply with legal obligations and protect against fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
              Information Sharing
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share information with 
              trusted service providers who assist us in operating our business, provided they agree 
              to keep this information confidential.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
              Data Security
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
              Your Rights
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              You have the right to access, update, or delete your personal information. 
              You may also opt out of certain communications from us. To exercise these rights, 
              please contact us using the information provided below.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
              Contact Us
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at 
              teodorxseya@gmail.com or through our Telegram channel.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="font-heading text-xl font-bold mb-2 text-accent">
              Ready to Get Started?
            </h3>
            <p className="font-body text-muted-foreground text-sm mb-4">
              Your privacy is protected while you dominate Reddit with REDSEYA.
            </p>
            <Button 
              className="glow-button font-bold"
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

export default Privacy;
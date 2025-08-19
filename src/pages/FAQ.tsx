import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/FAQSection";

const FAQ = () => {
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
            Frequently Asked <span className="luxury-text">Questions</span>
          </h1>
          <p className="font-body text-muted-foreground text-xl">
            Everything you need to know about REDSEYA's premium Reddit growth services.
          </p>
        </div>

        <FAQSection />

        <div className="mt-16 text-center">
          <div className="luxury-card p-12">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Still Have <span className="luxury-text">Questions</span>?
            </h3>
            <p className="font-body text-muted-foreground mb-8 text-lg">
              Get personalized answers and discuss your specific Reddit growth goals.
            </p>
            <Button 
              className="glow-button text-lg font-bold"
              onClick={() => window.location.href = '/booking'}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
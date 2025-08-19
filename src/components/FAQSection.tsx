import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How is your approach different from other Reddit marketing services?",
    answer: "We focus exclusively on organic, authentic growth. No bots, no fake accounts, no rule violations. Our team consists of Reddit veterans who understand community culture and build genuine relationships that drive real business results."
  },
  {
    question: "What kind of results can I expect and how quickly?",
    answer: "Most clients see initial engagement within 7-14 days and substantial growth within 30-90 days. Results vary by industry and goals, but our average client achieves 300% ROI and 10x organic reach increase within the first quarter."
  },
  {
    question: "Which subreddits will you target for my brand?",
    answer: "We conduct comprehensive research to identify the most valuable communities for your specific niche. This includes analyzing competitor presence, audience demographics, engagement patterns, and growth opportunities across 100+ relevant subreddits."
  },
  {
    question: "Is your method compliant with Reddit's terms of service?",
    answer: "Absolutely. We maintain a 100% compliance rate across all campaigns. Our methods are built around authentic engagement, valuable content creation, and genuine community participation - exactly what Reddit was designed for."
  },
  {
    question: "Do you work with controversial or adult content?",
    answer: "We focus on mainstream brands, influencers, and agencies. While we maintain the highest professional standards, we work with clients across most industries provided the content and approach align with authentic community building."
  },
  {
    question: "What's included in your reporting and analytics?",
    answer: "You'll receive comprehensive monthly reports including engagement metrics, reach analytics, conversion tracking, ROI calculations, and strategic recommendations for ongoing optimization."
  },
  {
    question: "Can you guarantee specific results like X upvotes or Y conversions?",
    answer: "We don't make unrealistic guarantees because Reddit success depends on content quality and community fit. However, we do guarantee our proven process, dedicated effort, and full transparency. Most clients exceed their initial goals."
  },
  {
    question: "What's the minimum commitment and investment required?",
    answer: "We offer flexible packages starting at 3-month commitments to allow proper strategy development and execution. Investment varies based on scope and goals - we'll provide custom pricing after understanding your specific needs."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-background relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            <span className="luxury-text">Frequently</span> Asked Questions
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            Everything you need to know about dominating Reddit organically.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="luxury-card overflow-hidden animate-luxury-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center group hover:bg-muted/10 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-heading text-lg font-bold text-foreground pr-4 group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-red-glow group-hover:scale-110 transition-transform duration-300">
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-primary-foreground" />
                  )}
                </div>
              </button>
              
              {/* Answer Content */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0 pb-0'
                }`}
              >
                <div className="px-6">
                  <div className="h-px bg-border/20 mb-4"></div>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div className="luxury-card p-8">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Still Have <span className="luxury-text">Questions</span>?
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Get personalized answers and a custom Reddit growth strategy for your brand.
            </p>
            <button 
              className="glow-button text-lg font-bold"
              onClick={() => window.location.href = '/booking'}
            >
              Schedule a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
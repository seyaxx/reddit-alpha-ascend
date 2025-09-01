import CompanyBar from "./CompanyBar";

const testimonials = [
  {
    quote: "REDSEYA transformed our Reddit presence from zero to dominant. We went from invisible to industry leader in 90 days.",
    author: "👤",
    title: "Private Name",
    company: "VetioAI Owner, CEO",
    result: "2.3M organic reach in Q1"
  },
  {
    quote: "The level of strategic thinking and execution is unmatched. They don't just post content - they build communities.",
    author: "👤", 
    title: "Private Name",
    company: "e-creativeagency CEO",
    result: "400% increase in qualified leads"
  },
  {
    quote: "Finally, a team that understands Reddit culture while delivering business results. Game-changing partnership.",
    author: "👤",
    title: "Private Name",
    company: "FlixBuddy CEO",
    result: "150K+ in attributed revenue"
  }
];

const ResultsSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Testimonials */}
        <div>
          <h3 className="font-heading text-4xl font-bold text-center mb-16">
            What <span className="luxury-text">Industry Leaders</span> Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="luxury-card p-6 md:p-8 h-auto md:h-[32rem] flex flex-col animate-luxury-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote */}
                <div className="flex-1 flex flex-col">
                  <div className="text-3xl md:text-4xl text-accent mb-3 md:mb-4 font-display leading-none">"</div>
                  <div className="flex-1 flex items-start mb-6 md:mb-0">
                    <p className="font-body text-muted-foreground italic leading-relaxed text-base md:text-lg">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
                
                {/* Author - Fixed at bottom */}
                <div className="border-t border-border/20 pt-4 md:pt-6 mt-6 md:mt-8">
                  <div className="flex items-center mb-3 md:mb-4 min-h-[3rem] md:h-12">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-3 md:mr-4 shadow-red-glow flex-shrink-0">
                      <span className="text-xl md:text-2xl leading-none">
                        {testimonial.author}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-bold text-foreground leading-tight text-sm md:text-base">
                        {testimonial.title}
                      </div>
                      <div className="font-body text-muted-foreground text-xs md:text-sm leading-tight">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  
                  {/* Result - Fixed height */}
                  <div className="bg-gradient-primary/10 rounded-lg p-3 md:p-4 border border-primary/20 min-h-[3rem] md:h-16 flex items-center">
                    <div className="w-full">
                      <div className="text-accent font-heading font-bold text-xs md:text-sm uppercase tracking-wide">
                        RESULT: {testimonial.result}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      
      {/* Company Bar */}
      <CompanyBar />
    </section>
  );
};

export default ResultsSection;
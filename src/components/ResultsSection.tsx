import { TrendingUp, Users, DollarSign, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import CompanyBar from "./CompanyBar";

const stats = [
  {
    icon: TrendingUp,
    number: 500000,
    suffix: "+",
    label: "Upvotes Generated",
    description: "Authentic engagement across 200+ subreddits"
  },
  {
    icon: Users,
    number: 10000000,
    suffix: "+", 
    label: "Organic Reach",
    description: "Monthly impressions for client content"
  },
  {
    icon: DollarSign,
    number: 300,
    suffix: "%",
    label: "Average ROI",
    description: "Return on Reddit marketing investment"
  },
  {
    icon: Eye,
    number: 50000,
    suffix: "+",
    label: "Quality Clicks",
    description: "High-intent traffic to client websites"
  }
];

const testimonials = [
  {
    quote: "REDSEYA transformed our Reddit presence from zero to dominant. We went from invisible to industry leader in 90 days.",
    author: "Sarah Chen",
    title: "Head of Growth, TechFlow AI",
    result: "2.3M organic reach in Q1"
  },
  {
    quote: "The level of strategic thinking and execution is unmatched. They don't just post content - they build communities.",
    author: "Marcus Rodriguez", 
    title: "Founder, Digital Apex Agency",
    result: "400% increase in qualified leads"
  },
  {
    quote: "Finally, a team that understands Reddit culture while delivering business results. Game-changing partnership.",
    author: "Alex Thompson",
    title: "CMO, VirtualInfluence Co.",
    result: "$150K+ in attributed revenue"
  }
];

const CounterAnimation = ({ number, suffix }: { number: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [number]);
  
  return (
    <span className="animate-counter-up">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ResultsSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Proven <span className="luxury-text">Results</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Real numbers from real campaigns. Our clients don't just grow their Reddit presence - 
            they dominate their industries through strategic community building.
          </p>
        </div>
        
        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="luxury-card p-8 text-center group animate-luxury-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-red-glow group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div className="text-4xl md:text-5xl font-display font-black luxury-text mb-2">
                <CounterAnimation number={stat.number} suffix={stat.suffix} />
              </div>
              
              <h3 className="font-heading text-lg font-bold mb-2 text-foreground">
                {stat.label}
              </h3>
              
              <p className="font-body text-muted-foreground text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div>
          <h3 className="font-heading text-4xl font-bold text-center mb-16">
            What <span className="luxury-text">Industry Leaders</span> Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author}
                className="luxury-card p-8 animate-luxury-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote */}
                <div className="mb-6">
                  <div className="text-4xl text-accent mb-4 font-display">"</div>
                  <p className="font-body text-muted-foreground italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                
                {/* Author */}
                <div className="border-t border-border/20 pt-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-red-glow">
                      <span className="text-primary-foreground font-bold text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="font-body text-muted-foreground text-sm">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                  
                  {/* Result */}
                  <div className="bg-muted/30 rounded-lg p-3 border border-border/10">
                    <div className="text-accent font-heading font-bold text-sm">
                      RESULT: {testimonial.result}
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
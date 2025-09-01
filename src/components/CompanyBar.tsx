const companies = [
  "SinDream",
  "Luvo Studio", 
  "Nova Studio",
  "Nobuos Agency",
  "FanFlow",
  "FlixBuddy",
  "Vetio",
  "AI Mastery Hub"
];

const CompanyBar = () => {
  return (
    <div className="relative py-12 overflow-hidden bg-gradient-to-r from-background via-muted/10 to-background border-y border-border/20">
      {/* Subtle premium background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
      {/* Main content with infinite scroll */}
      <div className="relative z-10">
        {/* Infinite scrolling container */}
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Duplicate companies array for seamless infinite scroll */}
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div 
              key={`company-${index}`}
              className="flex items-center mx-16 min-w-max"
            >
              <span className="font-heading text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors duration-500 tracking-wider uppercase">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Premium edge fade effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-20"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-20"></div>
    </div>
  );
};

export default CompanyBar;
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
    <div className="py-12 bg-muted/20 border-y border-border/10 overflow-hidden">
      <div className="relative">
        {/* Moving text strip */}
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set of companies */}
          {companies.map((company, index) => (
            <div 
              key={`first-${index}`}
              className="flex items-center mx-8 min-w-max"
            >
              <span className="font-heading text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                {company}
              </span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {companies.map((company, index) => (
            <div 
              key={`second-${index}`}
              className="flex items-center mx-8 min-w-max"
            >
              <span className="font-heading text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors duration-300">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyBar;
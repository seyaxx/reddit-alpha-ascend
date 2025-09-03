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
    <div className="relative py-12 overflow-hidden bg-gradient-to-r from-background via-red-950/10 to-background border-y border-red-500/10">
      {/* Premium background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 via-transparent to-red-900/5"></div>
      
      {/* Main content with infinite scroll */}
      <div className="relative z-10">
        {/* Infinite scrolling container */}
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Duplicate companies array for seamless infinite scroll */}
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div 
              key={`company-${index}`}
              className="flex items-center mx-16 min-w-max group"
            >
              <span className="font-heading text-2xl font-bold text-muted-foreground/50 hover:text-red-400 transition-all duration-500 tracking-wider uppercase group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Premium edge fade effect with subtle red tint */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/95 to-transparent z-20"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/95 to-transparent z-20"></div>
      
      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
    </div>
  );
};

export default CompanyBar;
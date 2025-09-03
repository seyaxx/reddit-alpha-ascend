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
    <div className="relative py-16 overflow-hidden bg-gradient-to-r from-background via-red-950/20 to-background border-y border-red-500/20">
      {/* Luxury background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-red-600/5 to-red-900/10"></div>
      <div className="absolute inset-0 bg-gradient-subtle opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
      
      {/* Main content with infinite scroll */}
      <div className="relative z-10">
        <div className="text-center mb-8">
          <p className="font-body text-red-400/80 text-sm uppercase tracking-widest font-semibold">
            Trusted by Premium Brands
          </p>
        </div>
        
        {/* Infinite scrolling container */}
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Duplicate companies array for seamless infinite scroll */}
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div 
              key={`company-${index}`}
              className="flex items-center mx-20 min-w-max group"
            >
              <div className="relative">
                <span className="font-heading text-3xl font-black text-muted-foreground/40 hover:text-red-400 transition-all duration-700 tracking-wider uppercase group-hover:scale-110 transform cursor-default">
                  {company}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
              {/* Luxury separator */}
              <div className="w-2 h-2 bg-red-500/30 rounded-full ml-20 group-hover:bg-red-400 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Premium edge fade effect with red tint */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/90 to-transparent z-20"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/90 to-transparent z-20"></div>
      
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
    </div>
  );
};

export default CompanyBar;
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
    <div className="relative py-16 overflow-hidden bg-gradient-to-r from-background via-primary/5 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal stripes */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 transform -skew-y-3"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-secondary/15 via-transparent to-primary/15 transform skew-y-2"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-4 left-1/4 w-32 h-32 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-8 right-1/3 w-24 h-24 bg-gradient-radial from-secondary/40 to-transparent rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        
        {/* Lightning bolt shapes */}
        <div className="absolute top-6 right-1/4 w-2 h-16 bg-gradient-to-b from-secondary to-primary/50 transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-4 left-1/6 w-1 h-12 bg-gradient-to-t from-primary to-secondary/50 transform -rotate-45 animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Glowing border effect */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse delay-500"></div>
        
        {/* Moving text strip with crazy effects */}
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div 
                key={`first-${index}`}
                className="flex items-center mx-12 min-w-max relative group"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/30 to-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                
                {/* Text with multiple effects */}
                <span className="relative font-heading text-4xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent hover:from-secondary hover:via-primary hover:to-secondary transition-all duration-700 transform hover:scale-110 hover:rotate-1 filter drop-shadow-lg">
                  {company}
                </span>
                
                {/* Sparkle effects */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondary rounded-full animate-ping opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary rounded-full animate-ping delay-300 opacity-40"></div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div 
                key={`second-${index}`}
                className="flex items-center mx-12 min-w-max relative group"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/30 to-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                
                {/* Text with multiple effects */}
                <span className="relative font-heading text-4xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent hover:from-secondary hover:via-primary hover:to-secondary transition-all duration-700 transform hover:scale-110 hover:rotate-1 filter drop-shadow-lg">
                  {company}
                </span>
                
                {/* Sparkle effects */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondary rounded-full animate-ping opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary rounded-full animate-ping delay-300 opacity-40"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Overlay gradient for edge fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20"></div>
    </div>
  );
};

export default CompanyBar;
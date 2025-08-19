import { ArrowUp, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="font-display text-4xl font-black luxury-text mb-4">
                  REDSEYA
                </h3>
                <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-md">
                  Premium organic Reddit growth for brands that refuse to settle for mediocrity. 
                  Authentic engagement. Real results. Unmatched expertise.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-5 h-5 text-accent mr-3" />
                  <span className="font-body">hello@redseya.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-5 h-5 text-accent mr-3" />
                  <span className="font-body">+1 (555) REDSEYA</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 text-accent mr-3" />
                  <span className="font-body">Global Remote Operations</span>
                </div>
              </div>
            </div>
            
            {/* Services Column */}
            <div>
              <h4 className="font-heading text-xl font-bold mb-6 text-foreground">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Audience Profiling",
                  "Subreddit Strategy", 
                  "Content Crafting",
                  "Community Engagement",
                  "Performance Analytics",
                  "Rapid Scaling"
                ].map((service) => (
                  <li key={service}>
                    <a 
                      href="#services" 
                      className="font-body text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center group"
                    >
                      {service}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Column */}
            <div>
              <h4 className="font-heading text-xl font-bold mb-6 text-foreground">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Case Studies", href: "#results" },
                  { label: "Process", href: "#process" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#contact" },
                  { label: "Privacy Policy", href: "/privacy" }
                ].map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="font-body text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center group"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/20 bg-muted/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              
              {/* Copyright */}
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="font-body text-muted-foreground text-sm">
                  © 2024 REDSEYA. All rights reserved. 
                  <span className="text-accent"> Dominate Reddit Organically.</span>
                </p>
              </div>
              
              {/* Social Links & Back to Top */}
              <div className="flex items-center space-x-6">
                
                {/* Social Media Links */}
                <div className="flex space-x-4">
                  {[
                    { name: "LinkedIn", href: "#" },
                    { name: "Twitter", href: "#" },
                    { name: "Reddit", href: "#" }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <span className="text-sm font-bold">
                        {social.name.charAt(0)}
                      </span>
                    </a>
                  ))}
                </div>
                
                {/* Back to Top Button */}
                <button
                  onClick={scrollToTop}
                  className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-red-glow hover:scale-110 transition-transform duration-300 group"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-5 h-5 text-primary-foreground group-hover:animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final CTA Strip */}
        <div className="bg-gradient-primary py-6">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <p className="font-heading text-primary-foreground font-bold text-lg">
                  Ready to dominate Reddit? Let's build your empire.
                </p>
              </div>
              <button className="gold-button font-bold">
                Start Your Domination
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
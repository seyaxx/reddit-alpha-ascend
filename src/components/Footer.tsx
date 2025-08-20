import { ArrowUp, Mail, Send, Instagram, Radio, ExternalLink } from "lucide-react";

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
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            
            {/* Brand Column - Left Side */}
            <div className="flex-1 max-w-md">
              <div className="mb-6">
                <h3 className="font-display text-4xl font-black luxury-text mb-4">
                  REDSEYA
                </h3>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  Premium organic Reddit growth for brands that refuse to settle for mediocrity. 
                  Authentic engagement. Real results. Unmatched expertise.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 text-accent mr-3" />
                <span className="font-body">hello@redseya.com</span>
              </div>
            </div>
            
            {/* Company Column - Right Side */}
            <div className="flex-shrink-0">
              <h4 className="font-heading text-xl font-bold mb-6 text-foreground">
                Company
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Privacy Policy", href: "/privacy" }
                ].map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="font-body text-muted-foreground hover:text-accent transition-colors duration-300 inline-flex items-center group text-lg"
                    >
                      {link.label}
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  <a
                    href="https://t.me/teodorxseya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="Telegram"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/teodorxseya?igsh=Y3B1Mzh4MWhhaHE5&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://t.me/redseya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label="News Channel"
                  >
                    <Radio className="w-5 h-5" />
                  </a>
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
              <button 
                className="gold-button font-bold"
                onClick={() => window.location.href = '/booking'}
              >
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
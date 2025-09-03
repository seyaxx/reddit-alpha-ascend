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
                <div className="mb-4">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    REDSEYA
                  </h3>
                </div>
                <p className="font-body text-muted-foreground text-lg leading-relaxed">
                  Premium organic Reddit growth for brands that refuse to settle for mediocrity. 
                  Authentic engagement. Real results. Unmatched expertise.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 text-accent mr-3" />
                <span className="font-body">teodorxseya@gmail.com</span>
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
        
        {/* Luxury CTA Section */}
        <div className="relative overflow-hidden">
          {/* Luxury Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-600/95 to-red-900/90"></div>
          <div className="absolute inset-0 bg-gradient-subtle opacity-30"></div>
          
          {/* Content */}
          <div className="relative py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="luxury-card bg-card/10 backdrop-blur-xl border-2 border-red-500/30 p-12 rounded-3xl shadow-luxury">
                <div className="text-center">
                  <div className="mb-8">
                    <h3 className="font-heading text-4xl md:text-5xl font-black mb-4">
                      <span className="luxury-text">Ready to Dominate</span> 
                      <span className="text-white"> Reddit?</span>
                    </h3>
                    <p className="font-body text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                      Join the elite. Transform your Reddit presence into an empire of influence.
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <button 
                      className="glow-button text-xl font-black px-12 py-4 transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.location.href = '/booking'}
                    >
                      Start Your Empire
                    </button>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-red-400/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-red-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-8 w-2 h-2 bg-red-400/50 rounded-full animate-ping"></div>
                <div className="absolute top-1/4 right-12 w-3 h-3 bg-red-400/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
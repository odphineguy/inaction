import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/inaction-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={logoImage} alt="InAction Fitness" className="h-10 w-10" />
                <div>
                  <h3 className="text-lg font-bold text-foreground">InAction Fitness</h3>
                  <p className="text-sm text-muted-foreground">Phoenix, AZ</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Transforming lives through holistic personal training and nutrition coaching. 
                Your journey to better health starts here.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About Omar
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contact</h4>
              <div className="space-y-3">
                <a 
                  href="tel:480-828-7833" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  <span>480-828-7833</span>
                </a>
                <a 
                  href="mailto:omar@inactionfitness.com" 
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  <span>omar@inactionfitness.com</span>
                </a>
                
                <div className="flex space-x-3 pt-2">
                  <a 
                    href="https://www.facebook.com/InActionFitness" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/inactionfitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 InAction Fitness. All rights reserved. | Phoenix, Arizona
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
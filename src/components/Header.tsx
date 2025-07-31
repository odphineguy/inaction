import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Instagram, Youtube, Twitter, MessageCircle } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/public/NoBkInActionLogo.png" alt="" className="h-16 w-auto" />
            <div>

            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <a 
              href="https://www.facebook.com/InActionFitness" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/inactionfitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <Button 
              variant="fitness" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

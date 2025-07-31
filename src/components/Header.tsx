import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import logoImage from "@/assets/inaction-logo.png";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="InAction Fitness" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-foreground">InAction Fitness</h1>
              <p className="text-sm text-muted-foreground">Phoenix, AZ</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-2">
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
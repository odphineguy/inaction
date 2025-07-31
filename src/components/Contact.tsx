import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Twitter, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your transformation? Contact Omar today to schedule 
              your free consultation and take the first step toward your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">Let's Connect</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're just starting your fitness journey or looking to take 
                  your training to the next level, I'm here to help you succeed.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <a 
                      href="tel:480-828-7833" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      480-828-7833
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a 
                      href="mailto:omar@inactionfitness.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      omar@inactionfitness.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Arizona</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Availability</h4>
                    <p className="text-muted-foreground">Flexible scheduling available</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow InAction Fitness</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/InActionFitness" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors group"
                  >
                    <Facebook className="text-primary group-hover:scale-110 transition-transform" size={24} />
                  </a>
                  <a 
                    href="https://www.instagram.com/inactionfitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors group"
                  >
                    <Instagram className="text-primary group-hover:scale-110 transition-transform" size={24} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors group"
                  >
                    <Youtube className="text-primary group-hover:scale-110 transition-transform" size={24} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors group"
                  >
                    <Twitter className="text-primary group-hover:scale-110 transition-transform" size={24} />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors group"
                  >
                    <MessageCircle className="text-primary group-hover:scale-110 transition-transform" size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="lg:pl-8">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Free Consultation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-lg text-muted-foreground mb-6">
                      Start your journey with a complimentary consultation to discuss 
                      your goals and create a personalized plan.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-2">What's Included:</h5>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Goal assessment and planning</li>
                          <li>• Fitness evaluation</li>
                          <li>• Personalized program overview</li>
                          <li>• Nutrition guidance basics</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                        onClick={() => window.open('tel:480-828-7833')}
                      >
                        Call Now: 480-828-7833
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full"
                        onClick={() => window.open('mailto:omar@inactionfitness.com')}
                      >
                        Send an Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
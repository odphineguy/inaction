import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, Users, Utensils } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Personal Training",
      description: "One-on-one sessions tailored to your goals, fitness level, and preferences.",
      features: [
        "Customized workout programs",
        "Form correction and technique",
        "Progress tracking and adjustments",
        "Motivation and accountability"
      ],
      highlight: "Most Popular"
    },
    {
      icon: Utensils,
      title: "Nutrition Coaching",
      description: "Comprehensive nutrition guidance to support your training and health goals.",
      features: [
        "Personalized meal planning",
        "Macro and calorie guidance",
        "Supplement recommendations",
        "Habit formation strategies"
      ]
    },
    {
      icon: Calendar,
      title: "Program Design",
      description: "Long-term fitness programs designed for sustainable results and lifestyle integration.",
      features: [
        "12-week transformation programs",
        "Strength and conditioning plans",
        "Mobility and recovery protocols",
        "Lifestyle integration coaching"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Training Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive fitness and nutrition services designed to help you 
              achieve your goals and maintain a healthy lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative border-border hover:shadow-lg transition-all duration-300 group">
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      {service.highlight}
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <service.icon 
                    className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" 
                    size={48} 
                  />
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-primary mr-3 flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-white transition-colors"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to start your fitness journey? Let's discuss your goals and create a plan that works for you.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
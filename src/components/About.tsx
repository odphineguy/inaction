import { Button } from "@/components/ui/button";
import { Heart, Brain, Dumbbell, Apple } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meet Omar
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your dedicated personal trainer committed to transforming lives through 
              a holistic approach to fitness, nutrition, and wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Holistic Approach to Fitness
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At InAction Fitness, we believe true transformation comes from addressing 
                both your physical and mental well-being. Our approach combines personalized 
                training programs with comprehensive nutrition guidance to help you achieve 
                sustainable, long-lasting results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in Phoenix, Arizona, Omar brings years of experience and certification 
                to help you unlock your potential, build confidence, and create healthy 
                habits that last a lifetime.
              </p>
              <Button 
                variant="fitness" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Dumbbell className="text-primary mb-4" size={40} />
                <h4 className="text-xl font-semibold mb-2 text-foreground">Strength Training</h4>
                <p className="text-muted-foreground">Build functional strength and muscle through progressive training methods.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Apple className="text-primary mb-4" size={40} />
                <h4 className="text-xl font-semibold mb-2 text-foreground">Nutrition Coaching</h4>
                <p className="text-muted-foreground">Develop sustainable eating habits that fuel your body and mind.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Heart className="text-primary mb-4" size={40} />
                <h4 className="text-xl font-semibold mb-2 text-foreground">Wellness Focus</h4>
                <p className="text-muted-foreground">Prioritize recovery, stress management, and overall well-being.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Brain className="text-primary mb-4" size={40} />
                <h4 className="text-xl font-semibold mb-2 text-foreground">Mindful Approach</h4>
                <p className="text-muted-foreground">Connect mind and body for lasting behavioral change.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
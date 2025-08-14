import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light block">
              Body & Mind
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Holistic personal training and nutrition coaching. 
            Build strength, improve wellness, and achieve lasting results with a customized approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={scrollToContact}
            >
              Start Your Journey
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Award className="text-primary mb-2" size={40} />
              <h3 className="text-2xl font-bold">Certified</h3>
              <p className="text-gray-300">Professional Trainer</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-primary mb-2" size={40} />
              <h3 className="text-2xl font-bold">Personalized</h3>
              <p className="text-gray-300">One-on-One Training</p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="text-primary mb-2" size={40} />
              <h3 className="text-2xl font-bold">Holistic</h3>
              <p className="text-gray-300">Mind & Body Approach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

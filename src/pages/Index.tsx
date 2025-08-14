import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  console.log('Index component rendering');
  return (
    <div className="min-h-screen bg-background">
      <div style={{padding: '20px', background: 'red', color: 'white'}}>
        DEBUG: Index component is rendering
      </div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

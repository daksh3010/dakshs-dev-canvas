
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center pt-16">
      <div className="container section-padding flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 font-display">
            Hi, I'm <span className="text-primary">Daksh</span>
            <br />Software Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I build modern web applications with a focus on performance, 
            user experience, and clean code. Let's bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-lg font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-secondary text-foreground px-6 py-3 rounded-md hover:bg-secondary/80 transition-colors text-lg font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

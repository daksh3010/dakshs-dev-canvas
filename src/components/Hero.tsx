
import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center pt-16">
      <div className="container section-padding flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 font-display">
            Hi, I'm <span className="text-primary">Daksh</span>
            <br />Innovative Software Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I build modern web applications with a focus on performance, 
            user experience, and clean code. Let's bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-lg font-medium"
            >
              Contact Me
            </a>
            <a 
              href="https://drive.google.com/file/d/17HMre1_YsVAWoa2iOSrZCv_84BO8n-c8/view?usp=sharing"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors text-lg font-medium flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
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

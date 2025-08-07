import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 scroll-smooth">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-12 animate-fade-up">
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-balance">
              <span className="block">MOHAMMED</span>
              <span className="block">AZIF M P</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Full Stack Engineer crafting innovative web applications and AI-powered solutions
            </p>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              <span>mohammedazifmp@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>+91 8111977193</span>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Mohammedazif" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="transition-base hover:bg-secondary">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            </a>
            <a href="https://www.linkedin.com/in/mohammedazif" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="transition-base hover:bg-secondary">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;  
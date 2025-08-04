import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, Phone, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary-glow rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Status badge */}
          <Badge variant="secondary" className="text-sm px-4 py-2 rounded-full">
            🚀 Available for opportunities
          </Badge>
          
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block">MOHAMMED</span>
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                AZIF M P
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Full Stack Engineer crafting innovative web applications and AI-powered solutions
            </p>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 8111977193</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>mohammedazifmp@gmail.com</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg font-medium shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
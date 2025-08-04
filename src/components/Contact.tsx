import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Get In Touch</h2>
          </div>

          <div className="text-center space-y-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              I'm currently looking for new opportunities and interesting projects. 
              Feel free to reach out if you'd like to work together.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-center gap-8 text-muted-foreground">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>mohammedazifmp@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+91 8111977193</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button variant="ghost" className="transition-base hover:bg-secondary">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="ghost" className="transition-base hover:bg-secondary">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="p-8 card-gradient shadow-card">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you're looking for a full-stack developer or want to collaborate 
                  on innovative AI solutions, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">mohammedazifmp@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 8111977193</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Bangalore, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold">Connect with me</h4>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Info */}
          <div className="space-y-6">
            <Card className="p-6 card-gradient shadow-card">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Current Status</h4>
                <div className="space-y-3">
                  <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                    🟢 Available for opportunities
                  </Badge>
                  <Badge variant="secondary" className="w-fit">
                    🎓 Final year Computer Science student
                  </Badge>
                  <Badge variant="secondary" className="w-fit">
                    💼 Open to internships & full-time roles
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-gradient shadow-card">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Full Stack Development</Badge>
                  <Badge variant="outline">AI/ML</Badge>
                  <Badge variant="outline">SaaS Products</Badge>
                  <Badge variant="outline">Mobile Apps</Badge>
                  <Badge variant="outline">Healthcare Tech</Badge>
                  <Badge variant="outline">Cloud Solutions</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-gradient shadow-card">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Let's Collaborate</h4>
                <p className="text-sm text-muted-foreground">
                  I'm passionate about creating impactful solutions and always excited 
                  to work on challenging projects that make a difference.
                </p>
                <Button className="w-full shadow-elegant hover:shadow-glow transition-all duration-300">
                  <Send className="w-4 h-4 mr-2" />
                  Send me a message
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
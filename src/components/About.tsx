import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Motivated and solution-driven Computer Science undergraduate with hands-on experience in web, mobile, and AI/ML 
            application development. Proven record of building scalable SaaS products, Android applications, and full-stack 
            projects using modern frameworks and cloud deployment tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Education Card */}
          <Card className="p-6 card-gradient shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Engineering</h4>
                <p className="text-sm text-muted-foreground">S E A College of Engineering and Technology</p>
                <p className="text-sm text-muted-foreground">Bangalore • 2021 - 2025</p>
              </div>
              <div>
                <h4 className="font-medium">Higher Secondary</h4>
                <p className="text-sm text-muted-foreground">Ckns Ghss Pilicode, Kerala</p>
                <p className="text-sm text-muted-foreground">2018 - 2020</p>
              </div>
            </div>
          </Card>

          {/* Experience Card */}
          <Card className="p-6 card-gradient shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Python Full Stack Intern</h4>
                <p className="text-sm text-muted-foreground">Unomed Pvt Ltd</p>
                <p className="text-sm text-muted-foreground">Feb 2025 - May 2025</p>
              </div>
              <div>
                <h4 className="font-medium">Full Stack Web Intern</h4>
                <p className="text-sm text-muted-foreground">Varcons Technologies</p>
                <p className="text-sm text-muted-foreground">Oct 2023 - Dec 2023</p>
              </div>
            </div>
          </Card>

          {/* Achievements Card */}
          <Card className="p-6 card-gradient shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Highlights</h3>
            </div>
            <div className="space-y-3">
              <Badge variant="secondary" className="block w-fit">AI/ML Applications</Badge>
              <Badge variant="secondary" className="block w-fit">SaaS Development</Badge>
              <Badge variant="secondary" className="block w-fit">Mobile Apps</Badge>
              <Badge variant="secondary" className="block w-fit">Cloud Deployment</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
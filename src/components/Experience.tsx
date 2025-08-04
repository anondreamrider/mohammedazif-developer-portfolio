import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Python Full Stack Development Intern",
    company: "Unomed Pvt Ltd",
    period: "Feb 2025 – May 2025",
    location: "Remote",
    description: [
      "Building healthcare-related web tools using Python (Flask), React, PostgreSQL",
      "Worked on OCR and AI-based lab report analysis system with frontend-backend integration",
      "Contributed to secure user authentication and hybrid deployment"
    ],
    technologies: ["Python", "Flask", "React", "PostgreSQL", "OCR", "AI/ML"]
  },
  {
    title: "Full Stack Web Development Intern",
    company: "Varcons Technologies Pvt Ltd",
    period: "Oct 2023 – Dec 2023",
    location: "Remote",
    description: [
      "Developed web applications using Django, HTML, CSS, JavaScript, and MySQL",
      "Implemented server-side logic and REST APIs, improving user experience",
      "Ensured secure coding practices and smooth integration between frontend and backend"
    ],
    technologies: ["Django", "HTML", "CSS", "JavaScript", "MySQL", "REST APIs"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and engineering
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 card-gradient shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Company Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-2 space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
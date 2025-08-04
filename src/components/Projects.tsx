import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Users, Zap, Brain } from "lucide-react";

const projects = [
  {
    title: "SaaS Feedback & Review Management Platform",
    description: "Developed AI-powered platform for collecting and analyzing reviews with advanced sentiment analysis and automated insights generation.",
    technologies: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "AI/ML"],
    icon: <Star className="w-6 h-6" />,
    featured: true
  },
  {
    title: "Medical Image Analysis",
    description: "Built an Android app for analyzing MRI scans to detect brain tumors using deep learning models and TensorFlow integration.",
    technologies: ["Kotlin", "Android Studio", "TensorFlow", "Deep Learning"],
    icon: <Brain className="w-6 h-6" />,
    featured: true
  },
  {
    title: "Lab Report Analyzer OCR + AI System",
    description: "Extracted tabular and textual data from scanned medical reports using OCR technology and AI-powered data analysis.",
    technologies: ["Flask", "React", "PostgreSQL", "Tesseract OCR", "AI"],
    icon: <Zap className="w-6 h-6" />,
    featured: false
  },
  {
    title: "Visual Question Answering System",
    description: "Implemented a VQA system that answers questions based on image context using Vision-and-Language Transformer models.",
    technologies: ["Python", "ViLT", "Streamlit", "Computer Vision"],
    icon: <Users className="w-6 h-6" />,
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise across web development, mobile apps, and AI/ML solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card 
              key={index}
              className="group p-8 card-gradient shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {project.icon}
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Featured</Badge>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <Card 
              key={index}
              className="group p-6 card-gradient shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-in-right"
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="ghost">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

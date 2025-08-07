import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SaaS Feedback & Review Management Platform",
      description: "AI-powered platform for collecting and analyzing reviews with advanced sentiment analysis and automated response generation.",
      tech: ["Next.js", "TypeScript", "Express.js", "PostgreSQL"],
      featured: true
    },
    {
      title: "Medical Image Analysis",
      description: "Android application for analyzing MRI scans to detect brain tumors using deep learning models.",
      tech: ["Kotlin", "Android Studio", "TensorFlow", "Deep Learning"],
      featured: true
    },
    {
      title: "Lab Report Analyzer OCR + AI System",
      description: "Extracted tabular and textual data from scanned medical reports with high accuracy OCR processing.",
      tech: ["Flask", "React", "PostgreSQL", "Tesseract OCR"],
      featured: false
    },
    {
      title: "Visual Question Answering System",
      description: "Implemented a VQA system that answers questions based on image context using advanced vision-language models.",
      tech: ["Python", "ViLT", "Streamlit"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Selected Work</h2>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="border-b border-border pb-8 space-y-6 transition-base hover:border-foreground/20">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-medium group-hover:text-foreground transition-base">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="text-xs px-2 py-1 bg-foreground text-background rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs px-3 py-1 bg-secondary rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* <div className="flex gap-2 md:opacity-0 group-hover:opacity-100 transition-base">
                      <Button variant="ghost" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
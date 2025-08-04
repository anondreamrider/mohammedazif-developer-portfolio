import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Cloud, Cpu, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Kotlin", "PHP", "SQL"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Frontend",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6" />,
    skills: ["Node.js", "Express.js", "Flask", "Django"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["Android (Kotlin)", "Flutter (basic)", "XML"],
    color: "bg-pink-500/10 text-pink-600"
  },
  {
    title: "Tools & Platforms",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["Git", "GitHub", "Vercel", "Railway", "Netlify", "Firebase"],
    color: "bg-indigo-500/10 text-indigo-600"
  },
  {
    title: "Other",
    icon: <Settings className="w-6 h-6" />,
    skills: ["RESTful APIs", "Git workflows", "Deployment", "Agile"],
    color: "bg-teal-500/10 text-teal-600"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 card-gradient shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Proficiency Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Proficiency Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">Full Stack</div>
              <p className="text-sm text-muted-foreground">End-to-end development</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">AI/ML</div>
              <p className="text-sm text-muted-foreground">Machine Learning integration</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">Cloud</div>
              <p className="text-sm text-muted-foreground">Modern deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
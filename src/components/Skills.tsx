const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Kotlin", "PHP", "SQL"]
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Flask", "Django"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      category: "Mobile",
      items: ["Android (Kotlin)", "Flutter (basic)", "XML"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Vercel", "Railway", "Netlify", "Firebase"]
    },
    {
      category: "Other",
      items: ["RESTful APIs", "Git workflows", "Deployment", "Agile"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-medium">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-muted-foreground">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
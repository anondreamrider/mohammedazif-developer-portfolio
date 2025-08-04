const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Experience</h2>
          </div>

          <div className="space-y-12">
            <div className="space-y-4 pb-12 border-b border-border">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-medium">Python Full Stack Development Intern</h3>
                  <p className="text-muted-foreground">Unomed Pvt Ltd</p>
                </div>
                <p className="text-sm text-muted-foreground">Feb 2025 – May 2025</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Building healthcare-related web tools using Python (Flask), React, PostgreSQL</li>
                <li>• Worked on OCR and AI-based lab report analysis system with frontend-backend integration</li>
                <li>• Contributed to secure user authentication and hybrid deployment</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-medium">Full Stack Web Development Intern</h3>
                  <p className="text-muted-foreground">Varcons Technologies Pvt Ltd</p>
                </div>
                <p className="text-sm text-muted-foreground">Oct 2023 – Dec 2023</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Developed web applications using Django, HTML, CSS, JavaScript, and MySQL</li>
                <li>• Implemented server-side logic and REST APIs, improving user experience</li>
                <li>• Ensured secure coding practices and smooth integration between frontend and backend</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
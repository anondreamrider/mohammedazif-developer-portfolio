const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">About</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
              Motivated and solution-driven Computer Science undergraduate with hands-on experience in web, mobile, and AI/ML 
              application development. Proven record of building scalable SaaS products, Android applications, and full-stack 
              projects using modern frameworks and cloud deployment tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-xl font-medium">Education</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-medium">Engineering</h4>
                  <p className="text-sm text-muted-foreground">S E A College of Engineering and Technology</p>
                  <p className="text-sm text-muted-foreground">Bangalore • 2021 - 2025</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Higher Secondary</h4>
                  <p className="text-sm text-muted-foreground">Ckns Ghss Pilicode, Kerala</p>
                  <p className="text-sm text-muted-foreground">2018 - 2020</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-8">
              <h3 className="text-xl font-medium">Experience</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-medium">Python Full Stack Intern</h4>
                  <p className="text-sm text-muted-foreground">Unomed Pvt Ltd</p>
                  <p className="text-sm text-muted-foreground">Feb 2025 - May 2025</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Full Stack Web Intern</h4>
                  <p className="text-sm text-muted-foreground">Varcons Technologies</p>
                  <p className="text-sm text-muted-foreground">Oct 2023 - Dec 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
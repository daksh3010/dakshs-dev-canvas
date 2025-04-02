
const About = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container max-w-5xl mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center">
          Get to know more about me and my background
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
              Who am I?
            </h3>
            <p className="text-muted-foreground">
              I'm a passionate software developer specializing in full-stack web development. 
              With a strong foundation in computer science fundamentals and 
              practical experience with modern technologies, I create efficient, 
              scalable, and user-friendly applications.
            </p>
            <p className="text-muted-foreground">
              Beyond coding, I'm a problem solver at heart. I enjoy tackling complex 
              challenges and turning them into elegant solutions. I'm constantly learning 
              and exploring new technologies to stay at the forefront of this rapidly evolving field.
            </p>
            <h3 className="text-2xl font-bold text-foreground mt-6 mb-3 font-display">
              Computer Science Fundamentals
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">Data Structures</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">OOP Concepts</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">Operating Systems</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">DBMS</span>
              </li>
              <li className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-muted-foreground">Computer Networks</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/lovable-uploads/465a3066-fca9-4dc0-82e7-cf86846d2d2c.png"
                alt="Daksh's profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

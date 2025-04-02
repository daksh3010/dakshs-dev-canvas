
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with product listing, cart functionality, user authentication, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides detailed forecasts, historical data visualization, and location-based weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["JavaScript", "HTML", "CSS", "Weather API"],
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="section-subtitle text-center">
          Check out some of my recent work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group h-full flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      className="text-white bg-black/30 hover:bg-black/60 p-2 rounded-full transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveLink}
                      className="text-white bg-primary/80 hover:bg-primary p-2 rounded-full transition-colors"
                      aria-label="Live Preview"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-foreground font-display">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-secondary px-2 py-1 rounded-md text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View More Projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Creative Blogs",
    description: "A blogging platform that allows users to create, share, and discover creative content with a clean, user-friendly interface and robust backend functionality.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://creativeblogs.onrender.com",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Blink Chat",
    description: "A real-time messaging application featuring instant messaging, user authentication, and responsive design for seamless communication across devices.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tags: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
    liveLink: "https://blink-chat-w623.onrender.com/login",
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

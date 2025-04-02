
import { CalendarDays, Building2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "DTU Delhi",
    location: "Delhi",
    duration: "February 2024 - October 2024",
    description: [
      "Developed and deployed a comprehensive ERP portal using MERN which is currently serving over 20,000 students, faculties & admin of DTU.",
      "Created a service for course registration handling 200+ requests/sec. Implemented caching and multiple instance management to ensure consistency and enhance performance."
    ]
  },
  {
    id: 2,
    title: "Fullstack Developer Intern",
    company: "Tealfeed",
    location: "Gurugram",
    duration: "June 2024 - August 2024",
    description: [
      "Developed an automated email reminder system for over 50 internal users, sending over 100 monthly emails to ensure timely documentation submission and reduce delays.",
      "Implemented robust backend solutions and further optimized the accessibility to the database and improved the query performance by 2x."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container max-w-5xl mx-auto">
        <h2 className="section-title text-center">Work Experience</h2>
        <p className="section-subtitle text-center">
          My professional journey as a developer
        </p>
        
        <div className="space-y-10 mt-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-foreground font-display">{exp.title}</h3>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <CalendarDays size={14} className="mr-1" />
                    {exp.duration}
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Building2 size={16} className="mr-2" />
                  <span className="font-medium">{exp.company}, {exp.location}</span>
                </div>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

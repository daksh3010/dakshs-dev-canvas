
import { GraduationCap, CalendarDays } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/50">
      <div className="container max-w-5xl mx-auto">
        <h2 className="section-title text-center">Education</h2>
        <p className="section-subtitle text-center">
          My academic background
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div className="flex items-center">
                <GraduationCap size={24} className="text-primary mr-3" />
                <h3 className="text-xl font-bold text-foreground font-display">
                  Delhi Technological University
                </h3>
              </div>
              <div className="flex items-center text-sm text-primary font-medium mt-2 md:mt-0">
                <CalendarDays size={14} className="mr-1" />
                2020 - 2024
              </div>
            </div>
            
            <div className="ml-0 md:ml-9 space-y-3">
              <p className="text-muted-foreground font-medium">
                B.Tech in Electrical Engineering with Minor in Computer Science
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">CGPA:</span> 8.31/10.0
              </p>
              <p className="text-muted-foreground">
                Focused on core computer science fundamentals including Data Structures, 
                Object-Oriented Programming, Operating Systems, Database Management Systems, 
                and Computer Networks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

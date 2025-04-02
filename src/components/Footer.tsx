
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-display">Daksh<span className="text-primary">.dev</span></h2>
            <p className="text-white/70 mt-2 max-w-md">
              Creating innovative web solutions with modern technologies and best practices.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="#home" 
              className="bg-primary/20 hover:bg-primary/30 text-white p-3 rounded-full transition-colors mb-4"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
            <p className="text-white/70 text-sm">
              &copy; {currentYear} Daksh Kundu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

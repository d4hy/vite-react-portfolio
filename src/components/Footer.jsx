import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-2 px-4 bg-card border-t border-border mt-12 pt-2 relative flex justify-center items-center">
      {/* Text centered */}
      <div className = "flex-col space-y-2">
      <h2 className="text-xl ">
       <span className = "text-glow">Based on:</span> <span className="text-primary"> PedroTech</span>
      </h2>
      <p className="text-sm text-foreground text-center">
        &copy; {new Date().getFullYear()} David Hoang
      </p>
      </div>

      {/* Arrow stays pinned to the right */}
      <a
        href="#hero"
        className="absolute right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

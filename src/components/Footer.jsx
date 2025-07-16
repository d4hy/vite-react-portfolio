import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-2 px-4 bg-card border-t border-border mt-12 pt-2 relative flex justify-center items-center">
      {/* Text centered */}
      <div className="flex-col space-y-2">
        <h2 className="text-xl">
          <span className="text-glow">Based on:</span>{" "}
          <span className="text-primary">PedroTech</span>
        </h2>
        <p className="text-sm text-foreground text-center">
          &copy; {new Date().getFullYear()} David Hoang
        </p>
      </div>

      {/* Floating arrow button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

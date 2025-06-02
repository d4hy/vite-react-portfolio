import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

import { useTheme } from "@/components/ThemeToggle";


//the links
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDarkMode } = useTheme();
    const keyboardImage = isDarkMode ? "/images/keyboard-dark.png" : "/images/keyboard-light.png";
  useEffect(() => {
    //The height of the nav is 10.
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
   
      
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    /*  "py-3: padding-top/bottom: 0.75rem (12px);  (smaller header)padding-top/bottom: 0.75rem (12px);  (smaller header) 
        background-color: rgba(var(--background), 0.8);  (slightly see-through background)
        backdrop-filter: blur(12px);  (frosted glass effect) when scrolliing
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);  (subtle shadow)
    */
    <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
      {/* Logo of the portfolio*/}
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground"> David Hoang's </span> Portfolio
          </span>
          <img src={keyboardImage} className="ml-2 h-10 w-10 object-contain" alt="Keyboard logo" />
        </a>

        {/* desktop nav */}

        <div className="hidden md:flex items-center space-x-6">
          {/*
         Hidden when smaller than medium, but for medium and above will display flex.
         space-x-8 : Adds horizontal spacing (gap) of 2rem (32px) between direct children of a flex container
        margin-left: 2rem;
         
         */}
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
              {item.name}
            </a>
          ))}

          <ThemeToggle />
        </div>
        {/* mobile nav */}

        <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          /*
        inset-0: top: 0; right: 0; bottom: 0; left: 0; (fills the entire viewport)
        pointer-events-auto: interactive
        */
          className={cn("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center", "transition-all duration-300 md:hidden", isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
        >
          {/*
         H
         space-y-8 : Adds vertical spacing (gap) of 2rem (32px) between direct children of a flex container
        margin-top: 2rem;
         
         */}
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

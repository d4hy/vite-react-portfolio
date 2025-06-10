import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { useTheme } from "@/components/ThemeToggle";

//the links
const navItems = [
  /*
  Navigation Items:
  - Home, About, Skills, and Contact use "/#section" links to navigate and smoothly scroll to sections on the home page.
  - We use <HashLink> from "react-router-hash-link" for these links:
      • If already on the home page ("/"), HashLink smoothly scrolls to the section without reloading.
      • If on another page (like "/projects"), HashLink navigates back to "/" and then smoothly scrolls to the section.
      • We use HashLink instead of plain anchor tags (<a href="...">) because anchor tags would cause a full page reload, whereas HashLink avoids reloading and preserves SPA behavior.
 - Projects uses "/projects" because it’s a separate page (no #section), so we use <Link> for standard SPA navigation.
    • We use <Link> instead of HashLink for full-page routes (like /projects) because HashLink is only for in-page or anchored scrolling.
    • <Link> does NOT reload the page—it uses React Router’s client-side routing to update the view without a full reload.
  - This ensures consistent scrolling behavior and no full page reloads—everything stays SPA style.
*/

  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/#contact" },
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
         The map function is to evaluate javascript code
         */}

          {navItems.map((item) =>
            item.href.startsWith("/#") || item.href === "/" ? (
              // Use HashLink for in-page scrolling
              <HashLink
                key={item.name}
                to={item.href}
                smooth // enables smooth scrolling
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)} // optional: close the mobile menu after click
              >
                {item.name}
              </HashLink>
            ) : (
              // Use regular Link for separate pages
              <Link key={item.name} to={item.href} className="text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            )
          )}

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
          <div className="flex flex-col space-y-8 text-xl mt-8">
            {navItems.map((item) =>
              item.href.startsWith("/#") || item.href === "/" ? (
                <HashLink
                  key={item.name}
                  to={item.href} // HashLink uses `to`
                  smooth // enable smooth scrolling
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </HashLink>
              ) : (
                <Link key={item.name} to={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              )
            )}

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

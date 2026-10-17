import { cn } from "@/lib/utils";
import { Keyboard, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ThemeToggle } from "./ThemeToggle";

//the links
const navItems = [
  /*
  Navigation Items:
  - Home, About, Education, Experience, Skills, and Contact use "/#section" links to navigate and smoothly scroll to sections on the home page.
  - We use <HashLink> from "react-router-hash-link" for these links:
      • If already on the home page ("/"), HashLink smoothly scrolls to the section without reloading.
      • If on another page (like "/projects"), HashLink navigates back to "/" and then smoothly scrolls to the section.
      • We use HashLink instead of plain anchor tags (<a href="...">) because anchor tags would cause a full page reload, whereas HashLink avoids reloading and preserves SPA behavior.
 - Projects uses "/projects" because it’s a separate page (no #section), so we use <Link> for standard SPA navigation.
    • We use <Link> instead of HashLink for full-page routes (like /projects) because HashLink is only for in-page or anchored scrolling.
    • <Link> does NOT reload the page—it uses React Router’s client-side routing to update the view without a full reload.
  - This ensures consistent scrolling behavior and no full page reloads—everything stays SPA style.
*/

  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Education", href: "/#education" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/#contact" },
];

const NavLink = ({ item, onNavigate, className }) => {
  // Use HashLink for in-page scrolling.
  if (item.href.startsWith("/#")) {
    return (
      <HashLink
        to={item.href} // HashLink uses `to`
        smooth // enables smooth scrolling
        className={className}
        onClick={onNavigate} // close the mobile menu after click
      >
        {item.name}
      </HashLink>
    );
  }

  // Use regular Link for separate pages.
  return (
    <Link to={item.href} className={className} onClick={onNavigate}>
      {item.name}
    </Link>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Switch to the compact nav after scrolling down 10 pixels.
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* py-3: padding-top/bottom: 0.75rem (12px), making a smaller header.
          bg-background/80: slightly see-through background.
          backdrop-blur-md: blur(12px), a frosted glass effect when scrolling.
          shadow-xs: a subtle shadow. */}
      <nav className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
        {/* Logo of the portfolio */}
        <div className="container flex items-center justify-between">
          <HashLink to="/#hero" smooth className="flex items-center text-base sm:text-xl font-bold text-primary whitespace-nowrap" onClick={closeMenu}>
            <span className="relative z-10">
              <span className="text-glow text-foreground">David Hoang&apos;s </span>
              Portfolio
            </span>
            <Keyboard className="ml-2 h-7 w-7 sm:h-8 sm:w-8 text-foreground shrink-0" strokeWidth={2.25} aria-label="Keyboard logo" />
          </HashLink>

          {/* desktop nav */}
          {/* Hidden below large screens; displays flex at large screens and above.
              space-x-5 adds 1.25rem (20px) between direct children.
              The map function creates a navigation link for each item. */}
          <div className="hidden lg:flex items-center space-x-5">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} onNavigate={closeMenu} className="text-foreground/70 hover:text-primary transition-colors" />
            ))}
            <ThemeToggle />
          </div>

          {/* mobile nav */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="lg:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* inset-0: top: 0; right: 0; bottom: 0; left: 0; fills the viewport.
          pointer-events-auto: interactive when the menu is open. */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 lg:hidden",
          isMenuOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"
        )}
      >
        {/* gap-6 adds vertical spacing of 1.5rem (24px) between links.
            pt-16 leaves room for the fixed header above the mobile links. */}
        <div className="flex flex-col items-center gap-6 text-xl pt-16">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} onNavigate={closeMenu} className="text-foreground/80 hover:text-primary transition-colors duration-300" />
          ))}
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

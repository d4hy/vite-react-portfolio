import { createContext, useContext, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/* Create Theme Context directly in this file */
const ThemeContext = createContext();

/* Provider component to wrap your app */
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      //Short hand for that document.getElementsByTagName('html')[0]
      document.documentElement.classList.remove("dark");

      //This method stores data in the browser's local storage as a key value pair.
      //It's persistent — meaning it stays even after you reload or close the browser (until it's explicitly cleared).
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/* Custom hook for easy access to theme context */
export const useTheme = () => useContext(ThemeContext);

/* Your actual ThemeToggle component */
export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      /*Fixed position, hidden on small screens (max-sm:hidden), positioned top-right, high z-index 
        //When you click on or tab to an element like a <button>, the browser applies a default focus ring (usually a blue outline). 
        //This is called the focus outline — it's a visual accessibility feature
        Removes focus outline (typo: should be `focus:outline-none`). 
        CSS: button:focus {
          outline: 1px solid -webkit-focus-ring-color;
          outline-offset: 0px;
        }
      */
      className={cn(
        "z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none flex items-center justify-center"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

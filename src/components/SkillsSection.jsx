import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "HTML5", category: "languages" },
  { name: "CSS3", category: "languages" },

  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Responsive Web Design", category: "frontend" },
  { name: "UI Components", category: "frontend" },
  { name: "Figma", category: "frontend" },
  { name: "AJAX", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "CRUD Operations", category: "backend" },

  { name: "MySQL", category: "tools" },
  { name: "SQLite", category: "tools" },
  { name: "MongoDB", category: "tools" },
  { name: "Git/GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "IntelliJ", category: "tools" },
  { name: "Eclipse", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "Vite", category: "tools" },

  { name: "Chrome Extensions", category: "concepts" },
  { name: "Manifest V3", category: "concepts" },
  { name: "Relational Database Design", category: "concepts" },
  { name: "OOP", category: "concepts" },
  { name: "Data Structures", category: "concepts" },
  { name: "Agile", category: "concepts" },
  { name: "SDLC", category: "concepts" },
  { name: "Full-Stack Development", category: "concepts" },
];

const categories = ["all", "languages", "frontend", "backend", "tools", "concepts"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
             activeCategory === category ? "bg-primary text-primary-foreground" : "text-foreground bg-background hover:bg-primary hover:text-primary-foreground")}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              {/*
          

              */}
                <div className="bg-primary h-2 rounded-full " />
              </div>

              <div className="text-right mt-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

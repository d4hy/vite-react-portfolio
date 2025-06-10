import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend

  /*Level out of 100 how much I think i know that skill */
  { name: "Java", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "HTML/CSS", category: "languages" },

  // Backend
  { name: "Node.js", category: "frameworks/libraries" },
  { name: "React", category: "frameworks/libraries" },
  { name: "Express.js", category: "frameworks/Libraries" },
  { name: "JUnit", category: "frameworks/libraries" },
  { name: "Swing", category: "frameworks/libraries" },
  { name: "Vite", category: "frameworks/libraries" },
  { name: "Tailwind CSS", category: "frameworks/libraries" },

  // Tools
  { name: "MongoDB", category: "tools" },
  { name: "MySQL", category: "tools" },
  { name: "Git/GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Ubuntu", category: "tools" },
  { name: "IntelliJ", category: "tools" },
  { name: "Eclipse", category: "tools" },
];

const categories = ["all", "languages", "frameworks/libraries", "tools"];

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

import { Braces, Database, FlaskConical, LayoutTemplate, ServerCog, Shapes } from "lucide-react";
import { createElement } from "react";

const skillGroups = [
  {
    title: "Languages",
    icon: Braces,
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: LayoutTemplate,
    skills: ["React", "Angular", "Next.js", "Tailwind CSS", "Vite", "Chrome Extensions (Manifest V3)", "Responsive Web Design", "AJAX"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    skills: ["Spring Boot", "Spring Web", "Spring Data JPA", "Javalin", "JDBC", "Node.js", "Express.js", "REST APIs", "Hibernate/JPA", "CRUD Operations"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "SQLite", "MongoDB", "Relational Database Design"],
  },
  {
    title: "Testing & Developer Tools",
    icon: FlaskConical,
    skills: ["JUnit", "Mockito", "Git", "GitHub", "Maven", "Figma", "IntelliJ", "VS Code", "Linux", "Eclipse", "Codex"],
  },
  {
    title: "Concepts",
    icon: Shapes,
    skills: ["OOP", "Dependency Injection", "Data Structures", "Software Design Patterns", "SOLID Principles", "Agile", "SDLC", "Full-Stack Development"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Technologies and practices I use to build responsive interfaces, full-stack applications, and maintainable software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article key={title} className="bg-card border border-border p-6 rounded-lg shadow-xs card-hover text-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {createElement(Icon, { size: 22, "aria-hidden": true })}
                </div>
                <h3 className="font-semibold text-xl">{title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm border border-border rounded-full bg-background/70 text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

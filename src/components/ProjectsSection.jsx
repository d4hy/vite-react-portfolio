import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom"
const projects = [
  {
    id: 1,
    title: "Beabadoobee Trivia Maze",
    description: "A fun trivia game where you traverse through a maze by answering trivia questions about Beabadoobee.",
    image: "/images/bea-cover.jpg",
    tags: ["Java", "Java Swing", "SQLite"],
    demoUrl: "#",
    githubUrl: "https://github.com/d4hy/TriviaMaze",
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description:
    "The Fitness Tracker is a web-based app for logging and managing workouts. Users can create, view, update, and delete entries for each exercise.",
    image: "images/fitness-tracker-preview.png",
    tags: [ "JQuery", "Express.js", "Node.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/d4hy/Fitness-Tracker",
  },
  {
    id: 3,
    title: "Mythic Realms: Whispers of the Forgotten Lands",
    description:
      "A 2D JavaScript adventure game featuring dynamic character movement, enemy interactions, and immersive environments.",
      
    image: "images/mythic-realms-preview.png",
    tags: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://angel-vu.github.io/TCSS-491-Mythic-Realms-Whispers-of-the-Forgotten-Lands/",
    githubUrl: "https://github.com/angel-vu/TCSS-491-Mythic-Realms-Whispers-of-the-Forgotten-Lands",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg  shadow-xs card-hover relative"
            >
              <div className="h-48 ">
                 {/* Group hover makes it so that it expands within the card. */}
                <img
                  src={project.image}
                  alt={project.title}
                 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6 pb-12" >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="  absolute bottom-0 left-0 w-full m-4 ">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            to ="/projects"
          >
            See more projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
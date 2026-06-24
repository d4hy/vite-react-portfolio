import { projectsList } from "../pages/Projects";
import { Database, ExternalLink, Github, Save } from "lucide-react";
import { ProjectGallery } from "./ProjectGallery";

const galleryItems = [
  {
    title: "Maze Exploration",
    description: "The main room layout with pixel-art characters, doors, and the maze progression system.",
    image: "/images/bea-trivia-images/bea-1st.png",
    alt: "Beabadoobee Trivia Maze gameplay with the player character and room doors",
    featured: true,
  },
  {
    title: "Multiple Choice Challenge",
    description: "A locked-room prompt where players pick the correct answer before moving deeper into the maze.",
    image: "/images/bea-trivia-images/bea-multiple-choice.png",
    alt: "Multiple choice trivia question in Beabadoobee Trivia Maze",
  },
  {
    title: "True Or False",
    description: "Fast binary questions add variety to the door-unlock trivia loop.",
    image: "/images/bea-trivia-images/bea-true-false.png",
    alt: "True or false trivia question in Beabadoobee Trivia Maze",
  },
  {
    title: "Short Answer",
    description: "Typed responses test deeper fan knowledge and validate the player's answer.",
    image: "/images/bea-trivia-images/bea-short-answer.png",
    alt: "Short answer trivia prompt in Beabadoobee Trivia Maze",
  },
  {
    title: "Instructions",
    description: "The help screen explains how movement, rooms, questions, and locked doors work.",
    image: "/images/bea-trivia-images/bea-instructions.png",
    alt: "Instructions screen for Beabadoobee Trivia Maze",
  },
  {
    title: "Settings And Save System",
    description: "Players can save, load, start over, control music, adjust volume, and use the help menu.",
    image: "/images/bea-trivia-images/bea-settings.png",
    alt: "Settings menu for Beabadoobee Trivia Maze",
  },
  {
    title: "Game Over State",
    description: "Wrong answers can lock progress and trigger the loss state.",
    image: "/images/bea-trivia-images/bea-gameover.png",
    alt: "Game over screen for Beabadoobee Trivia Maze",
  },
  {
    title: "Win State",
    description: "Reaching the final room completes the maze and shows the winning state.",
    image: "/images/bea-trivia-images/bea-triviamaze-win.png",
    alt: "Winning screen for Beabadoobee Trivia Maze",
  },
];

export const BeabadoobeeTrivia = () => {
  // Instead of using useParams, we directly select the project with id 1
  const project = projectsList.find((p) => p.id === 1);

  if (!project) {
    return <div className="text-center text-red-500 mt-8">Project not found.</div>;
  }

  return (
    <div className=" bg-card p-6 rounded-lg shadow-md border border-border relative text-left ">
      <h2 className="text-3xl font-bold text-center mb-4">{project.title}</h2>
      <img src={"/images/bea-trivia-images/bea-1st.png"} alt={project.title} className="w-full h-full object-cover rounded-md mb-4 " />
      <p className="text-foreground mb-4 indent-5">
        TriviaMaze is a Java Swing desktop game where correct trivia answers let players traverse a dynamically generated maze. I built the interface, connected the game to a SQLite database for trivia questions, answer choices, and game data, and implemented save/load functionality with object serialization so players could persist progress.
      </p>

      <ul className="flex items-start flex-col gap-4 mt-4">
        {/* Stack Label */}
        <li>
          {" "}
          <span className="inline border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">Stack</span>
          <p className="inline"> Java, Java Swing, SQLite, IntelliJ </p>
        </li>

        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <Database size={18} />
            Database
          </span>
          <p className="inline"> SQLite stores trivia questions, answer choices, and supporting game data. </p>
        </li>

        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <Save size={18} />
            Persistence
          </span>
          <p className="inline"> Object serialization supports saving and loading player progress. </p>
        </li>

        <li>
          {" "}
          <a href="/Bea-trivia-maze-files/TCSS360A Final Project Demo.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Demo
            <ExternalLink size={18} />
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1rIeHFAy6DcNrxMztzO-C4fPwWIEzofgf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Installer
            <ExternalLink size={18} />
          </a>
        </li>
        <li>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Source Code
            <Github size={18} />
          </a>
        </li>
      </ul>

      <section className="mt-10">
        <h3 className="text-xl font-bold text-center mb-2">Gallery</h3>
        <p className="text-center text-sm text-foreground mb-6 max-w-2xl mx-auto">
          A look at the maze flow, question types, menus, and end states from the Java Swing trivia game.
        </p>

        <ProjectGallery items={galleryItems} />
      </section>
    </div>
  );
};

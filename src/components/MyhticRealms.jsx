import { projectsList } from "../pages/Projects";
import { Github, ExternalLink } from "lucide-react";

export const MythicRealms = () => {
  // Instead of using useParams, we directly select the project with id 1
  const project = projectsList.find((p) => p.id === 3);

  if (!project) {
    return <div className="text-center text-red-500 mt-8">Project not found.</div>;
  }

  return (
    <div className=" bg-card p-6 rounded-lg shadow-md border border-border relative text-left ">
      <h2 className="text-3xl font-bold text-center mb-4">{project.title}</h2>
      <img src={"/images/mythic-realms-images/mythic-realms-1st.png"} alt={project.title} className="w-full h-full object-cover rounded-md mb-4 " />
      <p className="text-foreground mb-4 indent-5 ">
        Mythic Realms: Whispers of the Forgotten Lands is a 2D action-adventure web game built using JavaScript, HTML, and CSS. As the lead developer, I spearheaded the design and implementation of core gameplay features, including a smooth Update-Render-Loop, collision detection, and projectile physics, all optimized for fluid player interaction. The game immerses players in a mysterious pixel-art world, blending exploration, puzzles, and combat. I also led team meetings and version control using Git, ensuring consistent collaboration and delivery throughout development.
      </p>

      <ul className="flex items-start flex-col gap-4 mt-4">
        {/* Stack Label */}
        <li>
          {" "}
          <span className="inline border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">Stack</span>
          <p className="inline"> HTML, CSS, JavaScript, VS Code </p>
        </li>

        <li>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Source Code
            <Github size={18} />
          </a>
        </li>
        <a href="https://www.youtube.com/watch?v=5ik2yEmfzn0&ab_channel=angelvu" target="_blank" className="inline-flex items-center gap-2 border border-primary bg-primary px-2 py-1 rounded mr-1 hover:opacity-90 transition">
          Demo
          <ExternalLink size={18} />
        </a>
        <a href="https://angel-vu.github.io/TCSS-491-Mythic-Realms-Whispers-of-the-Forgotten-Lands/" target="_blank" className="inline-flex items-center gap-2 border border-primary bg-primary px-2 py-1 rounded mr-1 hover:opacity-90 transition">
          Live Game
          <ExternalLink size={18} />
        </a>
      </ul>
      <h1 className="text-xl  text-center mb-4"> Gallery:</h1>

      <p className="my-4"> Instructions </p>
      <img src={"/images/mythic-realms-images/mythic-realms-instructions.png"} alt="instructions image" className="w-full h-full object-cover  my-4 " />

      <p className="my-4"> Boss </p>
      <img src={"/images/mythic-realms-images/mythic-realms-boss.png"} alt="credits " className="w-full h-full object-cover  my-4 " />

      <p className="my-4"> Game over </p>
      <img src={"/images/mythic-realms-images/mythic-realms-game-over.png"} alt="game over " className="w-full h-full object-cover  my-4 " />

      <p className="my-4"> Game won </p>
      <img src={"/images/mythic-realms-images/mythic-realms-game-won.png"} alt="game won " className="w-full h-full object-cover  my-4 " />
      
    </div>
  );
};

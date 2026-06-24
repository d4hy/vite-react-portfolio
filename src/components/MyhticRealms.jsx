import { projectsList } from "../pages/Projects";
import { Code2, ExternalLink, Gamepad2, Github, MapPinned, Swords, TimerReset, Users } from "lucide-react";
import { ProjectGallery } from "./ProjectGallery";

const galleryItems = [
  {
    title: "Combat Preview",
    description: "Live gameplay showing the canvas HUD, pause/options controls, enemy counters, projectile effects, and melee combat.",
    image: "/images/mythic-realms-images/mythic-realms-preview.png",
    alt: "Mythic Realms combat preview with player, enemy, HUD, and projectile effect",
    featured: true,
  },
  {
    title: "World Exploration",
    description: "The main adventure view with movement, map traversal, collision boundaries, and environmental layout.",
    image: "/images/mythic-realms-images/mythic-realms-1st.png",
    alt: "Mythic Realms gameplay showing the character exploring the world",
  },
  {
    title: "Intro And Story Flow",
    description: "The opening overlay introduces the quest before the player enters the canvas game.",
    image: "/images/mythic-realms-images/mythic-realms-intro.png",
    alt: "Mythic Realms intro screen with fantasy backdrop and welcome text",
  },
  {
    title: "Boss Encounter",
    description: "A later combat sequence with timer pressure, hazards, enemy counters, and boss-phase behavior.",
    image: "/images/mythic-realms-images/mythic-realms-boss.png",
    alt: "Mythic Realms boss encounter screenshot",
  },
  {
    title: "Instructions",
    description: "The in-game instructions explain movement, running, attacking, and the objective.",
    image: "/images/mythic-realms-images/mythic-realms-instructions.png",
    alt: "Mythic Realms instructions screenshot",
  },
  {
    title: "Source Asset Overview",
    description: "A behind-the-scenes sheet of sprites, world tiles, pickups, effects, and boss assets from the source repo.",
    image: "/images/mythic-realms-images/mythic-realms-source-assets.png",
    alt: "Mythic Realms source asset overview",
  },
  {
    title: "Game Over State",
    description: "The game transitions to a failure state when the player runs out of health or time.",
    image: "/images/mythic-realms-images/mythic-realms-game-over.png",
    alt: "Mythic Realms game over screen",
  },
  {
    title: "Win State",
    description: "The victory screen appears after completing the combat objective and final encounter.",
    image: "/images/mythic-realms-images/mythic-realms-game-won.png",
    alt: "Mythic Realms win screen",
  },
  {
    title: "Team Credits",
    description: "Course, team, and contributor credits from the project build.",
    image: "/images/mythic-realms-images/mythic-realms-credits.png",
    alt: "Mythic Realms credits screen",
  },
];

const highlights = [
  {
    title: "Custom Canvas Engine",
    description: "Built around a JavaScript update/draw loop, entity list, timer, asset loading, keyboard input, and mouse-based attacks.",
    icon: Code2,
  },
  {
    title: "Combat And Movement",
    description: "Implemented walking, running, health, damage windows, hit boxes, hurt boxes, combo attacks, pickups, and hazards.",
    icon: Swords,
  },
  {
    title: "Scene And Level Flow",
    description: "Managed camera positioning, level loading, enemy counters, timed objectives, win/loss transitions, and boss phases.",
    icon: MapPinned,
  },
  {
    title: "Team Collaboration",
    description: "Led core gameplay implementation while coordinating Git-based work across a four-person course project team.",
    icon: Users,
  },
];

export const MythicRealms = () => {
  // Instead of using useParams, we directly select the project with id 3.
  const project = projectsList.find((p) => p.id === 3);

  if (!project) {
    return <div className="text-center text-red-500 mt-8">Project not found.</div>;
  }

  return (
    <div className="bg-card p-6 rounded-lg shadow-md border border-border relative text-left">
      <h2 className="text-3xl font-bold text-center mb-4">{project.title}</h2>
      <img
        src="/images/mythic-realms-images/mythic-realms-preview.png"
        alt={project.title}
        className="w-full h-full object-cover rounded-md mb-4"
      />

      <p className="text-foreground mb-4 indent-5">
        Mythic Realms: Whispers of the Forgotten Lands is a 2D browser action-adventure game built with JavaScript, HTML5 Canvas, and CSS for TCSS 491: Game Simulation and Design. As lead developer, I focused on the core gameplay systems that make the game feel responsive: the custom update/render loop, camera movement, player controls, collision detection, hit boxes, hurt boxes, health states, projectile behavior, pickups, hazards, and combat interactions.
      </p>

      <p className="text-foreground mb-4 indent-5">
        The game uses a custom AssetManager to preload sprite and audio files, a SceneManager to coordinate levels and state transitions, and a canvas-based entity system for the player, enemies, effects, health pickups, counters, timer, and boss encounters. Players move with WASD, run with Shift, attack with the mouse, clear enemy waves, and complete the final encounter before time runs out.
      </p>

      <ul className="flex items-start flex-col gap-4 mt-4">
        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <Gamepad2 size={18} />
            Stack
          </span>
          <p className="inline"> JavaScript, HTML5 Canvas, CSS, custom game engine, Git, GitHub Pages </p>
        </li>

        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <TimerReset size={18} />
            Gameplay
          </span>
          <p className="inline"> WASD movement, Shift sprinting, mouse attacks, timer pressure, health pickups, hazards, enemy counters, and final boss phases </p>
        </li>

        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <Users size={18} />
            Team
          </span>
          <p className="inline"> David Hoang, Avreen Kaur, Jay Phommakot, and Angel Vu </p>
        </li>

        <li>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Source Code
            <Github size={18} />
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com/watch?v=5ik2yEmfzn0&ab_channel=angelvu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Demo
            <ExternalLink size={18} />
          </a>
        </li>

        <li>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Live Game
            <ExternalLink size={18} />
          </a>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-center my-4">What I Worked On</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="border border-border rounded-lg p-4">
              <Icon className="mb-2 text-primary" size={24} />
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-foreground">{item.description}</p>
            </div>
          );
        })}
      </div>

      <section className="mt-10">
        <h3 className="text-xl font-bold text-center mb-2">Gallery</h3>
        <p className="text-center text-sm text-foreground mb-6 max-w-2xl mx-auto">
          A mix of live gameplay captures, menu states, source assets, and end-state screens from the project.
        </p>

        <ProjectGallery items={galleryItems} />
      </section>
    </div>
  );
};

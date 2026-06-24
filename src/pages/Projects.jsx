import { StarBackground } from "../components/StarBackground";
import { Github, ExternalLink } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useLayoutEffect, useRef } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

// Project list used to populate the cards dynamically
export const projectsList = [
  {
    id: 4,
    title: "Hawl Techs AI Memory Box",
    description: "A Chrome extension and web platform for capturing, organizing, and displaying memory data from LLM conversations.",
    image: "/images/hawl-techs-memory-box-images/memory-box-card-hero.png",
    tags: ["React", "JavaScript", "Manifest V3", "Vite", "Tailwind CSS"],
    demoUrl: "https://memorybox.hawltechs.com",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description: "A Vite React workout tracker with dashboard metrics, CRUD workout records, reusable components, and personal records.",
    image: "/images/fitness-tracker-images/fitness-tracker-dashboard-card.png",
    tags: ["React", "Vite", "JavaScript", "Express.js", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/d4hy/Fitness-Tracker",
  },
  {
    id: 1,
    title: "Beabadoobee Trivia Maze",
    description: "A Java Swing trivia maze game with SQLite-backed questions, dynamic maze traversal, and save/load persistence.",
    image: "/images/bea-trivia-images/bea-cover.jpg",
    tags: ["Java", "Swing", "SQLite", "Git"],
    demoUrl: "#",
    githubUrl: "https://github.com/d4hy/TriviaMaze",
  },
  {
    id: 3,
    title: "Mythic Realms: Whispers of the Forgotten Lands",
    description: "A 2D JavaScript adventure game featuring dynamic character movement, enemy interactions, and immersive environments.",
    image: "/images/mythic-realms-images/mythic-realms-preview.png",
    tags: ["JavaScript", "HTML5 Canvas", "CSS", "GitHub Pages"],
    demoUrl: "https://angel-vu.github.io/TCSS-491-Mythic-Realms-Whispers-of-the-Forgotten-Lands/",
    githubUrl: "https://github.com/angel-vu/TCSS-491-Mythic-Realms-Whispers-of-the-Forgotten-Lands",
  },
  {
    id: 5,
    title: "Archive Library Management System",
    description: "A read-focused database query and reporting dashboard for exploring library records with Express, MySQL, and Bootstrap.",
    image: "/images/lms-images/archive-home.png",
    tags: ["Node.js", "Express", "MySQL", "SQL", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/d4hy/LMS",
  },
];

export const Projects = () => {
  const location = useLocation();
  const projectDetailsRef = useRef(null);

  useLayoutEffect(() => {
    const hasSelectedProject = /^\/projects\/[^/]+\/?$/.test(location.pathname);

    if (!hasSelectedProject || !projectDetailsRef.current) {
      return;
    }

    const top = projectDetailsRef.current.getBoundingClientRect().top + window.scrollY - 96;
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    window.scrollTo(0, top);
    root.style.scrollBehavior = previousScrollBehavior;
  }, [location.pathname]);

  /*
    These are from tailwind.
     min-h-screen: minimum height is the size of the screen.
     We can also make custom ones, defining our own colors in light mode or dark mode.
     Defined in index.css. 

     overflow-x: hidden;, which clips any content that would spill out horizontally and removes horizontal scrollbars—useful for preventing accidental side-scroll from animations or wide background effects.
  */
  return (
    <section id="projectsPage" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar*/}
      <Navbar />

      {/* Main Content*/}
      <main className="container mx-auto max-w-5xl my-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="mb-4">Click on a project to learn more about it.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div key={project.id} className="group bg-card rounded-lg shadow-xs card-hover relative cursor-pointer">
              <Link
                to={`/projects/${project.id}`}
                aria-label={`Learn more about ${project.title}`}
                className="absolute inset-0 z-10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              />

              <div className="h-48 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 pb-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-foreground text-sm mb-4">{project.description}</p>

                <div className="absolute bottom-0 left-0 m-4 z-20">
                  <div className="flex space-x-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} demo`}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          <div className = " mt-12 flex flex-col items-center ">
            <p> Check out my GitHub repository for more projects!</p>
          <a href= "https://github.com/d4hy" target="_blank" className="cosmic-button w-fit mt-2"> 
            My GitHub
          </a>
          </div>
        {/* Dynamic child route content will render here */}
        <div ref={projectDetailsRef} className="mt-16 scroll-mt-24">
          <Outlet />
        </div>
      </main>

      {/* Footer*/}
      <Footer />
    </section>
  );
};

import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import {projectsList} from"../pages/Projects";

export const ProjectsSection = () => {
/*
Component Purpose:
- This section displays a preview grid of projects with title, description, image, tags, and links.
- The "See more projects" button links to the full `/projects` page using React Router.

Routing Explanation:
- We use <Link> from `react-router-dom` when navigating between internal routes (like `/projects`).
   • This keeps the experience as a Single Page App (SPA) — no page reload happens.
   • <Link> is ideal for navigation between React Router routes.

- We use regular <a> tags with `href` when linking to external URLs (like GitHub or live demos).
   • These links open in a new tab (`target="_blank"`) because they point to websites outside our app.
   • <a> is required here because <Link> is only for internal routing.

Icons:
- We use `ExternalLink` and `Github` icons from `lucide-react` to visually indicate where the links go.
   • `ExternalLink`: appears next to the demo URL (live project).
   • `Github`: appears next to the GitHub repository URL.
   • These icons are decorative, help users quickly recognize link purpose.
*/

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
              {/* Hidden when smaller than medium, but for medium and above will display flex.
         space-x-8 : Adds horizontal spacing (gap) of 2rem (32px) between direct children of a flex container
        margin-left: 2rem;
         The map function is to evaluate javascript code.
         */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg  shadow-xs card-hover relative"
            >
              <div className="h-48 overflow-hidden">
                 {/* Group hover makes it so that it expands within the card. */}
                <img
                  src={project.image}
                  alt={project.title}
                 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-lg"
                />

              </div>

              <div className="p-6 pb-12" >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border rounded-full text-foreground">
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
             {/* 
             width: fit-content; means to fit element only as wide as its content
         */}
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
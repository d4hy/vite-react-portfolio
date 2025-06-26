
import { projectsList } from "../pages/Projects";
import { Github, ExternalLink } from "lucide-react";

export const BeabadoobeeTrivia = () => {
  // Instead of using useParams, we directly select the project with id 1
  const project = projectsList.find((p) => p.id === 1);

  if (!project) {
    return <div className="text-center text-red-500 mt-8">Project not found.</div>;
  }

  return (
    <div className="mt-16 bg-card p-6 rounded-lg shadow-md border border-border">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">{project.title}</h2>
      <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-md mb-4" />
      <p className="text-foreground mb-4 text-center">{project.description}</p>

      <div className="flex justify-center gap-4">
        {project.demoUrl !== "#" && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            <ExternalLink className="inline mr-1" size={18} />
            Live Demo
          </a>
        )}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          <Github className="inline mr-1" size={18} />
          GitHub
        </a>
      </div>
    </div>
  );
};

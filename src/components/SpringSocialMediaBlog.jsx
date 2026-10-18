import { Database, Github, MessageSquare, ShieldCheck, UserRound } from "lucide-react";
import { createElement } from "react";
import { projectsList } from "../pages/Projects";

const highlights = [
  {
    title: "Registration & Login",
    icon: UserRound,
    description: "Java REST endpoints support account registration and login, validating duplicate usernames and required fields.",
  },
  {
    title: "Social Message CRUD",
    icon: MessageSquare,
    description: "Create, retrieve, update, and delete social messages, including retrieving messages by user.",
  },
  {
    title: "Service-Layer Validation",
    icon: ShieldCheck,
    description: "Validate duplicate usernames, required fields, message length, and referenced accounts before persisting data.",
  },
  {
    title: "Layered Architecture",
    icon: Database,
    description: "Separate request handling, business rules, and persistence into controller, service, and repository layers using Spring dependency injection and Spring Data JPA.",
  },
];

export const SpringSocialMediaBlog = () => {
  const project = projectsList.find((item) => item.id === 6);

  if (!project) {
    return <div className="text-center text-red-500 mt-8">Project not found.</div>;
  }

  return (
    <article className="bg-card p-6 rounded-lg shadow-md border border-border relative text-left">
      <h2 className="text-3xl font-bold text-center mb-4">{project.title}</h2>
      <p className="text-center text-sm text-foreground/70 mb-6">Revature technical training project</p>
      <img src={project.image} alt="Spring Social Media Blog API overview: accounts and messages with service validation and JPA persistence" className="w-full rounded-md mb-6" />
      <p className="text-foreground mb-4 leading-relaxed">
        I implemented a Java REST API with Spring Boot and Spring Data JPA for account registration, login, and social message management. The API supports message CRUD operations and retrieving messages by user.
      </p>
      <p className="text-foreground mb-6 leading-relaxed">
        I organized request handling, business rules, and persistence into controller, service, and repository layers using Spring dependency injection. I validated duplicate usernames, required fields, message length, and referenced accounts before persisting data with Spring Data JPA.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-sm border border-border rounded-full">{tag}</span>
        ))}
      </div>
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-3 py-2 rounded hover:opacity-90 transition">
        Source Code <Github size={18} aria-hidden="true" />
      </a>
      <h3 className="text-xl font-bold mt-8 mb-4">What I Built</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlights.map(({ title, icon: Icon, description }) => (
          <div key={title} className="border border-border rounded-lg p-4">
            {createElement(Icon, { className: "mb-2 text-primary", size: 24, "aria-hidden": true })}
            <h4 className="font-semibold mb-1">{title}</h4>
            <p className="text-sm text-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

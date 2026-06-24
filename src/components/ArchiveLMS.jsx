import {
  BookOpen,
  ClipboardList,
  Database,
  ExternalLink,
  Github,
  Search,
  Server,
  Users,
} from "lucide-react";
import { projectsList } from "../pages/Projects";
import { ProjectGallery } from "./ProjectGallery";

const galleryItems = [
  {
    title: "Archive Home Page",
    description: "The landing page introduces the library reporting dashboard, stack, feature areas, and project team.",
    image: "/images/lms-images/archive-home.png",
    alt: "Archive Library Management System home page",
    featured: true,
  },
  {
    title: "Book Query Interface",
    description: "Users can filter book records, inspect borrowed books, and view reservation status reports.",
    image: "/images/lms-images/archive-books.png",
    alt: "Archive book query page with filter input and query buttons",
  },
  {
    title: "Loan Reports",
    description: "The loans page exposes reports for all loans, recent loans, and overdue loan details.",
    image: "/images/lms-images/archive-loans.png",
    alt: "Archive loan query page",
  },
  {
    title: "Fine Reports",
    description: "Fine-related queries show payment status, member contact details, and popular books with outstanding fees.",
    image: "/images/lms-images/archive-fines.png",
    alt: "Archive fine query page",
  },
  {
    title: "Database Diagram",
    description: "The normalized MySQL schema connects books, members, loans, fines, reservations, and staff records.",
    image: "/images/lms-images/archive-database-diagram.png",
    alt: "Archive database entity relationship diagram",
    featured: true,
  },
];

const highlights = [
  {
    title: "Normalized MySQL Schema",
    description: "Designed relational tables, primary keys, foreign keys, constraints, and seed data for the ARCHIVE database.",
    icon: Database,
  },
  {
    title: "Express API Reports",
    description: "Built read-focused endpoints for books, members, loans, fines, reservations, and staff report queries.",
    icon: Server,
  },
  {
    title: "Searchable Query Pages",
    description: "Frontend pages let users run optional filters and render returned query results in Bootstrap tables.",
    icon: Search,
  },
  {
    title: "Course Team Project",
    description: "Collaborated with Faith Capito, Nazarii Revitskyi, and Yasin Ibrahim for TCSS 445.",
    icon: Users,
  },
];

export const ArchiveLMS = () => {
  const project = projectsList.find((p) => p.id === 5);

  if (!project) {
    return <div className="text-center text-red-500 mt-8">Project not found.</div>;
  }

  return (
    <div className="bg-card p-6 rounded-lg shadow-md border border-border relative text-left">
      <h2 className="text-3xl font-bold text-center mb-4">{project.title}</h2>
      <img
        src="/images/lms-images/archive-home.png"
        alt={project.title}
        className="w-full rounded-md mb-4"
      />

      <p className="text-foreground mb-4 indent-5">
        Archive Library Management System is a database query and reporting dashboard built for TCSS 445: Database Systems Design. The app uses a Node.js and Express server with MySQL-backed report endpoints, plus Bootstrap-styled frontend pages for browsing books, members, loans, fines, reservations, and staff records.
      </p>

      <p className="text-foreground mb-4 indent-5">
        The project is intentionally read-focused rather than a full production circulation system. It does not try to handle member creation, book checkout and return transactions, fine payments, or staff authentication; the goal was to demonstrate database design and query behavior through a normalized schema, seeded sample data, joins, nested queries, aggregation, overdue-loan reports, reservation checks, fine summaries, and optional frontend filters.
      </p>

      <ul className="flex items-start flex-col gap-4 mt-4">
        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <BookOpen size={18} />
            Project
          </span>
          <p className="inline"> Read-focused library database dashboard for books, members, loans, fines, reservations, and staff records </p>
        </li>

        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <Search size={18} />
            Scope
          </span>
          <p className="inline"> Query exploration and reporting, not production circulation workflows or staff account management </p>
        </li>

        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <ClipboardList size={18} />
            Stack
          </span>
          <p className="inline"> Node.js, Express, MySQL, mysql2, dotenv, Bootstrap, Bootswatch, HTML, CSS, JavaScript </p>
        </li>

        <li className="flex flex-wrap gap-3">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Source Code
            <Github size={18} />
          </a>

          <a href="/images/lms-images/archive-database-diagram.png" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Database Diagram
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
          Click any image to inspect the Archive UI screens and database diagram with zoom controls.
        </p>

        <ProjectGallery
          items={galleryItems}
          getImageFrameClassName={(item) => (item.featured ? "h-80 md:h-[30rem]" : "h-72")}
          getImageClassName={(item) =>
            `h-full w-full p-3 transition duration-300 group-hover:scale-[1.03] ${
              item.title === "Database Diagram" ? "object-contain" : "object-cover object-top"
            }`
          }
        />
      </section>
    </div>
  );
};

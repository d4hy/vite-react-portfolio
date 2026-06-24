import {
  BarChart3,
  Database,
  Dumbbell,
  ExternalLink,
  Github,
  Pencil,
  Search,
  Trophy,
} from "lucide-react";
import { projectsList } from "../pages/Projects";
import { ProjectGallery } from "./ProjectGallery";

const galleryItems = [
  {
    title: "Dashboard and Workout History",
    description: "The updated React dashboard summarizes logged sets, total volume, personal records, and the latest workout while keeping the full workout table searchable.",
    image: "/images/fitness-tracker-images/fitness-tracker-preview.png",
    alt: "Fitness Tracker dashboard with metric cards and workout table",
    featured: true,
  },
  {
    title: "Log Workout Form",
    description: "A reusable workout form flow for creating records with exercise, date, sets, reps, and weight fields.",
    image: "/images/fitness-tracker-images/fitness-tracker-create.png",
    alt: "Fitness Tracker log workout form",
  },
  {
    title: "Personal Records",
    description: "A record board that groups each exercise by its heaviest set and displays volume context for progress tracking.",
    image: "/images/fitness-tracker-images/fitness-tracker-pr.png",
    alt: "Fitness Tracker personal records page",
  },
  {
    title: "Workout Detail View",
    description: "Individual workout routes retrieve one record through the Express API and show date, sets, reps, weight, and calculated volume.",
    image: "/images/fitness-tracker-images/fitness-tracker-view.png",
    alt: "Fitness Tracker workout detail page",
  },
  {
    title: "Edit Existing Set",
    description: "Existing records can be updated through the same structured form pattern used for creating new workout sets.",
    image: "/images/fitness-tracker-images/fitness-tracker-edit.png",
    alt: "Fitness Tracker edit workout page",
  },
];

export const FitnessTracker = () => {
  const project = projectsList.find((p) => p.id === 2);

  if (!project) {
    return <div className="text-center text-red-500 mt-8">Project not found.</div>;
  }

  return (
    <div className="bg-card p-6 rounded-lg shadow-md border border-border relative text-left">
      <h2 className="text-3xl font-bold text-center mb-4">{project.title}</h2>
      <img
        src="/images/fitness-tracker-images/fitness-tracker1st.png"
        alt={project.title}
        className="w-full rounded-md mb-4"
      />

      <p className="text-foreground mb-4 indent-5">
        Fitness Tracker is a full-stack workout logging app rebuilt as a Vite React single-page application with dashboard, log workout, edit, view, and personal records pages. The frontend uses reusable React components for app layout, workout forms, workout tables, metric cards, and status messages.
      </p>

      <p className="text-foreground mb-4 indent-5">
        I integrated the React pages with Express.js API routes using fetch helpers to retrieve, create, update, and delete workout records from MySQL. I also redesigned the interface with responsive styling to improve workout entry, data browsing, and personal record visibility.
      </p>

      <ul className="flex items-start flex-col gap-4 mt-4">
        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <Dumbbell size={18} />
            Stack
          </span>
          <p className="inline"> React, Vite, JavaScript, Node.js, Express.js, MySQL, CSS, REST API </p>
        </li>

        <li>
          <span className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded mr-1">
            <Database size={18} />
            Backend
          </span>
          <p className="inline"> Express endpoints support create, read, update, delete, per-exercise lookup, individual workout detail, and personal-record queries. </p>
        </li>

        <li className="flex flex-wrap gap-3">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary text-foreground px-2 py-1 rounded hover:opacity-90 transition">
            Source Code
            <Github size={18} />
          </a>

          <a href="/a3.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary bg-primary px-2 py-1 rounded hover:opacity-90 transition">
            API Documentation
            <ExternalLink size={18} />
          </a>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-center my-4">What Changed</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div className="border border-border rounded-lg p-4">
          <BarChart3 className="mb-2 text-primary" size={24} />
          <h4 className="font-semibold mb-1">Dashboard Metrics</h4>
          <p className="text-sm text-foreground">Shows logged sets, total training volume, personal record count, and the latest workout at a glance.</p>
        </div>

        <div className="border border-border rounded-lg p-4">
          <Search className="mb-2 text-primary" size={24} />
          <h4 className="font-semibold mb-1">Searchable History</h4>
          <p className="text-sm text-foreground">Workout history can be searched by exercise, then opened, edited, or deleted from the table.</p>
        </div>

        <div className="border border-border rounded-lg p-4">
          <Trophy className="mb-2 text-primary" size={24} />
          <h4 className="font-semibold mb-1">Personal Records</h4>
          <p className="text-sm text-foreground">The app calculates the heaviest logged set for each exercise and displays record cards.</p>
        </div>
      </div>

      <section className="mt-10">
        <h3 className="text-xl font-bold text-center mb-2">Product Walkthrough</h3>
        <p className="text-center text-sm text-foreground mb-6 max-w-2xl mx-auto">
          Click any screenshot to open the full workflow from the updated React, Express, and MySQL version of the app.
        </p>

        <ProjectGallery
          items={galleryItems}
          getImageFrameClassName={(item) => (item.featured ? "h-80 md:h-[28rem]" : "h-72")}
          getImageClassName={() =>
            "h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
          }
          renderTitle={(item) => (
            <>
              {item.title === "Edit Existing Set" && <Pencil size={18} className="text-primary" />}
              {item.title}
            </>
          )}
        />
      </section>
    </div>
  );
};

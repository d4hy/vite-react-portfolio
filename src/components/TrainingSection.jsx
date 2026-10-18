import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

const trainingHighlights = [
  "Implemented JavaScript frontend workflows for recipe CRUD, login/logout, and admin-only ingredient management, integrating with a Java REST API.",
  "Completed full-stack training in Java, Javalin/JDBC, SQL, Spring Boot, JavaScript, TypeScript, and Angular through 108 coding activities and 14 technical evaluations.",
];

export const TrainingSection = () => (
  <section id="training" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Technical <span className="text-primary">Training</span>
      </h2>
      <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Structured practice building Java APIs, connecting frontend workflows, and working with SQL persistence.
      </p>

      <article className="bg-card border border-border rounded-lg p-6 shadow-xs text-left">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <GraduationCap size={22} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Java Full-Stack Developer Trainee</h3>
              <p className="text-foreground mt-1">Revature</p>
              <p className="text-sm text-foreground/70 mt-1">Pre-Employment Program (Technical Training)</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-foreground/70 md:shrink-0">
            <span className="inline-flex items-center gap-2 md:justify-end">
              <CalendarDays size={16} aria-hidden="true" />
              Jul. 2026 - Oct. 2026
            </span>
            <span className="inline-flex items-center gap-2 md:justify-end">
              <MapPin size={16} aria-hidden="true" />
              Remote
            </span>
          </div>
        </div>
        <ul className="mt-5 space-y-3 list-disc pl-5 marker:text-primary">
          {trainingHighlights.map((highlight) => (
            <li key={highlight} className="text-sm text-foreground leading-relaxed">{highlight}</li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);

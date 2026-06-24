import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Front-End Developer Intern / Team Lead",
    company: "Hawl Technologies, LLC",
    context: "AI startup - LLM memory and control systems",
    location: "Remote",
    dates: "Jan. 2026 - Present",
    highlights: [
      "Led frontend coordination for AI Memory Box, a Chrome extension and web platform that captures, organizes, and displays user memory data from LLM conversations.",
      "Planned sprint timelines, defined frontend priorities, assigned tasks, and coordinated feature work across a rotating intern team of 3-4 developers.",
      "Led weekly team meetings to review progress, discuss blockers, gather feedback, and align upcoming frontend tasks.",
      "Reviewed and tested teammate pull requests, giving feedback on usability, UI behavior, feature implementation, and potential bugs before approval.",
      "Refactored the Chrome extension frontend from plain JavaScript into a React-based architecture, improving maintainability and making new UI features easier to implement.",
    ],
    tags: ["React", "JavaScript", "Manifest V3", "Vite", "Tailwind CSS", "Team Lead"],
  },
  {
    role: "Caregiver",
    company: "Self-Employed",
    context: "Family care and daily operations",
    location: "Tacoma, WA",
    dates: "2023 - Current",
    highlights: [
      "Provided full-time care and daily assistance for a family member.",
      "Managed schedules, transportation, household responsibilities, and dependable day-to-day support.",
    ],
    tags: ["Responsibility", "Scheduling", "Communication"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
          A snapshot of the work and responsibilities from my resume, including frontend leadership, extension architecture, and hands-on project coordination.
        </p>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="bg-card border border-border rounded-lg p-6 shadow-xs text-left">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <BriefcaseBusiness size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{experience.role}</h3>
                      <p className="text-foreground">{experience.company}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{experience.context}</p>
                </div>

                <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                  <span className="inline-flex items-center gap-2 md:justify-end">
                    <CalendarDays size={16} />
                    {experience.dates}
                  </span>
                  <span className="inline-flex items-center gap-2 md:justify-end">
                    <MapPin size={16} />
                    {experience.location}
                  </span>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-foreground leading-relaxed">
                    <span className="text-primary font-semibold">- </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {experience.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

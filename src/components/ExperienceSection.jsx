import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Front-End Developer Intern / Team Lead",
    company: "Hawl Technologies, LLC",
    context: "AI startup - LLM memory and control systems",
    location: "Remote",
    dates: "Jan. 2026 - Aug. 2026",
    highlights: [
      "Built React interfaces for AI Memory Box, a Chrome extension and web platform, integrating REST APIs to store, retrieve, and display LLM conversation memory data.",
      "Contributed to refactoring a legacy HTML, CSS, and JavaScript codebase of approximately 20,000 lines into modular React components, working across approximately 24 React component files.",
      "Coordinated a rotating team of 3-4 developers, planned sprints, assigned frontend tasks, led weekly meetings, and reviewed and tested pull requests.",
      "Created Figma prototypes, improved search/filter controls and onboarding, and resolved unreadable UI states, incorrect memory-cap messaging, and duplicate tab opening.",
    ],
    tags: ["React", "JavaScript", "REST APIs", "Manifest V3", "Figma", "Team Leadership"],
  },
  {
    role: "Caregiver",
    company: "Self-Employed",
    context: "Family care and daily operations",
    location: "Tacoma, WA",
    dates: "2023 - Present",
    highlights: [
      "Provide daily family care while managing transportation, schedules, household responsibilities, and time-sensitive tasks.",
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
          Professional experience spanning product development, team leadership, and dependable long-term caregiving.
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

              <ul className="mt-5 space-y-3 list-disc pl-5 marker:text-primary">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-foreground leading-relaxed">
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

import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          The academic foundation behind my work in software engineering and full-stack development.
        </p>

        <article className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-6 md:p-8 shadow-xs text-left">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                <GraduationCap size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">University of Washington Tacoma</h3>
                <p className="mt-1 text-foreground/80">Bachelor of Science in Computer Science</p>
                <span className="inline-flex mt-4 px-3 py-1 text-sm font-medium border border-primary/40 rounded-full bg-primary/10">
                  GPA: 3.72
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm text-foreground/70  md:shrink-0">
              <span className="inline-flex items-center gap-2 md:justify-end">
                <CalendarDays size={16} aria-hidden="true" />
                Jan. 2022 - Dec. 2024
              </span>
              <span className="inline-flex items-center gap-2 md:justify-end">
                <MapPin size={16} aria-hidden="true" />
                Tacoma, WA
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

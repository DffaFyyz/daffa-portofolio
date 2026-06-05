import { experiences } from "../../data/experiences";
import { GlassPanel } from "../ui/GlassPanel";
import { SectionHeader } from "../ui/SectionHeader";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 py-24 sm:py-28">
      <SectionHeader
        eyebrow="Experience"
        title="A compact timeline of recent focus."
        description="A few milestones that shape the portfolio, technical direction, and Apple Developer Academy preparation."
        align="center"
      />
      <div className="mx-auto mt-12 max-w-3xl">
        {experiences.map((experience, index) => (
          <div key={`${experience.role}-${experience.period}`} className="relative pl-8">
            {index < experiences.length - 1 ? (
              <span
                className="absolute left-[7px] top-8 h-full w-px bg-white/10"
                aria-hidden="true"
              />
            ) : null}
            <span
              className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full border border-white/18 bg-white/12 shadow-[0_0_24px_rgba(255,255,255,0.16)]"
              aria-hidden="true"
            />
            <GlassPanel className="mb-5 rounded-2xl p-5 sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                {experience.period}
              </p>
              <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-normal text-text-primary">{experience.role}</h3>
                <p className="text-sm text-text-secondary">{experience.organization}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-text-secondary">{experience.description}</p>
            </GlassPanel>
          </div>
        ))}
      </div>
    </section>
  );
}

import { techStack } from "../../data/techStack";
import { GlassPanel } from "../ui/GlassPanel";

export function TechStackStrip() {
  return (
    <GlassPanel className="relative z-10 my-8 flex flex-col gap-5 overflow-hidden rounded-2xl px-4 py-5 sm:my-10 sm:px-5 md:flex-row md:items-center md:justify-between md:gap-6 md:px-7">
      <p className="shrink-0 text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
        Technologies & Tools
      </p>
      <div className="no-scrollbar flex items-center gap-3 overflow-x-auto pb-1 md:flex-wrap md:justify-end md:overflow-visible md:pb-0">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="group relative inline-flex h-11 shrink-0 items-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.03] px-3.5 text-text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:bg-white/[0.055] hover:text-text-primary sm:h-12 sm:px-4"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm">{tech.name}</span>
            </div>
          );
        })}
        <span className="shrink-0 px-2 text-sm text-text-muted">and more</span>
      </div>
    </GlassPanel>
  );
}

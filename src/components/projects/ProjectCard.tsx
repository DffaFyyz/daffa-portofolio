import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { Badge } from "../ui/Badge";
import { GlassPanel } from "../ui/GlassPanel";

type ProjectCardProps = {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
};

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const primaryImage = project.images[0];

  return (
    <article className="group h-full">
      <button
        type="button"
        className="block h-full w-full text-left"
        onClick={() => onSelect?.(project)}
        aria-label={`Open details for ${project.title}`}
      >
        <GlassPanel className="flex h-full flex-col overflow-hidden rounded-2xl p-3.5 transition duration-300 group-hover:-translate-y-1 group-hover:bg-white/[0.05] sm:p-4">
          <div className="relative mb-6 aspect-[1.08] overflow-hidden rounded-xl border border-white/10 bg-[#030303] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:mb-7 sm:aspect-[1.18]">
            <span className="absolute left-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-black/70 text-[11px] text-text-primary shadow-[0_10px_22px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.12)]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <img
              src={primaryImage.src}
              alt={primaryImage.alt}
              className="h-full w-full object-contain p-2.5 sm:p-3"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.12)_46%,rgba(0,0,0,0.78)),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),transparent_34%)]" />
            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/12 bg-black/70 p-4 shadow-[0_18px_38px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.08)] sm:inset-x-7 sm:bottom-7 sm:p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-text-muted">{project.status}</p>
              <p className="mt-3 max-w-[14rem] text-lg font-normal leading-tight text-text-primary sm:text-xl">
                {project.title}
              </p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-white/24 via-white/8 to-transparent" />
            </div>
          </div>

          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-normal text-text-primary">{project.title}</h3>
            <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/12 text-text-muted transition group-hover:bg-white/[0.055] group-hover:text-text-primary">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
          <p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} className="rounded-md px-3 py-1.5 text-[11px] text-text-secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </GlassPanel>
      </button>
    </article>
  );
}

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "../../data/projects";
import { cn } from "../../lib/utils";
import { Badge } from "../ui/Badge";

type ProjectDetailModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.slug]);

  useEffect(() => {
    if (!project) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  const activeImage = project.images[activeImageIndex] ?? project.images[0];

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/88 px-3 py-4 backdrop-blur-md sm:px-5"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
      onClick={onClose}
    >
      <div
        className="max-h-[calc(100vh-2rem)] w-full max-w-6xl overflow-y-auto rounded-2xl border border-white/14 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.82),inset_0_1px_0_rgba(255,255,255,0.10)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-black/88 px-4 py-3 backdrop-blur-md sm:px-5">
          <div className="min-w-0">
            <p className="truncate text-xs uppercase tracking-[0.16em] text-text-muted">
              {project.status}
            </p>
            <h3 className="mt-1 truncate text-lg font-normal text-text-primary sm:text-xl">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/12 bg-black/70 text-text-primary transition hover:bg-white/[0.06]"
            aria-label="Close project details"
            onClick={onClose}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-6 p-4 sm:p-5 lg:grid-cols-[1.18fr_0.82fr] lg:p-6">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-white/12 bg-[#030303] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="flex aspect-[1.35] items-center justify-center sm:aspect-[1.65]">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="h-full w-full object-contain p-2 sm:p-3"
                />
              </div>
            </div>

            {project.images.length > 1 ? (
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {project.images.map((image, imageIndex) => (
                  <button
                    key={image.label}
                    type="button"
                    className={cn(
                      "overflow-hidden rounded-xl border bg-black text-left transition",
                      imageIndex === activeImageIndex
                        ? "border-white/30"
                        : "border-white/10 hover:border-white/20",
                    )}
                    onClick={() => setActiveImageIndex(imageIndex)}
                  >
                    <div className="aspect-[1.65]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-contain p-1.5"
                        loading="lazy"
                      />
                    </div>
                    <div className="border-t border-white/10 px-3 py-2">
                      <p className="truncate text-[11px] uppercase tracking-[0.14em] text-text-muted">
                        {image.label}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="min-w-0 lg:py-1">
            <Badge>{project.status}</Badge>
            <h2 className="mt-5 text-3xl font-normal leading-tight text-text-primary sm:text-4xl">
              {project.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              {project.description}
            </p>

            <div className="mt-7">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                Stack & Focus
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="rounded-md px-3 py-1.5 text-[11px] text-text-secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                Key Points
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-5 marker:text-white/70">
                {project.impact.map((item) => (
                  <li key={item} className="pl-1 text-sm leading-6 text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {project.links?.length ? (
              <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/[0.035] px-3 py-2 text-sm text-text-primary transition hover:bg-white/[0.06]"
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { experiences } from "../../data/experiences";
import type { ExperienceImage } from "../../data/experiences";
import { cn } from "../../lib/utils";
import { GlassPanel } from "../ui/GlassPanel";
import { SectionHeader } from "../ui/SectionHeader";

type ExperienceVisualProps = {
  image: ExperienceImage;
  size?: "large" | "small";
  onPreview?: (image: ExperienceImage) => void;
};

function ExperienceVisual({ image, size = "large", onPreview }: ExperienceVisualProps) {
  const isLarge = size === "large";

  if (image.src) {
    const imageElement = (
      <img
        src={image.src}
        alt={image.alt}
        className={cn(
          "h-full w-full",
          image.fit === "contain" ? "object-contain p-3 sm:p-4" : "object-cover",
        )}
        loading="lazy"
      />
    );

    if (!onPreview) {
      return imageElement;
    }

    return (
      <button
        type="button"
        className="group/image relative h-full w-full cursor-zoom-in bg-black text-left"
        onClick={() => onPreview(image)}
        aria-label={`Preview ${image.label}`}
      >
        {imageElement}
        <span className="pointer-events-none absolute inset-x-4 bottom-4 rounded-lg border border-white/12 bg-black/62 px-3 py-2 text-xs text-text-secondary opacity-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
          Click to preview
        </span>
      </button>
    );
  }

  return (
    <div
      role="img"
      aria-label={image.alt}
      className={cn(
        "relative h-full w-full overflow-hidden bg-black",
        isLarge ? "min-h-[260px]" : "min-h-20",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_24%,rgba(255,255,255,0.2),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.095),rgba(255,255,255,0.018)_46%,rgba(0,0,0,0.92))]" />
      <div className="absolute -left-16 bottom-6 h-36 w-72 rotate-[-12deg] rounded-full border border-white/10 bg-white/[0.035]" />
      <div className="absolute -right-12 top-8 h-32 w-56 rotate-[18deg] rounded-full border border-white/10 bg-white/[0.028]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/74 to-transparent" />
      <div
        className={cn(
          "absolute left-4 right-4 flex items-center justify-between gap-3 border-t border-white/12 pt-3",
          isLarge ? "bottom-4" : "bottom-3",
        )}
      >
        <span className="min-w-0 truncate font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
          {image.label}
        </span>
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.38)]" />
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const [previewImage, setPreviewImage] = useState<ExperienceImage | null>(null);

  useEffect(() => {
    if (!previewImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewImage]);

  const previewModal = previewImage?.src
    ? createPortal(
        <div
          className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-black/92 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${previewImage.label}`}
          onClick={() => setPreviewImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-black/70 text-text-primary shadow-[0_16px_36px_rgba(0,0,0,0.54),inset_0_1px_0_rgba(255,255,255,0.10)] transition hover:bg-white/[0.06] sm:right-6 sm:top-6"
            aria-label="Close image preview"
            onClick={() => setPreviewImage(null)}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
          <img
            src={previewImage.src}
            alt={previewImage.alt}
            className="max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] object-contain shadow-[0_30px_90px_rgba(0,0,0,0.72)] sm:max-h-[calc(100vh-3rem)] sm:max-w-[calc(100vw-3rem)]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <section id="experience" className="relative z-10 py-20 sm:py-28">
      <SectionHeader
        eyebrow="Experience"
        title="Recent work, teams, and moments that shaped my craft."
        description="A focused timeline of technical ownership, event operations, backend work, and early professional experience."
        align="center"
      />
      <div className="mx-auto mt-12 max-w-6xl">
        {experiences.map((experience, index) => (
          <div key={`${experience.role}-${experience.period}`} className="relative pl-6 sm:pl-9">
            {index < experiences.length - 1 ? (
              <span
                className="absolute left-[7px] top-8 h-full w-px bg-white/10 sm:left-[8px]"
                aria-hidden="true"
              />
            ) : null}
            <span
              className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full border border-white/18 bg-white/12 shadow-[0_0_24px_rgba(255,255,255,0.16)] sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            <GlassPanel className="mb-6 overflow-hidden rounded-2xl p-3.5 sm:mb-7 sm:p-5 lg:p-6">
              <div className="grid gap-5 lg:grid-cols-[0.94fr_1.06fr] lg:items-stretch">
                <div className="order-2 flex min-w-0 flex-col lg:order-1">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                    {experience.period}
                  </p>
                  <div className="mt-4">
                    <h3 className="text-2xl font-normal leading-tight text-text-primary sm:text-3xl">
                      {experience.organization}
                    </h3>
                    <div className="mt-3 inline-flex rounded-lg border border-white/12 bg-white/[0.035] px-3 py-2 text-sm font-medium text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      {experience.role}
                    </div>
                    <p className="mt-1 text-sm text-text-muted">{experience.location}</p>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                    {experience.description}
                  </p>
                  <ul className="mt-6 list-disc space-y-3 pl-5 marker:text-white/70">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="pl-1 text-sm leading-6 text-text-secondary">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/12 bg-white/[0.028] px-3 py-2 text-xs font-medium text-text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="order-1 min-w-0 lg:order-2">
                  <div className="overflow-hidden rounded-xl border border-white/12 bg-black shadow-[0_20px_54px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.10)]">
                    <div className="aspect-[1.35] sm:aspect-[1.55] lg:aspect-[1.22]">
                      <ExperienceVisual image={experience.images[0]} onPreview={setPreviewImage} />
                    </div>
                  </div>

                  {experience.images.length > 1 ? (
                    <div className="mt-3 hidden grid-cols-3 gap-3 sm:grid">
                      {experience.images.slice(1, 4).map((image) => (
                        <div
                          key={image.label}
                          className="aspect-[1.4] overflow-hidden rounded-xl border border-white/10 bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                        >
                          <ExperienceVisual image={image} size="small" onPreview={setPreviewImage} />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </GlassPanel>
          </div>
        ))}
      </div>
      </section>
      {previewModal}
    </>
  );
}

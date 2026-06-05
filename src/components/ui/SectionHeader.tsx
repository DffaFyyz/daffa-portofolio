import { cn } from "../../lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-normal tracking-normal text-text-primary sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-text-secondary">{description}</p>
      ) : null}
    </div>
  );
}

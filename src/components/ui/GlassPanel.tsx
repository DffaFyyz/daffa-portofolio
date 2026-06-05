import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  elevated?: boolean;
};

export function GlassPanel({ className, elevated = false, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        elevated ? "glass-elevated" : "glass",
        "rounded-2xl",
        className,
      )}
      {...props}
    />
  );
}

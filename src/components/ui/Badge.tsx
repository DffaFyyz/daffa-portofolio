import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        className,
      )}
      {...props}
    />
  );
}

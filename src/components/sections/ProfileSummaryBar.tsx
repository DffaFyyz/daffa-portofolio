import { personal } from "../../data/personal";
import { GlassPanel } from "../ui/GlassPanel";

export function ProfileSummaryBar() {
  return (
    <GlassPanel className="relative z-10 grid overflow-hidden rounded-2xl px-5 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
      {personal.homeSummary.map((item, index) => (
        <div
          key={item.label}
          className="relative px-1 py-4 sm:px-4 lg:px-6 lg:py-3"
        >
          {index > 0 && (
            <span
              className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-white/10 lg:block"
              aria-hidden="true"
            />
          )}
          {index > 0 && (
            <span
              className="absolute inset-x-4 top-0 h-px bg-white/10 sm:hidden"
              aria-hidden="true"
            />
          )}
          {index > 1 && (
            <span
              className="absolute inset-x-4 top-0 hidden h-px bg-white/10 sm:block lg:hidden"
              aria-hidden="true"
            />
          )}
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted">
            {item.label}
          </p>
          <p className="mt-2 max-w-[17rem] text-sm leading-6 text-text-primary">
            {item.value}
          </p>
        </div>
      ))}
    </GlassPanel>
  );
}

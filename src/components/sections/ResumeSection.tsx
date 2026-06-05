import { ArrowDownToLine } from "lucide-react";
import { Button } from "../ui/Button";
import { GlassPanel } from "../ui/GlassPanel";

export function ResumeSection() {
  return (
    <section id="resume" className="relative z-10 py-24 sm:py-28">
      <GlassPanel className="mx-auto flex max-w-4xl flex-col items-center gap-7 rounded-2xl p-8 text-center sm:p-12">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">Resume</p>
          <h2 className="mt-4 text-3xl font-normal text-text-primary sm:text-5xl">
            A concise snapshot of my work, skills, and direction.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-secondary">
            Resume download is kept as a dedicated call-to-action for this landing page phase.
          </p>
        </div>
        <Button
          variant="primary"
          icon={<ArrowDownToLine className="h-4 w-4" aria-hidden="true" />}
          onClick={() => undefined}
        >
          Download Resume
        </Button>
      </GlassPanel>
    </section>
  );
}

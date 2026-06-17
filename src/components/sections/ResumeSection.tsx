import { ArrowDownToLine } from "lucide-react";
import { personal } from "../../data/personal";
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
            A quick overview of my experience across backend development, machine learning projects,
            organization work, and the systems I have built while growing as a Computer Science student.
          </p>
        </div>
        <Button
          href={personal.resumeUrl}
          variant="primary"
          icon={<ArrowDownToLine className="h-4 w-4" aria-hidden="true" />}
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </Button>
      </GlassPanel>
    </section>
  );
}

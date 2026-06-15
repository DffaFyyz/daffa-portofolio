import { ArrowDownToLine } from "lucide-react";
import { experiences } from "../data/experiences";
import { personal } from "../data/personal";
import { techStack } from "../data/techStack";
import { Container } from "../layout/Container";
import { Button } from "../components/ui/Button";
import { GlassPanel } from "../components/ui/GlassPanel";
import { SectionHeader } from "../components/ui/SectionHeader";

export function Resume() {
  return (
    <Container className="relative z-10 pt-36 pb-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="Resume"
          title="A compact overview for opportunities and technical work."
          description={personal.summary}
        />
        <Button variant="primary" icon={<ArrowDownToLine className="h-4 w-4" aria-hidden="true" />}>
          Download
        </Button>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.7fr]">
        <GlassPanel className="rounded-2xl p-6">
          <h2 className="text-xl font-medium text-text-primary">Experience</h2>
          <div className="mt-6 space-y-6">
            {experiences.map((item) => (
              <article key={`${item.role}-${item.period}`}>
                <p className="text-xs uppercase tracking-[0.14em] text-text-muted">{item.period}</p>
                <h3 className="mt-2 text-lg font-medium text-text-primary">{item.role}</h3>
                <p className="text-sm text-text-secondary">{item.organization}</p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.description}</p>
              </article>
            ))}
          </div>
        </GlassPanel>
        <GlassPanel className="rounded-2xl p-6">
          <h2 className="text-xl font-medium text-text-primary">Technical Focus</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech.name} className="rounded-lg border border-white/12 bg-white/[0.04] px-3 py-2 text-sm text-text-secondary">
                {tech.name}
              </span>
            ))}
          </div>
        </GlassPanel>
      </div>
    </Container>
  );
}

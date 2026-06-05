import { experiences } from "../data/experiences";
import { Container } from "../layout/Container";
import { GlassPanel } from "../components/ui/GlassPanel";
import { SectionHeader } from "../components/ui/SectionHeader";

export function Experience() {
  return (
    <Container className="relative z-10 pt-36 pb-24">
      <SectionHeader
        eyebrow="Experience"
        title="Leadership, computer science, and academy preparation."
        description="A concise timeline of roles and preparation areas relevant to professional opportunities."
      />
      <div className="mt-12 grid gap-4">
        {experiences.map((item) => (
          <GlassPanel key={`${item.role}-${item.period}`} className="rounded-2xl p-6">
            <div className="grid gap-4 md:grid-cols-[180px_1fr]">
              <p className="text-sm text-text-muted">{item.period}</p>
              <div>
                <h2 className="text-2xl font-medium text-text-primary">{item.role}</h2>
                <p className="mt-1 text-text-secondary">{item.organization}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-text-secondary">{item.description}</p>
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>
    </Container>
  );
}

import { AboutSection } from "../components/sections/AboutSection";
import { Container } from "../layout/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { GlassPanel } from "../components/ui/GlassPanel";

export function About() {
  return (
    <Container className="relative z-10 pt-36">
      <SectionHeader
        eyebrow="About"
        title="A backend-focused builder preparing for product-minded engineering work."
        description="Daffa's portfolio is shaped around clear systems, calm interfaces, and practical product-minded engineering work."
      />
      <AboutSection />
      <GlassPanel className="mb-20 rounded-2xl p-6">
        <p className="text-sm leading-7 text-text-secondary">
          The current focus is strengthening backend fundamentals, documenting project impact, and presenting technical work through a polished, human-centered portfolio.
        </p>
      </GlassPanel>
    </Container>
  );
}

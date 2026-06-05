import { projects } from "../data/projects";
import { Container } from "../layout/Container";
import { ProjectCard } from "../components/projects/ProjectCard";
import { SectionHeader } from "../components/ui/SectionHeader";

export function Projects() {
  return (
    <Container className="relative z-10 pt-36 pb-24">
      <SectionHeader
        eyebrow="Projects"
        title="Backend systems, AI workflows, and polished web platforms."
        description="Project entries are kept in data files so the portfolio can grow without rewriting page structure."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Container>
  );
}

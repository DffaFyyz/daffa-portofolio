import { useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { cn } from "../../lib/utils";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectDetailModal } from "../projects/ProjectDetailModal";
import { SectionHeader } from "../ui/SectionHeader";

export function SelectedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative z-10 py-20 sm:py-28 lg:py-32">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Selected Projects"
            title="A focused collection of work and product experiments."
            description="A selection of projects that reflect my focus on product thinking, technical execution, and real-world workflows."
            align="center"
            className="mx-auto"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={cn(
                projects.length === 5 && index === 3 && "lg:col-start-1 lg:translate-x-[calc(50%+0.75rem)]",
                projects.length === 5 && index === 4 && "lg:col-start-2 lg:translate-x-[calc(50%+0.75rem)]",
              )}
            >
              <ProjectCard
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            </div>
          ))}
        </div>
      </section>
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

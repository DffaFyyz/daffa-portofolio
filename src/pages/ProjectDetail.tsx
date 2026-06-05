import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { Container } from "../layout/Container";
import { Badge } from "../components/ui/Badge";
import { GlassPanel } from "../components/ui/GlassPanel";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug) ?? projects[0];

  return (
    <Container className="relative z-10 pt-36 pb-24">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to projects
      </Link>
      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Badge>{project.status}</Badge>
          <h1 className="mt-6 text-4xl font-normal leading-tight text-text-primary sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">{project.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
        <GlassPanel elevated className="min-h-[380px] rounded-[28px] p-5">
          <div className="flex h-full min-h-[340px] flex-col justify-between rounded-2xl border border-white/10 bg-black/50 p-6">
            <div>
              <div className="mb-5 h-3 w-24 rounded-full bg-white/18" />
              <div className="space-y-3">
                <div className="h-3 w-11/12 rounded-full bg-white/12" />
                <div className="h-3 w-8/12 rounded-full bg-white/10" />
                <div className="h-3 w-10/12 rounded-full bg-white/8" />
              </div>
            </div>
            <div className="grid gap-3">
              {project.impact.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="text-sm text-text-secondary">{item}</span>
                  <ArrowUpRight className="h-4 w-4 text-text-muted" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>
      </div>
    </Container>
  );
}

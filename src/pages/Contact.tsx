import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "../data/personal";
import { Container } from "../layout/Container";
import { GlassPanel } from "../components/ui/GlassPanel";
import { SectionHeader } from "../components/ui/SectionHeader";

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: "GitHub", value: "github.com", href: personal.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com", href: personal.linkedin, icon: Linkedin },
];

export function Contact() {
  return (
    <Container className="relative z-10 pt-36 pb-24">
      <SectionHeader
        eyebrow="Contact"
        title="Open to focused technical conversations and opportunities."
        description="Use these placeholder links for now, then update the data file when final profiles are ready."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <GlassPanel key={link.label} className="rounded-2xl p-5">
              <a href={link.href} className="block" target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.06]">
                  <Icon className="h-5 w-5 text-text-primary" aria-hidden="true" />
                </span>
                <p className="mt-5 text-sm uppercase tracking-[0.14em] text-text-muted">{link.label}</p>
                <p className="mt-2 text-lg text-text-primary">{link.value}</p>
              </a>
            </GlassPanel>
          );
        })}
      </div>
    </Container>
  );
}

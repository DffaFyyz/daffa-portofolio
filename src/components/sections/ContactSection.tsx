import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "../../data/personal";
import { GlassPanel } from "../ui/GlassPanel";

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: "LinkedIn", value: "LinkedIn", href: personal.linkedin, icon: Linkedin },
  { label: "GitHub", value: "GitHub", href: personal.github, icon: Github },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 pb-24 pt-20 sm:pb-28 sm:pt-28">
      <GlassPanel className="mx-auto max-w-5xl rounded-2xl p-5 text-center sm:p-12 lg:p-14">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted">Contact</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-normal leading-tight text-text-primary sm:text-6xl">
          Curious about what we can create together?
        </h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex min-w-0 items-center justify-between gap-3 rounded-xl border border-white/12 bg-white/[0.025] px-4 py-4 text-left transition hover:bg-white/[0.055]"
              >
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.14em] text-text-muted">
                    {link.label}
                  </span>
                  <span className="mt-1 block break-words text-sm text-text-primary">{link.value}</span>
                </span>
                <Icon className="h-5 w-5 text-text-secondary transition group-hover:text-text-primary" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </GlassPanel>
    </section>
  );
}

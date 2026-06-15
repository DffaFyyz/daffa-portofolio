import profileImage from "../../assets/profile.png";
import { personal } from "../../data/personal";
import { GlassPanel } from "../ui/GlassPanel";
import { SectionHeader } from "../ui/SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-20 sm:py-28">
      <GlassPanel className="mx-auto max-w-5xl rounded-2xl p-5 sm:p-10 lg:p-12">
        <div className="grid items-center gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="min-w-0">
            <SectionHeader
              eyebrow="About Me"
              title="Building with curiosity, clarity, and care."
            />
            <p className="mt-7 text-base leading-8 text-text-secondary sm:mt-8 sm:text-lg sm:leading-9">
              {personal.about}
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-white/12 bg-black/78 font-mono shadow-[0_18px_42px_rgba(0,0,0,0.54),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-2 text-[11px] text-text-muted">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="rounded border border-white/12 bg-black/70 px-2 py-1 text-text-secondary">
                    0:daffa
                  </span>
                  <span className="hidden truncate sm:inline">portfolio.local</span>
                </div>
                <span className="shrink-0">~/workspace</span>
              </div>
              <div className="space-y-2 overflow-x-auto px-4 py-4 text-xs leading-6 sm:text-sm">
                <p className="text-text-secondary">
                  <span className="text-text-muted">[daffa@portfolio ~]</span>{" "}
                  whoami
                </p>
                <p className="text-text-primary">Computer Science student</p>
                <p className="text-text-secondary">
                  <span className="text-text-muted">[daffa@portfolio ~]</span>{" "}
                  focus --current
                </p>
                <p className="text-text-primary">full-stack development, product, experience</p>
              </div>
              <div className="flex flex-col gap-1 border-t border-white/10 bg-white/[0.035] px-4 py-2 text-[11px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
                <span>[0] shell</span>
                <span>binus / machine-learning / systems</span>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[18rem] sm:max-w-sm lg:mr-0">
            <div
              className="group/profile relative aspect-[0.82] overflow-hidden rounded-2xl border border-white/12 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-500 hover:border-white/22 hover:shadow-[0_0_42px_rgba(255,255,255,0.13),0_28px_76px_rgba(0,0,0,0.68),inset_0_1px_0_rgba(255,255,255,0.16)] sm:aspect-[0.78]"
              tabIndex={0}
              aria-label="Profile photo of Daffa Fayyaz Erzeltra"
            >
              <img
                src={profileImage}
                alt="Portrait of Daffa Fayyaz Erzeltra"
                className="h-full w-full object-cover object-[50%_32%] transition duration-700 ease-out group-hover/profile:scale-[1.025] group-focus-visible/profile:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.22)_54%,rgba(0,0,0,0.82)),radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.10),transparent_38%)] transition duration-700 group-hover/profile:bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.12)_54%,rgba(0,0,0,0.76)),radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.16),transparent_40%)] group-focus-visible/profile:bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.12)_54%,rgba(0,0,0,0.76)),radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.16),transparent_40%)]" />
              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover/profile:opacity-100 group-focus-visible/profile:opacity-100">
                <div className="absolute inset-x-8 top-10 h-32 rounded-full bg-white/12 blur-3xl" />
              </div>
              <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-80px_80px_rgba(0,0,0,0.58)] transition duration-700 group-hover/profile:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-80px_80px_rgba(0,0,0,0.48)] group-focus-visible/profile:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-80px_80px_rgba(0,0,0,0.48)]" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-black/62 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <p className="text-xs uppercase tracking-[0.16em] text-text-muted">Profile</p>
                <p className="mt-1 text-sm text-text-primary">Daffa Fayyaz Erzeltra</p>
              </div>
            </div>
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}

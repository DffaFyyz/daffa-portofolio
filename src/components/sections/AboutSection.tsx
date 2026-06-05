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
                <span>binus / apple-academy-prep</span>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[18rem] sm:max-w-sm lg:mr-0">
            <div className="relative aspect-[0.82] overflow-hidden rounded-2xl border border-white/12 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,255,255,0.12)] sm:aspect-[0.78]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_18%,rgba(255,255,255,0.18),transparent_34%),linear-gradient(150deg,rgba(255,255,255,0.08),rgba(255,255,255,0.018)_42%,rgba(0,0,0,0.92))]" />
              <div className="absolute left-1/2 top-16 h-28 w-28 -translate-x-1/2 rounded-full border border-white/12 bg-[radial-gradient(circle_at_36%_28%,rgba(255,255,255,0.24),rgba(255,255,255,0.07)_46%,rgba(0,0,0,0.22)_78%)]" />
              <div className="absolute left-1/2 top-40 h-64 w-72 -translate-x-1/2 rounded-t-[46%] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.045)_36%,rgba(0,0,0,0.72)_82%)]" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/86 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-black/62 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <p className="text-xs uppercase tracking-[0.16em] text-text-muted">Profile</p>
                <p className="mt-1 text-sm text-text-primary">Photo placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}

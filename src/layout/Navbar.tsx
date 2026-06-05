import { Moon, Sparkle } from "lucide-react";
import { personal } from "../data/personal";
import { cn } from "../lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 sm:top-5 sm:px-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-14 max-w-5xl items-center gap-2 rounded-2xl border border-white/12 bg-black/82 px-3 shadow-[0_18px_46px_rgba(0,0,0,0.70),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:min-h-16 sm:gap-4 sm:px-5"
      >
        <a href="#top" className="flex min-w-0 shrink-0 items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/12 bg-black/65 text-xs font-semibold text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] sm:h-9 sm:w-9 sm:text-sm">
            {personal.initials}
          </span>
          <span className="hidden truncate text-sm font-semibold text-text-primary md:block">
            {personal.name}
          </span>
        </a>
        <div className="no-scrollbar flex min-w-0 flex-1 items-center justify-start gap-1 overflow-x-auto sm:justify-end sm:gap-3 md:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 rounded-lg px-2 py-2 text-xs text-text-secondary transition hover:bg-black/60 hover:text-text-primary sm:px-2.5 sm:text-sm",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          className="relative hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-white/12 bg-black/65 text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] transition hover:bg-black/80 sm:grid"
          aria-label="Monochrome theme active"
          type="button"
        >
          <Moon className="h-4 w-4" aria-hidden="true" />
          <Sparkle className="absolute h-2 w-2 translate-x-2 -translate-y-2 text-white/70" aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 sm:top-5 sm:px-4">
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex min-h-14 max-w-5xl items-center gap-2 rounded-2xl border border-white/12 bg-black/82 px-3 shadow-[0_18px_46px_rgba(0,0,0,0.70),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:min-h-16 sm:gap-4 sm:px-5"
      >
        <a
          href="#top"
          className="flex min-w-0 shrink-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/12 bg-black/65 text-xs font-semibold text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] sm:h-9 sm:w-9 sm:text-sm">
            {personal.initials}
          </span>
          <span className="hidden truncate text-sm font-semibold text-text-primary md:block">
            {personal.name}
          </span>
        </a>
        <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 md:flex md:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 rounded-lg px-2.5 py-2 text-sm text-text-secondary transition hover:bg-black/60 hover:text-text-primary",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/12 bg-black/65 text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] transition hover:bg-black/80 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? (
            <X className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4" aria-hidden="true" />
          )}
        </button>

        <div
          id="mobile-navigation"
          className={cn(
            "absolute inset-x-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-white/12 bg-black/88 p-2 shadow-[0_22px_54px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md transition md:hidden",
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-sm text-text-secondary transition hover:bg-white/[0.045] hover:text-text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowDownToLine } from "lucide-react";
import { personal } from "../../data/personal";
import { Button } from "../ui/Button";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const easeOut = [0.22, 1, 0.36, 1] as const;
  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: easeOut },
      };

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-4 pb-28 pt-28 sm:px-6"
    >
      <motion.div className="mx-auto w-full max-w-6xl text-center" {...motionProps}>
        <h1 className="mx-auto max-w-[11ch] font-heading text-[clamp(3.35rem,18vw,12.5rem)] font-light leading-[0.88] tracking-normal text-text-primary sm:max-w-none sm:text-[clamp(4.35rem,13vw,12.5rem)]">
          <span className="text-gradient-soft">{personal.name}</span>
          <span className="terminal-cursor" aria-hidden="true">|</span>
        </h1>
        <div className="mx-auto mt-10 flex w-full max-w-xs flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
          <Button href="#projects" variant="primary" className="w-full sm:min-w-44 sm:w-auto">
            View Projects
          </Button>
          <Button
            variant="secondary"
            icon={<ArrowDownToLine className="h-4 w-4" aria-hidden="true" />}
            className="w-full sm:min-w-44 sm:w-auto"
            onClick={() => undefined}
          >
            Download Resume
          </Button>
        </div>
      </motion.div>

      <a
        href="#about"
        className="group absolute bottom-10 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-xl border border-white/12 bg-black/55 text-text-primary shadow-[0_0_28px_rgba(255,255,255,0.16),0_16px_36px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.10)] transition hover:border-white/22 hover:bg-black/70"
        aria-label="Scroll to about section"
      >
        <ArrowDown
          className="h-5 w-5 transition group-hover:translate-y-0.5"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}

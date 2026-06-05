import { useEffect, useRef } from "react";

export function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUseCustomCursor || reduceMotion) {
      return;
    }

    const dot = dotRef.current;
    if (!dot) {
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rafId = 0;

    const update = () => {
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      rafId = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      dot.dataset.visible = "true";

      if (!rafId) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    const handlePointerLeave = () => {
      dot.dataset.visible = "false";
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" data-visible="false" />;
}

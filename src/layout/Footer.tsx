import { personal } from "../data/personal";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <Container className="flex flex-col gap-3 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {personal.name}</p>
        <p>Built with React, TypeScript, Tailwind CSS, and quiet glass details.</p>
      </Container>
    </footer>
  );
}

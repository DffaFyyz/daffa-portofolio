import { Container } from "../layout/Container";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ResumeSection } from "../components/sections/ResumeSection";
import { SelectedProjects } from "../components/sections/SelectedProjects";
import { TechStackStrip } from "../components/sections/TechStackStrip";

export function Home() {
  return (
    <>
      <HeroSection />
      <Container>
        <AboutSection />
        <SelectedProjects />
        <TechStackStrip />
        <ExperienceSection />
        <ResumeSection />
        <ContactSection />
      </Container>
    </>
  );
}

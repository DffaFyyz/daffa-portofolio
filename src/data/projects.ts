export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  impact: string[];
  status: string;
};

export const projects: Project[] = [
  {
    slug: "eduflow-api",
    title: "EduFlow API",
    summary:
      "Scalable backend system for an education platform with role-based access and real-time notifications.",
    description:
      "A backend-focused education platform foundation designed around clean service boundaries, predictable APIs, and maintainable access control.",
    tags: ["NestJS", "PostgreSQL", "Redis", "Docker"],
    impact: ["Role-based access control", "Real-time notification flow", "API-first architecture"],
    status: "Selected Work",
  },
  {
    slug: "ai-research-assistant",
    title: "AI Research Assistant",
    summary:
      "RAG-based assistant for academic research using retrieval, summarization, and source grounding.",
    description:
      "An AI workflow that helps users search, summarize, and reason over research material while keeping generated answers tied to source context.",
    tags: ["Python", "LangChain", "Pinecone", "OpenAI"],
    impact: ["Retrieval-augmented generation", "Source-grounded responses", "Research workflow support"],
    status: "AI System",
  },
  {
    slug: "himti-binus-website",
    title: "HIMTI BINUS Website",
    summary:
      "Official website for HIMTI BINUS with modern design, CMS integration, and performance optimization.",
    description:
      "A public-facing organization website focused on clean content structure, responsive delivery, and sustainable maintenance for the web team.",
    tags: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
    impact: ["CMS-backed publishing", "Responsive UI system", "Performance-minded frontend"],
    status: "Web Platform",
  },
];

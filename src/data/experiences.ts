import codeavourCertificate from "../assets/experiences/codeavour-certif.png";
import himtiPhoto from "../assets/experiences/himti2.jpeg";

export type ExperienceImage = {
   src?: string;
   alt: string;
   label: string;
   fit?: "cover" | "contain";
};

export type Experience = {
   period: string;
   role: string;
   organization: string;
   location: string;
   description: string;
   highlights: string[];
   tags: string[];
   images: ExperienceImage[];
};

export const experiences: Experience[] = [
   {
      period: "May 2026",
      role: "Volunteer",
      organization: "Codeavour 7.0 International",
      location: "BINUS University Alam Sutera, Indonesia",
      description:
         "Volunteered in the Tracks Competition Support Division for Codeavour 7.0 International, serving as the floor PIC for Track 1 and helping keep the competition flow organized for participants, organizers, and guests.",
      highlights: [
         "Managed Track 1 competition flow as a floor PIC during the event.",
         "Coordinated with participants, volunteers, and organizers across competition activities.",
         "Supported a multi-track competition format with three tracks running during the event.",
      ],
      tags: ["Track 1 PIC", "Competition Support", "Event Ops"],
      images: [
         {
            src: codeavourCertificate,
            label: "Certificate",
            alt: "Codeavour 7.0 International certificate of recognition for Daffa Fayyaz Erzeltra",
            fit: "contain",
         },
         {
            label: "Event Operations",
            alt: "Placeholder for Codeavour event operations",
         },
         {
            label: "Young Learners",
            alt: "Placeholder for Codeavour participant activity",
         },
      ],
   },
   {
      period: "Mar 2025 - Feb 2026",
      role: "Web Development Manager",
      organization: "HIMTI BINUS University",
      location: "Hybrid",
      description:
         "Implemented CI/CD workflows across existing HIMTI web services and new websites launched during the period, while coordinating Website Division activists and building internal tools for the organization.",
      highlights: [
         "Built CI/CD coverage for existing services and newly created websites.",
         "Handled and supported HIMTI BINUS Website Division activists.",
         "Built internal tools such as a URL shortener, registration form maker, and email blaster.",
      ],
      tags: ["CI/CD", "Web Division", "Internal Tools", "Leadership"],
      images: [
         {
            src: himtiPhoto,
            label: "HIMTI 2026/2027 Board",
            alt: "HIMTI BINUS University 2026/2027 board activity",
         },
         {
            label: "Activists",
            alt: "Placeholder for HIMTI Website Division activists",
         },
         {
            label: "Events",
            alt: "Placeholder for HIMTI event activity",
         },
         {
            label: "CI/CD",
            alt: "Placeholder for HIMTI web service deployment work",
         },
      ],
   },
   {
      period: "Jan 2024 - Mar 2025",
      role: "Back End Developer",
      organization: "PT Satrio Gemilang Perkasa",
      location: "Hybrid · Contract",
      description:
         "Developed backend infrastructure for a Loan Origination System, focusing on reliable APIs, secure data handling, and financial transaction workflows.",
      highlights: [
         "Architected and implemented RESTful APIs with Express.js and PostgreSQL.",
         "Designed backend flows for loan processing and user requests.",
         "Focused on reliability, data integrity, and maintainable service structure.",
      ],
      tags: ["Express.js", "PostgreSQL", "REST API"],
      images: [
         {
            label: "Loan System",
            alt: "Placeholder for Loan Origination System backend work",
         },
         {
            label: "API Layer",
            alt: "Placeholder for backend API development",
         },
      ],
   },
   {
      period: "Aug 2023 - Oct 2023",
      role: "Web Developer Intern",
      organization: "PT PLN (Persero)",
      location: "PLN ULTG Tangerang Selatan · On-site",
      description:
         "Digitized internal processes by developing a Visitor Management System and deploying a company profile website with Laravel.",
      highlights: [
         "Built a visitor management system for facility access tracking.",
         "Developed and deployed a Laravel-based company profile website.",
         "Worked on internal process digitization for PLN ULTG Tangerang Selatan.",
      ],
      tags: ["Laravel", "Company Profile Website", "Visitor System"],
      images: [
         {
            label: "PLN ULTG",
            alt: "Placeholder for PLN internship activity",
         },
         {
            label: "Visitor System",
            alt: "Placeholder for visitor management system work",
         },
      ],
   },
];

# AGENTS.md

Guidance for coding agents working on this portfolio repository.

## Project Goal

This is a personal landing portfolio for Daffa Fayyaz Erzeltra. The site should support:

- Personal branding and professional opportunities.
- A premium, black-dominant, monochrome portfolio presentation.
- A one-page landing experience for the current phase.

The portfolio is not meant to feel like a SaaS dashboard or route-heavy web app. Keep the homepage cinematic, minimal, calm, and portfolio-focused.

## Tech Stack

- React.js
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM is installed, but current phase uses a one-page landing page with anchor navigation.
- Framer Motion for subtle animation only.
- Lucide React for icons.
- OGL for the animated monochrome wave background.

## Visual Direction

Primary reference:

- `https://portfolite.framer.website/#hero`

Local references:

- `references/reference-from-portfolite.png`
- `references/reference.png`
- `references/wave.png`

Design principles:

- Black dominant, full black page background.
- Monochrome glassmorphism.
- Premium monochrome feel.
- Minimal, calm, elegant, and futuristic.
- Large clean typography.
- Floating glass navbar.
- Visible but subtle black/gray silky wave background.
- Glass panels with soft borders, blur, dark shadow, and subtle inner highlight.
- Avoid colorful SaaS/dashboard styling.
- Avoid neon/cyberpunk treatment.
- Avoid blue, purple, teal, green, or other strong accent colors unless explicitly requested.

## Current Navigation Model

The current site should behave as a one-page landing page.

Navbar links should use anchors:

- About -> `#about`
- Projects -> `#projects`
- Experience -> `#experience`
- Resume -> `#resume`
- Contact -> `#contact`

Do not reintroduce separate page routing for these sections unless the user explicitly asks.

## Profile Facts From Reference CV

Source: `references/CV_Daffa_Fayyaz_Erzeltra.pdf`

Daffa Fayyaz Erzeltra is a Computer Science student at BINUS University, expected graduation 2028. The CV positions him as a backend-oriented developer with experience building scalable web applications, managing databases, working with Express.js and PostgreSQL, handling server administration, and optimizing backend performance.

Education:

- Bina Nusantara University, Bachelor of Computer Science, expected graduation 2028.
- Currently noted in the CV as 4th semester.
- Relevant coursework: Software Engineering, Computer Vision, NLP, Machine Learning.
- SMK Bina Informatika, Computer Software Engineering, graduated 2024.

Core interests and positioning:

- Backend development.
- Full-stack development.
- System architecture.
- CLI tools.
- Linux distributions, especially Arch Linux.
- Database-backed applications.
- Product and user experience.

Skills from the CV:

- Tools and platforms: Linux, Git/GitHub, Docker, PostgreSQL, MySQL, Nginx, CI/CD pipelines.
- Programming and frameworks: Python, Java, Express.js, TypeScript, C, React.js, Laravel.
- Organizational skills: Agile/Scrum, problem solving, teamwork.
- Languages: Indonesian native, English intermediate.

Contact details:

- Website email: `daffafay1617@gmail.com`
- Website GitHub: `https://github.com/DffaFyyz`
- Website LinkedIn: `https://www.linkedin.com/in/daffa-fayyaz-erzeltra-7ab803322/`
- Do not publish phone number on the website unless the user explicitly asks.

## Experience Facts And Revisions

### HIMTI BINUS University

Current corrected context from the user:

- Daffa is not merely a newly appointed Web Development Manager.
- For this experience, describe that he implemented CI/CD for all existing services and for new services/websites created during his period.
- Also mention that he handled HIMTI BINUS Website Division Activists.

Suggested portfolio wording:

Role: Web Development Manager  
Organization: HIMTI BINUS University  
Period: Mar 2025 - Feb 2026

Description:

Implemented CI/CD workflows across existing HIMTI web services and new websites launched during the period, while coordinating and supporting Website Division activists to improve delivery quality and maintainability.

Additional CV facts that can be included if needed:

- Served as Web Development Committee for HIMTI HISHOT 2025.
- Collaborated on the Event Division Committee for HIMTI PKM in October 2025.
- Activist of HIMTI 2025/2026 Web Development, Commission 3.

### Codeavour 7.0 International

Source: `references/Codeavour Letter of Rec and Certif.pdf`

The PDF contains two scanned pages:

- Certificate of Recognition.
- Letter of Recommendation from Future Skills Education Foundation.

Confirmed facts:

- Daffa volunteered at Codeavour 7.0 International.
- Event wording in the letter: Codeavour 7.0 International Showdown.
- Event dates: 16-17 May 2026.
- Certificate date: 17 May 2026.
- Location from the user: BINUS University Alam Sutera, Indonesia.
- Letter wording references BINUS University, Jakarta.
- Certificate wording references Jakarta, Indonesia.
- User correction: Daffa was in the Tracks Competition Support Division.
- User correction: the competition had three tracks, and Daffa managed Track 1 as a floor PIC.
- Work included supporting smooth event operations and competition flow.
- Recommendation letter mentions support across participant registration, technical setup, competition tasks, crowd management, proactive issue handling, communication with organizers/participants/guests, and coordination with other volunteers.
- It also mentions guiding young learners through AI, coding, and robotics contexts.

Suggested portfolio wording:

Role: Volunteer  
Organization: Codeavour 7.0 International, Future Skills Education Foundation  
Period: May 2026

Description:

Volunteered in the Tracks Competition Support Division for Codeavour 7.0 International at BINUS University Alam Sutera, serving as floor PIC for Track 1 and helping keep the multi-track competition flow organized for participants, organizers, and guests.

### PT Satrio Gemilang Perkasa

Source: CV.

Role: Back End Developer (Contract)  
Period: Jan 2024 - Mar 2025  
Location/work mode: Hybrid

Summary:

Developed backend infrastructure for a Loan Origination System, implemented RESTful APIs with Express.js and PostgreSQL, and focused on secure data handling, loan processing, and reliable user request flows.

### PT PLN (Persero)

Source: CV.

Role: Web Developer Intern  
Period: Aug 2023 - Oct 2023  
Location/work mode: On-site, PLN ULTG Tangerang Selatan

Summary:

Digitized internal processes by designing and developing a Visitor Management System for facility access tracking, and built/deployed a company profile website using Laravel.

## Experience Section Planning Notes

When the user asks to update the Experience section, prefer a compact landing-page timeline. Suggested ordering:

1. HIMTI BINUS University, Web Development Manager, Mar 2025 - Feb 2026.
2. Codeavour 7.0 International, Volunteer, May 2026.
3. PT Satrio Gemilang Perkasa, Back End Developer (Contract), Jan 2024 - Mar 2025.
4. PT PLN (Persero), Web Developer Intern, Aug 2023 - Oct 2023.
5. BINUS University, Computer Science Student, 2024 - 2028 or 2024 - Present, only if education should stay in timeline.

Keep descriptions short enough for the homepage. If adding more detail, use expandable/modal behavior only after the user asks; do not add new features preemptively.

### Experience Images

The Experience section should support more than one image per experience, but the homepage should not become a full gallery.

Preferred data shape:

```ts
images: [
  { src: himti1, alt: "HIMTI BINUS Web Development activity" },
  { src: himti2, alt: "HIMTI BINUS event activity" },
  { src: himti3, alt: "HIMTI BINUS team activity" },
]
```

Image behavior:

- The first image is the primary visual for the experience card.
- Additional images may be shown as a small thumbnail strip on desktop.
- On mobile, keep the layout compact; show the primary image and avoid overcrowding.
- If an experience has only one image, the layout should still look intentional.
- Do not add modal/gallery behavior unless the user explicitly asks.

Expected asset location when real photos are added:

- `src/assets/experiences/himti1.jpg`
- `src/assets/experiences/himti2.jpg`
- `src/assets/experiences/himti3.jpg`
- `src/assets/experiences/codeavour1.jpg`
- `src/assets/experiences/pln1.jpg`
- `src/assets/experiences/sgp1.jpg`

For now, use intentional monochrome placeholders instead of requiring real photos. Placeholders should match the black glassmorphism style and should not look like broken skeleton loaders.

## Content Editing Rules

- Keep editable portfolio content in `src/data/*`.
- Prefer updating `src/data/experiences.ts` for experience content.
- Avoid hardcoding personal content directly into section components unless it is structural UI copy.
- Preserve the one-page landing structure in `src/pages/Home.tsx`.
- Keep all wording professional, concise, and grounded in the source documents.
- Do not overstate claims beyond the CV, certificate, recommendation letter, or user-provided revisions.

## Implementation Preferences

- Use existing components and Tailwind patterns before adding new abstractions.
- Keep the black monochrome style consistent.
- Keep animations subtle and respectful of `prefers-reduced-motion`.
- Run `npm run build` after code changes.
- For markdown/document-only changes, a build is not required unless code also changes.

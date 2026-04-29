import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  ProjectsSection,
  SectionTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  TechTag,
  ProjectLinks,
  ProjectLink,
} from "./Projects.styles";

interface Project {
  title: string;
  description: string;
  tech: string[];
  demoLink?: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Truyen EPUB Audio",
    description:
      "A full-stack app for reading EPUB novels with synchronized audio playback. Next.js frontend on Vercel, Python backend on Railway, and Supabase (PostgreSQL) for database and auth. Wrapped with Capacitor to ship a native Android build from the same web codebase.",
    tech: ["Next.js", "TypeScript", "Python", "Supabase", "Capacitor", "Railway", "Vercel"],
    demoLink: "https://truyen-epub-audio.vercel.app/",
    githubLink: "https://github.com/haobui14/truyen-epub-audio",
  },
  {
    title: "Xianxia Cultivation RPG",
    description:
      "An immersive AI-powered cultivation RPG built with Next.js. Features dynamic GPT-driven storytelling, dual-path cultivation (Qi & Body), turn-based combat, sect membership, and region exploration. PWA support and Supabase persistence.",
    tech: ["Next.js", "TypeScript", "GPT", "Supabase", "Tailwind", "PWA"],
    demoLink: "https://xianxia-rpg.netlify.app",
    githubLink: "https://github.com/haobui14/xianxia-rpg",
  },
  {
    title: "Personal Spending Tracker",
    description:
      "A comprehensive personal finance app. Features expense tracking, budget management, chart-driven analysis, and AI-powered insights via Gemini. Firebase auth and real-time sync.",
    tech: ["React", "TypeScript", "Firebase", "Material UI", "Chart.js", "Gemini AI"],
    demoLink: "https://trackspending.netlify.app",
    githubLink: "https://github.com/haobui14/spending-tracker",
  },
  {
    title: "Luxury Hotel Management",
    description:
      "Full-stack hotel booking platform. Sanity CMS for room management, NextAuth for secure auth, real-time availability, and Stripe payments. Admin dashboard with analytics.",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "NextAuth", "Stripe", "Tailwind"],
    demoLink: "https://luxury-hotel-nextjs.netlify.app",
    githubLink: "https://github.com/haobui14/hotel-management",
  },
  {
    title: "CRWN Clothing E-commerce",
    description:
      "Modern e-commerce platform with Firebase auth, Redux state, Stripe payments, and PWA capabilities. Responsive design with styled-components and SASS.",
    tech: ["React", "TypeScript", "Redux", "Firebase", "Stripe", "Styled-Components"],
    demoLink: "https://clothing-crwn-1401.netlify.app/",
    githubLink: "https://github.com/haobui14/crwn-clothing-new.git",
  },
  {
    title: "Pathfinding Visualizer",
    description:
      "Interactive visualizer for pathfinding algorithms (A*, Dijkstra, BFS/DFS) and maze generation. Customizable grids let users compare algorithm performance live.",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    demoLink: "https://pathfinding-visualizer-maze.netlify.app",
    githubLink:
      "https://github.com/haobui14/pathfinding-algorithm-visualizer-maze.git",
  },
  {
    title: "NASA Space Missions Dashboard",
    description:
      "Full-stack space mission management with a sci-fi UI built on the Arwes framework. Mission scheduling, history tracking, and real-time status updates. Microservices architecture, containerized with Docker.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Arwes"],
    githubLink: "https://github.com/haobui14/nasa-project.git",
  },
];

const Projects: React.FC = React.memo(() => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.tech.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              {project.demoLink && (
                <ProjectLink
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                >
                  <FiExternalLink aria-hidden /> Demo
                </ProjectLink>
              )}
              <ProjectLink
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
              >
                <FiGithub aria-hidden /> Code
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
});

Projects.displayName = "Projects";

export default Projects;

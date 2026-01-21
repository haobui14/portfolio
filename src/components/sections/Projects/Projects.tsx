import React from "react";
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
    title: "Xianxia Cultivation RPG",
    description:
      "An immersive AI-powered Xianxia cultivation RPG game built with Next.js and TypeScript. Features include AI-driven dynamic storytelling using Claude/GPT, comprehensive cultivation system with dual paths (Qi & Body), skill progression with experience and leveling, sect membership system, turn-based combat with strategic elements, and region-based world exploration. Includes PWA support for offline play and Supabase for real-time data persistence.",
    tech: [
      "Next.js",
      "TypeScript",
      "Claude AI",
      "Supabase",
      "Tailwind CSS",
      "PWA",
    ],
    demoLink: "https://xianxia-rpg.netlify.app",
    githubLink: "https://github.com/haobui14/xianxia-rpg",
  },
  {
    title: "Personal Spending Tracker",
    description:
      "A comprehensive personal finance management application built with React and TypeScript. Features include expense tracking, budget management, data visualization with charts, category-based spending analysis, and AI-powered insights using Gemini AI. Includes secure user authentication with Firebase and real-time data synchronization.",
    tech: [
      "React",
      "TypeScript",
      "Firebase",
      "Material UI",
      "Chart.js",
      "Gemini AI",
    ],
    demoLink: "https://trackspending.netlify.app",
    githubLink: "https://github.com/haobui14/spending-tracker",
  },
  {
    title: "Luxury Hotel Management",
    description:
      "A full-stack hotel booking platform built with Next.js and TypeScript. Features include room management with Sanity CMS, secure authentication with NextAuth.js, real-time availability tracking, and Stripe payment integration. Includes an admin dashboard with analytics and booking management.",
    tech: [
      "Next.js",
      "TypeScript",
      "Sanity CMS",
      "NextAuth.js",
      "Stripe",
      "Tailwind CSS",
    ],
    demoLink: "https://luxury-hotel-nextjs.netlify.app",
    githubLink: "https://github.com/haobui14/hotel-management",
  },
  {
    title: "CRWN Clothing E-commerce",
    description:
      "A modern e-commerce platform built with React and TypeScript. Features include user authentication with Firebase, Redux state management, Stripe payment integration, and PWA capabilities. Includes a responsive design with styled-components and SASS.",
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Firebase",
      "Stripe",
      "Styled-Components",
    ],
    demoLink: "https://clothing-crwn-1401.netlify.app/",
    githubLink: "https://github.com/haobui14/crwn-clothing-new.git",
  },
  {
    title: "Pathfinding Algorithm Visualizer",
    description:
      "An interactive visualizer for pathfinding algorithms and maze generation, built with React, TypeScript, and Vite. Users can visualize algorithms like A*, Dijkstra, and BFS/DFS on customizable grids, and generate mazes to test algorithm performance.",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    demoLink: "https://pathfinding-visualizer-maze.netlify.app",
    githubLink:
      "https://github.com/haobui14/pathfinding-algorithm-visualizer-maze.git",
  },
  {
    title: "NASA Space Missions Dashboard",
    description:
      "A full-stack space mission management system featuring a sci-fi themed UI using Arwes framework. Includes mission launch scheduling, historical mission tracking, and real-time mission status updates. Built with a microservices architecture and containerized with Docker.",
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
                >
                  <span>Live Demo</span> →
                </ProjectLink>
              )}
              <ProjectLink
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span> →
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

import React from 'react';
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
} from './Projects.styles';

const projects = [
  {
    title: 'NASA Space Missions Dashboard',
    description:
      'A full-stack space mission management system featuring a sci-fi themed UI using Arwes framework. Includes mission launch scheduling, historical mission tracking, and real-time mission status updates. Built with a microservices architecture and containerized with Docker.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Arwes'],
    githubLink: 'https://github.com/haobui14/nasa-project.git',
  },
  {
    title: 'CRWN Clothing E-commerce',
    description:
      'A modern e-commerce platform built with React and TypeScript. Features include user authentication with Firebase, Redux state management, Stripe payment integration, and PWA capabilities. Includes a responsive design with styled-components and SASS.',
    tech: ['React', 'TypeScript', 'Redux', 'Firebase', 'Stripe', 'Styled-Components'],
    demoLink: 'https://clothing-crwn-1401.netlify.app/',
    githubLink: 'https://github.com/haobui14/crwn-clothing-new.git',
  },
  {
    title: 'Hotel Management System',
    description:
      'A full-stack hotel booking platform built with Next.js and TypeScript. Features include room management with Sanity CMS, secure authentication with NextAuth.js, real-time availability tracking, and Stripe payment integration. Includes an admin dashboard with analytics and booking management.',
    tech: ['Next.js', 'TypeScript', 'Sanity CMS', 'NextAuth.js', 'Stripe', 'Tailwind CSS'],
    demoLink: 'https://main--hotel-management-next.netlify.app',
    githubLink: 'https://github.com/haobui14/hotel-management',
  },
  {
    title: 'Pathfinding Algorithm Visualizer',
    description:
      'An interactive visualizer for pathfinding algorithms and maze generation, built with React, TypeScript, and Vite. Users can visualize algorithms like A*, Dijkstra, and BFS/DFS on customizable grids, and generate mazes to test algorithm performance.',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    demoLink: 'https://pathfinding-visualizer-maze.netlify.app',
    githubLink: 'https://github.com/haobui14/pathfinding-algorithm-visualizer-maze.git',
  },
];

const Projects: React.FC = () => {
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
              <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <span>Live Demo</span> →
              </ProjectLink>
              <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <span>GitHub</span> →
              </ProjectLink>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 
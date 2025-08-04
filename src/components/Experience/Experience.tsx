import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.bgSecondary}95;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => `radial-gradient(circle at 20% 80%, ${theme.colors.primary}12 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, ${theme.colors.accent}12 0%, transparent 50%)`};
    pointer-events: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.gradients.primary};
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ isLeft?: boolean }>`
  display: flex;
  justify-content: ${({ isLeft }) => isLeft ? 'flex-end' : 'flex-start'};
  padding: ${({ theme }) => theme.spacing.md} 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

const TimelineContent = styled.div<{ isLeft?: boolean }>`
  background: ${({ theme }) => theme.colors.bgCard};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 45%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(100% - 50px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    ${({ isLeft, theme }) => isLeft 
      ? `
        right: 100%;
        border-right-color: ${theme.colors.bgCard};
      `
      : `
        left: 100%;
        border-left-color: ${theme.colors.bgCard};
      `
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      right: 100%;
      left: auto;
      border-right-color: ${({ theme }) => theme.colors.bgCard};
      border-left-color: transparent;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid ${({ theme }) => theme.colors.bgPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 20px;
  }
`;

const JobTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Period = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: block;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.accent}33;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const experienceData = [
  {
    title: "Software Engineer (Contract)",
    company: "AM Specialty Insurance Group",
    period: "Mar 2025 - Present",
    description: "Build full-stack solutions for claims management and bordereaux processing using React.js, Next.js, Node.js, MongoDB, and Python. Implement Docker and CI/CD for efficient deployments. Participate in Agile sprints to create secure, scalable systems and enhance software architecture.",
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "Python", "Docker", "CI/CD"]
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "Jan 2024 - Feb 2025",
    description: "Developed custom web applications for small businesses utilizing React and Node.js. Implemented secure, cloud-native solutions on AWS for application deployment while actively seeking new Software Engineer opportunities.",
    tech: ["React", "Node.js", "AWS", "Cloud-native solutions"]
  },
  {
    title: "Associate Consultant",
    company: "Sogeti USA",
    period: "Jul 2022 - Jan 2024",
    description: "Develop and enhance modern UIs with Next.js, React.js, and Svelte.js. Improve app performance by troubleshooting technical issues. Collaborate in Agile delivery and participate in cross-team code reviews to streamline UI development processes.",
    tech: ["Next.js", "React.js", "Svelte.js", "Agile", "UI/UX"]
  },
  {
    title: "Full Stack Developer (Consultant)",
    company: "Ashley Furniture",
    period: "Jan 2023 - Dec 2023",
    description: "Created e-commerce features with Svelte.js and SFCC for Ashley Furniture. Enhanced project delivery timelines and streamlined development processes. Collaborated with team members to ensure timely project completion and optimize development efficiency.",
    tech: ["Svelte.js", "SFCC", "E-commerce", "Project Management"]
  },
  {
    title: "Backend Cloud Consultant",
    company: "EmployBridge",
    period: "Sep 2022 - Dec 2022",
    description: "Developed AWS Proof of Concept and React UI dashboard. Implemented Kafka streams and backend services with 95% test coverage. Conducted backend cloud consulting and collaborated with team to enhance system performance.",
    tech: ["AWS", "React", "Kafka", "Backend Services", "Cloud Consulting"]
  }
];

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
      <SectionTitle>Experience</SectionTitle>
      <TimelineContainer>
        {experienceData.map((exp, index) => (
          <TimelineItem
            key={index}
            isLeft={index % 2 === 0}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <TimelineContent isLeft={index % 2 === 0}>
              <JobTitle>{exp.title}</JobTitle>
              <Company>{exp.company}</Company>
              <Period>{exp.period}</Period>
              <Description>{exp.description}</Description>
              <TechStack>
                {exp.tech.map(tech => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
            </TimelineContent>
            <TimelineDot />
          </TimelineItem>
        ))}
      </TimelineContainer>
    </ExperienceSection>
  );
};

export default Experience;

import React from "react";
import {
  ExperienceSection,
  SectionTitle,
  TimelineContainer,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  JobTitle,
  Company,
  Period,
  Description,
  TechStack,
  TechTag,
} from "./Experience.styles";

const experienceData = [
  {
    title: "Software Engineer (Contract)",
    company: "AM Specialty Insurance Group",
    period: "Mar 2025 - Present",
    description:
      "Build full-stack solutions for claims management and bordereaux processing using React.js, Next.js, Node.js, MongoDB, and Python. Implement Docker and CI/CD for efficient deployments. Participate in Agile sprints to create secure, scalable systems and enhance software architecture.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Python",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "Jan 2024 - Feb 2025",
    description:
      "Developed custom web applications for small businesses utilizing React and Node.js. Implemented secure, cloud-native solutions on AWS for application deployment while actively seeking new Software Engineer opportunities.",
    tech: ["React", "Node.js", "AWS", "Cloud-native solutions"],
  },
  {
    title: "Associate Consultant",
    company: "Sogeti USA",
    period: "Jul 2022 - Jan 2024",
    description:
      "Develop and enhance modern UIs with Next.js, React.js, and Svelte.js. Improve app performance by troubleshooting technical issues. Collaborate in Agile delivery and participate in cross-team code reviews to streamline UI development processes.",
    tech: ["Next.js", "React.js", "Svelte.js", "Agile", "UI/UX"],
  },
  {
    title: "Full Stack Developer (Consultant)",
    company: "Ashley Furniture",
    period: "Jan 2023 - Dec 2023",
    description:
      "Created e-commerce features with Svelte.js and SFCC for Ashley Furniture. Enhanced project delivery timelines and streamlined development processes. Collaborated with team members to ensure timely project completion and optimize development efficiency.",
    tech: ["Svelte.js", "SFCC", "E-commerce", "Project Management"],
  },
  {
    title: "Backend Cloud Consultant",
    company: "EmployBridge",
    period: "Sep 2022 - Dec 2022",
    description:
      "Developed AWS Proof of Concept and React UI dashboard. Implemented Kafka streams and backend services with 95% test coverage. Conducted backend cloud consulting and collaborated with team to enhance system performance.",
    tech: ["AWS", "React", "Kafka", "Backend Services", "Cloud Consulting"],
  },
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
                {exp.tech.map((tech) => (
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

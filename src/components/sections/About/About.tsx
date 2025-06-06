import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaTools, FaDocker, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiJavascript, SiSvelte } from 'react-icons/si';
import { BsPalette } from 'react-icons/bs';
import {
  AboutSection,
  SectionTitle,
  AboutContent,
  AboutText,
  SkillsGrid,
  Skill,
  SkillIcon,
} from './About.styles';

const skills = [
  { icon: <FaReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next' },
  { icon: <SiSvelte />, name: 'Svelte' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <BsPalette />, name: 'UI/UX' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <FaTools />, name: 'DevOps' },
  { icon: <FaDocker />, name: 'Docker' },
];

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>
        <AboutText>
          <p>
          I'm a passionate full-stack developer with 3+ years of experience creating digital experiences that make an impact. I specialize in building scalable web applications and crafting intuitive user interfaces using React, Next.js, and Node.js—all deployed seamlessly in cloud environments like AWS. From insurance platforms to e-commerce systems, I thrive on solving real-world problems through clean, efficient code.
          </p>
          <p>
          Driven by curiosity and a strong engineering mindset, I’m always looking for ways to improve systems, streamline workflows, and build tools that are both practical and elegant. I take pride in writing maintainable code and collaborating closely with teams to turn ideas into working products.
          </p>
        </AboutText>
        <SkillsGrid>
          {skills.map((skill) => (
            <Skill key={skill.name}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <div>{skill.name}</div>
            </Skill>
          ))}
        </SkillsGrid>
      </AboutContent>
    </AboutSection>
  );
};

export default About; 
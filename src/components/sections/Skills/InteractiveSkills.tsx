import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaBrain,
  FaRobot,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiStyledcomponents,
  SiExpress,
  SiNextdotjs,
  SiOpenai,
  SiApachekafka,
  SiApachespark,
  SiSnowflake,
  SiTensorflow,
  SiPandas,
} from "react-icons/si";
import {
  SkillsSection,
  Container,
  SectionTitle,
  CategoryGroup,
  CategoryHeader,
  CategoryName,
  CategoryCount,
  SkillChips,
  SkillChip,
  SkillIcon,
} from "./InteractiveSkills.styles";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillGroups: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Styled Components", icon: <SiStyledcomponents /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
  {
    name: "AI & Automation",
    skills: [
      { name: "Claude / Gemini", icon: <FaBrain /> },
      { name: "MCP Servers", icon: <FaRobot /> },
      { name: "Ollama", icon: <SiOpenai /> },
      { name: "Crew AI", icon: <FaRobot /> },
    ],
  },
  {
    name: "Data & ML",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Pandas / NumPy", icon: <SiPandas /> },
      { name: "Apache Spark", icon: <SiApachespark /> },
      { name: "Apache Kafka", icon: <SiApachekafka /> },
      { name: "Snowflake", icon: <SiSnowflake /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Data Warehousing", icon: <FaDatabase /> },
    ],
  },
];

const InteractiveSkills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills &amp; Expertise
        </SectionTitle>

        {skillGroups.map((group, gIdx) => (
          <CategoryGroup
            key={group.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: gIdx * 0.06 }}
          >
            <CategoryHeader>
              <CategoryName>{group.name}</CategoryName>
              <CategoryCount>{group.skills.length}</CategoryCount>
            </CategoryHeader>
            <SkillChips>
              {group.skills.map((skill) => (
                <SkillChip key={skill.name}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <span>{skill.name}</span>
                </SkillChip>
              ))}
            </SkillChips>
          </CategoryGroup>
        ))}
      </Container>
    </SkillsSection>
  );
};

export default InteractiveSkills;

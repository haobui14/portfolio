import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  SiNumpy,
} from "react-icons/si";
import {
  SkillsSection,
  Container,
  SectionTitle,
  CategoryTabs,
  CategoryTab,
  SkillsGrid,
  SkillCard,
  SkillHeader,
  SkillIcon,
  SkillInfo,
  SkillName,
  SkillLevel,
  SkillDescription,
} from "./InteractiveSkills.styles";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
  description: string;
}

const skillsData: Skill[] = [
  // Frontend
  {
    name: "React & Next.js",
    level: 95,
    category: "Frontend",
    icon: <FaReact />,
    description:
      "Expert in React ecosystem with advanced patterns, hooks, and Next.js for production apps.",
  },
  {
    name: "TypeScript",
    level: 90,
    category: "Frontend",
    icon: <SiTypescript />,
    description:
      "Strong typing, advanced generics, and type-safe development practices.",
  },
  {
    name: "JavaScript ES6+",
    level: 95,
    category: "Frontend",
    icon: <SiJavascript />,
    description:
      "Modern JavaScript features, async/await, destructuring, and functional programming.",
  },
  {
    name: "Styled Components",
    level: 85,
    category: "Frontend",
    icon: <SiStyledcomponents />,
    description:
      "CSS-in-JS, theming, and component-based styling architecture.",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "Frontend",
    icon: <SiTailwindcss />,
    description:
      "Utility-first CSS framework for rapid UI development and responsive design.",
  },

  // Backend
  {
    name: "Node.js",
    level: 85,
    category: "Backend",
    icon: <FaNodeJs />,
    description:
      "Server-side JavaScript, API development, and microservices architecture.",
  },
  {
    name: "Express.js",
    level: 80,
    category: "Backend",
    icon: <SiExpress />,
    description:
      "RESTful APIs, middleware, authentication, and scalable server applications.",
  },
  {
    name: "MongoDB",
    level: 75,
    category: "Backend",
    icon: <SiMongodb />,
    description:
      "NoSQL database design, aggregation pipelines, and performance optimization.",
  },
  {
    name: "Firebase",
    level: 85,
    category: "Backend",
    icon: <SiFirebase />,
    description:
      "Real-time database, authentication, cloud functions, and hosting.",
  },

  // Tools & DevOps
  {
    name: "Git & GitHub",
    level: 90,
    category: "Tools",
    icon: <FaGitAlt />,
    description:
      "Version control, branching strategies, CI/CD, and collaborative development.",
  },
  {
    name: "Docker",
    level: 70,
    category: "Tools",
    icon: <FaDocker />,
    description:
      "Containerization, Docker Compose, and deployment orchestration.",
  },
  {
    name: "AWS Cloud",
    level: 65,
    category: "Tools",
    icon: <FaAws />,
    description:
      "EC2, S3, Lambda, CloudFormation, and cloud infrastructure management.",
  },

  // Data Engineering
  {
    name: "Python",
    level: 85,
    category: "Data Engineering",
    icon: <FaPython />,
    description:
      "Data analysis, ETL pipelines, automation scripts, and machine learning workflows.",
  },
  {
    name: "Pandas & NumPy",
    level: 80,
    category: "Data Engineering",
    icon: <SiPandas />,
    description:
      "Data manipulation, analysis, statistical computing, and numerical operations.",
  },
  {
    name: "Apache Spark",
    level: 70,
    category: "Data Engineering",
    icon: <SiApachespark />,
    description:
      "Big data processing, distributed computing, and large-scale data transformations.",
  },
  {
    name: "Apache Kafka",
    level: 65,
    category: "Data Engineering",
    icon: <SiApachekafka />,
    description:
      "Real-time data streaming, event-driven architecture, and message processing.",
  },
  {
    name: "Data Warehousing",
    level: 70,
    category: "Data Engineering",
    icon: <FaDatabase />,
    description:
      "ETL/ELT processes, data modeling, schema design, and data pipeline optimization.",
  },
  {
    name: "Snowflake",
    level: 60,
    category: "Data Engineering",
    icon: <SiSnowflake />,
    description:
      "Cloud data platform, data warehousing, and scalable analytics solutions.",
  },
  {
    name: "TensorFlow",
    level: 65,
    category: "Data Engineering",
    icon: <SiTensorflow />,
    description:
      "Machine learning pipelines, model training, and data preprocessing workflows.",
  },

  // AI & ML
  {
    name: "Gemini AI Integration",
    level: 80,
    category: "AI/ML",
    icon: <FaBrain />,
    description:
      "AI model integration, prompt engineering, and intelligent application features.",
  },
  {
    name: "Ollama",
    level: 75,
    category: "AI/ML",
    icon: <SiOpenai />,
    description:
      "Local LLM deployment, model management, and offline AI inference capabilities.",
  },
  {
    name: "Crew AI Agent",
    level: 70,
    category: "AI/ML",
    icon: <FaRobot />,
    description:
      "Multi-agent systems, autonomous task execution, and collaborative AI workflows.",
  },
  {
    name: "LLM Training",
    level: 65,
    category: "AI/ML",
    icon: <FaBrain />,
    description:
      "Fine-tuning language models, dataset preparation, and custom model development.",
  },
];

const InteractiveSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(skillsData.map((skill) => skill.category))),
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <SkillsSection id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Expertise
          </SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CategoryTabs>
              {categories.map((category) => (
                <CategoryTab
                  key={category}
                  isActive={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </CategoryTab>
              ))}
            </CategoryTabs>
          </motion.div>

          <AnimatePresence mode="wait">
            <SkillsGrid
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <SkillHeader>
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillInfo>
                      <SkillName>{skill.name}</SkillName>
                      <SkillLevel>Professional Experience</SkillLevel>
                    </SkillInfo>
                  </SkillHeader>

                  <SkillDescription>{skill.description}</SkillDescription>
                </SkillCard>
              ))}
            </SkillsGrid>
          </AnimatePresence>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default InteractiveSkills;

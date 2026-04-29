import React from "react";
import { motion } from "framer-motion";
import {
  AboutSection,
  SectionTitle,
  AboutContent,
  AboutText,
} from "./About.styles";

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <AboutText>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm a passionate Software Engineer with{" "}
              <strong>4+ years of experience</strong> building scalable web
              applications and enterprise solutions. Currently working as a
              Software Engineer at <strong>AM Specialty Insurance Group</strong>{" "}
              since March 2025, I specialize in full-stack development using
              React.js, Next.js, Node.js, MongoDB, and Python. My expertise
              spans from e-commerce platforms to insurance claims management
              systems, with a focus on secure, scalable architectures and modern
              CI/CD practices.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My professional journey includes consulting roles at{" "}
              <strong>Sogeti USA</strong> (developing modern UIs with React.js
              and Svelte.js), <strong>Ashley Furniture</strong> (creating
              e-commerce features with SFCC), and <strong>EmployBridge</strong>{" "}
              (building AWS cloud solutions and Kafka streaming services). I
              thrive in Agile environments and excel at cross-team collaboration
              while continuously expanding my technical expertise.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I treat <strong>AI as a force multiplier</strong> in my daily
              work. I build internal AI-assisted tools and{" "}
              <strong>custom MCP servers</strong> that connect domain data and
              workflows directly to LLMs &mdash; automating repetitive tasks,
              accelerating code reviews, and surfacing insight from data that
              used to require manual digging. I lean on{" "}
              <strong>Claude, Gemini, and local models via Ollama</strong> for
              prototyping, refactoring, and writing tests, then ship the parts
              that prove their value back into the team's workflow. The goal is
              simple: higher-quality work, fewer mistakes, faster turnaround.
            </motion.p>
          </AboutText>
        </AboutContent>
      </motion.div>
    </AboutSection>
  );
};

export default About;

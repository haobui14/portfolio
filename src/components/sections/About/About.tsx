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
              <strong>3+ years of experience</strong> building scalable web
              applications and enterprise solutions. Currently working as a
              Contract Software Engineer at{" "}
              <strong>AM Specialty Insurance Group</strong> since March 2025, I
              specialize in full-stack development using React.js, Next.js,
              Node.js, MongoDB, and Python. My expertise spans from e-commerce
              platforms to insurance claims management systems, with a focus on
              secure, scalable architectures and modern CI/CD practices.
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
              I'm actively <strong>transitioning into Data Engineering</strong>{" "}
              to leverage my software development foundation in building robust
              data pipelines, ETL processes, and analytics solutions. My goal is
              to combine proven full-stack expertise with advanced data
              engineering skills, focusing on{" "}
              <strong>
                Python, Apache Spark, Kafka, and cloud data platforms
              </strong>{" "}
              to create efficient workflows that transform raw data into
              actionable business intelligence.
            </motion.p>
          </AboutText>
        </AboutContent>
      </motion.div>
    </AboutSection>
  );
};

export default About;

import React from "react";
import { FiArrowRight, FiMail, FiChevronDown } from "react-icons/fi";
import {
  HeroSection,
  HeroContent,
  Eyebrow,
  Title,
  JobTitle,
  Tagline,
  CtaRow,
  PrimaryCta,
  SecondaryCta,
  ScrollCue,
} from "./Hero.styles";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Eyebrow
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </Eyebrow>
        <Title
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hao Bui.
        </Title>
        <JobTitle
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Engineer
        </JobTitle>
        <Tagline
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Building reliable web applications and AI-powered tools that make teams faster.
        </Tagline>
        <CtaRow
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PrimaryCta
            type="button"
            onClick={() => scrollTo("projects")}
            aria-label="View my work"
          >
            View My Work <FiArrowRight aria-hidden />
          </PrimaryCta>
          <SecondaryCta
            type="button"
            onClick={() => scrollTo("contact")}
            aria-label="Get in touch"
          >
            <FiMail aria-hidden /> Get in Touch
          </SecondaryCta>
        </CtaRow>
      </HeroContent>
      <ScrollCue
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        aria-hidden
      >
        <FiChevronDown />
      </ScrollCue>
    </HeroSection>
  );
};

export default Hero;

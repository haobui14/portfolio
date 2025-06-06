import React from 'react';
import { HeroSection, HeroContent, Title, Subtitle, JobTitle } from './Hero.styles';

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Subtitle>Hi, my name is</Subtitle>
        <Title>Hao Bui.</Title>
        <JobTitle>Software Engineer</JobTitle>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 
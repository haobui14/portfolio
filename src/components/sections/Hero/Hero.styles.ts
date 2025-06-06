import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%); */
  padding: 0 ${({ theme }) => theme.spacing.lg};
  will-change: opacity, transform;
  transform: translateZ(0);
`;

export const HeroContent = styled.div`
  max-width: 1000px;
  width: 100%;
  /* animation: ${fadeInUp} 1s ease-out; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: ${({ theme }) => `${theme.spacing.sm} 0 ${theme.spacing.md}`};
  /* animation: ${fadeInUp} 1s ease-out 0.2s both; */
  max-width: 600px;
  line-height: 1.5;
`;

export const JobTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${({ theme }) => theme.colors.accent};
  margin: ${({ theme }) => `${theme.spacing.sm} 0`};
  font-weight: 600;
  /* animation: ${fadeInUp} 1s ease-out 0.3s both; */
  letter-spacing: 0.05em;
`;
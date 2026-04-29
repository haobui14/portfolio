import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const float = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(6px); opacity: 1; }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ theme }) => theme.colors.bgPrimary};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -20%;
    right: -10%;
    width: 70%;
    height: 70%;
    background: ${({ theme }) =>
      `radial-gradient(circle at center, ${theme.colors.accent}14 0%, transparent 60%)`};
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 60%;
    height: 60%;
    background: ${({ theme }) =>
      `radial-gradient(circle at center, ${theme.colors.accent}0a 0%, transparent 60%)`};
    pointer-events: none;
    z-index: 0;
  }
`;

export const HeroContent = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: left;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: flex-start;
  }
`;

export const Eyebrow = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-weight: 500;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  letter-spacing: 0.02em;
`;

export const Title = styled(motion.h1)`
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 800;
  margin: 0;
  line-height: 1.05;
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
`;

export const JobTitle = styled(motion.h2)`
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: ${({ theme }) => `${theme.spacing.xs} 0 ${theme.spacing.md}`};
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

export const Tagline = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  max-width: 560px;
  line-height: 1.6;
`;

export const CtaRow = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;

    button {
      flex: 1 1 auto;
      justify-content: center;
    }
  }
`;

const ctaBase = `
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease, scale 0.15s ease;
  cursor: pointer;
  font-family: inherit;

  &:active {
    scale: 0.96;
  }
`;

export const PrimaryCta = styled.button`
  ${ctaBase}
  background: #047857;
  color: #ffffff;
  border: 1px solid #047857;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    background: #065f46;
    border-color: #065f46;
    transform: translateY(-1px);
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

export const SecondaryCta = styled.button`
  ${ctaBase}
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }
`;

export const ScrollCue = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 2.4s ease-in-out infinite;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

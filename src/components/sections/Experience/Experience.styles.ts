import styled from "styled-components";
import { motion } from "framer-motion";

export const ExperienceSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    display: block;
    width: 40px;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    margin: ${({ theme }) => theme.spacing.sm} auto 0;
    border-radius: 2px;
  }
`;

export const TimelineContainer = styled.div`
  max-width: 880px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 ${({ theme }) => theme.spacing.md};

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${({ theme }) => theme.colors.accent}50 10%,
      ${({ theme }) => theme.colors.accent}50 90%,
      transparent 100%
    );
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled(motion.div)<{ isLeft?: boolean }>`
  display: flex;
  justify-content: ${({ isLeft }) => (isLeft ? "flex-end" : "flex-start")};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

export const TimelineContent = styled.div<{ isLeft?: boolean }>`
  background: ${({ theme }) => theme.colors.bgCard};
  padding: 1.25rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 46%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(100% - 50px);
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.bgSecondary},
    0 0 0 5px ${({ theme }) => theme.colors.accent}40;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 20px;
  }
`;

export const JobTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.0625rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  letter-spacing: -0.01em;
`;

export const Company = styled.h4`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9375rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const Period = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8125rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: block;
  letter-spacing: 0.02em;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const TechTag = styled.span`
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent}40;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  letter-spacing: 0.02em;
`;

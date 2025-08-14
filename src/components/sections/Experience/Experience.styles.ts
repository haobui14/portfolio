import styled from "styled-components";
import { motion } from "framer-motion";

export const ExperienceSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.bgSecondary}95;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({
      theme,
    }) => `radial-gradient(circle at 20% 80%, ${theme.colors.primary}12 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, ${theme.colors.accent}12 0%, transparent 50%)`};
    pointer-events: none;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
`;

export const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.gradients.primary};
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled(motion.div)<{ isLeft?: boolean }>`
  display: flex;
  justify-content: ${({ isLeft }) => (isLeft ? "flex-end" : "flex-start")};
  padding: ${({ theme }) => theme.spacing.md} 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

export const TimelineContent = styled.div<{ isLeft?: boolean }>`
  background: ${({ theme }) => theme.colors.bgCard};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 45%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(100% - 50px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    ${({ isLeft, theme }) =>
      isLeft
        ? `
        right: 100%;
        border-right-color: ${theme.colors.bgCard};
      `
        : `
        left: 100%;
        border-left-color: ${theme.colors.bgCard};
      `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      right: 100%;
      left: auto;
      border-right-color: ${({ theme }) => theme.colors.bgCard};
      border-left-color: transparent;
    }
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid ${({ theme }) => theme.colors.bgPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 20px;
  }
`;

export const JobTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const Company = styled.h4`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const Period = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: block;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.accent}33;
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

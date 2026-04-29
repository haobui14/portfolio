import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.bgPrimary};
  position: relative;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;

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

export const CategoryGroup = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CategoryName = styled.h3`
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  margin: 0;
`;

export const CategoryCount = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  margin-left: auto;

  &::before {
    content: "";
  }
`;

export const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.5rem;
  }
`;

export const SkillChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.875rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  cursor: default;
  user-select: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent}10;
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.45rem 0.75rem;
    font-size: 0.8125rem;
    gap: 0.4rem;
  }
`;

export const SkillIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  flex-shrink: 0;

  svg {
    width: 1em;
    height: 1em;
  }
`;

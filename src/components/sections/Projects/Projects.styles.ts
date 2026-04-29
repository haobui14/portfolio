import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.bgPrimary};
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: ${({ theme }) => theme.spacing.md};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1.5rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover,
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.01em;
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.6;
  font-size: 0.875rem;
  flex: 1;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
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

export const ProjectLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  transition: color 0.2s ease, border-color 0.2s ease, scale 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.875rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;

  /* extend hit area to >= 40x40 */
  &::before {
    content: "";
    position: absolute;
    inset: -4px;
  }

  svg {
    width: 0.95rem;
    height: 0.95rem;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    outline: none;
  }

  &:active {
    scale: 0.96;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

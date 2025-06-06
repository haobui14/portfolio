import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
  background: ${({ theme }) => theme.colors.bgSecondary};
  will-change: opacity, transform;
  transform: translateZ(0);
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AboutText = styled.div`
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  align-items: start;
`;

export const Skill = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transitions.default};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  div {
    margin-top: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 500;
  }
`;

export const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  svg {
    width: 1em;
    height: 1em;
  }
`; 
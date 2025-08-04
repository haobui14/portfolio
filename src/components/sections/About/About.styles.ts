import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.bgSecondary}95;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  will-change: opacity, transform;
  transform: translateZ(0);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => `radial-gradient(circle at 30% 70%, ${theme.colors.primary}12 0%, transparent 50%),
                                 radial-gradient(circle at 70% 30%, ${theme.colors.accent}12 0%, transparent 50%)`};
    pointer-events: none;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: -${({ theme }) => theme.spacing.sm};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: 2px;
  }
`;

export const AboutContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const AboutText = styled.div`
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    text-align: center;
    font-weight: 400;

    strong {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.typography.fontSizes.base};
      text-align: left;
    }
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
  box-shadow: ${({ theme }) => theme.shadows.card};

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
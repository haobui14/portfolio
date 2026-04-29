import styled from "styled-components";

export const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
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

export const AboutContent = styled.div`
  max-width: 760px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const AboutText = styled.div`
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    text-align: left;
    font-weight: 400;

    strong {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-weight: 600;
    }

    &:last-child {
      margin-bottom: 0;
      padding-left: 1.25rem;
      border-left: 2px solid ${({ theme }) => theme.colors.accent};

      strong {
        color: ${({ theme }) => theme.colors.accent};
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.typography.fontSizes.base};
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
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};
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

import styled from "styled-components";

export const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
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

export const ContactContent = styled.div`
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
`;

export const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.7;
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSizes.base};
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ContactItem = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.9375rem;
  font-weight: 500;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, scale 0.15s ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent}10;
    outline: none;
  }

  &:active {
    scale: 0.96;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  svg {
    display: block;
    font-size: 1.1em;
  }
`;

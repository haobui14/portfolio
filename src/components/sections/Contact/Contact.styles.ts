import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};
  /* background: ${({ theme }) => theme.colors.bgSecondary}; */
  will-change: opacity, transform;
  transform: translateZ(0);
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ContactContent = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.bgCard};
  transition: ${({ theme }) => theme.transitions.default};
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    display: block;
    font-size: 1.2em;
    vertical-align: middle;
  }
`; 

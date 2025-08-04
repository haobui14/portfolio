import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgPrimary}cc;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
`;

export const NavInner = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  height: 100%;
  width: 180px;
  padding: 10px 0;
`;

export const PageLogo = styled(Logo)`
  height: 40px;
  width: auto;
  display: block;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: 20px;
  font-family: 'Inter', 'Roboto', Arial, sans-serif;
  font-weight: 400;
  position: relative;
  padding: 0 0 5px 0;
  transition: color 0.3s ease;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.gradients.primary};
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

export const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2rem;
  cursor: pointer;
  z-index: 1200;
  padding: 0.5rem;
  border-radius: 4px;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const MobileNav = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.bgPrimary}f5;
  backdrop-filter: blur(20px);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-16px) scaleY(0.97)'};
  transition: opacity 0.22s cubic-bezier(0.4, 0.5, 0.5, 1),
    transform 0.24s cubic-bezier(0.4, 0.5, 0.5, 1);

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    gap: 2.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  nav a:first-child {
    margin-top: 1rem;
  }
  nav a:last-child {
    margin-bottom: 1rem;
  }
`;

import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(20px);
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
    /* transition: width 0.3s ease; */
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
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-16px) scaleY(0.97)'};
  transition: opacity 0.22s cubic-bezier(0.4, 0.5, 0.5, 1),
    transform 0.24s cubic-bezier(0.4, 0.5, 0.5, 1);

  > *:first-child {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.5rem 0 1.5rem;
    min-height: 72px;
    box-sizing: border-box;
  }

  > *:first-child > *:first-child {
    display: flex;
    align-items: center;
    height: 40px;
    margin: 0;
    padding: 0;
  }

  > *:first-child > *:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    margin: 0;
    line-height: 1;
    height: 40px;
    width: 40px;
    transition: color 0.15s;
    &:active {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    gap: 2.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    padding: 0.9rem 2.5rem;
    border-radius: 32px;
    transition: background 0.16s, color 0.16s, box-shadow 0.16s;
    text-decoration: none;
    box-shadow: none;
    line-height: 1.2;

    &:hover,
    &.active {
      background: ${({ theme }) => theme.colors.accent};
      color: #fff;
      box-shadow: 0 4px 18px 0 rgba(99, 102, 241, 0.15);
    }
  }
`;

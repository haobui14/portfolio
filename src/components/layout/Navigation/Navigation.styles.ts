import styled from "styled-components";

export const NavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgPrimary}cc;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 1000;
  transition: background 0.3s ease, border-color 0.3s ease;
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
  height: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1rem;
    height: 56px;
  }
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent}10;
  }
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
  font-size: 0.9375rem;
  font-family: "Inter", "Roboto", Arial, sans-serif;
  font-weight: 500;
  position: relative;
  padding: 0.75rem 0.5rem;
  transition: color 0.2s ease;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    transform: translateX(-50%) scale(0);
    transition: transform 0.2s ease;
  }

  &.active::after {
    transform: translateX(-50%) scale(1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    font-weight: 600;

    &::after {
      bottom: -6px;
      width: 6px;
      height: 6px;
    }
  }
`;

export const Hamburger = styled.button`
  display: none;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.25rem;
  cursor: pointer;
  z-index: 1200;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  transition: color 0.15s ease, border-color 0.15s ease;
  position: relative;

  /* extend hit area to >= 40x40 */
  &::before {
    content: "";
    position: absolute;
    inset: -8px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
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
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-16px) scaleY(0.97)"};
  transition: opacity 0.22s cubic-bezier(0.4, 0.5, 0.5, 1),
    transform 0.24s cubic-bezier(0.4, 0.5, 0.5, 1);

  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    gap: 2rem;
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

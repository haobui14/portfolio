import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';

import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  PageLogo,
  NavLink,
  Hamburger,
  MobileNav,
  NavInner,
} from './navigation.styles';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Fragment>
      <NavigationContainer>
        <NavInner>
          <LogoContainer to='/'>
            <PageLogo />
          </LogoContainer>

          <NavLinks>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/projects'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </NavLinks>

          <Hamburger
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? '✖' : '☰'}
          </Hamburger>
        </NavInner>
        {/* Mobile navigation menu */}
        <MobileNav isOpen={mobileOpen}>
          <nav>
            <NavLink to='/' onClick={() => setMobileOpen(false)}>
              Home
            </NavLink>
            <NavLink to='/about' onClick={() => setMobileOpen(false)}>
              About
            </NavLink>
            <NavLink to='/projects' onClick={() => setMobileOpen(false)}>
              Projects
            </NavLink>
            <NavLink to='/contact' onClick={() => setMobileOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </MobileNav>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

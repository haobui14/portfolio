import { Fragment, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import {
  NavigationContainer,
  NavLinks,
  Logo,
  NavLink,
  Hamburger,
  MobileNav,
  NavInner,
} from "./Navigation.styles";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileOpen(false);

    // Smooth scroll to section
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Fragment>
      <NavigationContainer>
        <NavInner>
          <Logo href="#home">HB</Logo>

          <NavLinks>
            <li>
              <NavLink
                href="#home"
                className={activeSection === "home" ? "active" : ""}
                onClick={() => handleNavClick("home")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={() => handleNavClick("about")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#skills"
                className={activeSection === "skills" ? "active" : ""}
                onClick={() => handleNavClick("skills")}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#experience"
                className={activeSection === "experience" ? "active" : ""}
                onClick={() => handleNavClick("experience")}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
                onClick={() => handleNavClick("projects")}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </NavLink>
            </li>
          </NavLinks>

          <Hamburger
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                style={{ display: "inline-flex" }}
              >
                {mobileOpen ? <FiX /> : <FiMenu />}
              </motion.span>
            </AnimatePresence>
          </Hamburger>
        </NavInner>

        <MobileNav isOpen={mobileOpen}>
          <nav>
            <NavLink
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={() => handleNavClick("home")}
            >
              Home
            </NavLink>
            <NavLink
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={() => handleNavClick("about")}
            >
              About
            </NavLink>
            <NavLink
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </NavLink>
            <NavLink
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
              onClick={() => handleNavClick("experience")}
            >
              Experience
            </NavLink>
            <NavLink
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </NavLink>
            <NavLink
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </NavLink>
          </nav>
        </MobileNav>
      </NavigationContainer>
    </Fragment>
  );
};

export default Navigation;

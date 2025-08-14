import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeContextProvider, useTheme } from "./contexts/ThemeContext";
import { getTheme } from "./theme/theme";
import Navigation from "./components/layout/Navigation/Navigation";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import InteractiveSkills from "./components/sections/Skills/InteractiveSkills";
import Experience from "./components/sections/Experience/Experience";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { ParticleBackground } from "./components/animation/ParticleBackground";
import PageTransition from "./components/animation/PageTransition";
import ErrorBoundary from "./components/ErrorBoundary";
import { GlobalStyle } from "./App.styles";

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme === "dark");

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <ErrorBoundary>
        <ParticleBackground />
        <PageTransition>
          <Navigation />
          <main>
            <Hero />
            <About />
            <InteractiveSkills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <ThemeToggle />
        </PageTransition>
      </ErrorBoundary>
    </StyledThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
};

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import Navigation from './components/layout/Navigation/Navigation';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import { ParticleBackground } from './components/animation/ParticleBackground';
import { GlobalStyle } from './App.styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParticleBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  );
};

export default App;

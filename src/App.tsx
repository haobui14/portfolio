import ThemeProvider from './theme/ThemeProvider';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppContainer } from './App.styles';
import { ParticleBackground } from './components/animation/ParticleBackground';
import { GlobalStyle } from './theme/GlobalStyle';

const Navigation = lazy(
  () => import('./components/layout/Navigation/Navigation')
);

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <ParticleBackground
        particleCount={50}
        minDuration={10}
        maxDuration={15}
        maxDelay={20}
      />
      <Navigation />
      <AppContainer>
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes>{/* <Route path='/' element={<Navigation />} /> */}</Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

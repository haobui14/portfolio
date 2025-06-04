import styled, { keyframes } from 'styled-components';

interface ParticleProps {
  left: number;
  delay: number;
  duration: number;
}

// Animations
const floatAnimation = keyframes`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.5;
  }
  90% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-10px) rotate(360deg);
    opacity: 0;
  }
`;

// Styled Components
export const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

export const Particle = styled.div<ParticleProps>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  opacity: 0.5;
  animation: ${floatAnimation} 20s infinite linear;
  left: ${({ left }) => left}%;
  animation-delay: ${({ delay }) => delay}s;
  animation-duration: ${({ duration }) => duration}s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 1px;
    height: 1px;
  }
`;

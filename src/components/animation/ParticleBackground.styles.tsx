import styled, { keyframes } from 'styled-components';

interface ParticleProps {
  left: number;
  top: number;
  delay: number;
  duration: number;
}

// Animations
const floatAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-10vh) translateX(2vw) rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-20vh) translateX(-1vw) rotate(360deg);
    opacity: 0.2;
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
  z-index: 0;
`;

export const Particle = styled.div<ParticleProps>`
  position: absolute;
  width: 5px;
  height: 5px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  opacity: 0.7;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.accent}40;
  animation: ${floatAnimation} 6s infinite linear;
  left: ${({ left }) => left}%;
  top: ${({ top }) => top}vh;
  animation-delay: 0s;
  animation-duration: ${({ duration }) => Math.max(duration * 0.3, 4)}s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 3px;
    height: 3px;
    opacity: 0.6;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.accent}40;
    animation-duration: 4s;
  }
`;

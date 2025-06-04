import { useEffect, useState, FC } from 'react';
import { Particle, ParticlesContainer } from './ParticleBackground.styles';

interface ParticleData {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export interface ParticleBackgroundProps {
  particleCount?: number;
  minDuration?: number;
  maxDuration?: number;
  maxDelay?: number;
}

export const ParticleBackground: FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  minDuration = 10,
  maxDuration = 20,
  maxDelay = 20,
}) => {
  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    const createParticles = (): void => {
      const newParticles: ParticleData[] = [];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * maxDelay,
          duration: Math.random() * (maxDuration - minDuration) + minDuration,
        });
      }

      setParticles(newParticles);
    };

    createParticles();
  }, [particleCount, minDuration, maxDuration, maxDelay]);

  return (
    <ParticlesContainer>
      {particles.map((particle: ParticleData) => (
        <Particle
          key={particle.id}
          left={particle.left}
          delay={particle.delay}
          duration={particle.duration}
        />
      ))}
    </ParticlesContainer>
  );
};

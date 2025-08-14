import { useEffect, useState, FC } from "react";
import { Particle, ParticlesContainer } from "./ParticleBackground.styles";

interface ParticleData {
  id: number;
  left: number;
  top: number;
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
  particleCount = 40,
  minDuration = 10,
  maxDuration = 40,
  maxDelay = 20,
}) => {
  const [count, setCount] = useState(particleCount);
  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setCount(
        window.innerWidth < 768 ? Math.floor(particleCount / 2) : particleCount
      );
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [particleCount]);

  useEffect(() => {
    const createParticles = (): void => {
      const newParticles: ParticleData[] = [];
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * maxDelay,
          duration: Math.random() * (maxDuration - minDuration) + minDuration,
        });
      }
      setParticles(newParticles);
    };
    createParticles();
  }, [count, minDuration, maxDuration, maxDelay]);

  return (
    <ParticlesContainer>
      {particles.map((particle: ParticleData) => (
        <Particle
          key={particle.id}
          left={particle.left}
          top={particle.top}
          delay={particle.delay}
          duration={particle.duration}
        />
      ))}
    </ParticlesContainer>
  );
};

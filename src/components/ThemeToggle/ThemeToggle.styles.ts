import styled from "styled-components";
import { motion } from "framer-motion";

export const ToggleButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1000;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 1rem;
    right: 1rem;
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
  }
`;

import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";
import { ToggleButton } from "./ThemeToggle.styles";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ToggleButton
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
    </ToggleButton>
  );
};

export default ThemeToggle;

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../contexts/useTheme";
import { ToggleButton, IconWrap } from "./ThemeToggle.styles";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ToggleButton
      onClick={toggleTheme}
      whileTap={{ scale: 0.96 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <IconWrap>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            style={{ display: "inline-flex" }}
          >
            {isDark ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
          </motion.span>
        </AnimatePresence>
      </IconWrap>
    </ToggleButton>
  );
};

export default ThemeToggle;

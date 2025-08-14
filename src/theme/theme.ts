const darkTheme = {
  colors: {
    bgPrimary: "#0a0a0a",
    bgSecondary: "#1a1a1a",
    bgCard: "#111111",
    textPrimary: "#ffffff",
    textSecondary: "#a3a3a3",
    accent: "#6366f1",
    accentHover: "#4f46e5",
    border: "rgba(255, 255, 255, 0.1)",
    primary: "#6366f1",
  },
  gradients: {
    primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    primaryHover: "linear-gradient(135deg, #5a6fd6 0%, #6a4399 100%)",
    text: "linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%)",
  },
  shadows: {
    primary: "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
    hover: "0 25px 35px -5px rgba(99, 102, 241, 0.4)",
    card: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
};

const lightTheme = {
  colors: {
    bgPrimary: "#ffffff",
    bgSecondary: "#f8fafc",
    bgCard: "#ffffff",
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    accent: "#3b82f6",
    accentHover: "#2563eb",
    border: "rgba(15, 23, 42, 0.12)",
    primary: "#3b82f6",
  },
  gradients: {
    primary: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    primaryHover: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
    text: "linear-gradient(135deg, #0f172a 0%, #475569 100%)",
  },
  shadows: {
    primary: "0 20px 25px -5px rgba(15, 23, 42, 0.1)",
    hover: "0 25px 35px -5px rgba(59, 130, 246, 0.25)",
    card: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
};

const commonTheme = {
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1200px",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "2rem",
    lg: "3rem",
    xl: "5rem",
  },
  borderRadius: {
    sm: "15px",
    md: "20px",
    lg: "50px",
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    lineHeights: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  transitions: {
    default: "all 0.3s ease",
    fast: "all 0.15s ease",
    slow: "all 0.5s ease",
  },
  zIndex: {
    navigation: 1000,
    particles: -1,
  },
} as const;

export const getTheme = (isDark: boolean) => ({
  ...(isDark ? darkTheme : lightTheme),
  ...commonTheme,
});

export const theme = getTheme(true); // Default dark theme

export type Theme = typeof theme;

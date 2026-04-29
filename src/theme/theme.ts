const darkTheme = {
  colors: {
    bgPrimary: "#0a1410",
    bgSecondary: "#0f1c17",
    bgCard: "#0d1813",
    textPrimary: "#e8efe9",
    textSecondary: "#8ba99a",
    accent: "#10b981",
    accentHover: "#059669",
    border: "rgba(16, 185, 129, 0.15)",
    primary: "#10b981",
  },
  gradients: {
    primary: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    primaryHover: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
    text: "linear-gradient(135deg, #ffffff 0%, #8ba99a 100%)",
  },
  shadows: {
    primary: "0 20px 40px -10px rgba(0, 0, 0, 0.5)",
    hover: "0 24px 48px -12px rgba(16, 185, 129, 0.35)",
    card: "0 1px 2px rgba(0, 0, 0, 0.4), 0 8px 24px -8px rgba(0, 0, 0, 0.3)",
  },
};

const lightTheme = {
  colors: {
    bgPrimary: "#fafdfb",
    bgSecondary: "#f0f5f2",
    bgCard: "#ffffff",
    textPrimary: "#0a1f17",
    textSecondary: "#3d5a4d",
    accent: "#047857",
    accentHover: "#065f46",
    border: "rgba(4, 120, 87, 0.15)",
    primary: "#047857",
  },
  gradients: {
    primary: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    primaryHover: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
    text: "linear-gradient(135deg, #0a1f17 0%, #3d5a4d 100%)",
  },
  shadows: {
    primary: "0 20px 40px -10px rgba(10, 31, 23, 0.12)",
    hover: "0 24px 48px -12px rgba(4, 120, 87, 0.25)",
    card: "0 1px 2px rgba(10, 31, 23, 0.04), 0 8px 24px -8px rgba(10, 31, 23, 0.08)",
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
    sm: "8px",
    md: "12px",
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

export const theme = getTheme(true);

export type Theme = typeof theme;

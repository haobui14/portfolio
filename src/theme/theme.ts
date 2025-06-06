export const theme = {
  colors: {
    bgPrimary: '#0a0a0a',
    bgSecondary: '#1a1a1a',
    bgCard: '#111111',
    textPrimary: '#ffffff',
    textSecondary: '#a3a3a3',
    accent: '#6366f1',
    accentHover: '#4f46e5',
    border: 'rgba(255, 255, 255, 0.1)',
    primary: '#6366f1',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    primaryHover: 'linear-gradient(135deg, #5a6fd6 0%, #6a4399 100%)',
    text: 'linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%)',
  },
  shadows: {
    primary: '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
    hover: '0 25px 35px -5px rgba(99, 102, 241, 0.4)',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '5rem',
  },
  borderRadius: {
    sm: '15px',
    md: '20px',
    lg: '50px',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
  zIndex: {
    navigation: 1000,
    particles: -1,
  },
} as const;

export type Theme = typeof theme;

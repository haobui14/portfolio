export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    card: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    accentHover: string;
  };
  gradients: {
    primary: string;
    text: string;
  };
  shadows: {
    card: string;
    accent: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#0a0a0a',
    secondary: '#1a1a1a',
    card: '#111111',
    textPrimary: '#ffffff',
    textSecondary: '#a3a3a3',
    accent: '#6366f1',
    accentHover: '#4f46e5',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    text: 'linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%)',
  },
  shadows: {
    card: '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
    accent: '0 25px 35px -5px rgba(99, 102, 241, 0.4)',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
};

export type ThemeType = typeof theme;

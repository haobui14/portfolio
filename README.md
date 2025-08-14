# 🚀 Hao Bui's Portfolio

A modern, responsive portfolio website built with React 19, TypeScript, and Vite. Features dual theme support (light/dark), animated particle background, interactive skill visualizations, and showcases innovative full-stack development projects including AI-powered applications.

🌐 **Live Demo**: [haobui-portfolio.netlify.app](https://haobui-portforlio.netlify.app)

## ✨ Features

- **Latest Tech Stack**: React 19, TypeScript 5.6, Vite 7, Styled-Components
- **Dual Theme System**: Beautiful light and dark themes with seamless transitions
- **Responsive Design**: Mobile-first approach with smooth animations and optimized layouts
- **Interactive Elements**: Enhanced particle background, hover effects, smooth scrolling navigation
- **Dynamic Animations**: Framer Motion powered animations with scroll-triggered effects
- **Performance Optimized**: Code splitting, React.memo, error boundaries, optimized particle system
- **SEO Friendly**: Meta tags, semantic HTML, accessibility features
- **Modern UI**: Professional themes with gradient accents, micro-interactions, and consistent design patterns
- **Security**: Zero vulnerabilities, up-to-date dependencies

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript 5.6, Styled-Components 6.1
- **Animation**: Framer Motion 12.23 for smooth transitions and scroll animations
- **Build Tool**: Vite 7.0 with Hot Module Replacement (HMR)
- **Icons**: React Icons for consistent iconography
- **Routing**: React Router DOM 7 for navigation
- **Linting**: ESLint 9 with TypeScript support and strict mode
- **Theme System**: Dynamic light/dark theme switching with React Context
- **Development**: TypeScript strict mode, error boundaries, performance monitoring

## 🎯 Featured Projects

### 🌌 NASA Space Missions Dashboard

Full-stack space mission management with sci-fi UI using Arwes framework
**Tech**: React, Node.js, Express, MongoDB, Docker

### 💰 Personal Spending Tracker

AI-powered finance management with Gemini AI insights
**Tech**: React, TypeScript, Firebase, Gemini AI

### 🛒 CRWN Clothing E-commerce

Modern e-commerce platform with Stripe integration
**Tech**: React, TypeScript, Redux, Firebase, Stripe

### 🏨 Hotel Management System

Full-stack booking platform with admin dashboard
**Tech**: Next.js, TypeScript, Sanity CMS, NextAuth.js, Stripe

### 🗺️ Pathfinding Algorithm Visualizer

Interactive algorithm visualization with maze generation
**Tech**: React, TypeScript, Vite, CSS

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/haobui14/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file (optional):

```bash
cp .env.example .env
```

4. Start development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts and cache
- `npm run update-deps` - Update all dependencies

## 🏗️ Project Structure

```
src/
├── components/
│   ├── animation/          # Particle background effects and page transitions
│   │   ├── ParticleBackground.tsx
│   │   ├── ParticleBackground.styles.tsx
│   │   └── PageTransition.tsx
│   ├── layout/            # Navigation and layout components
│   │   └── Navigation/
│   ├── sections/          # Main page sections
│   │   ├── Hero/          # Landing section with particle background
│   │   ├── About/         # About section with personal information
│   │   ├── Skills/        # Interactive skills visualization
│   │   ├── Experience/    # Timeline-based experience section
│   │   ├── Projects/      # Project showcase with interactive cards
│   │   └── Contact/       # Contact form and information
│   ├── ThemeToggle/       # Light/dark theme switcher
│   ├── ErrorBoundary.tsx  # Error handling component
│   └── Loading.tsx        # Loading state component
├── theme/                 # Styled-components theme system
│   ├── theme.ts          # Theme definitions (light/dark)
│   ├── GlobalStyle.tsx   # Global styles and CSS reset
│   └── ThemeProvider.tsx # Theme context provider
├── contexts/             # React contexts
│   └── ThemeContext.tsx  # Theme state management
├── hooks/                # Custom React hooks
│   └── useScrollAnimation.ts # Scroll-triggered animations
├── types/                # TypeScript type definitions
│   └── styled-components.d.ts
└── App.tsx              # Main application component with routing
```

## 🎨 Customization

### Theme Configuration

The portfolio features a comprehensive dual-theme system. Update colors, spacing, and breakpoints in `src/theme/theme.ts`:

```typescript
const lightTheme = {
  colors: {
    bgPrimary: "#ffffff",
    bgSecondary: "#f8fafc",
    textPrimary: "#0f172a",
    accent: "#3b82f6",
    // ... more theme options
  },
  // ... spacing, typography, etc.
};

const darkTheme = {
  colors: {
    bgPrimary: "#0a0a0a",
    bgSecondary: "#1a1a1a",
    textPrimary: "#ffffff",
    accent: "#6366f1",
    // ... more theme options
  },
};
```

### Content Updates

- **Personal Info**: `src/components/sections/Hero/Hero.tsx`
- **Projects**: `src/components/sections/Projects/Projects.tsx`
- **Skills**: `src/components/sections/Skills/InteractiveSkills.tsx`
- **Experience**: `src/components/sections/Experience/Experience.tsx`
- **Contact**: `src/components/sections/Contact/Contact.tsx`

### Adding New Projects

```typescript
{
  title: 'Your Project Name',
  description: 'Project description...',
  tech: ['React', 'TypeScript', 'Other Tech'],
  demoLink: 'https://your-demo-link.com', // optional
  githubLink: 'https://github.com/username/repo',
}
```

## 📱 Responsive Design

The portfolio is fully responsive with optimized experiences across all devices:

- **Mobile**: `<768px` - Single column layout, touch-optimized interactions, reduced particle count
- **Tablet**: `768px - 1024px` - Adaptive grid layouts, medium particle density
- **Desktop**: `>1024px` - Full multi-column experience, maximum visual effects
- **Theme Adaptation**: Both light and dark themes optimized for different screen sizes
- **Performance Scaling**: Particle system automatically adjusts based on device capabilities

## ⚡ Performance Features

- **React 19**: Latest React features with concurrent rendering
- **Optimized Animations**: Framer Motion with performance-focused configurations
- **Smart Particle System**: Responsive particle count and optimized rendering
- **React.memo**: Prevents unnecessary re-renders across components
- **Error Boundaries**: Graceful error handling with fallback UI
- **Code Splitting**: Optimized bundle loading and lazy loading
- **Vite 7**: Lightning-fast build tool with HMR and optimized production builds
- **TypeScript Strict Mode**: Type safety and enhanced developer experience
- **Semi-transparent Backgrounds**: Optimized layering for particle visibility

## 🔧 Development Features

- **Hot Module Replacement**: Instant updates during development
- **TypeScript Integration**: Full type safety with strict mode enabled
- **ESLint Configuration**: Code quality and consistency enforcement
- **Styled-Components**: CSS-in-JS with comprehensive theme support
- **Theme Context**: Global theme state management with React Context
- **Custom Hooks**: Reusable logic for scroll animations and theme handling
- **Error Boundaries**: Development and production error handling
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation support
- **Responsive Particles**: Adaptive particle system for different screen sizes

## 📈 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Project filtering and search functionality
- [ ] Contact form with email integration (EmailJS)
- [ ] Google Analytics integration
- [ ] Progressive Web App (PWA) features
- [ ] Internationalization (i18n) support
- [x] ~~Animation library integration (Framer Motion)~~ ✅ **Completed**
- [x] ~~Dark/Light theme toggle~~ ✅ **Completed**
- [ ] Advanced particle effects and customization options
- [ ] Skills proficiency tracking over time
- [ ] Project case studies with detailed breakdowns

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Hao Bui** - Full-Stack Software Engineer  
📧 [haobp.dev@gmail.com](mailto:haobp.dev@gmail.com)  
💼 [LinkedIn](https://www.linkedin.com/in/hao-bui1401/)  
🐙 [GitHub](https://github.com/haobui14)

**Portfolio Link**: [https://haobui-portfolio.netlify.app](https://haobui-portfolio.netlify.app)  
**Source Code**: [https://github.com/haobui14/portfolio](https://github.com/haobui14/portfolio)

---

⭐ **Star this repo if you found it helpful!** ⭐

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Hao Bui - [haobp.dev@gmail.com](mailto:haobp.dev@gmail.com)

Project Link: [https://haobui-portfolio.netlify.app](https://haobui-portfolio.netlify.app)

---

⭐ Star this repo if you found it helpful!

# 🚀 Hao Bui's Portfolio

A modern, responsive portfolio website built with React 19, TypeScript, and Vite. Features a sleek dark theme, animated particle background, and showcases innovative full-stack development projects including AI-powered applications.

## ✨ Features

- **Latest Tech Stack**: React 19, TypeScript, Vite 7, Styled-Components
- **Responsive Design**: Mobile-first approach with smooth animations
- **Interactive Elements**: Particle background, hover effects, smooth scrolling navigation
- **Performance Optimized**: Code splitting, React.memo, error boundaries
- **SEO Friendly**: Meta tags, semantic HTML, accessibility features
- **Modern UI**: Professional dark theme with gradient accents and micro-interactions
- **Security**: Zero vulnerabilities, up-to-date dependencies

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript 5.6, Styled-Components
- **Build Tool**: Vite 7.0
- **Icons**: React Icons
- **Routing**: React Router DOM 7
- **Linting**: ESLint 9 with TypeScript support
- **Development**: Hot Module Replacement (HMR), TypeScript strict mode

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
│   ├── animation/          # Particle background effects
│   ├── layout/            # Navigation, layout components
│   ├── sections/          # Main page sections (Hero, About, Projects, Contact)
│   ├── ErrorBoundary.tsx  # Error handling component
│   └── Loading.tsx        # Loading state component
├── theme/                 # Styled-components theme system
├── types/                 # TypeScript type definitions
└── App.tsx               # Main application component with error boundary
```

## 🎨 Customization

### Theme Configuration
Update colors, spacing, and breakpoints in `src/theme/theme.ts`:
```typescript
export const theme = {
  colors: {
    bgPrimary: '#0a0a0a',
    accent: '#6366f1',
    // ... more theme options
  }
}
```

### Content Updates
- **Personal Info**: `src/components/sections/Hero/Hero.tsx`
- **Projects**: `src/components/sections/Projects/Projects.tsx`
- **Skills**: `src/components/sections/About/About.tsx`
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

- **Mobile**: `<768px` - Single column layout, touch-optimized
- **Tablet**: `768px - 1024px` - Adaptive grid layouts
- **Desktop**: `>1024px` - Full multi-column experience

## ⚡ Performance Features

- **React 19**: Latest React features and optimizations
- **React.memo**: Prevents unnecessary re-renders
- **Error Boundaries**: Graceful error handling
- **Code Splitting**: Optimized bundle loading
- **Vite 7**: Lightning-fast build tool with HMR
- **TypeScript Strict Mode**: Type safety and better DX

## 🔧 Development Features

- **Hot Module Replacement**: Instant updates during development
- **TypeScript Integration**: Full type safety and IntelliSense
- **ESLint Configuration**: Code quality and consistency
- **Styled-Components**: CSS-in-JS with theme support
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 📈 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Project filtering and search functionality
- [ ] Contact form with email integration
- [ ] Google Analytics integration
- [ ] Progressive Web App (PWA) features
- [ ] Internationalization (i18n) support
- [ ] Animation library integration (Framer Motion)
- [ ] Dark/Light theme toggle

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

**Portfolio Link**: [https://github.com/haobui14/portfolio](https://github.com/haobui14/portfolio)

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

Project Link: [https://github.com/haobui14/portfolio](https://github.com/haobui14/portfolio)

---

⭐ Star this repo if you found it helpful!

# 🌟 Polyfy - Rune Frontend

<div align="center">

![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Modern React frontend for the Polyfy language learning platform**

[🚀 Quick Start](#-quick-start) • [🎨 Features](#-features) • [🏗️ Architecture](#️-architecture) • [🔧 Development](#-development)

</div>

---

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [🎨 Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🏗️ Architecture](#️-architecture)
- [🔧 Development](#-development)
- [📁 Project Structure](#-project-structure)
- [🎯 Components](#-components)
- [🔌 API Integration](#-api-integration)
- [🎨 Styling](#-styling)
- [🛠️ Troubleshooting](#️-troubleshooting)

---

## 🌟 Overview

**Polyfy Rune** is the modern, responsive frontend application for the Polyfy language learning platform. Built with React 18, TypeScript, and Vite, it provides an intuitive and engaging user interface for language learners.

### ✨ Key Technologies

- ⚛️ **React 18** - Modern React with concurrent features
- 🔷 **TypeScript** - Type-safe development
- ⚡ **Vite** - Lightning-fast build tool and dev server
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧭 **React Router** - Client-side routing
- 🎯 **Custom Hooks** - Reusable logic components
- 📱 **Responsive Design** - Mobile-first approach

---

## 🎨 Features

### 🎯 Core Features
- 🔐 **User Authentication** - Secure login and registration
- 📚 **Learning Dashboard** - Personalized learning experience
- 📖 **Vocabulary Management** - Interactive vocabulary learning
- 🔊 **Pronunciation Practice** - Audio-based phonetic training
- 📊 **Progress Tracking** - Visual learning analytics
- 👥 **Social Features** - Community interaction and groups
- 🎬 **Rich Content** - Multi-media learning materials
- 🌙 **Dark/Light Theme** - Customizable user interface

### 🎨 UI/UX Features
- 📱 **Responsive Design** - Works on all devices
- ♿ **Accessibility** - WCAG compliant
- 🎭 **Smooth Animations** - Engaging user interactions
- 🎨 **Modern Design** - Clean and intuitive interface
- ⚡ **Fast Performance** - Optimized for speed
- 🔄 **Real-time Updates** - Live data synchronization

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** installed
- **npm** or **yarn** package manager
- **Babel Backend** running (see [babel/README.md](../babel/README.md))

### 1. Installation

```bash
# Clone the repository (if not already done)
git clone <repository-url>
cd rune

# Install dependencies
npm install
# or
yarn install
```

### 2. Environment Setup

```bash
# Copy environment configuration
cp .env.example .env.local

# Edit environment variables
nano .env.local
```

### 3. Start Development Server

```bash
# Start the development server
npm run dev
# or
yarn dev

# Open browser at http://localhost:5173
```

### 4. Build for Production

```bash
# Build the application
npm run build
# or
yarn build

# Preview production build
npm run preview
# or
yarn preview
```

---

## 🏗️ Architecture

### Component Architecture

```
┌─────────────────────────────────────┐
│              App Router             │
├─────────────────────────────────────┤
│           Theme Provider            │
├─────────────────────────────────────┤
│          Layout Components          │
│  ┌─────────────┬─────────────────┐  │
│  │   Header    │    Navigation   │  │
│  ├─────────────┼─────────────────┤  │
│  │  Sidebar    │   Main Content  │  │
│  │             │                 │  │
│  │             │   ┌─────────┐   │  │
│  │             │   │ Screens │   │  │
│  │             │   └─────────┘   │  │
│  ├─────────────┼─────────────────┤  │
│  │           Footer            │  │
│  └─────────────┴─────────────────┘  │
└─────────────────────────────────────┘
```

### State Management

- **React Context** - Global state management
- **Custom Hooks** - Reusable stateful logic
- **Local State** - Component-specific state
- **API Client** - Centralized API communication

### Routing Structure

```
/                    # Landing page
├── /auth
│   ├── /login       # User login
│   └── /register    # User registration
├── /dashboard       # Main dashboard
├── /vocabulary      # Vocabulary management
├── /practice        # Practice sessions
├── /progress        # Progress tracking
├── /social          # Social features
└── /settings        # User settings
```

---

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8080
VITE_API_TIMEOUT=10000

# Authentication
VITE_JWT_STORAGE_KEY=polyfy_token

# Features
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_SOCIAL=true

# Development
VITE_DEBUG_MODE=true
```

### Development Workflow

1. **Feature Development**
   ```bash
   # Create feature branch
   git checkout -b feature/new-feature
   
   # Start development server
   npm run dev
   
   # Make changes and test
   npm run lint
   npm run type-check
   ```

2. **Component Creation**
   ```bash
   # Create new component
   mkdir src/components/NewComponent
   touch src/components/NewComponent/index.tsx
   ```

3. **API Integration**
   ```bash
   # Add new API endpoint
   # Edit src/service/client.ts
   # Create custom hook in src/hooks/
   ```

---

## 📁 Project Structure

```
rune/
├── 📄 index.html                    # HTML entry point
├── 📄 package.json                  # Dependencies and scripts
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 vite.config.ts                # Vite configuration
├── 📄 tailwind.config.js            # Tailwind CSS configuration
├── 📄 eslint.config.js              # ESLint configuration
├── 📄 biome.json                    # Biome configuration
├── 📁 public/                       # Static assets
│   └── 🖼️ nyrix.svg                 # App icon
├── 📁 src/                          # Source code
│   ├── 📄 main.tsx                  # Application entry point
│   ├── 📄 index.css                 # Global styles
│   ├── 📄 vite-env.d.ts             # Vite type definitions
│   ├── 📁 App/                      # Main app component
│   │   ├── 📄 index.tsx             # App component
│   │   └── 📁 Router/               # App routing
│   │       └── 📄 index.tsx         # Router configuration
│   ├── 📁 components/               # Reusable components
│   │   ├── 📁 Button/               # Button component
│   │   │   └── 📄 index.tsx
│   │   └── 📁 ThemeToggle/          # Theme toggle component
│   │       └── 📄 index.tsx
│   ├── 📁 screens/                  # Page components
│   │   └── 📁 Landing/              # Landing page
│   │       ├── 📄 index.tsx
│   │       └── 📁 Components/       # Landing page components
│   │           └── 📁 Header/
│   │               └── 📄 index.tsx
│   ├── 📁 hooks/                    # Custom React hooks
│   │   └── 📄 useTheme.tsx          # Theme management hook
│   ├── 📁 service/                  # API services
│   │   └── 📄 client.ts             # API client configuration
│   ├── 📁 lib/                      # Utility libraries
│   │   └── 📄 merge.ts              # Utility functions
│   └── 📁 assets/                   # Static assets
│       └── 🖼️ react.svg             # React logo
```

---

## 🎯 Components

### Core Components

#### 🔘 Button Component
```tsx
import { Button } from '@/components/Button'

<Button variant="primary" size="lg" onClick={handleClick}>
  Click me
</Button>
```

#### 🌙 Theme Toggle
```tsx
import { ThemeToggle } from '@/components/ThemeToggle'

<ThemeToggle />
```

### Custom Hooks

#### 🎨 useTheme Hook
```tsx
import { useTheme } from '@/hooks/useTheme'

const { theme, toggleTheme } = useTheme()
```

### Screen Components

#### 🏠 Landing Screen
- Hero section with call-to-action
- Feature highlights
- User testimonials
- Getting started guide

---

## 🔌 API Integration

### API Client Configuration

```typescript
// src/service/client.ts
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
})

// Request interceptor for authentication
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(import.meta.env.VITE_JWT_STORAGE_KEY)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
```

### API Endpoints

The frontend connects to the following backend services:

| Service | Base URL | Purpose |
|---------|----------|---------|
| Auth | `/api/v1/auth` | Authentication and user management |
| Content | `/api/v1/content` | Learning content and materials |
| Progress | `/api/v1/progress` | Learning progress and analytics |
| Vocabulary | `/api/v1/vocabulary` | Vocabulary management and SRS |
| Phonetic | `/api/v1/phonetic` | Pronunciation training |
| Social | `/api/v1/social` | Social features and community |

---

## 🎨 Styling

### Tailwind CSS

The project uses Tailwind CSS for styling with a custom configuration:

```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}
```

### Theme System

- **Light Theme** - Default bright theme
- **Dark Theme** - Dark mode for low-light environments
- **System Theme** - Follows system preference
- **Custom Colors** - Brand-specific color palette

### Responsive Design

```css
/* Mobile First Approach */
.container {
  @apply px-4 sm:px-6 lg:px-8;
}

/* Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

---

## 🛠️ Troubleshooting

### Common Issues

#### 🔴 Development Server Won't Start
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+

# Check port availability
lsof -i :5173
```

#### 🔴 Build Errors
```bash
# Type checking
npm run type-check

# Lint checking
npm run lint

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

#### 🔴 API Connection Issues
```bash
# Check backend status
curl http://localhost:8080/health

# Verify environment variables
echo $VITE_API_BASE_URL

# Check browser console for CORS errors
```

#### 🔴 Styling Issues
```bash
# Rebuild Tailwind CSS
npm run build

# Check Tailwind configuration
npx tailwindcss --help

# Verify CSS imports
```

### Performance Optimization

1. **Code Splitting**
   ```tsx
   const LazyComponent = lazy(() => import('./Component'))
   ```

2. **Image Optimization**
   ```tsx
   <img src="/image.webp" alt="Description" loading="lazy" />
   ```

3. **Bundle Analysis**
   ```bash
   npm run build
   npx vite-bundle-analyzer dist
   ```

### Development Tips

1. **Hot Reload**: Vite provides instant hot module replacement
2. **TypeScript**: Use strict mode for better type safety
3. **ESLint**: Configure rules for consistent code style
4. **Testing**: Write unit tests for components and hooks
5. **Accessibility**: Use semantic HTML and ARIA attributes

---

## 📞 Support

For frontend-specific issues:

1. Check the [troubleshooting section](#️-troubleshooting)
2. Verify backend connectivity (see [babel/README.md](../babel/README.md))
3. Review browser console for errors
4. Check network tab for API request failures

---

<div align="center">

**Built with ❤️ for language learners worldwide**

[🔝 Back to Top](#-polyfy---rune-frontend)

</div>

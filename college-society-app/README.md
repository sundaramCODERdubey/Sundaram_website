# College Society Management System

A premium SaaS-style frontend for managing college societies, built with React + Vite + TypeScript.

## Stack

- **React 19** + **Vite 7** + **TypeScript**
- **Tailwind CSS 3.4** with custom design tokens
- **Framer Motion** for animations
- **React Router v6.4+** with lazy-loaded routes
- **Recharts** for charts
- **lucide-react** for icons
- **Context API** (no Redux)

## Features

- **Theme system**: Light/Dark mode with animated Sun/Moon toggle, persisted in `localStorage`
- **Glassmorphism UI** with backdrop blur and soft borders
- **Responsive layout**: Collapsible sidebar (desktop) → bottom nav (mobile)
- **Dashboard**: Animated stat cards, line + doughnut charts, recent activity, upcoming events
- **Societies**: Grid of cards with 3D hover tilt (Framer Motion + CSS perspective)
- **Events**: Cards with animated capacity bars and status pulse badges
- **AI page**: Recommendation card with sparkle animation + floating chatbot button

## Run

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build

```bash
npm run build
```

## Structure

```
src/
├── components/     # Reusable UI (ThemeToggle, GlassCard, StatCard, SocietyCard, EventCard, Sidebar, Navbar, Layout)
├── context/        # ThemeContext, LayoutContext
├── pages/          # Dashboard, Societies, Events, AI
├── App.tsx
├── main.tsx
└── index.css
```

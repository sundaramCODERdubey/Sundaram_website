// FILE: src/App.tsx
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LayoutProvider } from './context/LayoutContext';
import { Layout } from './components/Layout';

const Dashboard = lazy(() => import('./pages/Dashboard').then((m) => ({ default: m.Dashboard })));
const Societies = lazy(() => import('./pages/Societies').then((m) => ({ default: m.Societies })));
const Events = lazy(() => import('./pages/Events').then((m) => ({ default: m.Events })));
const AI = lazy(() => import('./pages/AI').then((m) => ({ default: m.AI })));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-neon-cyan border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Suspense fallback={<PageLoader />}>
                    <Dashboard />
                  </Suspense>
                }
              />
              <Route
                path="societies"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <Societies />
                  </Suspense>
                }
              />
              <Route
                path="events"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <Events />
                  </Suspense>
                }
              />
              <Route
                path="ai"
                element={
                  <Suspense fallback={<PageLoader />}>
                    <AI />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </LayoutProvider>
    </ThemeProvider>
  );
}

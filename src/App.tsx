import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation, useRoutes } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '@/components/Layout'

const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Societies = lazy(() => import('@/pages/Societies'))
const Events = lazy(() => import('@/pages/Events'))
const AI = lazy(() => import('@/pages/AI'))

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-full">
      {children}
    </motion.div>
  )
}

const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/societies', element: <Societies /> },
  { path: '/events', element: <Events /> },
  { path: '/ai', element: <AI /> },
]

function AnimatedRoutes() {
  const location = useLocation()
  const element = useRoutes(routes)
  return (
    <AnimatePresence mode="wait">
      <PageWrapper key={location.pathname}>{element}</PageWrapper>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="flex min-h-[60vh] items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="h-10 w-10 rounded-full border-2 border-accent-cyan border-t-transparent"
            />
          </div>
        }
      >
        <Routes>
          <Route path="*" element={<AnimatedRoutes />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App

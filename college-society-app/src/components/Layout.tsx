// FILE: src/components/Layout.tsx
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { useLayout } from '../context/LayoutContext';
import { clsx } from 'clsx';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export function Layout() {
  const { sidebarCollapsed } = useLayout();
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <Sidebar />
      <Navbar />
      <main
        className={clsx(
          'pb-20 md:pb-8 pt-16 transition-all duration-300',
          sidebarCollapsed ? 'md:pl-[72px]' : 'md:pl-[256px]'
        )}
      >
        <div className="p-4 md:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

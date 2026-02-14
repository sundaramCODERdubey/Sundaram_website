// FILE: src/components/Sidebar.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { clsx } from 'clsx';
import { useLayout } from '../context/LayoutContext';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/societies', icon: Users, label: 'Societies' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/ai', icon: Sparkles, label: 'AI Recommendations' },
];

export function Sidebar() {
  const { sidebarCollapsed: collapsed, toggleSidebar: setCollapsed } = useLayout();

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden md:flex fixed left-0 top-0 z-40 h-screen flex-col backdrop-blur-xl bg-white/10 dark:bg-black/10 border-r border-white/20 dark:border-white/10"
        initial={false}
        animate={{ width: collapsed ? 72 : 256 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex h-16 items-center px-4 border-b border-white/10">
          <AnimatePresence mode="wait">
            {!collapsed ? (
              <motion.div
                key="full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple">
                  <span className="text-lg font-bold text-white">C</span>
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-100">Campus Hub</span>
              </motion.div>
            ) : (
              <motion.div
                key="icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple"
              >
                <span className="text-lg font-bold text-white">C</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <nav className="flex-1 overflow-hidden px-3 py-4">
          <ul className="space-y-1">
            {navItems.map(({ to, icon: Icon, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    clsx(
                      'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-neon-cyan/20 text-neon-cyan dark:bg-neon-purple/20 text-neon-purple'
                        : 'text-slate-600 hover:bg-white/10 dark:text-slate-400 dark:hover:bg-white/5'
                    )
                  }
                >
                  <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
                  <AnimatePresence>
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden whitespace-nowrap"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-white/10 p-3">
          <button
            onClick={() => setCollapsed()}
            className="flex w-full items-center justify-center rounded-2xl py-2 text-slate-500 hover:bg-white/10 hover:text-slate-700 dark:hover:text-slate-300"
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>
      </motion.aside>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden justify-around border-t border-white/20 backdrop-blur-xl bg-white/80 dark:bg-black/80 py-2 px-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                'flex flex-col items-center gap-1 rounded-2xl px-4 py-2 text-xs font-medium transition-colors',
                isActive
                  ? 'text-neon-cyan dark:text-neon-purple'
                  : 'text-slate-600 dark:text-slate-400'
              )
            }
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}

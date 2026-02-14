import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/societies', icon: Users, label: 'Societies' },
  { to: '/events', icon: Calendar, label: 'Events' },
  { to: '/ai', icon: Sparkles, label: 'AI' },
]

interface SidebarProps {
  collapsed: boolean
  onCollapsedChange: (value: boolean) => void
}

export default function Sidebar({ collapsed, onCollapsedChange }: SidebarProps) {

  return (
    <>
      {/* Desktop sidebar - hidden on mobile */}
      <motion.aside
        className="fixed left-0 top-0 z-30 hidden h-screen flex-col border-r border-white/20 dark:border-white/10 md:flex"
        initial={false}
        animate={{ width: collapsed ? 72 : 260 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div
          className={clsx(
            'flex h-full flex-col overflow-hidden rounded-r-3xl border-r border-white/20 dark:border-white/10',
            'backdrop-blur-xl bg-white/10 dark:bg-black/10'
          )}
        >
          <div className="flex h-16 items-center px-4">
            <AnimatePresence mode="wait">
              {!collapsed ? (
                <motion.span
                  key="logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-lg font-semibold tracking-tight text-slate-800 dark:text-slate-100"
                >
                  SocietyHub
                </motion.span>
              ) : (
                <motion.span
                  key="logo-icon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xl font-bold text-accent-cyan"
                >
                  S
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-3 rounded-3xl px-3 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-accent-cyan/20 text-accent-cyan'
                      : 'text-slate-600 hover:bg-white/10 dark:text-slate-400 dark:hover:bg-white/5',
                    collapsed && 'justify-center px-0'
                  )
                }
              >
                <Icon className="h-5 w-5 shrink-0" />
                <AnimatePresence mode="wait">
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
            ))}
          </nav>
          <div className="border-t border-white/10 p-3 dark:border-white/5">
            <button
              type="button"
              onClick={() => onCollapsedChange(!collapsed)}
              className={clsx(
                'flex w-full items-center justify-center gap-3 rounded-3xl py-3 text-slate-500 transition-colors hover:bg-white/10 hover:text-slate-700 dark:hover:bg-white/5 dark:hover:text-slate-300',
                collapsed && 'justify-center'
              )}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {collapsed ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <>
                  <ChevronLeft className="h-5 w-5" />
                  <span className="text-sm">Collapse</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-white/20 dark:border-white/10 md:hidden">
        <div className="flex w-full max-w-lg items-center justify-around rounded-t-3xl border-t border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/10 dark:bg-black/10 px-4 py-3">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                clsx(
                  'flex flex-col items-center gap-1 rounded-2xl px-4 py-2 text-xs font-medium transition-colors',
                  isActive ? 'text-accent-cyan' : 'text-slate-500 dark:text-slate-400'
                )
              }
            >
              <Icon className="h-6 w-6" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}

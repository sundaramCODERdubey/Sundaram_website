import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import clsx from 'clsx'

const duration = 0.5

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={clsx(
        'relative flex h-10 w-10 items-center justify-center rounded-3xl',
        'backdrop-blur-xl border border-white/20 dark:border-white/10',
        'bg-white/10 dark:bg-black/10',
        'hover:shadow-glow-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan',
        'transition-shadow duration-300'
      )}
    >
      <span className="relative block h-5 w-5 overflow-hidden">
        {/* Sun: rotates and "sets" (moves down + fade) when switching to dark */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-amber-400"
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            y: isDark ? 12 : 0,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration, ease: 'easeInOut' }}
        >
          <Sun className="h-5 w-5" strokeWidth={2} />
        </motion.span>
        {/* Moon: "rises" (from below) when switching to dark */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-slate-300"
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            y: isDark ? 0 : -12,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration, ease: 'easeInOut' }}
        >
          <Moon className="h-5 w-5" strokeWidth={2} />
        </motion.span>
      </span>
    </button>
  )
}

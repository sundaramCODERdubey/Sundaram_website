import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Bell, ChevronDown } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import clsx from 'clsx'

const notifications = [
  { id: '1', text: 'Tech Society meeting at 4 PM', time: '2m ago' },
  { id: '2', text: 'Drama fest registration open', time: '1h ago' },
]

export default function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)

  return (
    <header
      className={clsx(
        'sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-white/20 dark:border-white/10',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10 px-4 md:px-8'
      )}
    >
      <div className="flex flex-1 items-center gap-4">
        <div className="flex flex-1 items-center gap-3">
          <div
            className={clsx(
              'flex flex-1 max-w-md items-center gap-2 rounded-3xl border px-4 py-2 transition-all duration-300',
              searchFocused
                ? 'border-accent-cyan/50 bg-white/20 dark:bg-black/20 shadow-glow-cyan'
                : 'border-white/20 dark:border-white/10 bg-white/5 dark:bg-black/5'
            )}
          >
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              type="search"
              placeholder="Search societies, events..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none dark:text-slate-200 dark:placeholder-slate-500"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />

        <div className="relative">
          <button
            type="button"
            onClick={() => { setNotifOpen((o) => !o); setProfileOpen(false); }}
            className="relative flex h-10 w-10 items-center justify-center rounded-3xl backdrop-blur-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/10 hover:shadow-soft transition-shadow"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
          </button>
          <AnimatePresence>
            {notifOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute right-0 top-full mt-2 w-72 rounded-3xl border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/20 dark:bg-black/20 p-2 shadow-soft dark:shadow-soft-dark"
              >
                <p className="px-3 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400">Notifications</p>
                {notifications.map((n) => (
                  <button
                    key={n.id}
                    type="button"
                    className="w-full rounded-2xl px-3 py-2 text-left text-sm hover:bg-white/10 dark:hover:bg-black/20"
                  >
                    <span className="text-slate-800 dark:text-slate-200">{n.text}</span>
                    <span className="block text-xs text-slate-500">{n.time}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => { setProfileOpen((o) => !o); setNotifOpen(false); }}
            className="flex items-center gap-2 rounded-3xl border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/10 dark:bg-black/10 px-3 py-2 hover:shadow-soft transition-shadow"
          >
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple" />
            <span className="hidden text-sm font-medium text-slate-700 dark:text-slate-300 sm:inline">Profile</span>
            <ChevronDown className="h-4 w-4 text-slate-500" />
          </button>
          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute right-0 top-full mt-2 w-48 rounded-3xl border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/20 dark:bg-black/20 py-2 shadow-soft dark:shadow-soft-dark"
              >
                <button type="button" className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-white/10">
                  My profile
                </button>
                <button type="button" className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-white/10">
                  Settings
                </button>
                <button type="button" className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-white/10">
                  Sign out
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

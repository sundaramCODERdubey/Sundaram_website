// FILE: src/components/Navbar.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, ChevronDown, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { clsx } from 'clsx';
import { useLayout } from '../context/LayoutContext';

export function Navbar() {
  const { sidebarCollapsed } = useLayout();
  const [searchFocused, setSearchFocused] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [hasNotifications] = useState(true);

  return (
    <header
      className={clsx(
        'sticky top-0 z-30 flex h-16 items-center gap-4 px-4 md:px-6 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10 transition-all duration-300',
        sidebarCollapsed ? 'md:ml-[72px]' : 'md:ml-[256px]'
      )}
    >
      {/* Logo - mobile only */}
      <div className="flex md:hidden items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple">
          <span className="text-sm font-bold text-white">C</span>
        </div>
        <span className="font-semibold">Campus Hub</span>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div
          className={clsx(
            'flex items-center gap-3 rounded-2xl border px-4 py-2 transition-all duration-300',
            searchFocused
              ? 'border-neon-cyan/50 dark:border-neon-purple/50 shadow-glow-cyan dark:shadow-glow-purple'
              : 'border-white/20 dark:border-white/10 bg-white/5 dark:bg-black/5'
          )}
        >
          <Search className="h-4 w-4 shrink-0 text-slate-500" strokeWidth={2} />
          <input
            type="search"
            placeholder="Search societies, events..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:border-neon-cyan/50 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" strokeWidth={2} />
          {hasNotifications && (
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-rose-500">
              <span className="absolute inset-0 animate-ping rounded-full bg-rose-500 opacity-75" />
            </span>
          )}
        </button>

        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 px-3 py-2 hover:border-neon-cyan/50 transition-colors"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-neon-cyan/20 dark:bg-neon-purple/20">
              <User className="h-4 w-4 text-neon-cyan dark:text-neon-purple" strokeWidth={2} />
            </div>
            <span className="hidden sm:block text-sm font-medium">Profile</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          <AnimatePresence>
            {profileOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setProfileOpen(false)}
                  aria-hidden
                />
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 top-full z-50 mt-2 w-48 rounded-2xl backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 border border-white/20 shadow-xl overflow-hidden"
                >
                  <a
                    href="#"
                    className="block px-4 py-3 text-sm hover:bg-white/10 dark:hover:bg-white/5"
                  >
                    My Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-sm hover:bg-white/10 dark:hover:bg-white/5"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-sm text-rose-500 hover:bg-rose-500/10"
                  >
                    Sign out
                  </a>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

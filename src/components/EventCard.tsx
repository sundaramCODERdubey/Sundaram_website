import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import type { Event } from '@/types'
import clsx from 'clsx'

interface EventCardProps {
  event: Event
}

const statusConfig = {
  upcoming: { label: 'Upcoming', pulse: true, className: 'bg-accent-cyan/20 text-accent-cyan' },
  ongoing: { label: 'Ongoing', pulse: true, className: 'bg-emerald-500/20 text-emerald-400' },
  completed: { label: 'Completed', pulse: false, className: 'bg-slate-500/20 text-slate-400' },
} as const

export default function EventCard({ event }: EventCardProps) {
  const config = statusConfig[event.status]
  const percent = Math.round((event.registered / event.capacity) * 100)

  return (
    <motion.div
      className={clsx(
        'relative overflow-hidden rounded-3xl border border-white/20 dark:border-white/10',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10',
        'shadow-soft dark:shadow-soft-dark',
        'transition-shadow duration-300'
      )}
      whileHover={{
        scale: 1.03,
        y: -8,
        boxShadow: '0 0 30px rgba(0, 245, 255, 0.2), 0 0 60px rgba(168, 85, 247, 0.1)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{event.title}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{event.society}</p>
          </div>
          <span
            className={clsx(
              'shrink-0 rounded-2xl px-3 py-1.5 text-xs font-medium',
              config.className,
              config.pulse && 'animate-pulse'
            )}
          >
            {config.label}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {event.date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {event.location}
          </span>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
            <span>Capacity</span>
            <span>{event.registered} / {event.capacity}</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/20 dark:bg-black/20">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

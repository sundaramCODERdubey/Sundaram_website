// FILE: src/components/EventCard.tsx
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { clsx } from 'clsx';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  society?: string;
}

const statusConfig = {
  upcoming: {
    label: 'Upcoming',
    pulse: true,
    className: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  },
  ongoing: {
    label: 'Live',
    pulse: true,
    className: 'bg-rose-500/20 text-rose-600 dark:text-rose-400',
  },
  completed: {
    label: 'Completed',
    pulse: false,
    className: 'bg-slate-500/20 text-slate-600 dark:text-slate-400',
  },
};

export function EventCard({
  title,
  date,
  time,
  location,
  capacity,
  registered,
  status,
  society,
}: EventCardProps) {
  const config = statusConfig[status];
  const percentage = capacity > 0 ? Math.min((registered / capacity) * 100, 100) : 0;

  return (
    <motion.div
      className={clsx(
        'rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 p-6 overflow-hidden',
        'hover:border-neon-cyan/50 dark:hover:border-neon-purple/50 hover:shadow-glow-cyan dark:hover:shadow-glow-purple transition-all duration-300'
      )}
      whileHover={{ scale: 1.03, y: -8 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {society && (
            <span className="text-xs font-medium text-neon-cyan dark:text-neon-purple">{society}</span>
          )}
          <h3 className="mt-1 text-lg font-semibold">{title}</h3>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4 shrink-0" />
              {date} · {time}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4 shrink-0" />
              {location}
            </span>
          </div>
        </div>
        <span
          className={clsx(
            'shrink-0 rounded-xl px-3 py-1 text-xs font-medium',
            config.className
          )}
        >
          {config.pulse && (
            <span className="relative mr-1.5 inline-flex h-1.5 w-1.5">
              <span
                className={clsx(
                  'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                  status === 'ongoing' ? 'bg-rose-500' : 'bg-emerald-500'
                )}
              />
              <span
                className={clsx(
                  'relative inline-flex h-1.5 w-1.5 rounded-full',
                  status === 'ongoing' ? 'bg-rose-500' : 'bg-emerald-500'
                )}
              />
            </span>
          )}
          {config.label}
        </span>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
          <span>Capacity</span>
          <span>{registered} / {capacity}</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden bg-white/10 dark:bg-black/20">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

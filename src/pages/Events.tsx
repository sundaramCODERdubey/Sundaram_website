import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import EventCard from '@/components/EventCard'
import { mockEvents } from '@/data/mock'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function Events() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Events</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">Upcoming and past events</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-3xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/10 px-4 py-2 backdrop-blur-xl transition-shadow hover:shadow-glow-cyan"
        >
          <Calendar className="h-4 w-4 text-accent-cyan" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Filter</span>
        </button>
      </div>

      <motion.div variants={item} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </motion.div>
    </motion.div>
  )
}

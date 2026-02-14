import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import SocietyCard from '@/components/SocietyCard'
import GlassCard from '@/components/GlassCard'
import { mockSocieties } from '@/data/mock'

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

export default function Societies() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Societies</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">Browse and join college societies</p>
        </div>
        <div className="flex items-center gap-2 rounded-3xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/10 px-4 py-2 backdrop-blur-xl">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="search"
            placeholder="Search societies..."
            className="w-40 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none dark:text-slate-200 sm:w-56"
          />
        </div>
      </div>

      <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1000 }}>
        {mockSocieties.map((society) => (
          <motion.div key={society.id} variants={item}>
            <SocietyCard society={society} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item}>
        <GlassCard className="p-8 text-center">
          <p className="text-slate-500 dark:text-slate-400">More societies coming soon. Request one?</p>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}

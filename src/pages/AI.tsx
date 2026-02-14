import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import GlassCard from '@/components/GlassCard'
import FloatingChatbot from '@/components/FloatingChatbot'

export default function AI() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">AI Recommendations</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">Get personalized society and event suggestions</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <GlassCard className="relative overflow-hidden p-8 md:p-10">
          {/* Sparkle animation */}
          <div className="absolute right-8 top-8">
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="block text-accent-cyan"
            >
              <Sparkles className="h-8 w-8" />
            </motion.span>
          </div>
          <div className="absolute bottom-8 left-8">
            <motion.span
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="block text-accent-purple"
            >
              <Sparkles className="h-6 w-6" />
            </motion.span>
          </div>

          <div className="relative">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 md:text-2xl">
              Your personalized picks
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Based on your interests and activity, we recommend checking out Tech Society for the upcoming Hackathon
              and Drama Club for the annual fest. Tap the chat button to ask for more suggestions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Tech Society', 'Drama Club', 'Literary Society'].map((name, i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/10 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <FloatingChatbot />
    </motion.div>
  )
}

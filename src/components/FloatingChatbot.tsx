import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingChatbot() {
  return (
    <motion.button
      type="button"
      aria-label="Open AI assistant"
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/10 dark:bg-black/10 text-accent-cyan shadow-soft md:bottom-8"
      initial={false}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute -inset-1 rounded-full border-2 border-accent-cyan/40 animate-ring-pulse" />
      <span className="absolute inset-0 rounded-full ring-2 ring-accent-cyan/30 ring-offset-2 ring-offset-transparent dark:ring-offset-slate-900" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.button>
  )
}

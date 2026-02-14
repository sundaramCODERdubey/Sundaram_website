import { motion } from 'framer-motion'
import clsx from 'clsx'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={clsx(
        'rounded-3xl border border-white/20 dark:border-white/10',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10',
        'shadow-soft dark:shadow-soft-dark',
        className
      )}
      whileHover={hover ? { scale: 1.03, y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      {children}
    </motion.div>
  )
}

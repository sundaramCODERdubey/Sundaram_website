import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Users } from 'lucide-react'
import type { Society } from '@/types'
import clsx from 'clsx'

interface SocietyCardProps {
  society: Society
}

export default function SocietyCard({ society }: SocietyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovering(false)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={clsx(
        'relative rounded-3xl border border-white/20 dark:border-white/10',
        'backdrop-blur-xl bg-white/10 dark:bg-black/10',
        'shadow-soft dark:shadow-soft-dark',
        'cursor-pointer transition-shadow duration-300',
        isHovering && 'shadow-glow-cyan dark:shadow-glow-cyan'
      )}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <div className="p-6" style={{ transform: 'translateZ(20px)' }}>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-cyan/30 to-accent-purple/30">
          <Users className="h-7 w-7 text-accent-cyan" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{society.name}</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{society.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="rounded-xl bg-white/10 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 dark:bg-black/20">
            {society.category}
          </span>
          <span className="text-sm font-medium text-accent-cyan">{society.memberCount} members</span>
        </div>
      </div>
    </motion.div>
  )
}

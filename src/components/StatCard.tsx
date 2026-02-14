import { useSpring, useTransform, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import GlassCard from './GlassCard'
import clsx from 'clsx'

interface StatCardProps {
  label: string
  value: number
  change?: string
  icon: LucideIcon
  accent?: 'cyan' | 'purple'
}

function useCountUp(end: number) {
  const spring = useSpring(0, { stiffness: 50, damping: 30 })
  const display = useTransform(spring, (v: number) => (Number.isInteger(end) ? Math.round(v) : v.toFixed(1)).toString())
  useEffect(() => {
    spring.set(end)
  }, [end, spring])
  return display
}

export default function StatCard({ label, value, change, icon: Icon, accent = 'cyan' }: StatCardProps) {
  const displayValue = useCountUp(value)
  const [text, setText] = useState('0')
  useMotionValueEvent(displayValue, 'change', setText)

  return (
    <GlassCard>
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
            <p
              className={clsx(
                'mt-1 text-2xl font-bold tabular-nums',
                accent === 'cyan' && 'text-accent-cyan',
                accent === 'purple' && 'text-accent-purple'
              )}
            >
              {text}
            </p>
            {change && (
              <p className="mt-1 text-xs text-emerald-500 dark:text-emerald-400">{change}</p>
            )}
          </div>
          <div
            className={clsx(
              'flex h-12 w-12 items-center justify-center rounded-2xl',
              accent === 'cyan' && 'bg-accent-cyan/20 text-accent-cyan',
              accent === 'purple' && 'bg-accent-purple/20 text-accent-purple'
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </GlassCard>
  )
}

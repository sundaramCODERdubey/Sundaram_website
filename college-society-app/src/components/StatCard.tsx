// FILE: src/components/StatCard.tsx
import { useSpring, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState } from 'react';
import { type LucideIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { clsx } from 'clsx';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  suffix?: string;
  trend?: number;
  accent?: 'cyan' | 'purple';
}

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 75, damping: 15 });
  const [display, setDisplay] = useState(0);
  useEffect(() => spring.set(value), [spring, value]);
  useMotionValueEvent(spring, 'change', (v) => setDisplay(Math.round(v)));
  return <span>{display}</span>;
}

export function StatCard({ title, value, icon: Icon, suffix = '', trend, accent = 'cyan' }: StatCardProps) {
  return (
    <GlassCard>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{title}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight">
            <AnimatedNumber value={value} />
            {suffix}
          </p>
          {trend !== undefined && (
            <p
              className={clsx(
                'mt-1 text-sm font-medium',
                trend >= 0 ? 'text-emerald-500' : 'text-rose-500'
              )}
            >
              {trend >= 0 ? '+' : ''}{trend}% from last month
            </p>
          )}
        </div>
        <div
          className={clsx(
            'flex h-12 w-12 items-center justify-center rounded-2xl',
            accent === 'cyan' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-neon-purple/20 text-neon-purple'
          )}
        >
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
      </div>
    </GlassCard>
  );
}

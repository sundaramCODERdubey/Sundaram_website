// FILE: src/components/SocietyCard.tsx
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Users } from 'lucide-react';
import { clsx } from 'clsx';

interface SocietyCardProps {
  name: string;
  description: string;
  memberCount: number;
  category: string;
  image?: string;
}

export function SocietyCard({ name, description, memberCount, category, image }: SocietyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  return (
    <div className="group cursor-pointer" style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="h-full"
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={clsx(
          'rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border p-6 transition-all duration-300',
          isHovering
            ? 'border-neon-cyan/50 dark:border-neon-purple/50 shadow-glow-cyan dark:shadow-glow-purple'
            : 'border-white/20 dark:border-white/10'
        )}
        style={{ transform: 'translateZ(50px)' }}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30">
          {image ? (
            <img src={image} alt="" className="h-full w-full rounded-2xl object-cover" />
          ) : (
            <Users className="h-8 w-8 text-neon-cyan dark:text-neon-purple" strokeWidth={2} />
          )}
        </div>
        <span className="text-xs font-medium text-neon-cyan dark:text-neon-purple">{category}</span>
        <h3 className="mt-1 text-lg font-semibold">{name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">{description}</p>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
          {memberCount} members
        </p>
      </motion.div>
    </motion.div>
    </div>
  );
}

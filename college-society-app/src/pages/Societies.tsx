// FILE: src/pages/Societies.tsx
import { motion } from 'framer-motion';
import { SocietyCard } from '../components/SocietyCard';

const societies = [
  {
    id: 1,
    name: 'Tech Society',
    description: 'Building the future with code. Workshops, hackathons, and collaborative projects.',
    memberCount: 320,
    category: 'Technical',
  },
  {
    id: 2,
    name: 'Design Club',
    description: 'Explore UI/UX, graphic design, and creative expression through visual arts.',
    memberCount: 185,
    category: 'Creative',
  },
  {
    id: 3,
    name: 'Dance Crew',
    description: 'Hip-hop, contemporary, and classical. Perform at fests and compete nationally.',
    memberCount: 95,
    category: 'Cultural',
  },
  {
    id: 4,
    name: 'Photography Club',
    description: 'Capture moments. Learn composition, lighting, and post-processing.',
    memberCount: 142,
    category: 'Creative',
  },
  {
    id: 5,
    name: 'Debate Society',
    description: 'Sharpen your arguments. MUNs, parliamentary debates, and public speaking.',
    memberCount: 78,
    category: 'Academics',
  },
  {
    id: 6,
    name: 'Sports Committee',
    description: 'Organize inter-college tournaments. Cricket, football, badminton, and more.',
    memberCount: 210,
    category: 'Sports',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

export function Societies() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Societies</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Explore and join campus societies. Hover for 3D effect.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {societies.map((society, i) => (
          <motion.div
            key={society.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <SocietyCard {...society} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// FILE: src/pages/Events.tsx
import { motion } from 'framer-motion';
import { EventCard } from '../components/EventCard';

const events = [
  {
    id: 1,
    title: 'Hackathon 2025',
    date: 'Feb 15',
    time: '9:00 AM',
    location: 'Tech Block',
    capacity: 100,
    registered: 78,
    status: 'upcoming' as const,
    society: 'Tech Society',
  },
  {
    id: 2,
    title: 'Design Workshop',
    date: 'Feb 16',
    time: '2:00 PM',
    location: 'Art Room',
    capacity: 40,
    registered: 40,
    status: 'upcoming' as const,
    society: 'Design Club',
  },
  {
    id: 3,
    title: 'Inter-College Debate',
    date: 'Feb 14',
    time: '10:00 AM',
    location: 'Auditorium',
    capacity: 200,
    registered: 156,
    status: 'ongoing' as const,
    society: 'Debate Society',
  },
  {
    id: 4,
    title: 'Dance Battle Prelims',
    date: 'Feb 12',
    time: '6:00 PM',
    location: 'Open Stage',
    capacity: 80,
    registered: 80,
    status: 'completed' as const,
    society: 'Dance Crew',
  },
  {
    id: 5,
    title: 'Photography Walk',
    date: 'Feb 18',
    time: '5:30 AM',
    location: 'City Heritage Walk',
    capacity: 25,
    registered: 12,
    status: 'upcoming' as const,
    society: 'Photography Club',
  },
  {
    id: 6,
    title: 'Cricket Tournament Finals',
    date: 'Feb 20',
    time: '3:00 PM',
    location: 'Main Ground',
    capacity: 500,
    registered: 320,
    status: 'upcoming' as const,
    society: 'Sports Committee',
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

export function Events() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Events</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Browse campus events. Hover for gradient glow.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <EventCard {...event} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

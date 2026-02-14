// FILE: src/pages/Dashboard.tsx
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import { Users, Calendar, TrendingUp, Award } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { GlassCard } from '../components/GlassCard';
import { EventCard } from '../components/EventCard';

const lineData = [
  { name: 'Jan', members: 240, events: 12 },
  { name: 'Feb', members: 380, events: 18 },
  { name: 'Mar', members: 520, events: 22 },
  { name: 'Apr', members: 610, events: 28 },
  { name: 'May', members: 750, events: 35 },
  { name: 'Jun', members: 890, events: 42 },
];

const pieData = [
  { name: 'Tech', value: 35, color: '#00f5ff' },
  { name: 'Cultural', value: 28, color: '#a855f7' },
  { name: 'Sports', value: 22, color: '#22c55e' },
  { name: 'Academics', value: 15, color: '#f59e0b' },
];

const recentActivity = [
  { id: 1, text: 'John joined Tech Society', time: '2 min ago' },
  { id: 2, text: 'Design Workshop registered', time: '15 min ago' },
  { id: 3, text: 'Photo Club event completed', time: '1 hour ago' },
  { id: 4, text: 'New society "Startup Club" created', time: '2 hours ago' },
];

const upcomingEvents = [
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
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Dashboard</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Welcome back! Here&apos;s your campus overview.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Societies" value={24} icon={Users} trend={12} accent="cyan" />
        <StatCard title="Upcoming Events" value={18} icon={Calendar} trend={8} accent="purple" />
        <StatCard title="Active Members" value={1250} icon={TrendingUp} trend={22} accent="cyan" />
        <StatCard title="Events This Month" value={12} icon={Award} trend={5} accent="purple" />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2" hover={false}>
          <h3 className="mb-4 text-lg font-semibold">Growth Overview</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-white/10" />
                <XAxis dataKey="name" stroke="currentColor" className="text-xs" />
                <YAxis stroke="currentColor" className="text-xs" />
                <Tooltip
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(24px)',
                    background: 'rgba(255,255,255,0.1)',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="members"
                  stroke="#00f5ff"
                  strokeWidth={2}
                  dot={{ fill: '#00f5ff' }}
                />
                <Line
                  type="monotone"
                  dataKey="events"
                  stroke="#a855f7"
                  strokeWidth={2}
                  dot={{ fill: '#a855f7' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
        <GlassCard hover={false}>
          <h3 className="mb-4 text-lg font-semibold">Society Categories</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(24px)',
                    background: 'rgba(255,255,255,0.1)',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      {/* Activity + Events */}
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard hover={false}>
          <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>
          <ul className="space-y-4">
            {recentActivity.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between rounded-2xl py-3 px-4 hover:bg-white/5 dark:hover:bg-white/5"
              >
                <span className="text-sm">{item.text}</span>
                <span className="text-xs text-slate-500">{item.time}</span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

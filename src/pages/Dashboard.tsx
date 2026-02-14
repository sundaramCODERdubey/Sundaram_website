import { motion } from 'framer-motion'
import { Users, Calendar, Activity, TrendingUp } from 'lucide-react'
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
} from 'recharts'
import StatCard from '@/components/StatCard'
import GlassCard from '@/components/GlassCard'
import { mockActivity, mockEvents, lineChartData, doughnutData } from '@/data/mock'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export default function Dashboard() {
  const upcomingEvents = mockEvents.filter((e) => e.status === 'upcoming' || e.status === 'ongoing').slice(0, 3)

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 md:text-3xl">Dashboard</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">Overview of your society activity</p>
      </div>

      <motion.div variants={item} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Societies" value={12} change="+2 this month" icon={Users} accent="cyan" />
        <StatCard label="Upcoming Events" value={8} icon={Calendar} accent="purple" />
        <StatCard label="Active Members" value={1240} change="+12%" icon={Activity} accent="cyan" />
        <StatCard label="Engagement" value={94} change="+5%" icon={TrendingUp} accent="purple" />
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div variants={item}>
          <GlassCard className="overflow-hidden p-6">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Activity this week</h2>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-white/10" />
                  <XAxis dataKey="name" className="text-xs" stroke="currentColor" />
                  <YAxis className="text-xs" stroke="currentColor" />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '1rem',
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(24px)',
                    }}
                  />
                  <Line type="monotone" dataKey="events" stroke="#00f5ff" strokeWidth={2} dot={{ fill: '#00f5ff' }} name="Events" />
                  <Line type="monotone" dataKey="members" stroke="#a855f7" strokeWidth={2} dot={{ fill: '#a855f7' }} name="Members" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={item}>
          <GlassCard className="overflow-hidden p-6">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Society distribution</h2>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={doughnutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {doughnutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: '1rem',
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(24px)',
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div variants={item}>
          <GlassCard className="p-6">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Recent activity</h2>
            <ul className="mt-4 space-y-3">
              {mockActivity.map((a) => (
                <li
                  key={a.id}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 dark:bg-black/10"
                >
                  <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{a.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{a.time} {a.meta && `· ${a.meta}`}</p>
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        <motion.div variants={item}>
          <GlassCard className="p-6">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Upcoming events</h2>
            <ul className="mt-4 space-y-3">
              {upcomingEvents.map((e) => (
                <li
                  key={e.id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 dark:bg-black/10"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{e.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{e.date} · {e.location}</p>
                  </div>
                  <span className="shrink-0 rounded-xl bg-accent-purple/20 px-2 py-1 text-xs font-medium text-accent-purple">
                    {e.status}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  )
}

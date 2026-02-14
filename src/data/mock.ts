import type { Society, Event, ActivityItem } from '@/types'

export const mockSocieties: Society[] = [
  { id: '1', name: 'Tech Society', description: 'Coding & innovation', memberCount: 240, category: 'Tech' },
  { id: '2', name: 'Drama Club', description: 'Theatre & performing arts', memberCount: 85, category: 'Arts' },
  { id: '3', name: 'Sports Council', description: 'All sports & fitness', memberCount: 320, category: 'Sports' },
  { id: '4', name: 'Literary Society', description: 'Writing & debates', memberCount: 120, category: 'Literary' },
]

export const mockEvents: Event[] = [
  { id: '1', title: 'Hackathon 2025', society: 'Tech Society', date: '2025-03-01', capacity: 100, registered: 78, status: 'upcoming', location: 'Main Hall' },
  { id: '2', title: 'Drama Fest', society: 'Drama Club', date: '2025-02-20', capacity: 50, registered: 50, status: 'ongoing', location: 'Auditorium' },
  { id: '3', title: 'Cricket Finals', society: 'Sports Council', date: '2025-02-15', capacity: 200, registered: 200, status: 'completed', location: 'Ground' },
]

export const mockActivity: ActivityItem[] = [
  { id: '1', type: 'join', title: 'You joined Tech Society', time: '2h ago', meta: 'Member' },
  { id: '2', type: 'event', title: 'Hackathon 2025 registration opened', time: '5h ago', meta: 'Tech Society' },
  { id: '3', type: 'announcement', title: 'Drama Fest starts tomorrow', time: '1d ago', meta: 'Drama Club' },
]

export const lineChartData = [
  { name: 'Mon', events: 4, members: 120 },
  { name: 'Tue', events: 3, members: 180 },
  { name: 'Wed', events: 6, members: 220 },
  { name: 'Thu', events: 5, members: 190 },
  { name: 'Fri', events: 8, members: 280 },
  { name: 'Sat', events: 2, members: 90 },
  { name: 'Sun', events: 1, members: 50 },
]

export const doughnutData = [
  { name: 'Tech', value: 35, color: '#00f5ff' },
  { name: 'Arts', value: 25, color: '#a855f7' },
  { name: 'Sports', value: 30, color: '#22c55e' },
  { name: 'Literary', value: 10, color: '#f59e0b' },
]

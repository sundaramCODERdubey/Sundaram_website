export interface Society {
  id: string
  name: string
  description: string
  memberCount: number
  image?: string
  category: string
}

export interface Event {
  id: string
  title: string
  society: string
  date: string
  capacity: number
  registered: number
  status: 'upcoming' | 'ongoing' | 'completed'
  location: string
}

export interface ActivityItem {
  id: string
  type: 'join' | 'event' | 'announcement'
  title: string
  time: string
  meta?: string
}

export interface StatCardData {
  label: string
  value: number | string
  change?: string
  icon: string
}

import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import clsx from 'clsx'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen">
      <Sidebar collapsed={sidebarCollapsed} onCollapsedChange={setSidebarCollapsed} />
      <div
        className={clsx(
          'transition-[margin-left] duration-300 ease-in-out',
          'md:ml-[260px]',
          sidebarCollapsed && 'md:ml-[72px]'
        )}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)] p-4 pb-24 md:p-8 md:pb-8">
          {children}
        </main>
      </div>
    </div>
  )
}

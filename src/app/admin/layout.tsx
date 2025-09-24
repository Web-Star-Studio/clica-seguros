'use client'

import { AdminSidebar } from '@/components/admin/sidebar'
import { Menu } from 'lucide-react'
import { useState, type ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex min-h-screen bg-neutral-off-white">
      <AdminSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <div className="flex-1 lg:ml-64">
        <header className="flex items-center gap-3 p-4 bg-white border-b border-neutral-light-gray">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-button hover:bg-neutral-light-gray/50 transition-colors"
          >
            <Menu className="w-5 h-5 text-neutral-medium-gray" />
          </button>
        </header>
        <main className="p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

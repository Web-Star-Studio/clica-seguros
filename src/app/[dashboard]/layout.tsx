
'use client'

import { Sidebar } from '@/components/dashboard/sidebar'
import type { ReactNode } from 'react'

export default function DashboardLayout({
  children,
}: { 
  children: ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-neutral-off-white">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

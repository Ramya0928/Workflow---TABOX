"use client"

import { Home, Settings, BarChart, Users, FileText, GitBranch } from 'lucide-react'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r h-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">TABOX</h1>
      </div>
      <nav className="px-4 space-y-1">
        <SidebarLink href="/" icon={Home} text="My Dashboard" active={pathname === '/'} />
        <SidebarLink href="/applications" icon={FileText} text="Applications" active={pathname === '/applications'} />
        <SidebarLink href="/flow" icon={GitBranch} text="Flow" active={pathname === '/flow'} />
        <SidebarLink href="/sourcing" icon={Users} text="Sourcing" active={pathname === '/sourcing'} />
        <SidebarLink href="/analytics" icon={BarChart} text="Analytics" active={pathname === '/analytics'} />
        <SidebarLink href="/settings" icon={Settings} text="Settings" active={pathname === '/settings'} />
      </nav>
    </div>
  )
}

function SidebarLink({ 
  href, 
  icon: Icon, 
  text, 
  active 
}: { 
  href: string; 
  icon: any; 
  text: string; 
  active: boolean 
}) {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 text-sm rounded-md transition-all duration-300 ease-in-out relative overflow-hidden ${
        active 
          ? 'text-primary font-medium bg-secondary' 
          : 'text-gray-600 hover:text-primary hover:bg-secondary'
      }`}
    >
      <Icon className={`mr-3 h-5 w-5 transition-transform duration-300 ${active ? 'scale-110' : ''}`} />
      {text}
      {active && (
        <span className="absolute inset-y-0 left-0 w-1 bg-primary transition-all duration-300 ease-in-out transform origin-left scale-y-100" />
      )}
    </Link>
  )
}


import type React from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { MobileNav } from "@/components/mobile-nav"
import { UserProfileSidebar } from "@/components/user-profile-sidebar"
import { Building } from "lucide-react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Link href="/dashboard" className="flex items-center gap-2 md:mr-6">
            <Building className="h-6 w-6" />
            <span className="font-bold hidden md:inline-block">KEWI Hostel</span>
          </Link>
          <MobileNav />
          <div className="hidden md:flex md:flex-1">
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 container grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] px-4 sm:px-6">
        <aside className="hidden md:flex flex-col border-r pr-6 pt-6">
          <DashboardNav className="flex-1" />
          <UserProfileSidebar />
        </aside>
        <main className="flex-1 p-4 sm:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}


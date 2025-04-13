"use client"

import Link from "next/link"
import { Building } from "lucide-react"
import { UserAccountButton } from "@/components/user-button"

export function MainNav() {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-6 md:gap-10">
        <Link href="/" className="flex items-center space-x-2">
          <Building className="h-6 w-6" />
          <span className="font-bold inline-block">KEWI Hostel</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/#features"
            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            How It Works
          </Link>
          <Link
            href="/faq"
            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            FAQ
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
        </nav>
      </div>
      <UserAccountButton />
    </div>
  )
}


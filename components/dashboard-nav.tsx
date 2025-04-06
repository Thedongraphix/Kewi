import Link from "next/link"
import { cn } from "@/lib/utils"
import { Building, CreditCard, FileText, Home, MessageSquare, Settings, User } from "lucide-react"

interface DashboardNavProps {
  className?: string
}

export function DashboardNav({ className }: DashboardNavProps) {
  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: "My Application",
      href: "/dashboard/application",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Room Selection",
      href: "/dashboard/rooms",
      icon: <Building className="mr-2 h-4 w-4" />,
    },
    {
      title: "Payments",
      href: "/dashboard/payments",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Messages",
      href: "/dashboard/messages",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <nav className={cn("flex flex-col space-y-1", className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  )
}


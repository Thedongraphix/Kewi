"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, Settings, LogOut } from "lucide-react"
import { DashboardNav } from "@/components/dashboard-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const userName = "John Doe" // Could be fetched from auth or context
  const initials = userName.split(" ").map(n => n[0]).join("")

  const handleNavigation = (path: string) => {
    router.push(path)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 flex flex-col">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <span className="font-bold">KEWI Hostel</span>
        </Link>

        <div className="flex items-center gap-4 py-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="@user" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{userName}</p>
            <p className="text-xs text-muted-foreground">john.doe@kewi.edu</p>
          </div>
        </div>

        <Separator className="my-2" />

        <div className="flex-1 my-4">
          <DashboardNav />
        </div>

        <Separator className="my-2" />

        <nav className="flex flex-col space-y-1">
          <Button variant="ghost" className="justify-start" onClick={() => handleNavigation("/dashboard/profile")}>
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost" className="justify-start" onClick={() => handleNavigation("/dashboard/settings")}>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="justify-start" onClick={() => handleNavigation("/")}>
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}


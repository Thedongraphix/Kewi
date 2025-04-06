"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { Settings, User, LogOut } from "lucide-react"

export function UserProfileSidebar() {
  const router = useRouter()
  const userName = "John Doe" // Could be fetched from auth or context
  const initials = userName.split(" ").map(n => n[0]).join("")

  return (
    <div className="flex flex-col items-center space-y-4 py-4 border-t">
      <Avatar className="h-16 w-16">
        <AvatarImage src="/placeholder.svg" alt="@user" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h3 className="font-medium">{userName}</h3>
        <p className="text-xs text-muted-foreground">john.doe@kewi.edu</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="w-full">
            Manage Account
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="center" forceMount>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push("/")}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}


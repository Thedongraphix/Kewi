"use client"

import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

export function UserAccountButton() {
  const { user, isSignedIn } = useUser()
  
  if (!isSignedIn) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/login">
          <Button variant="ghost" size="sm">Log in</Button>
        </Link>
        <Link href="/register">
          <Button size="sm">Sign up</Button>
        </Link>
      </div>
    )
  }

  return <UserButton afterSignOutUrl="/" />
} 
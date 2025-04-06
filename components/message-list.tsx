"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function MessageList() {
  const [activeConversation, setActiveConversation] = useState("hostel-support")

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search messages..." className="pl-8" />
      </div>

      <div className="space-y-2">
        <Button
          variant={activeConversation === "hostel-support" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveConversation("hostel-support")}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              H
            </div>
            <div className="text-left">
              <p className="font-medium">Hostel Support</p>
              <p className="text-xs text-muted-foreground">Room allocation question</p>
            </div>
          </div>
        </Button>

        <Button
          variant={activeConversation === "maintenance" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveConversation("maintenance")}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">M</div>
            <div className="text-left">
              <p className="font-medium">Maintenance</p>
              <p className="text-xs text-muted-foreground">No recent messages</p>
            </div>
          </div>
        </Button>

        <Button
          variant={activeConversation === "finance" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveConversation("finance")}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">F</div>
            <div className="text-left">
              <p className="font-medium">Finance Office</p>
              <p className="text-xs text-muted-foreground">No recent messages</p>
            </div>
          </div>
        </Button>
      </div>

      <Button variant="outline" className="w-full">
        New Conversation
      </Button>
    </div>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { PaperclipIcon, Send } from "lucide-react"

export function MessageComposer() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message submission
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit} className="border-t p-4">
      <div className="flex gap-2">
        <Textarea
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[80px]"
        />
      </div>
      <div className="flex justify-between mt-2">
        <Button type="button" variant="ghost" size="icon">
          <PaperclipIcon className="h-4 w-4" />
        </Button>
        <Button type="submit" disabled={!message.trim()}>
          <Send className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
    </form>
  )
}


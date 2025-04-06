"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"

export function ProfileForm() {
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()
  const firstName = "John"
  const lastName = "Doe"
  const initials = firstName.charAt(0) + lastName.charAt(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate saving profile
    setTimeout(() => {
      setIsSaving(false)
      toast({
        title: "Profile Updated",
        description: "Your profile information has been updated successfully.",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-6">
        <Avatar className="h-20 w-20">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <Button type="button" variant="outline" size="sm">
            Change Avatar
          </Button>
          <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 2MB.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" defaultValue={firstName} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" defaultValue={lastName} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue="john.doe@kewi.edu" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" defaultValue="+1234567890" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Textarea id="address" defaultValue="123 University Ave, Campus Town" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" placeholder="Tell us a bit about yourself" className="min-h-[100px]" />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  )
}


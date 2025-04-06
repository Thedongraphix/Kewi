"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { createSupabaseClient } from "@/utils/supabase"

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      })
      setIsLoading(false)
      return
    }

    try {
      const supabase = createSupabaseClient()
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            student_id: formData.studentId
          }
        }
      })

      if (error) {
        throw error
      }

      toast({
        title: "Registration successful",
        description: "Your account has been created. Please check your email for verification.",
      })
      router.push("/dashboard")
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" placeholder="John" required onChange={handleChange} value={formData.firstName} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" placeholder="Doe" required onChange={handleChange} value={formData.lastName} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="studentId">Student ID</Label>
        <Input id="studentId" placeholder="KEWI/2023/001" required onChange={handleChange} value={formData.studentId} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m.example@kewi.edu" required onChange={handleChange} value={formData.email} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required onChange={handleChange} value={formData.password} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input id="confirmPassword" type="password" required onChange={handleChange} value={formData.confirmPassword} />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Create account"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By clicking create account, you agree to our{" "}
        <Link href="/terms" className="underline underline-offset-2">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}


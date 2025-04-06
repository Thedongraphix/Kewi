'use client' 
import Link from "next/link"
import { Building } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createSupabaseClient } from "@/utils/supabase"


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createSupabaseClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      // Handle error (show toast, etc.)
      console.error(error)
    } else {
      router.push('/dashboard')
    }
  }
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <Link href="/" className="mb-8 flex items-center gap-2">
          <Building className="h-6 w-6" />
          <span className="font-bold text-xl">KEWI Hostel</span>
        </Link>
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <LoginForm />
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-medium text-primary underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


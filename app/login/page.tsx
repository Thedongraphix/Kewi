'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Building } from "lucide-react"

export default function Login() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/sign-in')
  }, [router])
  
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
            <p className="text-muted-foreground">Redirecting to login page...</p>
          </div>
        </div>
      </div>
    </div>
  )
}


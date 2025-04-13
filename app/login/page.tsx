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
      </div>
    </div>
  )
}


'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function Login() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/sign-in')
  }, [router])
  
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  )
}


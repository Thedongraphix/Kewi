'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Building } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ForgotPassword() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to Clerk's sign-in page with the reset tab open
    router.push('/sign-in?flow=reset_password')
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
            <h1 className="text-3xl font-bold">Forgot Password</h1>
            <p className="text-muted-foreground">Redirecting to password reset page...</p>
          </div>
          <div className="space-y-4">
            <Button className="w-full" asChild>
              <Link href="/sign-in?flow=reset_password">Reset Password</Link>
            </Button>
            <div className="text-center text-sm">
              Remember your password?{" "}
              <Link href="/login" className="font-medium text-primary underline underline-offset-4">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
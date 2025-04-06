import type React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/AuthContext"

const jost = Jost({ 
 subsets: ["latin"],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: "KEWI Hostel Allocation System",
  description: "Smart hostel allocation system for university students",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.variable} font-sans`}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}


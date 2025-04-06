import Link from "next/link"
import { Building } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Building className="h-6 w-6" />
          <span className="font-bold">KEWI Hostel</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/terms"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} KEWI Hostel. All rights reserved.</p>
      </div>
    </footer>
  )
}


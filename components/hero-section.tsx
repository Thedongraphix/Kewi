import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="container relative px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <Building2 className="mr-2 h-4 w-4" />
                KEWI Hostel Allocation System
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Smart Hostel Allocation for KEWI Students
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Experience seamless hostel allocation with our automated system. Apply online, get matched to your ideal room, and enjoy a stress-free accommodation experience.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="w-full min-[400px]:w-auto text-lg">
                  Get Started Now
                </Button>
              </Link>
              <Link href="/#how-it-works">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm">Easy Application</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm">Fair Allocation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm">Secure Payments</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full overflow-hidden rounded-2xl bg-muted shadow-2xl">
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
                <img
                  src="/students.jpg"
                  alt="Modern hostel building"
                  className="h-full w-full object-cover"
                />
                <p className="text-sm text-muted-foreground">Modern hostel facilities at KEWI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


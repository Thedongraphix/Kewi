import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Building2, CheckCircle2, Calendar, Users, MapPin, Book } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-[15%] w-24 h-24 rounded-full bg-primary/10 blur-xl" />
      <div className="absolute bottom-20 left-[10%] w-32 h-32 rounded-full bg-secondary/10 blur-xl" />
      <div className="absolute top-1/3 left-[20%] w-16 h-16 rounded-full bg-primary/5 blur-lg" />
      
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
            {/* Main image with decorative elements */}
            <div className="relative h-[450px] w-full overflow-visible">
              {/* Decorative card elements */}
              <div className="absolute -left-10 top-10 bg-background rounded-lg shadow-xl p-3 z-20 animate-float hidden md:block">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium">Booking Open</span>
                </div>
              </div>
              
              <div className="absolute -right-12 top-1/4 bg-background rounded-lg shadow-xl p-3 z-20 animate-float-slow hidden md:block">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium">200+ Students</span>
                </div>
              </div>
              
              <div className="absolute -left-8 bottom-1/4 bg-background rounded-lg shadow-xl p-3 z-20 animate-float-reverse hidden md:block">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium">Prime Location</span>
                </div>
              </div>
              
              {/* Main image container */}
              <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl group">
                {/* Dotted pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff33_1px,_transparent_1px)] bg-[length:12px_12px] z-[5] opacity-40"></div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity group-hover:opacity-70" />
                <Image
                  src="/students.jpg"
                  alt="Modern hostel facilities at KEWI"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                
                {/* Bottom info panel */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-medium text-white">Applications Open</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Modern Living Spaces</h3>
                  <p className="text-sm text-white/90">Comfortable and well-equipped hostel facilities</p>
                </div>
                
                {/* Corner badge */}
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full z-20">
                  New Term
                </div>
              </div>
              
              {/* Bottom info card */}
              <div className="absolute -right-6 -bottom-6 bg-background rounded-lg shadow-xl p-4 z-20 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Book className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Next Allocation</p>
                    <p className="text-sm font-medium">August 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


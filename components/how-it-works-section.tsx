import { CheckCircle2, ClipboardCheck, Home, UserPlus } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Simple Process, Great Results
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our hostel allocation process is designed to be straightforward and efficient, ensuring you get the best
              possible accommodation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative flex flex-col items-center space-y-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground ring-4 ring-background">
                1
              </div>
            </div>
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <UserPlus className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Register</h3>
            <p className="text-center text-muted-foreground">Create an account with your student details</p>
          </div>
          <div className="group relative flex flex-col items-center space-y-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground ring-4 ring-background">
                2
              </div>
            </div>
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <ClipboardCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Apply</h3>
            <p className="text-center text-muted-foreground">Submit your hostel application with preferences</p>
          </div>
          <div className="group relative flex flex-col items-center space-y-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground ring-4 ring-background">
                3
              </div>
            </div>
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Get Approved</h3>
            <p className="text-center text-muted-foreground">Receive notification of your application approval</p>
          </div>
          <div className="group relative flex flex-col items-center space-y-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground ring-4 ring-background">
                4
              </div>
            </div>
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Move In</h3>
            <p className="text-center text-muted-foreground">Complete payment and move into your assigned room</p>
          </div>
        </div>
      </div>
    </section>
  )
}


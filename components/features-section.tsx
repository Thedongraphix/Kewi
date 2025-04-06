import { Building, Calendar, CreditCard, MessageSquare, Smartphone, UserCheck } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Everything You Need for Hostel Allocation
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides a comprehensive solution for managing hostel allocations, improving efficiency, and
              enhancing the student experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative flex flex-col items-center space-y-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Easy Registration</h3>
            <p className="text-center text-muted-foreground">
              Create your account in minutes and start your hostel application journey.
            </p>
          </div>
          <div className="group relative flex flex-col items-center space-y-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Preference-Based Allocation</h3>
            <p className="text-center text-muted-foreground">
              Specify your preferences and get matched to the most suitable room.
            </p>
          </div>
          <div className="group relative flex flex-col items-center space-y-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Real-Time Availability</h3>
            <p className="text-center text-muted-foreground">
              See available rooms in real-time during the application process.
            </p>
          </div>
          <div className="group relative flex flex-col items-center space-y-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Integrated Messaging</h3>
            <p className="text-center text-muted-foreground">
              Communicate directly with hostel management through our platform.
            </p>
          </div>
          <div className="group relative flex flex-col items-center space-y-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Payment Integration</h3>
            <p className="text-center text-muted-foreground">
              Pay your hostel fees securely through our integrated payment system.
            </p>
          </div>
          <div className="group relative flex flex-col items-center space-y-4 rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Mobile Friendly</h3>
            <p className="text-center text-muted-foreground">
              Access the system from any device with our responsive design.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


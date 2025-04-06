import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { InfoIcon } from "lucide-react"
import { ApplicationStatusCard } from "@/components/application-status-card"
import { RecentNotifications } from "@/components/recent-notifications"
import { RoomAllocationStatus } from "@/components/room-allocation-status"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Welcome back, John! Here's an overview of your hostel application.</p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription className="text-sm">
          Hostel applications for the 2023/2024 academic year are now open. The deadline for submission is August 15,
          2023.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="w-full overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="application">Application</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ApplicationStatusCard />
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Room Status</CardTitle>
                <Badge variant="outline">Pending</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Not Assigned</div>
                <p className="text-xs text-muted-foreground">Room allocation will begin after application approval</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Payment Status</CardTitle>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                  Partial
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$250 / $500</div>
                <p className="text-xs text-muted-foreground">50% of total hostel fee paid</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Complete Payment
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <RoomAllocationStatus />
            <RecentNotifications />
          </div>
        </TabsContent>
        <TabsContent value="application" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Application Details</CardTitle>
              <CardDescription>View and manage your hostel application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium">Application ID</h3>
                  <p className="text-sm text-muted-foreground">APP-2023-001</p>
                </div>
                <div>
                  <h3 className="font-medium">Submission Date</h3>
                  <p className="text-sm text-muted-foreground">July 10, 2023</p>
                </div>
                <div>
                  <h3 className="font-medium">Status</h3>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800">
                    Under Review
                  </Badge>
                </div>
                <div>
                  <h3 className="font-medium">Room Preference</h3>
                  <p className="text-sm text-muted-foreground">Single Room</p>
                </div>
              </div>
              <Button className="w-full">View Full Application</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View your payment history and pending payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border overflow-x-auto">
                <div className="grid grid-cols-4 p-4 font-medium min-w-[600px]">
                  <div>Date</div>
                  <div>Description</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-4 p-4 border-t min-w-[600px]">
                  <div className="text-sm">July 5, 2023</div>
                  <div className="text-sm">Hostel Deposit</div>
                  <div className="text-sm">$250</div>
                  <div>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      Paid
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-4 p-4 border-t min-w-[600px]">
                  <div className="text-sm">August 1, 2023</div>
                  <div className="text-sm">Remaining Balance</div>
                  <div className="text-sm">$250</div>
                  <div>
                    <Badge variant="outline" className="bg-red-100 text-red-800">
                      Pending
                    </Badge>
                  </div>
                </div>
              </div>
              <Button className="w-full">Make a Payment</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


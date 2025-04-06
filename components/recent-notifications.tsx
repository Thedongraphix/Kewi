import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, FileText, CreditCard } from "lucide-react"

export function RecentNotifications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Notifications</CardTitle>
        <CardDescription>Stay updated with the latest information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="rounded-full p-2 bg-blue-100">
            <FileText className="h-4 w-4 text-blue-600" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Application Received</p>
            <p className="text-xs text-muted-foreground">
              Your hostel application has been received and is under review.
            </p>
            <p className="text-xs text-muted-foreground">2 days ago</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="rounded-full p-2 bg-green-100">
            <CreditCard className="h-4 w-4 text-green-600" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Payment Confirmed</p>
            <p className="text-xs text-muted-foreground">Your deposit payment of $250 has been confirmed.</p>
            <p className="text-xs text-muted-foreground">5 days ago</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="rounded-full p-2 bg-yellow-100">
            <Bell className="h-4 w-4 text-yellow-600" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Application Period Open</p>
            <p className="text-xs text-muted-foreground">Hostel applications for the new academic year are now open.</p>
            <p className="text-xs text-muted-foreground">1 week ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


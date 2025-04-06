import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function RoomAllocationStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Room Allocation Status</CardTitle>
        <CardDescription>Track the progress of room allocations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Single Rooms</p>
            <p className="text-sm text-muted-foreground">75% Allocated</p>
          </div>
          <Progress value={75} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Double Rooms</p>
            <p className="text-sm text-muted-foreground">60% Allocated</p>
          </div>
          <Progress value={60} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Triple Rooms</p>
            <p className="text-sm text-muted-foreground">40% Allocated</p>
          </div>
          <Progress value={40} className="h-2" />
        </div>
        <p className="text-xs text-muted-foreground">
          Room allocation is ongoing. You will be notified once a room is assigned to you.
        </p>
      </CardContent>
    </Card>
  )
}


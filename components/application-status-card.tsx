import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ApplicationStatusCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Application Status</CardTitle>
        <Badge variant="outline" className="bg-blue-100 text-blue-800">
          Under Review
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">In Progress</div>
        <p className="text-xs text-muted-foreground">Your application is being reviewed by the hostel management</p>
      </CardContent>
    </Card>
  )
}


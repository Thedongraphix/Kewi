import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

export function PaymentHistory() {
  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="grid grid-cols-5 p-4 font-medium">
          <div>Date</div>
          <div>Reference</div>
          <div>Description</div>
          <div>Amount</div>
          <div>Status</div>
        </div>
        <div className="grid grid-cols-5 p-4 border-t">
          <div className="text-sm">July 5, 2023</div>
          <div className="text-sm">PAY-2023-001</div>
          <div className="text-sm">Hostel Deposit</div>
          <div className="text-sm">$250.00</div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-100 text-green-800">
              Paid
            </Badge>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-5 p-4 border-t">
          <div className="text-sm">June 15, 2023</div>
          <div className="text-sm">APP-2023-001</div>
          <div className="text-sm">Application Fee</div>
          <div className="text-sm">$50.00</div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-100 text-green-800">
              Paid
            </Badge>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">Showing 2 payment records</div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}


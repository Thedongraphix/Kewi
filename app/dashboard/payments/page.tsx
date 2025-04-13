"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, Download, FileText } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function PaymentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Payments</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Manage your hostel payments and invoices
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Summary</CardTitle>
            <CardDescription>Overview of your hostel payment status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$500.00</div>
                  <p className="text-xs text-muted-foreground">For the 2023/2024 academic year</p>
                </CardContent>
              </Card>
              
              <Card className="border shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Amount Paid</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$250.00</div>
                  <p className="text-xs text-muted-foreground">Last payment on July 5, 2023</p>
                </CardContent>
              </Card>
              
              <Card className="border shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$250.00</div>
                  <p className="text-xs text-muted-foreground">Due by August 31, 2023</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Payment Progress</span>
                <span className="text-sm font-medium">50%</span>
              </div>
              <Progress value={50} className="h-2" />
              <p className="text-xs text-muted-foreground">You have paid 50% of the total hostel fee</p>
            </div>
            
            <Button className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" /> Make a Payment
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>Record of your hostel fee payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-hidden">
              <div className="grid grid-cols-5 p-4 bg-muted/50 font-medium">
                <div>Date</div>
                <div>Receipt No.</div>
                <div>Description</div>
                <div>Amount</div>
                <div>Status</div>
              </div>
              
              <div className="grid grid-cols-5 p-4 border-t">
                <div className="text-sm">July 5, 2023</div>
                <div className="text-sm">REC-2023-001</div>
                <div className="text-sm">Hostel Deposit</div>
                <div className="text-sm">$250.00</div>
                <div>
                  <Badge variant="outline" className="bg-green-100 text-green-800">Paid</Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-5 p-4 border-t">
                <div className="text-sm">August 1, 2023</div>
                <div className="text-sm">INV-2023-002</div>
                <div className="text-sm">Remaining Balance</div>
                <div className="text-sm">$250.00</div>
                <div>
                  <Badge variant="outline" className="bg-red-100 text-red-800">Pending</Badge>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Payment History
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Manage your payment methods</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-md">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                </div>
              </div>
              <Badge>Default</Badge>
            </div>
            
            <Button variant="outline" className="w-full">Add Payment Method</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PaymentHistory } from "@/components/payment-history"
import { PaymentForm } from "@/components/payment-form"

export default function PaymentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <p className="text-muted-foreground">Manage your hostel payments and view payment history</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="make-payment">Make Payment</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Summary</CardTitle>
              <CardDescription>Overview of your hostel payment status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Total Fee</h3>
                  <p className="text-3xl font-bold">$500.00</p>
                  <p className="text-sm text-muted-foreground">For the 2023/2024 academic year</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Payment Status</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "50%" }}></div>
                    </div>
                    <span className="text-sm font-medium">50%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">$250.00 paid of $500.00</p>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Payment Schedule</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium">First Installment</p>
                      <p className="text-muted-foreground">$250.00</p>
                      <p className="text-green-600">Paid</p>
                    </div>
                    <div>
                      <p className="font-medium">Second Installment</p>
                      <p className="text-muted-foreground">$250.00</p>
                      <p className="text-red-600">Due: Aug 15, 2023</p>
                    </div>
                    <div>
                      <p className="font-medium">Late Fee</p>
                      <p className="text-muted-foreground">$50.00</p>
                      <p className="text-muted-foreground">If paid after due date</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full">Make a Payment</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="make-payment" className="space-y-4">
          <PaymentForm />
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View all your past payments and receipts</CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentHistory />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


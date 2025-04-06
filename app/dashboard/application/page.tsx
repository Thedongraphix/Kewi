import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ApplicationForm } from "@/components/application-form"
import { ApplicationTimeline } from "@/components/application-timeline"

export default function ApplicationPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Hostel Application</h1>
        <p className="text-muted-foreground">Apply for hostel accommodation or check your application status</p>
      </div>

      <Tabs defaultValue="form" className="space-y-4">
        <TabsList>
          <TabsTrigger value="form">Application Form</TabsTrigger>
          <TabsTrigger value="status">Application Status</TabsTrigger>
        </TabsList>
        <TabsContent value="form" className="space-y-4">
          <ApplicationForm />
        </TabsContent>
        <TabsContent value="status" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Application Timeline</CardTitle>
              <CardDescription>Track the progress of your hostel application</CardDescription>
            </CardHeader>
            <CardContent>
              <ApplicationTimeline />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Download Application PDF
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


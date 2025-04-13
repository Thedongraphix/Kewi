"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Upload, Eye } from "lucide-react"

export default function ApplicationPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">My Application</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          View and manage your hostel application details
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Application Status</CardTitle>
            <CardDescription>Current status of your hostel application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Application ID</h3>
                  <p className="text-base">APP-2023-001</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Status</h3>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 mt-1">
                    Under Review
                  </Badge>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Submitted On</h3>
                  <p className="text-base">July 10, 2023</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Room Preference</h3>
                  <p className="text-base">Single Room</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Special Requests</h3>
                  <p className="text-base">Ground floor room, Close to library</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Academic Year</h3>
                  <p className="text-base">2023/2024</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex items-center gap-2">
                <Eye className="h-4 w-4" /> View Complete Application
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="h-4 w-4" /> Download as PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Supporting Documents</CardTitle>
            <CardDescription>Documents submitted with your application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Student ID Card</p>
                    <p className="text-sm text-muted-foreground">Uploaded on July 8, 2023</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">View</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Admission Letter</p>
                    <p className="text-sm text-muted-foreground">Uploaded on July 8, 2023</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">View</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Medical Certificate</p>
                    <p className="text-sm text-muted-foreground">Uploaded on July 9, 2023</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            </div>
            
            <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
              <Upload className="h-4 w-4" /> Upload Additional Document
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


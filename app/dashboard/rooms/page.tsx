import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RoomList } from "@/components/room-list"
import { RoomDetails } from "@/components/room-details"

export default function RoomsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Room Selection</h1>
        <p className="text-muted-foreground">Browse available rooms and select your preferences</p>
      </div>

      <Tabs defaultValue="available" className="space-y-4">
        <TabsList>
          <TabsTrigger value="available">Available Rooms</TabsTrigger>
          <TabsTrigger value="selected">Selected Room</TabsTrigger>
        </TabsList>
        <TabsContent value="available" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Room Availability</CardTitle>
              <CardDescription>Browse and filter available rooms based on your preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <RoomList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="selected" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Selected Room</CardTitle>
              <CardDescription>View details of your selected room</CardDescription>
            </CardHeader>
            <CardContent>
              <RoomDetails />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


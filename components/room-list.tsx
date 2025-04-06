"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function RoomList() {
  const { toast } = useToast()

  const handleRoomSelect = (roomId: string) => {
    toast({
      title: "Room Selected",
      description: `You have selected room ${roomId}. Please confirm your selection.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="roomType">Room Type</Label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select room type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="single">Single Room</SelectItem>
              <SelectItem value="double">Double Room</SelectItem>
              <SelectItem value="triple">Triple Room</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="building">Building</Label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select building" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Buildings</SelectItem>
              <SelectItem value="a">Building A</SelectItem>
              <SelectItem value="b">Building B</SelectItem>
              <SelectItem value="c">Building C</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input id="search" placeholder="Search by room number" />
        </div>
      </div>

      <div className="rounded-md border">
        <div className="grid grid-cols-5 p-4 font-medium">
          <div>Room</div>
          <div>Type</div>
          <div>Building</div>
          <div>Price</div>
          <div>Action</div>
        </div>
        <div className="grid grid-cols-5 p-4 border-t">
          <div className="text-sm">A-101</div>
          <div className="text-sm">Single</div>
          <div className="text-sm">Building A</div>
          <div className="text-sm">$500/semester</div>
          <div>
            <Button size="sm" onClick={() => handleRoomSelect("A-101")}>
              Select
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-5 p-4 border-t">
          <div className="text-sm">B-203</div>
          <div className="text-sm">Double</div>
          <div className="text-sm">Building B</div>
          <div className="text-sm">$400/semester</div>
          <div>
            <Button size="sm" onClick={() => handleRoomSelect("B-203")}>
              Select
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-5 p-4 border-t">
          <div className="text-sm">C-305</div>
          <div className="text-sm">Triple</div>
          <div className="text-sm">Building C</div>
          <div className="text-sm">$350/semester</div>
          <div>
            <Button size="sm" onClick={() => handleRoomSelect("C-305")}>
              Select
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-5 p-4 border-t">
          <div className="text-sm">A-205</div>
          <div className="text-sm">Single</div>
          <div className="text-sm">Building A</div>
          <div className="text-sm">$500/semester</div>
          <div>
            <Button size="sm" onClick={() => handleRoomSelect("A-205")}>
              Select
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">Showing 4 of 24 available rooms</div>
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


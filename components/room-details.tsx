import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function RoomDetails() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg overflow-hidden border">
        <img src="/placeholder.svg?height=300&width=600" alt="Room preview" className="w-full h-64 object-cover" />
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold">Room A-101</h3>
              <p className="text-muted-foreground">Building A, 1st Floor</p>
            </div>
            <Badge>Single Room</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Room Size</h4>
              <p className="text-sm text-muted-foreground">15 sq. meters</p>
            </div>
            <div>
              <h4 className="font-medium">Price</h4>
              <p className="text-sm text-muted-foreground">$500 per semester</p>
            </div>
            <div>
              <h4 className="font-medium">Bathroom</h4>
              <p className="text-sm text-muted-foreground">Private</p>
            </div>
            <div>
              <h4 className="font-medium">Furniture</h4>
              <p className="text-sm text-muted-foreground">Bed, Desk, Wardrobe</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium">Amenities</h4>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1">
              <li>• High-speed Wi-Fi</li>
              <li>• Air conditioning</li>
              <li>• Study area</li>
              <li>• Laundry facilities (shared)</li>
              <li>• Kitchen access (shared)</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button className="w-full">Confirm Selection</Button>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


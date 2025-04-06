import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageList } from "@/components/message-list"
import { MessageComposer } from "@/components/message-composer"

export default function MessagesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">Communicate with hostel management and support staff</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <CardDescription>Your message threads</CardDescription>
          </CardHeader>
          <CardContent>
            <MessageList />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Hostel Support</CardTitle>
            <CardDescription>Conversation with hostel management</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="border-t p-4 h-[400px] overflow-y-auto flex flex-col gap-4">
              <div className="flex gap-4 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  H
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">Hello John, how can we help you today?</p>
                  <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                </div>
              </div>

              <div className="flex gap-4 max-w-[80%] self-end">
                <div className="bg-primary p-3 rounded-lg text-primary-foreground">
                  <p className="text-sm">
                    Hi, I have a question about my room allocation. When will I know which room I've been assigned?
                  </p>
                  <p className="text-xs text-primary-foreground/80 mt-1">10:32 AM</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                  J
                </div>
              </div>

              <div className="flex gap-4 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  H
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">
                    Room allocations will be finalized by August 20th. You'll receive an email notification once your
                    room has been assigned.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">10:35 AM</p>
                </div>
              </div>
            </div>

            <MessageComposer />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


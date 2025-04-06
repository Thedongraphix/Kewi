export function ApplicationTimeline() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            1
          </div>
          <div className="h-full w-px bg-border"></div>
        </div>
        <div className="space-y-1 pb-8">
          <p className="text-sm font-medium">Application Submitted</p>
          <p className="text-xs text-muted-foreground">July 10, 2023 at 10:30 AM</p>
          <p className="text-sm">Your application has been successfully submitted.</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            2
          </div>
          <div className="h-full w-px bg-border"></div>
        </div>
        <div className="space-y-1 pb-8">
          <p className="text-sm font-medium">Application Under Review</p>
          <p className="text-xs text-muted-foreground">July 12, 2023 at 9:15 AM</p>
          <p className="text-sm">Your application is currently being reviewed by the hostel management.</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-dashed">3</div>
          <div className="h-full w-px bg-border"></div>
        </div>
        <div className="space-y-1 pb-8">
          <p className="text-sm font-medium text-muted-foreground">Application Approved</p>
          <p className="text-xs text-muted-foreground">Pending</p>
          <p className="text-sm text-muted-foreground">Waiting for approval from the hostel management.</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-dashed">4</div>
          <div className="h-full w-px bg-border"></div>
        </div>
        <div className="space-y-1 pb-8">
          <p className="text-sm font-medium text-muted-foreground">Room Allocation</p>
          <p className="text-xs text-muted-foreground">Pending</p>
          <p className="text-sm text-muted-foreground">Room will be allocated after application approval.</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-dashed">5</div>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">Payment Confirmation</p>
          <p className="text-xs text-muted-foreground">Pending</p>
          <p className="text-sm text-muted-foreground">Final payment confirmation and move-in details.</p>
        </div>
      </div>
    </div>
  )
}


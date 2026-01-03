import { Clock, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RulesSection() {
  return (
    <section className="py-12 border-b border-border">
      <h2 className="text-xl font-semibold text-foreground mb-2">Property rules</h2>
      <p className="text-muted-foreground mb-6">Setting your trip up for success</p>

      <div className="space-y-4">
        {/* Check-in/out */}
        <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1">Convenient check-in & out times</h3>
            <p className="text-sm text-muted-foreground">
              Check-in anytime after 4:00 pm, and check-out anytime before 10:00 am.
            </p>
          </div>
        </div>

        {/* Cancellation */}
        <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <RefreshCw className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1">Easy cancellation</h3>
            <p className="text-sm text-muted-foreground">
              Changed your mind? You can cancel your trip for up to 14 days prior to start and receive a full refund in
              Wander credits.
            </p>
          </div>
        </div>
      </div>

      <Button variant="link" className="text-primary p-0 h-auto mt-4">
        See all rules
      </Button>
    </section>
  )
}

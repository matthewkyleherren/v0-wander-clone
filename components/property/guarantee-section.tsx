import { Clock, RefreshCcw, Sparkles, Shield } from "lucide-react";

interface GuaranteeSectionProps {
  checkInTime?: string;
  checkOutTime?: string;
  petsAllowed?: boolean;
  cancellationPolicy?: string;
}

export function GuaranteeSection({
  checkInTime = "4:00 PM",
  checkOutTime = "10:00 AM",
  petsAllowed = false,
  cancellationPolicy,
}: GuaranteeSectionProps) {
  return (
    <div className="py-6 border-y">
      {/* OffGrid Guarantee Badge */}
      <div className="flex items-center gap-4 mb-6 p-4 bg-card rounded-xl border shadow-md">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <span className="text-xs font-bold text-primary-foreground">5</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg">The OffGrid Guarantee</h3>
          <p className="text-sm text-muted-foreground">
            Book with confidence. Premium quality assured.
          </p>
        </div>
      </div>

      {/* Feature list */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium">Flexible check-in & out</h4>
            <p className="text-sm text-muted-foreground">
              Check-in after {checkInTime} · Check-out before {checkOutTime}
              {petsAllowed && " · Pets allowed"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <RefreshCcw className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium">Easy cancellation</h4>
            <p className="text-sm text-muted-foreground">
              {cancellationPolicy ||
                "Cancel within 24 hours for a full refund."}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium">Pristine homes, no to-do lists</h4>
            <p className="text-sm text-muted-foreground">
              Arrive to five star cleaning · No chores at checkout · Just lock
              up and go
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="py-8 border-b border-gray-100">
      {/* Feature list */}
      <div className="space-y-5">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
            <Clock className="h-[18px] w-[18px] text-gray-500" />
          </div>
          <div>
            <h4 className="font-normal text-[15px] text-gray-900 mb-0.5">
              Flexible check-in & out
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Check-in after {checkInTime} · Check-out before {checkOutTime}
              {petsAllowed && " · Pets allowed"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
            <RefreshCcw className="h-[18px] w-[18px] text-gray-500" />
          </div>
          <div>
            <h4 className="font-normal text-[15px] text-gray-900 mb-0.5">
              Easy cancellation
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              {cancellationPolicy || "Cancel within 24 hours for a full refund"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
            <Sparkles className="h-[18px] w-[18px] text-gray-500" />
          </div>
          <div>
            <h4 className="font-normal text-[15px] text-gray-900 mb-0.5">
              Pristine homes, no to-do lists
            </h4>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Arrive to five star cleaning · No chores at checkout · Just lock
              up and go
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

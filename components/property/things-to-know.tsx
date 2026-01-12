"use client";

import { useState } from "react";
import {
  Clock,
  Users,
  PawPrint,
  Ban,
  PartyPopper,
  ChevronDown,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ThingsToKnowProps {
  checkInTime?: string;
  checkOutTime?: string;
  guests?: number;
  petsAllowed?: boolean;
  petFee?: number;
  maxPets?: number;
  smokingAllowed?: boolean;
  smokingFee?: number;
  eventsAllowed?: boolean;
  eventsRequireApproval?: boolean;
  quietHoursStart?: string;
  quietHoursEnd?: string;
  minimumStay?: number;
  maximumStay?: number;
  cancellationPolicy?: string;
  houseRules?: { icon: string; rule: string }[];
}

export function ThingsToKnow({
  checkInTime = "4:00 PM",
  checkOutTime = "10:00 AM",
  guests = 10,
  petsAllowed = false,
  petFee,
  smokingAllowed = false,
  smokingFee,
  eventsAllowed = false,
  eventsRequireApproval = true,
  cancellationPolicy = "Cancel within 24 hours for a full refund.",
}: ThingsToKnowProps) {
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showCancellationModal, setShowCancellationModal] = useState(false);

  return (
    <section className="py-10 border-b border-gray-100">
      <h2 className="text-[22px] font-normal text-gray-900 mb-3">
        Things to know
      </h2>
      <p className="text-[14px] text-gray-600 mb-8">
        Here are some things which you should know before booking Wander{" "}
      </p>

      <div className="grid md:grid-cols-[2fr_1fr] gap-4">
        {/* House Rules - Grey header box */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="bg-gray-50 px-5 py-3">
            <h3 className="text-[11px] font-semibold tracking-[0.1em] text-gray-600 uppercase">
              House Rules
            </h3>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-[14px] text-gray-700">
                  Check-in: after {checkInTime}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PawPrint className="h-4 w-4 text-gray-400" />
                <span className="text-[14px] text-gray-700">
                  {petsAllowed ? "Pets allowed" : "No pets"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-[14px] text-gray-700">
                  Check-out: before {checkOutTime}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Ban className="h-4 w-4 text-gray-400" />
                <span className="text-[14px] text-gray-700">
                  No smoking - fees will apply
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-[14px] text-gray-700">
                  {guests} guests maximum
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PartyPopper className="h-4 w-4 text-gray-400" />
                <span className="text-[14px] text-gray-700">
                  {eventsRequireApproval
                    ? "Events require approval"
                    : "No events"}
                </span>
              </div>
            </div>
            <button
              className="text-[14px] text-gray-900 underline mt-5 hover:text-gray-600"
              onClick={() => setShowRulesModal(true)}
            >
              Read more
            </button>
          </div>
        </div>

        {/* Cancellation Policy - Grey header box */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="bg-gray-50 px-5 py-3">
            <h3 className="text-[11px] font-semibold tracking-[0.1em] text-gray-600 uppercase">
              Cancellation Policy
            </h3>
          </div>
          <div className="p-5">
            <p className="text-[14px] text-gray-700 leading-relaxed">
              Cancel within 24 hours for a full refund.
            </p>
            <button
              className="text-[14px] text-gray-900 underline mt-4 hover:text-gray-600"
              onClick={() => setShowCancellationModal(true)}
            >
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* House Rules Modal */}
      <Dialog open={showRulesModal} onOpenChange={setShowRulesModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>House Rules</DialogTitle>
          </DialogHeader>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-gray-400" />
              <span>Check-in: after {checkInTime}</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-gray-400" />
              <span>Check-out: before {checkOutTime}</span>
            </li>
            <li className="flex items-center gap-3">
              <Users className="h-5 w-5 text-gray-400" />
              <span>{guests} guests maximum</span>
            </li>
            <li className="flex items-center gap-3">
              <PawPrint className="h-5 w-5 text-gray-400" />
              <span>{petsAllowed ? "Pets allowed" : "No pets"}</span>
            </li>
            <li className="flex items-center gap-3">
              <Ban className="h-5 w-5 text-gray-400" />
              <span>No smoking - fees will apply</span>
            </li>
            <li className="flex items-center gap-3">
              <PartyPopper className="h-5 w-5 text-gray-400" />
              <span>
                {eventsRequireApproval
                  ? "Events require approval"
                  : "No events"}
              </span>
            </li>
          </ul>
        </DialogContent>
      </Dialog>

      {/* Cancellation Policy Modal */}
      <Dialog
        open={showCancellationModal}
        onOpenChange={setShowCancellationModal}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Cancellation Policy</DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <p className="text-gray-600">{cancellationPolicy}</p>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">Standard Policy</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Full refund within 24 hours of booking</li>
                <li>• 50% refund up to 7 days before check-in</li>
                <li>• No refund within 7 days of check-in</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

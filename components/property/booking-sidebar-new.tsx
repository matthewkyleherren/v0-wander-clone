"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface BookingSidebarProps {
  pricePerNight: number;
  cleaningFee?: number;
  securityDeposit?: number;
  extraGuestFee?: number;
  instantBooking?: boolean;
  minimumStay?: number;
}

export function BookingSidebarNew({
  pricePerNight,
  cleaningFee = 0,
  securityDeposit = 0,
  extraGuestFee = 0,
  instantBooking = true,
  minimumStay = 1,
}: BookingSidebarProps) {
  return (
    <div className="sticky top-24">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        {/* Header */}
        <h3 className="text-[17px] font-normal text-gray-900 mb-6">
          Explore dates and pricing
        </h3>

        {/* Date inputs */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-gray-300 transition-colors">
            <span className="text-[13px] text-gray-500">Check-in</span>
          </div>
          <div className="border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-gray-300 transition-colors">
            <span className="text-[13px] text-gray-500">Check-out</span>
          </div>
        </div>

        {/* Select dates button */}
        <Button className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-[15px] font-normal">
          Select dates
        </Button>

        {/* Guarantee section */}
        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
          <div className="w-10 h-10 rounded-full bg-[#8B7355] flex items-center justify-center flex-shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <p className="text-[14px] font-normal text-gray-900">
              The OffGrid Guarantee
            </p>
            <p className="text-[13px] text-gray-500">
              Book with confidence.{" "}
              <button className="underline hover:text-gray-700">
                Read more.
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

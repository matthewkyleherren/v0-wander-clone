"use client";

import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConciergeSection() {
  return (
    <section className="py-12 border-b border-gray-200">
      <h2 className="text-[22px] font-semibold text-gray-900 mb-6">
        Have a question?
      </h2>

      <div className="border border-gray-200 rounded-2xl p-6">
        <div className="flex items-start gap-3 mb-5">
          <MessageCircle className="h-5 w-5 text-gray-400 mt-0.5" />
          <div>
            <h3 className="text-[16px] font-semibold text-gray-900">
              Chat with Concierge
            </h3>
            <p className="text-[14px] text-gray-500 mt-1">
              Talk with the concierge to ask any question you might have
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 gap-2 px-5"
          >
            <MessageCircle className="h-4 w-4" />
            Chat now
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 gap-2 px-5"
          >
            <Phone className="h-4 w-4" />
            Call (415) 799-3400
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConciergeSection() {
  return (
    <section className="py-10 border-b border-gray-100">
      <h2 className="text-[28px] font-normal text-gray-900 mb-8">
        Have a question?
      </h2>

      <div className="flex items-start gap-3 mb-6">
        <MessageCircle className="h-5 w-5 text-gray-400 mt-1" />
        <div>
          <h3 className="text-[18px] font-medium text-gray-900 mb-1">
            Chat with Concierge
          </h3>
          <p className="text-[15px] text-gray-600">
            Talk with the concierge to ask any question you might have
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          className="rounded-lg border-gray-200 text-gray-900 hover:bg-gray-50 gap-2 px-5 h-11 text-[15px] font-normal"
        >
          <MessageCircle className="h-4 w-4" />
          Chat now
        </Button>
        <Button
          variant="outline"
          className="rounded-lg border-gray-200 text-gray-900 hover:bg-gray-50 gap-2 px-5 h-11 text-[15px] font-normal"
        >
          <Phone className="h-4 w-4" />
          Call (415) 799-3400
        </Button>
      </div>
    </section>
  );
}

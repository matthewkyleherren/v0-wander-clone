"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Users,
  PawPrint,
  Accessibility,
  TreePine,
  Volume2,
  Thermometer,
  Plus,
  Minus,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { SpecialNotice } from "@/lib/sanity/types";

interface BeforeYouBookProps {
  specialNotices?: SpecialNotice[];
  petsAllowed?: boolean;
  petFee?: number;
  maxPets?: number;
  petRules?: string;
  guests?: number;
}

const categoryIcons: Record<string, React.ElementType> = {
  accessibility: Accessibility,
  safety: AlertTriangle,
  occupancy: Users,
  environment: TreePine,
  noise: Volume2,
  pool: Thermometer,
  pets: PawPrint,
  other: AlertTriangle,
};

// Default notices matching Wander's style
const defaultNotices: SpecialNotice[] = [
  {
    category: "occupancy",
    title: "Occupancy notice",
    description:
      "This home follows a strict maximum occupancy rule. Please make sure that the total number of guests accompanying you (including both children and adults) doesn't exceed the indicated maximum occupancy to avoid cancellation of your stay and additional charges.",
  },
  {
    category: "accessibility",
    title: "Accessibility",
    description:
      "This property has stairs and may not be suitable for guests with mobility challenges. Please contact us if you have specific accessibility requirements.",
  },
  {
    category: "noise",
    title: "Noise",
    description:
      "This property is located in a quiet residential area. Please be mindful of noise levels, especially during evening hours.",
  },
  {
    category: "pool",
    title: "Pool heating",
    description:
      "Pool heating is available for an additional fee. Please request pool heating at least 24 hours before your arrival.",
  },
];

export function BeforeYouBook({
  specialNotices = [],
  petsAllowed = false,
  petFee,
  maxPets,
  petRules,
  guests = 10,
}: BeforeYouBookProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Use provided notices or defaults
  const notices =
    specialNotices && specialNotices.length > 0
      ? specialNotices
      : defaultNotices;

  // Add pet notice if pets are allowed
  const allNotices = petsAllowed
    ? [
        ...notices,
        {
          category: "pets" as const,
          title: "Pets allowed",
          description:
            petRules ||
            `This home is pet friendly. We allow a maximum of ${maxPets || 2} pets per reservation${petFee ? `, with a flat pet fee of $${petFee} total` : ""}.`,
        },
      ]
    : notices;

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  if (allNotices.length === 0) return null;

  return (
    <section className="py-10 border-b border-gray-100">
      <h2 className="text-[22px] font-normal text-gray-900 mb-8">
        Before you book
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {allNotices.map((notice, index) => {
          const id = `notice-${index}`;
          const isOpen = openItems.includes(id);
          const Icon = categoryIcons[notice.category] || AlertTriangle;

          return (
            <Collapsible
              key={id}
              open={isOpen}
              onOpenChange={() => toggleItem(id)}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-200 text-left shadow-[0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                  <span className="text-[15px] font-medium text-gray-900 dark:text-gray-100">
                    {notice.title}
                  </span>
                </div>
                {isOpen ? (
                  <Minus className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                ) : (
                  <Plus className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-5 pt-3 border border-t-0 border-gray-100 dark:border-gray-800 rounded-b-2xl -mt-2 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] bg-white dark:bg-gray-900">
                <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed pl-8">
                  {notice.description}
                </p>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </section>
  );
}

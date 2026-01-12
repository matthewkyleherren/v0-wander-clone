"use client";

import { useState } from "react";
import { Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
}

// Mock reviews data
const mockReviews = [
  {
    id: "1",
    author: "Catherine S",
    avatar: "",
    stayDate: "Nov 2025",
    content:
      "The home was in the perfect location for our family and the activities we were participating in. The property is beyond spacious. We already booked our stay here next year.",
    rating: 5,
  },
  {
    id: "2",
    author: "Courtney M",
    avatar: "",
    stayDate: "Oct 2025",
    content:
      "This stay was with myself, my three sons, two daughter-in-laws, and three grandkids. Everyone was so impressed with the setting, the decor, the privacy, just everything was perfect.",
    rating: 5,
  },
  {
    id: "3",
    author: "Laurel W",
    avatar: "",
    stayDate: "Oct 2025",
    content:
      "Absolutely stunning property! The views were breathtaking and the amenities exceeded our expectations. The concierge service was top-notch and helped us plan amazing local activities.",
    rating: 5,
  },
];

const ratingCategories = [
  { key: "cleanliness", label: "Cleanliness", icon: "🧹", value: 5 },
  { key: "value", label: "Value", icon: "💰", value: 5 },
  { key: "location", label: "Location", icon: "📍", value: 5 },
  { key: "concierge", label: "Concierge Quality", icon: "💬", value: 5 },
  { key: "checkin", label: "Check-in", icon: "🔑", value: 5 },
  { key: "wow", label: "Wow Factor", icon: "✨", value: 5 },
];

export function ReviewsSection({ rating, reviewCount }: ReviewsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  // Calculate rating distribution (mock)
  const ratingDistribution = [
    { stars: 5, percentage: 100 },
    { stars: 4, percentage: 0 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  return (
    <section className="py-10 border-b border-gray-100" id="reviews">
      <div className="grid lg:grid-cols-[280px_1fr] gap-12">
        {/* Left column - Rating summary */}
        <div>
          {/* Badge and score */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-[#8B7355] flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p className="text-[32px] font-semibold leading-none">
                {Math.round(rating)}
              </p>
              <p className="text-[13px] text-gray-500 mt-1">
                based on {reviewCount} reviews
              </p>
            </div>
          </div>

          {/* Rating bars */}
          <div className="space-y-2 mt-6">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-8">
                  <Star className="h-3 w-3 fill-current text-gray-900" />
                  <span className="text-[13px] text-gray-600">
                    {item.stars}
                  </span>
                </div>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-900 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - AI Summary and categories */}
        <div>
          {/* AI Summary */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-gray-400" />
              <span className="text-[11px] font-medium tracking-[0.1em] text-gray-500 uppercase">
                AI Summary
              </span>
            </div>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Guests love this home for its hot tub, private boat dock and canal
              views. They praise the inviting outdoor dining, patio and fire pit
              that make evenings memorable and appreciate the spacious outdoor
              seating for relaxing waterfront stays.
            </p>
          </div>

          {/* Rating categories - 2 column grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            {ratingCategories.map((category) => (
              <div
                key={category.key}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">{category.icon}</span>
                  <span className="text-[14px] text-gray-700">
                    {category.label}
                  </span>
                </div>
                <span className="text-[14px] font-medium text-gray-900">
                  {category.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {mockReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col min-h-[200px] shadow-[0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-200"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gray-900 text-gray-900" />
              ))}
            </div>

            {/* Review text - grows to fill space */}
            <p className="text-[14px] text-gray-600 leading-relaxed flex-1 line-clamp-4">
              {review.content}
            </p>

            {/* Author - at bottom */}
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
              <Avatar className="h-9 w-9">
                <AvatarImage src={review.avatar} />
                <AvatarFallback className="bg-gray-100 text-gray-600 text-sm">
                  {review.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[14px] font-medium text-gray-900">
                  {review.author}
                </p>
                <p className="text-[12px] text-gray-500">
                  Stayed in {review.stayDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {reviewCount > 3 && (
        <Button
          variant="outline"
          className="mt-6 rounded-lg border-gray-200 text-gray-900 text-[14px] font-normal h-10 px-5 hover:bg-gray-50"
          onClick={() => setShowAll(true)}
        >
          Read all reviews
        </Button>
      )}

      {/* All reviews modal */}
      <Dialog open={showAll} onOpenChange={setShowAll}>
        <DialogContent className="max-w-2xl max-h-[85vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-foreground" />
              {rating.toFixed(1)} · {reviewCount} reviews
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-6">
              {mockReviews.map((review) => (
                <div key={review.id} className="pb-6 border-b last:border-0">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{review.author}</p>
                      <p className="text-sm text-muted-foreground">
                        Stayed in {review.stayDate}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.content}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}

"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    text: "Such an amazing property!! One of the prettiest places we have ever stayed! We would stay here again!",
    author: "Hayley",
    location: "Los Angeles, CA",
    image: "/professional-woman-headshot.png",
  },
  {
    text: "OffGrid exceeded all our expectations. The home's amenities were state-of-the-art and easy to use. We particularly enjoyed the outdoor space, which was beautifully landscaped and perfect for relaxing.",
    author: "Mark",
    location: "Phoenix, AZ",
    image: "/professional-man-headshot.png",
  },
  {
    text: "Absolutely loved our time here. Felt right at home. Quick and responsive to take care of anything we needed. So helpful with recommendations and accommodations. We will definitely be back many times!",
    author: "Kate",
    location: "Houston, TX",
    image: "/smiling-woman-headshot.png",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const testimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-6 border-b border-border">
      <h2 className="text-sm font-medium text-foreground mb-4">Guests love OffGrid</h2>

      <div className="relative bg-muted rounded-lg p-5">
        <Quote className="h-5 w-5 text-muted-foreground/40 mb-3" />

        <p className="text-foreground text-sm leading-relaxed mb-5">"{testimonial.text}"</p>

        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
            <p className="text-xs text-muted-foreground">from {testimonial.location}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-1.5 mt-5">
          <Button variant="outline" size="icon" onClick={goToPrevious} className="h-8 w-8 bg-transparent">
            <ChevronLeft className="h-3.5 w-3.5" />
          </Button>
          <Button variant="outline" size="icon" onClick={goToNext} className="h-8 w-8 bg-transparent">
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
          <span className="text-xs text-muted-foreground ml-1.5">
            {currentIndex + 1} / {testimonials.length}
          </span>
        </div>
      </div>

      <Button variant="link" className="text-foreground p-0 h-auto mt-3 text-xs underline">
        All testimonials
      </Button>
    </section>
  )
}

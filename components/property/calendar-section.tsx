"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalendarSectionProps {
  propertyName: string
}

export function CalendarSection({ propertyName }: CalendarSectionProps) {
  const [currentMonth, setCurrentMonth] = useState(0) // 0 = current month

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"]

  // Get current date
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonthIndex = today.getMonth()

  // Calculate the two months to display
  const firstMonth = new Date(currentYear, currentMonthIndex + currentMonth, 1)
  const secondMonth = new Date(currentYear, currentMonthIndex + currentMonth + 1, 1)

  const generateCalendarDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: null, isCurrentMonth: false })
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
      days.push({ day, isCurrentMonth: true, isPast })
    }

    return days
  }

  const firstMonthDays = generateCalendarDays(firstMonth.getFullYear(), firstMonth.getMonth())
  const secondMonthDays = generateCalendarDays(secondMonth.getFullYear(), secondMonth.getMonth())

  const goToPreviousMonth = () => {
    setCurrentMonth((prev) => prev - 1)
  }

  const goToNextMonth = () => {
    setCurrentMonth((prev) => prev + 1)
  }

  return (
    <section className="py-10 border-b border-gray-100">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
        {/* Left side - Calendar */}
        <div>
          <h2 className="text-[28px] font-normal text-gray-900 mb-2">
            Select dates in OffGrid {propertyName}
          </h2>
          <p className="text-[15px] text-gray-600 mb-8">
            Choose your check-in & check-out dates
          </p>

          <div className="border border-gray-200 rounded-2xl p-8 bg-white">
            {/* Calendar Header with Navigation */}
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPreviousMonth}
                className="h-10 w-10 rounded-full hover:bg-gray-100"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </Button>

              <div className="flex gap-24">
                <h3 className="text-[18px] font-medium text-gray-900">
                  {months[firstMonth.getMonth()]} {firstMonth.getFullYear()}
                </h3>
                <h3 className="text-[18px] font-medium text-gray-900">
                  {months[secondMonth.getMonth()]} {secondMonth.getFullYear()}
                </h3>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToNextMonth}
                className="h-10 w-10 rounded-full hover:bg-gray-100"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </Button>
            </div>

            {/* Two-month calendar grid */}
            <div className="grid grid-cols-2 gap-12">
              {/* First Month */}
              <div>
                {/* Day labels */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {daysOfWeek.map((day, i) => (
                    <div
                      key={i}
                      className="text-center text-[13px] font-medium text-gray-500 h-10 flex items-center justify-center"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-2">
                  {firstMonthDays.map((item, i) => (
                    <button
                      key={i}
                      disabled={!item.isCurrentMonth || item.isPast}
                      className={`h-10 flex items-center justify-center text-[15px] rounded-lg transition-colors ${
                        !item.isCurrentMonth || item.isPast
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-900 hover:bg-gray-100 cursor-pointer"
                      }`}
                    >
                      {item.day || ""}
                    </button>
                  ))}
                </div>
              </div>

              {/* Second Month */}
              <div>
                {/* Day labels */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {daysOfWeek.map((day, i) => (
                    <div
                      key={i}
                      className="text-center text-[13px] font-medium text-gray-500 h-10 flex items-center justify-center"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-2">
                  {secondMonthDays.map((item, i) => (
                    <button
                      key={i}
                      disabled={!item.isCurrentMonth || item.isPast}
                      className={`h-10 flex items-center justify-center text-[15px] rounded-lg transition-colors ${
                        !item.isCurrentMonth || item.isPast
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-900 hover:bg-gray-100 cursor-pointer"
                      }`}
                    >
                      {item.day || ""}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Guarantee */}
        <div>
          <h3 className="text-[15px] font-medium text-gray-900 mb-3">
            Explore dates and pricing
          </h3>

          <div className="flex gap-2 mb-4">
            <div className="flex-1 border border-gray-200 rounded-lg px-4 py-3 bg-white">
              <p className="text-[11px] text-gray-500 mb-1">Check-in</p>
              <p className="text-[14px] text-gray-900">Select date</p>
            </div>
            <div className="flex-1 border border-gray-200 rounded-lg px-4 py-3 bg-white">
              <p className="text-[11px] text-gray-500 mb-1">Check-out</p>
              <p className="text-[14px] text-gray-900">Select date</p>
            </div>
          </div>

          <Button className="w-full rounded-lg h-11 text-[15px] font-medium mb-6">
            Select dates
          </Button>

          {/* Guarantee box */}
          <div className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#8B7355] flex items-center justify-center flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[15px] font-medium text-gray-900 mb-1">
                The OffGrid Guarantee
              </h4>
              <button className="text-[13px] text-gray-600 underline hover:text-gray-900 transition-colors">
                Book with confidence. Read more.
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

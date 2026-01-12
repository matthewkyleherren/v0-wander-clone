'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';

const suggestedRegions = [
  { name: 'California', image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=100&h=100&fit=crop' },
  { name: 'Florida', image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=100&h=100&fit=crop' },
  { name: 'North Carolina', image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=100&h=100&fit=crop' },
];

export function HeroSearchBar() {
  const [locationOpen, setLocationOpen] = useState(false);
  const [datesOpen, setDatesOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [location, setLocation] = useState('Wherever');
  const [dates, setDates] = useState('Whenever');
  const [guests, setGuests] = useState('Whoever');
  const [guestCount, setGuestCount] = useState(0);
  const [petCount, setPetCount] = useState(0);
  const [dateMode, setDateMode] = useState<'dates' | 'flexible'>('dates');

  const currentMonth = new Date();
  const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);

  const generateCalendar = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="relative z-50 -mt-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-full shadow-2xl p-2 flex items-center">
          {/* Location */}
          <div className="relative flex-1">
            <button
              onClick={() => {
                setLocationOpen(!locationOpen);
                setDatesOpen(false);
                setGuestsOpen(false);
              }}
              className="w-full text-left px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="font-medium">{location}</div>
                </div>
              </div>
            </button>

            {locationOpen && (
              <div className="absolute top-full left-0 mt-2 w-[400px] bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <h3 className="font-semibold mb-4">Suggested regions</h3>
                <div className="space-y-2">
                  {suggestedRegions.map((region) => (
                    <button
                      key={region.name}
                      onClick={() => {
                        setLocation(region.name);
                        setLocationOpen(false);
                      }}
                      className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
                    >
                      <img src={region.image} alt={region.name} className="w-14 h-14 rounded-lg object-cover" />
                      <span className="font-medium">{region.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-px h-8 bg-gray-200"></div>

          {/* Dates */}
          <div className="relative flex-1">
            <button
              onClick={() => {
                setDatesOpen(!datesOpen);
                setLocationOpen(false);
                setGuestsOpen(false);
              }}
              className="w-full text-left px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="text-xs text-gray-500">Dates</div>
                  <div className="font-medium">{dates}</div>
                </div>
              </div>
            </button>

            {datesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex justify-center gap-4 mb-6">
                  <button
                    onClick={() => setDateMode('dates')}
                    className={`px-6 py-2 rounded-full transition ${
                      dateMode === 'dates' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    Dates
                  </button>
                  <button
                    onClick={() => setDateMode('flexible')}
                    className={`px-6 py-2 rounded-full transition ${
                      dateMode === 'flexible' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    I'm flexible
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-12">
                  {[currentMonth, nextMonth].map((month, idx) => (
                    <div key={idx}>
                      <div className="text-center font-semibold mb-4 text-lg">
                        {monthNames[month.getMonth()]} {month.getFullYear()}
                      </div>
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                          <div key={day} className="text-xs text-gray-500 text-center py-2 font-medium">
                            {day}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {generateCalendar(month).map((day, dayIdx) => (
                          <button
                            key={dayIdx}
                            className={`aspect-square flex items-center justify-center text-sm rounded-full transition ${
                              day
                                ? 'hover:bg-gray-100 hover:border hover:border-gray-900'
                                : ''
                            } ${!day ? 'text-gray-300' : ''}`}
                            disabled={!day}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t">
                  <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-50">
                    Exact dates
                  </button>
                  <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-full">
                    ± 1 day
                  </button>
                  <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-full">
                    ± 2 days
                  </button>
                  <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-full">
                    ± 3 days
                  </button>
                  <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-full">
                    ± 7 days
                  </button>
                  <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-full">
                    ± 14 days
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="w-px h-8 bg-gray-200"></div>

          {/* Guests */}
          <div className="relative flex-1">
            <button
              onClick={() => {
                setGuestsOpen(!guestsOpen);
                setLocationOpen(false);
                setDatesOpen(false);
              }}
              className="w-full text-left px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div>
                  <div className="text-xs text-gray-500">Guests</div>
                  <div className="font-medium">{guests}</div>
                </div>
              </div>
            </button>

            {guestsOpen && (
              <div className="absolute top-full right-0 mt-2 w-[320px] bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Guests</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setGuestCount(Math.max(0, guestCount - 1))}
                        className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition disabled:opacity-30"
                        disabled={guestCount === 0}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="w-12 text-center font-medium">
                        {guestCount === 0 ? 'Any' : guestCount}
                      </span>
                      <button
                        onClick={() => setGuestCount(guestCount + 1)}
                        className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium">Pets</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setPetCount(Math.max(0, petCount - 1))}
                        className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition disabled:opacity-30"
                        disabled={petCount === 0}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="w-12 text-center font-medium">{petCount}</span>
                      <button
                        onClick={() => setPetCount(petCount + 1)}
                        className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button className="bg-black text-white rounded-full p-4 hover:bg-gray-800 transition ml-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Stats banner */}
        <div className="mt-4 text-center">
          <p className="text-white text-sm backdrop-blur-sm bg-white/10 rounded-full px-4 py-2 inline-block">
            <span className="font-semibold">96%</span> guest satisfaction with{' '}
            <span className="font-semibold">52,000+</span> nights booked
          </p>
        </div>
      </div>
    </div>
  );
}

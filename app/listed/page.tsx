'use client';

import { useState } from 'react';

export default function ListedPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: ''
  });

  const ownerVideos = [
    { name: 'Russ & Andrea of Wander Surf Pines', image: 'https://www.datocms-assets.com/53643/1739892605-youtube-thumbnail-42.png' },
    { name: 'Chris & Maryam of Wander Big Sur Coast', image: 'https://www.datocms-assets.com/53643/1739892000-youtube-thumbnail-39.png' },
    { name: 'David of Wander Stowe Woods', image: 'https://www.datocms-assets.com/53643/1739892066-youtube-thumbnail-41.png' },
    { name: 'Olle of Wander Bodega Bay', image: 'https://www.datocms-assets.com/53643/1739892150-youtube-thumbnail-40.png' },
  ];

  const testimonials = [
    {
      image: 'https://www.datocms-assets.com/53643/1713806376-photo.png',
      quote: 'What an amazing experience at @wander anchor bay! Exceptional experience curated by the team at wander!',
      author: 'Thomas Smith',
      location: 'App Store'
    },
    {
      image: 'https://www.datocms-assets.com/53643/1674874823-4c5a9990.jpg',
      quote: 'Staying at Wander was one of the most relaxing trips I\'ve had. The level of thoughtfulness was something I\'ve never experienced before.',
      author: 'Midhun J.',
      location: 'from San Francisco'
    },
    {
      image: 'https://www.datocms-assets.com/53643/1674875373-hudsonvalley-sign.jpg',
      title: 'Seamless experience',
      quote: 'I can\'t begin to express how beautiful and seamless the Wander website is. My goodness!',
      author: 'Ang'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 lg:px-12 max-w-[1576px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              <span className="text-gray-500">Introducing</span>
              <span className="font-medium">Wander Listed</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Our distribution. Your property management.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Elevate above the competition by flying the Wander flag. Unlock luxury brand recognition,
              cutting-edge technology, a vast guest network and an unrivaled marketing engine — all while
              maintaining your operational independence.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Learn more about Wander Listed →
            </button>

            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
              </div>
              <p className="text-sm">
                <span className="font-medium">600,000+ Wanderers</span>
                <span className="text-gray-400"> and counting</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <button className="relative group">
              <div className="bg-white/30 backdrop-blur-md rounded-full p-4 flex items-center gap-4 hover:bg-white/40 transition">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="text-left pr-2">
                  <div className="font-semibold text-sm">Introducing Wander Listed</div>
                  <div className="text-xs text-gray-600">A guided overview from our Chief of Staff</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* As Seen In */}
      <section className="py-12 px-6 lg:px-12 max-w-[1576px] mx-auto">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-400 mb-8">AS SEEN IN</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40">
          <img src="https://www.datocms-assets.com/53643/1713218921-wsj.svg" alt="WSJ" className="h-4" />
          <img src="https://www.datocms-assets.com/53643/1713218918-forbes.svg" alt="Forbes" className="h-5" />
          <img src="https://www.datocms-assets.com/53643/1713218909-rolling_stone.svg" alt="Rolling Stone" className="h-7" />
          <img src="https://www.datocms-assets.com/53643/1719324454-usa_today-2020-01-29-1.svg" alt="USA Today" className="h-6" />
          <img src="https://www.datocms-assets.com/53643/1719324450-fast_company_logo-1.svg" alt="Fast Company" className="h-5" />
          <img src="https://www.datocms-assets.com/53643/1713218915-insider.svg" alt="Insider" className="h-5" />
          <img src="https://www.datocms-assets.com/53643/1713218913-skift.svg" alt="Skift" className="h-5" />
        </div>
      </section>

      {/* Three Benefits */}
      <section className="py-16 px-6 lg:px-12 max-w-[1576px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col lg:flex-row gap-5">
            <img
              src="https://www.datocms-assets.com/53643/1713292432-rectangle-26286.png"
              alt="Increase profits"
              className="w-[108px] h-[108px] object-contain"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Increase profits</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Upgrade your performance with our dedicated marketing machine, growing guest network and access
                to the best property management software in the world. Wanders on average outperform the market by 30%+.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <img
              src="https://www.datocms-assets.com/53643/1713292509-rectangle-26286-1.png"
              alt="Reach more guests"
              className="w-[108px] h-[108px] object-contain"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Reach more guests</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Let our expert team promote your property to hundreds of thousands of travelers while you focus
                on delivering a world-class guest experience. With a dedicated marketing team in your corner,
                you can outshine the competition.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <img
              src="https://www.datocms-assets.com/53643/1713292525-rectangle-26286-2.png"
              alt="Maintain independence"
              className="w-[108px] h-[108px] object-contain"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Maintain independence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Gain the strength of a premium brand and powerful tools while keeping the independence that makes
                your vacation home special. It's the perfect balance of support and freedom, designed to help you
                win on your terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Videos Carousel */}
      <section className="py-12">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-400 mb-8">
          SEE WHY OWNERS LOVE WANDER
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-6 px-6 animate-scroll">
            {[...ownerVideos, ...ownerVideos, ...ownerVideos].map((video, idx) => (
              <div
                key={idx}
                className="relative flex-none w-[312px] aspect-video rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={video.image}
                  alt={video.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-none">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium truncate">{video.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1576px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Unlock your home's full potential with Wander.
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Don't get lost in a sea of mediocre vacation rentals on other travel platforms. Outshine competitors
                while continuing to deliver an incredible guest experience with Wander Listed. With Wander in your corner,
                our distribution engine, pricing model and smart technology come together with your operational expertise
                to attract high value guests from our vast network of travelers and drive more profits.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="font-medium">Luxury home</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <span className="font-medium">Contemporary design</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="font-medium">New(ish) build</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
                  </svg>
                  <span className="font-medium">Dramatic views</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                  </svg>
                  <span className="font-medium">Beachfront/ski-in ski-out</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="font-medium">"Wow" factor</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-2">Apply today</h3>
              <p className="text-gray-600 mb-6">to see your projected performance with Wander</p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter property address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>

                <div className="h-48 bg-gray-100 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-12 bg-gray-100">
        <div className="max-w-[1576px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">52,000+</div>
            <div className="text-gray-600 text-sm">total nights booked</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">143 years</div>
            <div className="text-gray-600 text-sm">of guest happiness</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">96%</div>
            <div className="text-gray-600 text-sm">guest satisfaction rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">654,387</div>
            <div className="text-gray-600 text-sm">Wanderers and counting</div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-20 px-6 lg:px-12 max-w-[1576px] mx-auto">
        <p className="text-xs font-semibold tracking-widest text-gray-400 mb-4">LEADING THE WAY</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">We're creating a new category</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Wander is transforming the $2 trillion (and growing) lodging industry by combining the quality of a
          luxury hotel with the comfort of a private vacation home – and pulling customers from both markets.
        </p>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <p className="text-sm font-semibold text-gray-500 mb-6">LODGING INDUSTRY – $2T</p>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <svg className="w-12 h-12 mb-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <div className="text-sm text-gray-500 mb-2">Vacation rentals</div>
              <div className="text-3xl font-bold">$300B</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <svg className="w-12 h-12 mb-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z" />
              </svg>
              <div className="text-sm text-gray-500 mb-2">Hotels & resorts</div>
              <div className="text-3xl font-bold">$1.7T</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wander Works */}
      <section className="py-20 px-6 lg:px-12 max-w-[1576px] mx-auto">
        <p className="text-xs font-semibold tracking-widest text-gray-400 mb-4">THE THESIS</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-16">Why Wander works</h2>

        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://www.datocms-assets.com/53643/1713379108-rectangle-26299.jpg"
              alt="Consolidation"
              className="w-full rounded-2xl"
            />
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-400 mb-4">CONSOLIDATION</p>
              <h3 className="text-3xl font-bold mb-4">
                We consolidate the top 1% of properties on one platform
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The top 1% of vacation rentals generate 35% of revenue. With the best vacation rentals in one place,
                consumers only have one place to look.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-semibold tracking-widest text-gray-400 mb-4">STANDARDIZATION</p>
              <h3 className="text-3xl font-bold mb-4">
                We standardize operations and distribute to our audience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our standardized hospitality experience across our portfolio delivers a consistent guest experience
                and compounds a distribution moat.
              </p>
            </div>
            <img
              src="https://www.datocms-assets.com/53643/1713390317-work_from_wander_11zon-1-1.jpg"
              alt="Standardization"
              className="w-full rounded-2xl order-1 lg:order-2"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://www.datocms-assets.com/53643/1713379190-rectangle-26299-1.jpg"
              alt="Automation"
              className="w-full rounded-2xl"
            />
            <div>
              <p className="text-xs font-semibold tracking-widest text-gray-400 mb-4">AUTOMATION</p>
              <h3 className="text-3xl font-bold mb-4">
                We've created the world's best property management software.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                While not required, as part of our offering you'll get access to WanderOS, which handles everything
                from listings to booking to chat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">The best of both worlds</h2>
          <p className="text-center text-gray-600 mb-12">
            Wander combines the quality of a luxury hotel with the comfort of a vacation home to create an experience guests love.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-6 font-semibold"></th>
                  <th className="text-center p-6 font-semibold">Wander Homes</th>
                  <th className="text-center p-6 font-semibold">Vacation rentals</th>
                  <th className="text-center p-6 font-semibold">Luxury hotels</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  'Quality and consistency',
                  'Space',
                  'Privacy',
                  'Transparent pricing',
                  'Hotel-grade cleaning',
                  'Smart-home tech',
                  '24/7 concierge',
                  'Modern workstations',
                  'Inspiring views'
                ].map((feature, idx) => (
                  <tr key={idx}>
                    <td className="p-6 text-gray-700">{feature}</td>
                    <td className="p-6 text-center">
                      <svg className="w-5 h-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="p-6 text-center">
                      {[0, 1, 2].includes(idx) ? (
                        <svg className="w-5 h-5 mx-auto text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      <svg className="w-5 h-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guest Demographics */}
      <section className="py-20 px-6 lg:px-12 max-w-[1576px] mx-auto">
        <p className="text-xs font-semibold tracking-widest text-gray-400 mb-4">GUESTS</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Who are Wander guests?</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Wander guests are primarily from high net-worth, affluent households who value consistency and quality.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Higher net worth individuals</h3>
            <p className="text-gray-600 text-sm">
              70% of Wander guests are affluent, with net worths exceeding $1M. They have a much higher repeat
              booking rate and lifetime value than average.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">The modern traveler</h3>
            <p className="text-gray-600 text-sm">
              Wander's audience is the modern traveler who values consistent quality, beautiful architecture and
              interior design, and white-glove service.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Lovers of premium brands</h3>
            <p className="text-gray-600 text-sm">
              Wander guests love premiums brands like Apple, Tesla, Nike, Porsche, Four Seasons and more.
              They value quality, great design and luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Wander Listed Platform Features */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1576px] mx-auto">
          <p className="text-xs font-semibold tracking-widest text-gray-400 text-center mb-4">INTRODUCING...</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">Wander Listed</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            You've done the hard part of creating your portfolio of incredible properties. Let us help you outshine
            competitors and take it to the next level with our new offering.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <img
                src="https://www.datocms-assets.com/53643/1713466230-rectangle-26299-2.jpg"
                alt="Booking Platform"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold tracking-widest text-gray-400 mb-2">BOOKING PLATFORM</p>
                <h3 className="text-2xl font-bold">Wander Booking Platform</h3>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <img
                src="https://www.datocms-assets.com/53643/1713466252-rectangle-26299-3.jpg"
                alt="Guest Communication"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold tracking-widest text-gray-400 mb-2">CONCIERGE 24/7</p>
                <h3 className="text-2xl font-bold">Guest Communication</h3>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <img
                src="https://www.datocms-assets.com/53643/1713926412-screen-shot-2024-04-23-at-7-39-55-pm.png"
                alt="Marketing"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold tracking-widest text-gray-400 mb-2">MARKETING</p>
                <h3 className="text-2xl font-bold">Dedicated marketing machine</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Marketing Launch */}
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-[1576px] mx-auto">
          <p className="text-xs font-semibold tracking-widest text-gray-400 text-center mb-4">
            LAUNCHING WITH A BANG
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">Property Marketing Launch</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            Our launch and marketing strategy is to "overinvest" in content telling the story of your home and to
            make it famous with our growing network of travelers.
          </p>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="mx-auto w-64 h-[500px] relative">
                <img
                  src="https://www.datocms-assets.com/53643/1713470770-copy-of-female-hand-holding-iphone-14-pro-mockup-mockuuups-studio.png"
                  alt="Tour video"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Tour video</h3>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-64 h-[500px] relative">
                <img
                  src="https://www.datocms-assets.com/53643/1713470795-copy-of-female-hand-holding-iphone-14-pro-mockup-mockuuups-studio-1.png"
                  alt="Travel guides"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Travel guides</h3>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-64 h-[500px] relative">
                <img
                  src="https://www.datocms-assets.com/53643/1713470781-copy-of-female-hand-holding-iphone-14-pro-mockup-mockuuups-studio-2.png"
                  alt="Professional photos"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Professional photos</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1576px] mx-auto">
          <p className="text-xs font-semibold tracking-widest text-gray-400 text-center mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6">Guests love Wander</h2>
          <p className="text-center text-gray-600 mb-16">
            But don't just take our word for it. Hear what they have to say for yourself.
          </p>

          {/* Large testimonial video */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">"Wander is just so luxe..."</h3>
              <p className="text-gray-600 leading-relaxed">
                Britni and Daniel from Brookly are repeat Wander guests who have booked several stays in just a
                handful of months. After taking their first trip to Wander Cave Creek for Britni's birthday over
                the summer, they planned two additional getaways to Wander Hudson Valley – just outside of New York City.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://www.datocms-assets.com/53643/1713806292-wander-owners.png"
                alt="Testimonial"
                className="w-full"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Scrolling testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 space-y-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {testimonial.title && (
                  <p className="text-xs font-semibold tracking-widest text-gray-400">
                    {testimonial.title}
                  </p>
                )}
                <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    {testimonial.location && (
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Testimonials Carousel */}
      <section className="py-12">
        <div className="overflow-hidden">
          <div className="flex gap-6 px-6">
            {[...Array(12)].map((_, idx) => (
              <div
                key={idx}
                className="relative flex-none w-[400px] bg-gray-50 rounded-xl overflow-hidden"
              >
                <img
                  src="https://www.datocms-assets.com/53643/1713806402-wander-yellowstone-valley.png"
                  alt="Wander Yellowstone Valley"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-widest text-gray-400 mb-4">
                    Wander Yellowstone Valley
                  </p>
                  <p className="text-gray-700">
                    "Listing my home on Wander has been great! My bookings and revenue have drastically increased
                    and the staff is very professional and organized."
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage: 'url(https://www.datocms-assets.com/53643/1723668719-ds205293-6-11zon.jpg)'}}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative max-w-[1576px] mx-auto text-center text-white space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Consider this a personal invitation to explore a partnership with Wander.
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Elevate your portfolio by aligning with the world's premier vacation rentals. With Wander Listed,
            you unlock luxury brand recognition, cutting-edge technology, a vast guest network and an unrivaled
            marketing engine — all while maintaining your operational independence.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition font-medium text-lg">
            Learn more about Wander Listed →
          </button>
        </div>
      </section>
    </div>
  );
}

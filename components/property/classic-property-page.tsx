import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyNavBar } from "@/components/property/sticky-nav-bar";
import { PropertyHero } from "@/components/property/property-hero";
import { ImageGalleryNew } from "@/components/property/image-gallery-new";
import {
  QuickStats,
  QuickStatsMobile,
} from "@/components/property/quick-stats";
import { HighlightTags } from "@/components/property/highlight-tags";
import { AboutSection } from "@/components/property/about-section";
import { VideoTourCarousel } from "@/components/property/video-tour-carousel";
import { AmenitiesGrid } from "@/components/property/amenities-grid";
import { SleepingSectionNew } from "@/components/property/sleeping-section-new";
import { LocationSectionNew } from "@/components/property/location-section-new";
import { CalendarSection } from "@/components/property/calendar-section";
import { ReviewsSection } from "@/components/property/reviews-section";
import { ThingsToKnow } from "@/components/property/things-to-know";
import { BeforeYouBook } from "@/components/property/before-you-book";
import { ConciergeSection } from "@/components/property/concierge-section";
import { BookingSidebarNew } from "@/components/property/booking-sidebar-new";
import { StickyBookingBarNew } from "@/components/property/sticky-booking-bar-new";

interface ClassicPropertyPageProps {
  displayData: any;
}

export function ClassicPropertyPage({ displayData }: ClassicPropertyPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <Header />

      {/* Sticky Navigation Bar */}
      <StickyNavBar
        rating={displayData.rating}
        reviewCount={displayData.reviewCount}
      />

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 lg:px-8 pt-14">
        {/* Hero Section - Mobile header + Desktop title */}
        <PropertyHero
          name={displayData.name}
          location={displayData.location}
          propertyType={displayData.propertyType}
        />

        {/* Image Gallery */}
        <div className="lg:py-2">
          <ImageGalleryNew
            images={displayData.images}
            propertyName={displayData.name}
          />
        </div>

        {/* Two-column layout for desktop */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-16 mt-12">
          {/* Left column - Main content */}
          <div className="lg:col-span-2">
            {/* Quick Stats */}
            <div className="lg:hidden">
              <QuickStatsMobile
                guests={displayData.guests}
                bedrooms={displayData.bedrooms}
                beds={displayData.beds}
                bathrooms={displayData.bathrooms}
              />
            </div>
            <div className="hidden lg:block">
              <QuickStats
                guests={displayData.guests}
                bedrooms={displayData.bedrooms}
                beds={displayData.beds}
                bathrooms={displayData.bathrooms}
              />
            </div>

            {/* Highlight Tags */}
            <HighlightTags highlights={displayData.highlights} />

            {/* About Section */}
            <AboutSection
              description={displayData.description}
              propertyName={displayData.name}
            />

            {/* Video Tour Carousel */}
            <VideoTourCarousel
              tourVideoUrl={displayData.tourVideoUrl}
              additionalVideos={displayData.additionalVideos}
              propertyName={displayData.name}
              mainImage={displayData.images[0]}
            />

            {/* Amenities Grid */}
            <AmenitiesGrid amenities={displayData.amenities} />

            {/* Where You'll Sleep */}
            <SleepingSectionNew bedrooms={displayData.bedroomDetails} />

            {/* Location Section */}
            <LocationSectionNew
              location={displayData.location}
              areaDescription={displayData.areaDescription}
              nearbyPlaces={displayData.nearbyPlaces}
              coordinates={displayData.coordinates}
            />
          </div>

          {/* Right column - Booking Sidebar (Desktop only) */}
          <div className="hidden lg:block">
            <BookingSidebarNew
              pricePerNight={displayData.pricePerNight}
              cleaningFee={displayData.cleaningFee}
              securityDeposit={displayData.securityDeposit}
              extraGuestFee={displayData.extraGuestFee}
              instantBooking={displayData.instantBooking}
              minimumStay={displayData.minimumStay}
            />
          </div>
        </div>

        {/* Full-width sections after the two-column layout */}
        <div className="mt-0">
          {/* Calendar Section */}
          <CalendarSection propertyName={displayData.name} />

          {/* Reviews Section */}
          <ReviewsSection
            rating={displayData.rating}
            reviewCount={displayData.reviewCount}
          />

          {/* Concierge Section */}
          <ConciergeSection />

          {/* Things to Know */}
          <ThingsToKnow
            checkInTime={displayData.checkInTime}
            checkOutTime={displayData.checkOutTime}
            guests={displayData.guests}
            petsAllowed={displayData.petsAllowed}
            petFee={displayData.petFee}
            maxPets={displayData.maxPets}
            smokingAllowed={displayData.smokingAllowed}
            smokingFee={displayData.smokingFee}
            eventsAllowed={displayData.eventsAllowed}
            eventsRequireApproval={displayData.eventsRequireApproval}
            quietHoursStart={displayData.quietHoursStart}
            quietHoursEnd={displayData.quietHoursEnd}
            minimumStay={displayData.minimumStay}
            maximumStay={displayData.maximumStay}
            cancellationPolicy={displayData.cancellationPolicy}
            houseRules={displayData.houseRules}
          />

          {/* Before You Book */}
          <BeforeYouBook
            specialNotices={displayData.specialNotices}
            petsAllowed={displayData.petsAllowed}
            petFee={displayData.petFee}
            maxPets={displayData.maxPets}
            petRules={displayData.petRules}
            guests={displayData.guests}
          />

          {/* Bottom spacing for mobile sticky bar */}
          <div className="h-24 lg:hidden" />
        </div>
      </main>

      {/* Sticky Booking Bar (Mobile only) */}
      <StickyBookingBarNew
        pricePerNight={displayData.pricePerNight}
        rating={displayData.rating}
        reviewCount={displayData.reviewCount}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
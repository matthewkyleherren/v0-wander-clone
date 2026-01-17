import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
import { ConciergeSection } from "@/components/property/concierge-section";
import { ThingsToKnow } from "@/components/property/things-to-know";
import { BeforeYouBook } from "@/components/property/before-you-book";
import { BookingSidebarNew } from "@/components/property/booking-sidebar-new";
import { StickyBookingBarNew } from "@/components/property/sticky-booking-bar-new";
import { Card } from "@/components/ui/card";

interface CossuiPropertyPageProps {
  displayData: any;
}

export function CossuiPropertyPage({ displayData }: CossuiPropertyPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 lg:px-8 py-8 space-y-6">
        {/* Top context bar */}
        <div className="flex flex-col gap-2 border-b border-border pb-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-primary/80">
              OffGrid Property Surface
            </p>
            <h1 className="text-xl md:text-2xl font-semibold">
              {displayData.name}
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground">
              {displayData.location} • {displayData.guests} guests ·{" "}
              {displayData.bedrooms} bedrooms · {displayData.beds} beds ·{" "}
              {displayData.bathrooms} baths
            </p>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>
              Rating:{" "}
              <span className="font-semibold">
                {displayData.rating.toFixed(1)}
              </span>{" "}
              ({displayData.reviewCount} reviews)
            </p>
            <p>
              From{" "}
              <span className="font-semibold">
                ${displayData.pricePerNight}
              </span>{" "}
              / night
            </p>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr),minmax(260px,1fr)]">
          {/* Left column */}
          <div className="space-y-4">
            {/* Gallery card */}
            <Card className="overflow-hidden">
              <ImageGalleryNew
                images={displayData.images}
                propertyName={displayData.name}
              />
            </Card>

            {/* Overview card */}
            <Card className="p-4 md:p-5 space-y-4">
              <PropertyHero
                name={displayData.name}
                location={displayData.location}
                propertyType={displayData.propertyType}
              />

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="md:hidden">
                    <QuickStatsMobile
                      guests={displayData.guests}
                      bedrooms={displayData.bedrooms}
                      beds={displayData.beds}
                      bathrooms={displayData.bathrooms}
                    />
                  </div>
                  <div className="hidden md:block">
                    <QuickStats
                      guests={displayData.guests}
                      bedrooms={displayData.bedrooms}
                      beds={displayData.beds}
                      bathrooms={displayData.bathrooms}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <HighlightTags highlights={displayData.highlights} />
                </div>
              </div>
            </Card>

            {/* About & video */}
            <Card className="p-4 md:p-5 space-y-4">
              <AboutSection
                description={displayData.description}
                propertyName={displayData.name}
              />
              <VideoTourCarousel
                tourVideoUrl={displayData.tourVideoUrl}
                additionalVideos={displayData.additionalVideos}
                propertyName={displayData.name}
                mainImage={displayData.images[0]}
              />
            </Card>

            {/* Amenities & sleeping */}
            <Card className="p-4 md:p-5 space-y-6">
              <AmenitiesGrid amenities={displayData.amenities} />
              <SleepingSectionNew bedrooms={displayData.bedroomDetails} />
            </Card>

            {/* Location */}
            <Card className="p-4 md:p-5">
              <LocationSectionNew
                location={displayData.location}
                areaDescription={displayData.areaDescription}
                nearbyPlaces={displayData.nearbyPlaces}
                coordinates={displayData.coordinates}
              />
            </Card>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <Card className="p-4 md:p-5">
              <BookingSidebarNew
                pricePerNight={displayData.pricePerNight}
                cleaningFee={displayData.cleaningFee}
                securityDeposit={displayData.securityDeposit}
                extraGuestFee={displayData.extraGuestFee}
                instantBooking={displayData.instantBooking}
                minimumStay={displayData.minimumStay}
              />
            </Card>

            <Card className="p-4 md:p-5 space-y-3 text-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Snapshot
              </p>
              <p className="font-medium">
                {displayData.rating.toFixed(1)} · {displayData.reviewCount}{" "}
                reviews
              </p>
              <p className="text-muted-foreground">
                Check-in {displayData.checkInTime} · Check-out{" "}
                {displayData.checkOutTime}
              </p>
              <p className="text-muted-foreground">
                Minimum stay: {displayData.minimumStay} nights
              </p>
            </Card>
          </div>
        </div>

        {/* Timeline-style sections */}
        <div className="space-y-4">
          <Card className="p-4 md:p-5">
            <CalendarSection propertyName={displayData.name} />
          </Card>

          <Card className="p-4 md:p-5">
            <ReviewsSection
              rating={displayData.rating}
              reviewCount={displayData.reviewCount}
            />
          </Card>

          <Card className="p-4 md:p-5">
            <ConciergeSection />
          </Card>

          <Card className="p-4 md:p-5">
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
          </Card>

          <Card className="p-4 md:p-5">
            <BeforeYouBook
              specialNotices={displayData.specialNotices}
              petsAllowed={displayData.petsAllowed}
              petFee={displayData.petFee}
              maxPets={displayData.maxPets}
              petRules={displayData.petRules}
              guests={displayData.guests}
            />
          </Card>

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

      <Footer />
    </div>
  );
}
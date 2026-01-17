import { getPropertyBySlug } from "@/lib/sanity/fetch";
import { ClassicPropertyPage } from "@/components/property/classic-property-page";
import { CossuiPropertyPage } from "@/components/cossui/property-page";
import { getActiveUi } from "@/lib/ui-config";

const fallbackPropertyData = {
  name: "Inlet Beach Serenity",
  location: "Inlet Beach, Florida",
  propertyType: "beach-house",
  bedrooms: 4,
  bathrooms: 3.5,
  beds: 4,
  guests: 8,
  sqft: 3200,
  rating: 4.9,
  reviewCount: 47,
  pricePerNight: 466,
  cleaningFee: 150,
  description:
    "OffGrid Inlet Beach Serenity offers an exquisite retreat with stunning lake views and direct lake access, perfect for those seeking tranquility. Guests can explore the picturesque surroundings with complimentary bicycles, ensuring a luxurious and active escape. This elegant property provides an idyllic setting for relaxation and cherished memories by the water. The gourmet kitchen features top-of-the-line appliances, and the master suite includes a spa-like bathroom with a soaking tub.",
  images: [
    "/luxury-lake-house-florida-porch-view.jpg",
    "/modern-living-room-lake-view.jpg",
    "/luxury-bedroom-ceiling-fan-white.jpg",
    "/modern-kitchen-white-marble.jpg",
    "/master-bedroom-lake-view.jpg",
    "/outdoor-patio-lake-florida.jpg",
  ],
  highlights: [
    { icon: "lake", label: "Lake View" },
    { icon: "lake", label: "Lake Access" },
    { icon: "bike", label: "Bicycle" },
    { icon: "fireplace", label: "Fire Pit" },
    { icon: "hot-tub", label: "Hot Tub" },
  ],
  bedroomDetails: [
    {
      name: "Bedroom 1",
      beds: "1 king bed",
      image: "/luxury-bedroom-king-bed-ceiling-fan.jpg",
    },
    {
      name: "Bedroom 2",
      beds: "1 king bed",
      image: "/guest-bedroom-king-bed-modern.jpg",
    },
    {
      name: "Bedroom 3",
      beds: "2 queen beds",
      image: "/bedroom-two-queen-beds.jpg",
    },
    {
      name: "Bedroom 4",
      beds: "1 king bed",
      image: "/master-suite-king-bed.jpg",
    },
  ],
  amenities: [
    "WiFi",
    "Hot Tub",
    "Pool",
    "Kitchen",
    "Free Parking",
    "Air Conditioning",
    "Washer",
    "Dryer",
    "TV",
    "Coffee Maker",
    "BBQ Grill",
    "Fire Pit",
  ],
  coordinates: { lat: 30.2799, lng: -86.0053 },
  checkInTime: "4:00 PM",
  checkOutTime: "10:00 AM",
  petsAllowed: true,
  petFee: 150,
  maxPets: 2,
  cancellationPolicy:
    "Cancel within 24 hours for a full refund. 50% refund up to 7 days before check-in.",
  areaDescription:
    "Located just steps from the pristine beaches of the Emerald Coast, this property offers convenient access to world-class dining, shopping, and outdoor activities. The area is known for its crystal-clear waters, white sand beaches, and stunning sunsets.",
  nearbyPlaces: [
    {
      name: "The Red Bar",
      type: "restaurant" as const,
      distance: "5 min drive",
    },
    {
      name: "Bud & Alley's",
      type: "restaurant" as const,
      distance: "10 min drive",
    },
    {
      name: "Rosemary Beach",
      type: "attraction" as const,
      distance: "15 min walk",
    },
    {
      name: "Camp Helen State Park",
      type: "activity" as const,
      distance: "10 min drive",
    },
  ],
  instantBooking: true,
  minimumStay: 2,
};

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;

  let propertyData = null;
  try {
    propertyData = await getPropertyBySlug(slug);
    console.log("[Property] Data from Sanity:", propertyData?.name);
  } catch (error) {
    console.log("Sanity not configured, using fallback data");
  }

  // Use fetched data or fallback
  const property = propertyData || fallbackPropertyData;

  // Map bedroom details with proper image URLs
  const mappedBedroomDetails =
    property.bedroomDetails?.map((bedroom: any) => ({
      name: bedroom.name,
      beds: bedroom.beds,
      image: bedroom.imageUrl || bedroom.image || "/placeholder.svg",
    })) || fallbackPropertyData.bedroomDetails;

  // Prepare display data with fallbacks
  const displayData = {
    name: property.name || fallbackPropertyData.name,
    location: property.location || fallbackPropertyData.location,
    propertyType: property.propertyType || fallbackPropertyData.propertyType,
    bedrooms: property.bedrooms || fallbackPropertyData.bedrooms,
    bathrooms: property.bathrooms || fallbackPropertyData.bathrooms,
    beds: property.beds || fallbackPropertyData.beds,
    guests: property.guests || fallbackPropertyData.guests,
    sqft: property.sqft || fallbackPropertyData.sqft,
    rating: property.rating || fallbackPropertyData.rating,
    reviewCount: property.reviewCount || fallbackPropertyData.reviewCount,
    pricePerNight:
      property.pricePerNight || fallbackPropertyData.pricePerNight,
    cleaningFee: property.cleaningFee || fallbackPropertyData.cleaningFee,
    securityDeposit: property.securityDeposit,
    extraGuestFee: property.extraGuestFee,
    description: property.description || fallbackPropertyData.description,
    images: property.images?.length
      ? property.images
      : fallbackPropertyData.images,
    highlights: property.highlights?.length
      ? property.highlights
      : fallbackPropertyData.highlights,
    bedroomDetails: mappedBedroomDetails,
    amenities: property.amenities?.length
      ? property.amenities
      : fallbackPropertyData.amenities,
    coordinates: property.coordinates || fallbackPropertyData.coordinates,
    checkInTime: property.checkInTime || fallbackPropertyData.checkInTime,
    checkOutTime: property.checkOutTime || fallbackPropertyData.checkOutTime,
    petsAllowed: property.petsAllowed ?? fallbackPropertyData.petsAllowed,
    petFee: property.petFee || fallbackPropertyData.petFee,
    maxPets: property.maxPets || fallbackPropertyData.maxPets,
    petRules: property.petRules,
    cancellationPolicy:
      property.cancellationPolicy || fallbackPropertyData.cancellationPolicy,
    areaDescription:
      property.areaDescription || fallbackPropertyData.areaDescription,
    nearbyPlaces: property.nearbyPlaces?.length
      ? property.nearbyPlaces
      : fallbackPropertyData.nearbyPlaces,
    tourVideoUrl: property.tourVideoUrl,
    additionalVideos: property.additionalVideos,
    specialNotices: property.specialNotices,
    instantBooking:
      property.instantBooking ?? fallbackPropertyData.instantBooking,
    minimumStay: property.minimumStay || fallbackPropertyData.minimumStay,
    maximumStay: property.maximumStay,
    houseRules: property.houseRules,
    smokingAllowed: property.smokingAllowed,
    smokingFee: property.smokingFee,
    eventsAllowed: property.eventsAllowed,
    eventsRequireApproval: property.eventsRequireApproval,
    quietHoursStart: property.quietHoursStart,
    quietHoursEnd: property.quietHoursEnd,
  };

  const activeUi = await getActiveUi();

  if (activeUi === "cossui") {
    return <CossuiPropertyPage displayData={displayData} />;
  }

  return <ClassicPropertyPage displayData={displayData} />;
}

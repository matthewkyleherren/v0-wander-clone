// @ts-nocheck
import { createClient } from "@sanity/client"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error("[v0] ERROR: Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN")
  console.log("[v0] projectId:", projectId)
  console.log("[v0] Has Token:", !!token)
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: "2024-01-01",
})

const properties = [
  {
    _type: "property",
    name: "Inlet Beach Serenity",
    slug: { _type: "slug", current: "inlet-beach-serenity" },
    location: "Inlet Beach, Florida",
    pricePerNight: 466,
    rating: 4.9,
    reviewCount: 127,
    description:
      "Wander Inlet Beach Serenity offers an exquisite retreat with stunning lake views and direct lake access, perfect for those seeking tranquility. Guests can explore the picturesque surroundings with complimentary bicycles, ensuring a luxurious and active escape. This elegant property provides an idyllic setting for relaxation and cherished memories by the water.",
    guests: 8,
    beds: 4,
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    mainImage: "/luxury-beach-house-with-lake-view-florida.jpg",
    images: [
      "/luxury-beach-house-exterior-florida.jpg",
      "/modern-living-room-beach-house.jpg",
      "/luxury-bedroom-with-ceiling-fan.jpg",
      "/gourmet-kitchen-beach-house.jpg",
      "/outdoor-patio-lake-view.jpg",
    ],
    featured: true,
    categories: ["Beach", "Lake", "Family"],
    amenities: [
      "Lake View",
      "Lake Access",
      "Bicycle",
      "Free parking",
      "Hot water",
      "Fire extinguisher",
      "Carbon monoxide detector",
      "Smoke detector",
      "First aid kit",
      "Air conditioning",
      "Washer",
      "Dryer",
      "Balcony",
      "Patio",
    ],
    highlights: [
      { icon: "lake", label: "Lake View" },
      { icon: "water", label: "Lake Access" },
      { icon: "bike", label: "Bicycle" },
    ],
    bedroomDetails: [
      {
        name: "Bedroom 1",
        beds: "1 king bed",
        image: "/luxury-master-bedroom-king-bed.jpg",
      },
      {
        name: "Bedroom 2",
        beds: "1 king bed",
        image: "/guest-bedroom-king-bed-modern.jpg",
      },
      {
        name: "Bedroom 3",
        beds: "2 queen beds",
        image: "/bedroom-with-two-queen-beds.jpg",
      },
      {
        name: "Bedroom 4",
        beds: "2 twin beds",
        image: "/bedroom-with-twin-beds-coastal.jpg",
      },
    ],
    coordinates: { lat: 30.2849, lng: -86.0039 },
    houseRules: [
      { icon: "clock", rule: "Check-in: 16:00" },
      { icon: "clock-out", rule: "Check-out: 10:00" },
      { icon: "users", rule: "8 guests maximum" },
      { icon: "paw", rule: "Pets not allowed" },
      { icon: "cigarette", rule: "No smoking - fees will apply" },
      { icon: "party", rule: "Events require approval" },
    ],
    features: [
      {
        icon: "calendar",
        title: "Flexible check-in & out",
        description: "Check-in after 4:00 PM • Check-out before 10:00 AM • Pets not allowed",
      },
      {
        icon: "refund",
        title: "Easy cancellation",
        description: "Cancel within 24hrs for a full refund",
      },
      {
        icon: "sparkles",
        title: "Pristine homes, no to-do lists",
        description: "Arrive to five star cleaning • No chores at checkout • Just lock up and go",
      },
    ],
  },
  {
    _type: "property",
    name: "Malibu Oceanfront",
    slug: { _type: "slug", current: "malibu-oceanfront" },
    location: "Malibu, California",
    pricePerNight: 892,
    rating: 4.95,
    reviewCount: 89,
    description:
      "Experience the ultimate California coastal living at this stunning Malibu oceanfront property. Wake up to panoramic ocean views, enjoy private beach access, and unwind in the infinity pool overlooking the Pacific. Perfect for those seeking luxury and serenity by the sea.",
    guests: 10,
    beds: 5,
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4500,
    mainImage: "/luxury-malibu-oceanfront-house.jpg",
    images: [
      "/malibu-beach-house-exterior.jpg",
      "/infinity-pool-ocean-view-malibu.jpg",
      "/modern-luxury-living-room-ocean-view.jpg",
      "/master-bedroom-ocean-view-balcony.jpg",
      "/gourmet-kitchen-modern-luxury.jpg",
    ],
    featured: true,
    categories: ["Beach", "Ocean", "Luxury"],
    amenities: [
      "Ocean View",
      "Private Beach Access",
      "Infinity Pool",
      "Hot Tub",
      "Free parking",
      "EV Charger",
      "Air conditioning",
      "Washer",
      "Dryer",
      "Home Theater",
      "Gym",
      "Fire Pit",
    ],
    highlights: [
      { icon: "waves", label: "Ocean View" },
      { icon: "beach", label: "Beach Access" },
      { icon: "pool", label: "Infinity Pool" },
    ],
    bedroomDetails: [
      {
        name: "Primary Suite",
        beds: "1 king bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Guest Suite 1",
        beds: "1 king bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Guest Suite 2",
        beds: "1 queen bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Bunk Room",
        beds: "4 twin beds",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Pool House",
        beds: "1 queen bed",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    coordinates: { lat: 34.0259, lng: -118.7798 },
    houseRules: [
      { icon: "clock", rule: "Check-in: 16:00" },
      { icon: "clock-out", rule: "Check-out: 11:00" },
      { icon: "users", rule: "10 guests maximum" },
      { icon: "paw", rule: "Pets allowed (1 pet max)" },
      { icon: "cigarette", rule: "No smoking" },
      { icon: "party", rule: "No events or parties" },
    ],
    features: [
      {
        icon: "calendar",
        title: "Flexible check-in & out",
        description: "Check-in after 4:00 PM • Check-out before 11:00 AM • Pets welcome",
      },
      {
        icon: "refund",
        title: "Easy cancellation",
        description: "Cancel within 48hrs for a full refund",
      },
      {
        icon: "sparkles",
        title: "Pristine homes, no to-do lists",
        description: "Arrive to five star cleaning • No chores at checkout • Just lock up and go",
      },
    ],
  },
  {
    _type: "property",
    name: "Aspen Mountain Lodge",
    slug: { _type: "slug", current: "aspen-mountain-lodge" },
    location: "Aspen, Colorado",
    pricePerNight: 1250,
    rating: 4.98,
    reviewCount: 156,
    description:
      "Nestled in the heart of Aspen, this magnificent mountain lodge offers ski-in/ski-out access and breathtaking alpine views. Features include a private hot tub, home theater, and chef's kitchen. The perfect retreat for winter adventures and summer hiking.",
    guests: 12,
    beds: 7,
    bedrooms: 6,
    bathrooms: 5.5,
    sqft: 5800,
    mainImage: "/placeholder.svg?height=800&width=1200",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    featured: true,
    categories: ["Ski", "Mountain", "Luxury"],
    amenities: [
      "Mountain View",
      "Ski-in/Ski-out",
      "Hot Tub",
      "Fireplace",
      "Home Theater",
      "Game Room",
      "Gym",
      "Heated Garage",
      "Ski Storage",
      "Boot Warmers",
      "Sauna",
      "Wine Cellar",
    ],
    highlights: [
      { icon: "mountain", label: "Mountain View" },
      { icon: "ski", label: "Ski-in/Ski-out" },
      { icon: "hot-tub", label: "Hot Tub" },
    ],
    bedroomDetails: [
      {
        name: "Master Suite",
        beds: "1 king bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Junior Suite",
        beds: "1 king bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Guest Room 1",
        beds: "1 queen bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Guest Room 2",
        beds: "1 queen bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Bunk Room",
        beds: "4 twin beds",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Nanny Suite",
        beds: "1 full bed",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    coordinates: { lat: 39.1911, lng: -106.8175 },
    houseRules: [
      { icon: "clock", rule: "Check-in: 16:00" },
      { icon: "clock-out", rule: "Check-out: 10:00" },
      { icon: "users", rule: "12 guests maximum" },
      { icon: "paw", rule: "Pets not allowed" },
      { icon: "cigarette", rule: "No smoking" },
      { icon: "party", rule: "Events require approval" },
    ],
    features: [
      {
        icon: "calendar",
        title: "Flexible check-in & out",
        description: "Check-in after 4:00 PM • Check-out before 10:00 AM",
      },
      {
        icon: "refund",
        title: "Easy cancellation",
        description: "Cancel within 48hrs for a full refund",
      },
      {
        icon: "sparkles",
        title: "Pristine homes, no to-do lists",
        description: "Arrive to five star cleaning • No chores at checkout • Just lock up and go",
      },
    ],
  },
  {
    _type: "property",
    name: "Maui Paradise Villa",
    slug: { _type: "slug", current: "maui-paradise-villa" },
    location: "Wailea, Maui",
    pricePerNight: 1450,
    rating: 4.97,
    reviewCount: 203,
    description:
      "An extraordinary Hawaiian retreat featuring panoramic ocean views, tropical gardens, and direct access to one of Maui's most pristine beaches. This villa offers the ultimate island experience with a private pool, outdoor kitchen, and world-class amenities.",
    guests: 8,
    beds: 4,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 4200,
    mainImage: "/placeholder.svg?height=800&width=1200",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    featured: true,
    categories: ["Hawaii", "Beach", "Tropical"],
    amenities: [
      "Ocean View",
      "Private Pool",
      "Beach Access",
      "Outdoor Kitchen",
      "BBQ Grill",
      "Tropical Garden",
      "Air conditioning",
      "Concierge Service",
      "Snorkeling Gear",
      "Kayaks",
      "Beach Chairs",
      "Outdoor Shower",
    ],
    highlights: [
      { icon: "palm", label: "Tropical" },
      { icon: "waves", label: "Ocean View" },
      { icon: "pool", label: "Private Pool" },
    ],
    bedroomDetails: [
      {
        name: "Ocean Suite",
        beds: "1 king bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Garden Suite",
        beds: "1 king bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Pool Suite",
        beds: "1 queen bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Guest Room",
        beds: "2 twin beds",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    coordinates: { lat: 20.6899, lng: -156.4421 },
    houseRules: [
      { icon: "clock", rule: "Check-in: 15:00" },
      { icon: "clock-out", rule: "Check-out: 11:00" },
      { icon: "users", rule: "8 guests maximum" },
      { icon: "paw", rule: "No pets" },
      { icon: "cigarette", rule: "No smoking" },
      { icon: "party", rule: "No parties or events" },
    ],
    features: [
      {
        icon: "calendar",
        title: "Flexible check-in & out",
        description: "Check-in after 3:00 PM • Check-out before 11:00 AM",
      },
      {
        icon: "refund",
        title: "Easy cancellation",
        description: "Cancel within 24hrs for a full refund",
      },
      {
        icon: "sparkles",
        title: "Pristine homes, no to-do lists",
        description: "Arrive to five star cleaning • No chores at checkout • Just lock up and go",
      },
    ],
  },
  {
    _type: "property",
    name: "Joshua Tree Retreat",
    slug: { _type: "slug", current: "joshua-tree-retreat" },
    location: "Joshua Tree, California",
    pricePerNight: 385,
    rating: 4.92,
    reviewCount: 312,
    description:
      "A stunning desert oasis featuring floor-to-ceiling windows, a private hot tub under the stars, and unobstructed views of the iconic Joshua Tree landscape. Perfect for stargazing, hiking, and total relaxation in nature.",
    guests: 6,
    beds: 3,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    mainImage: "/placeholder.svg?height=800&width=1200",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    featured: false,
    categories: ["Desert", "Unique", "Stargazing"],
    amenities: [
      "Desert View",
      "Hot Tub",
      "Fire Pit",
      "Stargazing Deck",
      "Outdoor Shower",
      "Hammock",
      "Air conditioning",
      "WiFi",
      "Full Kitchen",
      "Record Player",
      "Telescope",
      "Hiking Trails",
    ],
    highlights: [
      { icon: "cactus", label: "Desert" },
      { icon: "stars", label: "Stargazing" },
      { icon: "hot-tub", label: "Hot Tub" },
    ],
    bedroomDetails: [
      {
        name: "Master Bedroom",
        beds: "1 king bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Guest Bedroom",
        beds: "1 queen bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Bunk Room",
        beds: "2 twin beds",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    coordinates: { lat: 34.1347, lng: -116.3131 },
    houseRules: [
      { icon: "clock", rule: "Check-in: 15:00" },
      { icon: "clock-out", rule: "Check-out: 10:00" },
      { icon: "users", rule: "6 guests maximum" },
      { icon: "paw", rule: "Pets allowed (2 max)" },
      { icon: "cigarette", rule: "No smoking indoors" },
      { icon: "party", rule: "Quiet hours after 10 PM" },
    ],
    features: [
      {
        icon: "calendar",
        title: "Flexible check-in & out",
        description: "Check-in after 3:00 PM • Check-out before 10:00 AM • Pets welcome",
      },
      {
        icon: "refund",
        title: "Easy cancellation",
        description: "Cancel within 24hrs for a full refund",
      },
      {
        icon: "sparkles",
        title: "Pristine homes, no to-do lists",
        description: "Arrive to five star cleaning • No chores at checkout • Just lock up and go",
      },
    ],
  },
  {
    _type: "property",
    name: "Lake Tahoe Chalet",
    slug: { _type: "slug", current: "lake-tahoe-chalet" },
    location: "Lake Tahoe, California",
    pricePerNight: 725,
    rating: 4.94,
    reviewCount: 178,
    description:
      "A picturesque alpine chalet with stunning lake views, private dock access, and proximity to world-class skiing. Features include a stone fireplace, hot tub, game room, and wraparound deck perfect for taking in the mountain scenery.",
    guests: 10,
    beds: 5,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3800,
    mainImage: "/placeholder.svg?height=800&width=1200",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    featured: false,
    categories: ["Lake", "Ski", "Mountain"],
    amenities: [
      "Lake View",
      "Private Dock",
      "Hot Tub",
      "Fireplace",
      "Game Room",
      "Ski Storage",
      "Kayaks",
      "Paddleboards",
      "BBQ Grill",
      "Wraparound Deck",
      "WiFi",
      "Smart TV",
    ],
    highlights: [
      { icon: "lake", label: "Lake View" },
      { icon: "dock", label: "Private Dock" },
      { icon: "ski", label: "Near Skiing" },
    ],
    bedroomDetails: [
      {
        name: "Lake View Master",
        beds: "1 king bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Mountain Suite",
        beds: "1 king bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Pine Room",
        beds: "1 queen bed",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Bunk Room",
        beds: "4 twin beds",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        name: "Lower Level Suite",
        beds: "1 queen bed",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    coordinates: { lat: 39.0968, lng: -120.0324 },
    houseRules: [
      { icon: "clock", rule: "Check-in: 16:00" },
      { icon: "clock-out", rule: "Check-out: 10:00" },
      { icon: "users", rule: "10 guests maximum" },
      { icon: "paw", rule: "Pets allowed (1 max)" },
      { icon: "cigarette", rule: "No smoking" },
      { icon: "party", rule: "No parties" },
    ],
    features: [
      {
        icon: "calendar",
        title: "Flexible check-in & out",
        description: "Check-in after 4:00 PM • Check-out before 10:00 AM • Pets welcome",
      },
      {
        icon: "refund",
        title: "Easy cancellation",
        description: "Cancel within 48hrs for a full refund",
      },
      {
        icon: "sparkles",
        title: "Pristine homes, no to-do lists",
        description: "Arrive to five star cleaning • No chores at checkout • Just lock up and go",
      },
    ],
  },
]

async function seed() {
  console.log("[v0] Starting Sanity seed...")
  console.log("[v0] Project ID:", projectId)
  console.log("[v0] Dataset:", dataset)

  try {
    // Delete existing properties first
    console.log("[v0] Deleting existing properties...")
    await client.delete({ query: '*[_type == "property"]' })
    console.log("[v0] Existing properties deleted")

    // Create new properties
    console.log("[v0] Creating new properties...")
    for (const property of properties) {
      const result = await client.create(property)
      console.log(`[v0] Created property: ${property.name} (${result._id})`)
    }

    console.log(`[v0] Successfully seeded ${properties.length} properties!`)
  } catch (error) {
    console.error("[v0] Error seeding Sanity:", error)
    throw error
  }
}

seed()

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

async function uploadImageFromUrl(imageUrl, filename) {
  console.log(`[v0] Uploading image: ${filename}`)

  try {
    // Fetch the image
    const imageResponse = await fetch(imageUrl)
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl} - Status: ${imageResponse.status}`)
    }

    // Get the image as a blob
    const imageBlob = await imageResponse.blob()

    // Upload directly to Sanity HTTP API
    const uploadUrl = `https://${projectId}.api.sanity.io/v2024-01-01/assets/images/${dataset}?filename=${encodeURIComponent(filename)}`

    const uploadResponse = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": imageBlob.type || "image/jpeg",
      },
      body: imageBlob,
    })

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text()
      throw new Error(`Failed to upload to Sanity: ${uploadResponse.status} - ${errorText}`)
    }

    const result = await uploadResponse.json()
    const assetId = result.document._id

    console.log(`[v0] Uploaded: ${filename} -> ${assetId}`)

    return {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: assetId,
      },
    }
  } catch (error) {
    console.error(`[v0] Error uploading ${filename}:`, error.message)
    throw error
  }
}

const propertiesData = [
  {
    name: "Inlet Beach Serenity",
    slug: "inlet-beach-serenity",
    location: "Inlet Beach, Florida",
    pricePerNight: 466,
    rating: 4.9,
    reviewCount: 127,
    description:
      "OffGrid Inlet Beach Serenity offers an exquisite retreat with stunning lake views and direct lake access, perfect for those seeking tranquility. Guests can explore the picturesque surroundings with complimentary bicycles, ensuring a luxurious and active escape. This elegant property provides an idyllic setting for relaxation and cherished memories by the water.",
    guests: 8,
    beds: 4,
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    mainImageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
    imageUrls: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
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
      { name: "Bedroom 1", beds: "1 king bed" },
      { name: "Bedroom 2", beds: "1 king bed" },
      { name: "Bedroom 3", beds: "2 queen beds" },
      { name: "Bedroom 4", beds: "2 twin beds" },
    ],
    bedroomImageUrls: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=400&fit=crop",
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
    name: "Malibu Oceanfront",
    slug: "malibu-oceanfront",
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
    mainImageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
    imageUrls: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
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
      { name: "Primary Suite", beds: "1 king bed" },
      { name: "Guest Suite 1", beds: "1 king bed" },
      { name: "Guest Suite 2", beds: "1 queen bed" },
      { name: "Bunk Room", beds: "4 twin beds" },
      { name: "Pool House", beds: "1 queen bed" },
    ],
    bedroomImageUrls: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
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
    name: "Aspen Mountain Lodge",
    slug: "aspen-mountain-lodge",
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
    mainImageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&h=800&fit=crop",
    imageUrls: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=1200&h=800&fit=crop",
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
      { name: "Master Suite", beds: "1 king bed" },
      { name: "Junior Suite", beds: "1 king bed" },
      { name: "Guest Room 1", beds: "1 queen bed" },
      { name: "Guest Room 2", beds: "1 queen bed" },
      { name: "Bunk Room", beds: "4 twin beds" },
      { name: "Nanny Suite", beds: "1 full bed" },
    ],
    bedroomImageUrls: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
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
    name: "Maui Paradise Villa",
    slug: "maui-paradise-villa",
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
    mainImageUrl: "https://images.unsplash.com/photo-1499793983690-e29da5961d3e?w=1200&h=800&fit=crop",
    imageUrls: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop",
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
      { name: "Ocean Suite", beds: "1 king bed" },
      { name: "Garden Suite", beds: "1 king bed" },
      { name: "Pool Suite", beds: "1 queen bed" },
      { name: "Guest Room", beds: "2 twin beds" },
    ],
    bedroomImageUrls: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=400&fit=crop",
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
    name: "Joshua Tree Retreat",
    slug: "joshua-tree-retreat",
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
    mainImageUrl: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&h=800&fit=crop",
    imageUrls: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1527030280862-64c505d27636?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
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
      { name: "Master Bedroom", beds: "1 king bed" },
      { name: "Guest Bedroom", beds: "1 queen bed" },
      { name: "Bunk Room", beds: "2 twin beds" },
    ],
    bedroomImageUrls: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=400&fit=crop",
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
    name: "Lake Tahoe Chalet",
    slug: "lake-tahoe-chalet",
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
    mainImageUrl: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1200&h=800&fit=crop",
    imageUrls: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
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
      { name: "Lake View Master", beds: "1 king bed" },
      { name: "Mountain Suite", beds: "1 king bed" },
      { name: "Pine Room", beds: "1 queen bed" },
      { name: "Bunk Room", beds: "4 twin beds" },
      { name: "Lower Level Suite", beds: "1 queen bed" },
    ],
    bedroomImageUrls: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=600&h=400&fit=crop",
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
  console.log("[v0] Starting Sanity seed with image uploads...")
  console.log("[v0] Project ID:", projectId)
  console.log("[v0] Dataset:", dataset)

  try {
    // Delete existing reviews first to remove references to properties
    console.log("[v0] Deleting existing reviews...")
    await client.delete({ query: '*[_type == "review"]' })
    console.log("[v0] Existing reviews deleted")

    // Delete existing properties
    console.log("[v0] Deleting existing properties...")
    await client.delete({ query: '*[_type == "property"]' })
    console.log("[v0] Existing properties deleted")

    // Create new properties with uploaded images
    console.log("[v0] Creating new properties with image uploads...")

    for (const propertyData of propertiesData) {
      console.log(`\n[v0] Processing property: ${propertyData.name}`)

      // Upload main image
      const mainImage = await uploadImageFromUrl(propertyData.mainImageUrl, `${propertyData.slug}-main.jpg`)

      // Upload gallery images
      const galleryImages = []
      for (let i = 0; i < propertyData.imageUrls.length; i++) {
        const image = await uploadImageFromUrl(propertyData.imageUrls[i], `${propertyData.slug}-gallery-${i + 1}.jpg`)
        galleryImages.push(image)
      }

      // Upload bedroom images and build bedroomDetails with image references
      const bedroomDetails = []
      for (let i = 0; i < propertyData.bedroomDetails.length; i++) {
        const bedroom = propertyData.bedroomDetails[i]
        const imageUrl = propertyData.bedroomImageUrls[i]

        let bedroomImage = null
        if (imageUrl) {
          bedroomImage = await uploadImageFromUrl(imageUrl, `${propertyData.slug}-bedroom-${i + 1}.jpg`)
        }

        bedroomDetails.push({
          _key: `bedroom-${i}`,
          name: bedroom.name,
          beds: bedroom.beds,
          image: bedroomImage,
        })
      }

      // Create the property document
      const property = {
        _type: "property",
        name: propertyData.name,
        slug: { _type: "slug", current: propertyData.slug },
        location: propertyData.location,
        pricePerNight: propertyData.pricePerNight,
        rating: propertyData.rating,
        reviewCount: propertyData.reviewCount,
        description: propertyData.description,
        guests: propertyData.guests,
        beds: propertyData.beds,
        bedrooms: propertyData.bedrooms,
        bathrooms: propertyData.bathrooms,
        sqft: propertyData.sqft,
        mainImage,
        images: galleryImages.map((img, i) => ({ ...img, _key: `image-${i}` })),
        featured: propertyData.featured,
        categories: propertyData.categories,
        amenities: propertyData.amenities,
        highlights: propertyData.highlights.map((h, i) => ({ ...h, _key: `highlight-${i}` })),
        bedroomDetails,
        coordinates: propertyData.coordinates,
        houseRules: propertyData.houseRules.map((r, i) => ({ ...r, _key: `rule-${i}` })),
        features: propertyData.features.map((f, i) => ({ ...f, _key: `feature-${i}` })),
      }

      const result = await client.create(property)
      console.log(`[v0] Created property: ${propertyData.name} (${result._id})`)
    }

    console.log(`\n[v0] Successfully seeded ${propertiesData.length} properties with images!`)
  } catch (error) {
    console.error("[v0] Error seeding Sanity:", error)
    throw error
  }
}

seed()

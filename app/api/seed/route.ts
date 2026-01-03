import { NextResponse } from "next/server"

async function uploadImageToSanity(
  imageUrl: string,
  filename: string,
  projectId: string,
  dataset: string,
  token: string,
): Promise<{ _type: "image"; asset: { _type: "reference"; _ref: string } } | null> {
  try {
    // Fetch the image
    const imageResponse = await fetch(imageUrl)
    if (!imageResponse.ok) {
      console.log(`[v0] Failed to fetch image: ${imageUrl}`)
      return null
    }

    const imageBlob = await imageResponse.blob()
    const contentType = imageResponse.headers.get("content-type") || "image/jpeg"

    // Upload to Sanity
    const uploadResponse = await fetch(
      `https://${projectId}.api.sanity.io/v2024-01-01/assets/images/${dataset}?filename=${filename}`,
      {
        method: "POST",
        headers: {
          "Content-Type": contentType,
          Authorization: `Bearer ${token}`,
        },
        body: imageBlob,
      },
    )

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text()
      console.log(`[v0] Failed to upload image: ${errorText}`)
      return null
    }

    const uploadResult = await uploadResponse.json()
    console.log(`[v0] Uploaded image: ${uploadResult.document._id}`)

    return {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: uploadResult.document._id,
      },
    }
  } catch (error) {
    console.log(`[v0] Error uploading image:`, error)
    return null
  }
}

export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const token = process.env.SANITY_API_TOKEN

  if (!projectId || !dataset || !token) {
    return NextResponse.json({ success: false, error: "Missing Sanity configuration" }, { status: 500 })
  }

  try {
    const imageUrls = {
      inletBeach: [
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      ],
      malibu: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      ],
      aspen: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
        "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&q=80",
      ],
      maui: [
        "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=1200&q=80",
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80",
      ],
      joshuaTree: [
        "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      ],
      lakeTahoe: [
        "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&q=80",
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80",
      ],
    }

    console.log("[v0] Uploading images to Sanity CDN...")

    const uploadedImages: Record<string, Array<{ _type: "image"; asset: { _type: "reference"; _ref: string } }>> = {}

    for (const [key, urls] of Object.entries(imageUrls)) {
      uploadedImages[key] = []
      for (let i = 0; i < urls.length; i++) {
        const image = await uploadImageToSanity(urls[i], `${key}-${i}.jpg`, projectId, dataset, token)
        if (image) {
          uploadedImages[key].push(image)
        }
      }
      console.log(`[v0] Uploaded ${uploadedImages[key].length} images for ${key}`)
    }

    const properties = [
      {
        _id: "property-inlet-beach-serenity",
        _type: "property",
        name: "Inlet Beach Serenity",
        slug: { _type: "slug", current: "inlet-beach-serenity" },
        location: "Inlet Beach, Florida",
        description:
          "Wander Inlet Beach Serenity offers an exquisite retreat with stunning lake views and direct lake access, perfect for those seeking tranquility. Guests can explore the picturesque surroundings with complimentary bicycles, ensuring a luxurious and active escape.",
        pricePerNight: 466,
        bedrooms: 4,
        bathrooms: 3.5,
        beds: 4,
        maxGuests: 8,
        sqft: 3200,
        rating: 4.97,
        reviewCount: 128,
        featured: true,
        highlights: ["Lake View", "Lake Access", "Bicycle"],
        amenities: [
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
          "Lake view",
          "WiFi",
          "Kitchen",
          "TV",
          "Hot tub",
          "Fire pit",
          "BBQ grill",
        ],
        mainImage: uploadedImages.inletBeach[0] || null,
        images: uploadedImages.inletBeach,
        checkIn: "16:00",
        checkOut: "10:00",
        petsAllowed: false,
        smokingAllowed: false,
        eventsAllowed: false,
      },
      {
        _id: "property-malibu-oceanfront",
        _type: "property",
        name: "Malibu Oceanfront Villa",
        slug: { _type: "slug", current: "malibu-oceanfront" },
        location: "Malibu, California",
        description:
          "Experience the ultimate in coastal luxury at this stunning Malibu oceanfront villa with panoramic Pacific Ocean views.",
        pricePerNight: 1250,
        bedrooms: 5,
        bathrooms: 4,
        beds: 6,
        maxGuests: 10,
        sqft: 4500,
        rating: 4.95,
        reviewCount: 89,
        featured: true,
        highlights: ["Ocean View", "Private Beach", "Infinity Pool"],
        amenities: ["Private beach access", "Infinity pool", "Hot tub", "Ocean view", "WiFi", "Kitchen", "TV", "Gym"],
        mainImage: uploadedImages.malibu[0] || null,
        images: uploadedImages.malibu,
        checkIn: "16:00",
        checkOut: "11:00",
        petsAllowed: true,
        smokingAllowed: false,
        eventsAllowed: true,
      },
      {
        _id: "property-aspen-mountain-lodge",
        _type: "property",
        name: "Aspen Mountain Lodge",
        slug: { _type: "slug", current: "aspen-mountain-lodge" },
        location: "Aspen, Colorado",
        description:
          "Nestled in the heart of Aspen, this luxurious mountain lodge offers ski-in/ski-out access and breathtaking mountain views.",
        pricePerNight: 890,
        bedrooms: 6,
        bathrooms: 5,
        beds: 8,
        maxGuests: 12,
        sqft: 5200,
        rating: 4.98,
        reviewCount: 156,
        featured: true,
        highlights: ["Ski-in/Ski-out", "Mountain View", "Hot Tub"],
        amenities: ["Ski storage", "Hot tub", "Sauna", "Fireplace", "Mountain view", "WiFi", "Kitchen", "Game room"],
        mainImage: uploadedImages.aspen[0] || null,
        images: uploadedImages.aspen,
        checkIn: "16:00",
        checkOut: "10:00",
        petsAllowed: true,
        smokingAllowed: false,
        eventsAllowed: false,
      },
      {
        _id: "property-maui-paradise",
        _type: "property",
        name: "Maui Paradise Villa",
        slug: { _type: "slug", current: "maui-paradise-villa" },
        location: "Maui, Hawaii",
        description:
          "Escape to paradise in this stunning Maui villa with breathtaking ocean views and lush tropical gardens.",
        pricePerNight: 780,
        bedrooms: 4,
        bathrooms: 3,
        beds: 5,
        maxGuests: 8,
        sqft: 3800,
        rating: 4.96,
        reviewCount: 112,
        featured: false,
        highlights: ["Ocean View", "Tropical Garden", "Pool"],
        amenities: ["Pool", "Ocean view", "Tropical garden", "BBQ", "WiFi", "Kitchen", "Outdoor shower"],
        mainImage: uploadedImages.maui[0] || null,
        images: uploadedImages.maui,
        checkIn: "15:00",
        checkOut: "10:00",
        petsAllowed: false,
        smokingAllowed: false,
        eventsAllowed: false,
      },
      {
        _id: "property-joshua-tree",
        _type: "property",
        name: "Joshua Tree Retreat",
        slug: { _type: "slug", current: "joshua-tree-retreat" },
        location: "Joshua Tree, California",
        description:
          "A modern desert oasis with stunning views of the iconic Joshua Tree landscape, perfect for stargazing.",
        pricePerNight: 420,
        bedrooms: 3,
        bathrooms: 2,
        beds: 4,
        maxGuests: 6,
        sqft: 2200,
        rating: 4.94,
        reviewCount: 78,
        featured: false,
        highlights: ["Desert View", "Hot Tub", "Stargazing"],
        amenities: ["Hot tub", "Desert view", "Fire pit", "Stargazing deck", "WiFi", "Kitchen"],
        mainImage: uploadedImages.joshuaTree[0] || null,
        images: uploadedImages.joshuaTree,
        checkIn: "16:00",
        checkOut: "11:00",
        petsAllowed: true,
        smokingAllowed: false,
        eventsAllowed: false,
      },
      {
        _id: "property-lake-tahoe",
        _type: "property",
        name: "Lake Tahoe Chalet",
        slug: { _type: "slug", current: "lake-tahoe-chalet" },
        location: "Lake Tahoe, California",
        description:
          "A beautiful lakefront chalet with private dock and stunning mountain views across crystal-clear waters.",
        pricePerNight: 650,
        bedrooms: 5,
        bathrooms: 4,
        beds: 7,
        maxGuests: 10,
        sqft: 4000,
        rating: 4.97,
        reviewCount: 134,
        featured: false,
        highlights: ["Lake View", "Private Dock", "Hot Tub"],
        amenities: ["Private dock", "Lake view", "Hot tub", "Kayaks", "Fireplace", "WiFi", "Kitchen"],
        mainImage: uploadedImages.lakeTahoe[0] || null,
        images: uploadedImages.lakeTahoe,
        checkIn: "16:00",
        checkOut: "10:00",
        petsAllowed: true,
        smokingAllowed: false,
        eventsAllowed: false,
      },
    ]

    const reviews = [
      {
        _id: "review-1",
        _type: "review",
        author: "jenolesada",
        location: "United States",
        content:
          "We decided to celebrate our 10-year anniversary at a Wander and it's one of the best decisions we've made! Everything in the property was well thought-out.",
        stayDate: "Dec 2025",
        verified: true,
        property: { _type: "reference", _ref: "property-inlet-beach-serenity" },
      },
      {
        _id: "review-2",
        _type: "review",
        author: "Hike2Hike",
        location: "United States",
        content: "Wander has been a fabulous experience and platform to work with and I look forward to future trips!",
        stayDate: "Dec 2025",
        verified: true,
        property: { _type: "reference", _ref: "property-inlet-beach-serenity" },
      },
      {
        _id: "review-3",
        _type: "review",
        author: "TravelLover",
        location: "Canada",
        content:
          "Absolutely stunning property with incredible attention to detail. The views were breathtaking and the amenities exceeded our expectations.",
        stayDate: "Nov 2025",
        verified: true,
        property: { _type: "reference", _ref: "property-malibu-oceanfront" },
      },
    ]

    const mutations = [
      ...properties.map((doc) => ({ createOrReplace: doc })),
      ...reviews.map((doc) => ({ createOrReplace: doc })),
    ]

    const response = await fetch(`https://${projectId}.api.sanity.io/v2024-01-01/data/mutate/${dataset}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mutations }),
    })

    const responseText = await response.text()

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: `Sanity API error: ${response.status}`, details: responseText },
        { status: 500 },
      )
    }

    const result = JSON.parse(responseText)

    return NextResponse.json({
      success: true,
      message: `Created ${properties.length} properties and ${reviews.length} reviews with images from Sanity CDN`,
      transactionId: result.transactionId,
      imagesUploaded: Object.entries(uploadedImages).map(([key, imgs]) => `${key}: ${imgs.length}`),
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}

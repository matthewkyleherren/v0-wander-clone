import { NextResponse } from "next/server"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const token = process.env.SANITY_API_TOKEN!

async function uploadImageToSanity(imageUrl: string): Promise<string> {
  try {
    const imageResponse = await fetch(imageUrl)
    const imageBuffer = await imageResponse.arrayBuffer()
    const contentType = imageResponse.headers.get("content-type") || "image/jpeg"

    const uploadUrl = `https://${projectId}.api.sanity.io/v2024-01-01/assets/images/${dataset}`
    const uploadResponse = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        "Content-Type": contentType,
        Authorization: `Bearer ${token}`,
      },
      body: imageBuffer,
    })

    if (!uploadResponse.ok) {
      throw new Error(`Failed to upload image: ${uploadResponse.statusText}`)
    }

    const result = await uploadResponse.json()
    return result.document._id
  } catch (error) {
    console.error("[v0] Error uploading image:", error)
    throw error
  }
}

async function createDocuments(mutations: any[]) {
  const mutateUrl = `https://${projectId}.api.sanity.io/v2024-01-01/data/mutate/${dataset}`

  const response = await fetch(mutateUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ mutations }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to create documents: ${errorText}`)
  }

  return await response.json()
}

export async function GET() {
  try {
    console.log("[v0] Starting comprehensive seed...")

    console.log("[v0] Uploading images to Sanity CDN...")
    const heroImageRef = await uploadImageToSanity("/luxury-vacation-rental-hero.jpg")
    const feature1ImageRef = await uploadImageToSanity("/happy-family-walking-outside-vacation-home.jpg")
    const feature2ImageRef = await uploadImageToSanity("/luxury-villa-infinity-pool-sunset-ocean.jpg")
    const feature3ImageRef = await uploadImageToSanity("/concierge-service-luxury-hotel-staff.jpg")
    const feature4ImageRef = await uploadImageToSanity("/mountain-view-luxury-cabin-window.jpg")
    const feature5ImageRef = await uploadImageToSanity("/pristine-clean-luxury-bedroom-white-linens.jpg")
    const feature6ImageRef = await uploadImageToSanity("/smart-home-security-system-modern.jpg")

    console.log("[v0] Images uploaded successfully")

    // Create all documents
    const mutations = [
      // Home Page
      {
        createOrReplace: {
          _type: "homePage",
          _id: "home-page-singleton",
          hero: {
            heading: "Find your happy place",
            subheading: "Discover luxury vacation rentals in the most beautiful destinations around the world.",
            backgroundImage: {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: heroImageRef,
              },
            },
            trustBadges: [
              { icon: "shield", text: "Verified properties" },
              { icon: "star", text: "Top rated" },
              { icon: "support", text: "24/7 support" },
            ],
          },
          categories: [
            { name: "For you", icon: "sparkles" },
            { name: "Make An Offer", icon: "tag" },
            { name: "Holiday", icon: "tree" },
            { name: "Beach", icon: "waves" },
            { name: "Mountain", icon: "mountain" },
            { name: "Lake", icon: "droplet" },
            { name: "Desert", icon: "sun" },
            { name: "Ski", icon: "snowflake" },
            { name: "Tropical", icon: "palm-tree" },
            { name: "City", icon: "building" },
            { name: "Countryside", icon: "tractor" },
            { name: "Pet-friendly", icon: "paw" },
            { name: "Pool", icon: "waves" },
            { name: "Hot tub", icon: "bath" },
            { name: "WiFi", icon: "wifi" },
            { name: "Kitchen", icon: "chef-hat" },
            { name: "Parking", icon: "car" },
          ],
          wanderDifference: {
            title: "The OffGrid difference",
            description:
              "OffGrid is different because we combine the quality of a luxury hotel with the comfort of a private vacation home. Your best trip ever is just a few clicks away.",
            features: [
              {
                title: "Only the best homes",
                description:
                  "We'll never not look like the pictures. Every OffGrid is beautiful and expertly operated, so you can leave any stress at the door.",
                image: {
                  _type: "image",
                  asset: {
                    _type: "reference",
                    _ref: feature1ImageRef,
                  },
                },
              },
              {
                title: "Hotel-grade amenities",
                description:
                  "We'll never leave you hanging. From ultra fast WiFi to luxury linens, our homes make it easy to work, rest, and play.",
                image: {
                  _type: "image",
                  asset: {
                    _type: "reference",
                    _ref: feature2ImageRef,
                  },
                },
              },
              {
                title: "24/7 concierge",
                description:
                  "We're here for you around the clock. Our concierge team can help with anything from dinner reservations to adventure planning.",
                image: {
                  _type: "image",
                  asset: {
                    _type: "reference",
                    _ref: feature3ImageRef,
                  },
                },
              },
              {
                title: "Stunning locations",
                description:
                  "Wake up to breathtaking views. All OffGrid homes are in the most beautiful destinations around the world.",
                image: {
                  _type: "image",
                  asset: {
                    _type: "reference",
                    _ref: feature4ImageRef,
                  },
                },
              },
              {
                title: "Pristine & clean",
                description:
                  "Five-star cleaning standards. Every OffGrid is professionally cleaned and sanitized before your arrival.",
                image: {
                  _type: "image",
                  asset: {
                    _type: "reference",
                    _ref: feature5ImageRef,
                  },
                },
              },
              {
                title: "Smart home tech",
                description:
                  "Control everything from your phone. Adjust lighting, temperature, and entertainment with our smart home systems.",
                image: {
                  _type: "image",
                  asset: {
                    _type: "reference",
                    _ref: feature6ImageRef,
                  },
                },
              },
            ],
          },
        },
      },

      // Site Settings
      {
        createOrReplace: {
          _type: "siteSettings",
          _id: "site-settings-singleton",
          siteName: "OffGrid",
          headerNavigation: [
            { label: "Home", href: "/" },
            { label: "Properties", href: "/" },
            { label: "Sites", href: "/sites" },
            { label: "About", href: "/about" },
          ],
          footer: {
            columns: [
              {
                title: "Company",
                links: [
                  { label: "About", href: "/about" },
                  { label: "Careers", href: "/careers" },
                  { label: "Press", href: "/press" },
                  { label: "Blog", href: "/blog" },
                ],
              },
              {
                title: "Support",
                links: [
                  { label: "Help Center", href: "/help" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "Safety", href: "/safety" },
                  { label: "Cancellation", href: "/cancellation" },
                ],
              },
              {
                title: "Hosting",
                links: [
                  { label: "List your property", href: "/host" },
                  { label: "Host resources", href: "/host/resources" },
                  { label: "Community", href: "/community" },
                ],
              },
            ],
            newsletter: {
              title: "Subscribe to our newsletter",
              description: "Get the latest news and exclusive offers delivered to your inbox.",
              buttonText: "Subscribe",
            },
            socialLinks: [
              { platform: "instagram", url: "https://instagram.com/offgrid" },
              { platform: "facebook", url: "https://facebook.com/offgrid" },
              { platform: "twitter", url: "https://twitter.com/offgrid" },
            ],
            copyrightText: "© 2026 OffGrid. All rights reserved.",
          },
        },
      },

      // Sites Page (simplified for now - you can expand this later)
      {
        createOrReplace: {
          _type: "sitesPage",
          _id: "sites-page-singleton",
          hero: {
            heading: "Own your brand, bookings and guests.",
            subheading: "Launch a beautiful, high-converting website for your vacation rental business in minutes.",
            ctaText: "Get Started",
            stats: [
              { value: "300+", label: "Property websites" },
              { value: "2.5x", label: "More direct bookings" },
              { value: "15min", label: "Setup time" },
            ],
          },
          valueProps: [
            {
              icon: "globe",
              title: "Your brand, your way",
              description: "Create a stunning website that reflects your unique brand and style.",
            },
            {
              icon: "trending-up",
              title: "Boost conversions",
              description: "Convert more visitors into bookings with our optimized booking flow.",
            },
            {
              icon: "zap",
              title: "Lightning fast",
              description: "Built for speed and performance on all devices.",
            },
          ],
          brandingSection: {
            title: "Make it yours",
            description:
              "Customize every aspect of your website to match your brand. From colors to fonts to logos, you have complete control.",
            image: {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: heroImageRef,
              },
            },
          },
          conversionsSection: {
            title: "Optimized for bookings",
            description:
              "Our websites are designed to convert. Every element is crafted to guide visitors toward booking.",
            image: {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: feature2ImageRef,
              },
            },
          },
          checkoutSection: {
            title: "Seamless checkout",
            description: "Provide a smooth, secure checkout experience that builds trust and drives conversions.",
            image: {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: feature3ImageRef,
              },
            },
          },
          integrationsSection: {
            title: "Sync with your PMS",
            description: "Seamlessly integrate with the tools you already use.",
            integrations: [
              { name: "Guesty", logo: null },
              { name: "Hostfully", logo: null },
              { name: "Lodgify", logo: null },
            ],
          },
          auditSection: {
            title: "Get a free website audit",
            description: "See how your current website stacks up and get personalized recommendations for improvement.",
            ctaText: "Request Audit",
          },
          technologyFeatures: [
            {
              icon: "smartphone",
              title: "Mobile-first design",
              description: "Looks perfect on every device.",
            },
            {
              icon: "shield",
              title: "Enterprise security",
              description: "Bank-level encryption and security.",
            },
            {
              icon: "search",
              title: "SEO optimized",
              description: "Rank higher in search results.",
            },
          ],
          howItWorksSteps: [
            {
              number: "1",
              title: "Choose your template",
              description: "Start with a beautiful, pre-designed template.",
            },
            {
              number: "2",
              title: "Customize your brand",
              description: "Add your logo, colors, and content.",
            },
            {
              number: "3",
              title: "Connect your PMS",
              description: "Sync availability and bookings automatically.",
            },
            {
              number: "4",
              title: "Launch and grow",
              description: "Go live and start accepting direct bookings.",
            },
          ],
          pricingPlans: [
            {
              name: "Starter",
              price: "$99/mo",
              description: "Perfect for getting started",
              features: ["Custom domain", "Mobile responsive", "Basic analytics", "Email support"],
              ctaText: "Get Started",
              featured: false,
            },
            {
              name: "Professional",
              price: "$199/mo",
              description: "For growing businesses",
              features: [
                "Everything in Starter",
                "PMS integrations",
                "Advanced analytics",
                "Priority support",
                "Custom branding",
              ],
              ctaText: "Get Started",
              featured: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For large portfolios",
              features: [
                "Everything in Professional",
                "Dedicated account manager",
                "Custom integrations",
                "White label options",
              ],
              ctaText: "Contact Sales",
              featured: false,
            },
          ],
          finalCta: {
            title: "Ready to grow your direct bookings?",
            description: "Join hundreds of property managers who are taking control of their business.",
            ctaText: "Get Started Today",
          },
        },
      },
    ]

    console.log("[v0] Creating documents in Sanity...")
    const result = await createDocuments(mutations)

    console.log("[v0] Seed completed successfully!")

    return NextResponse.json({
      success: true,
      message: "All content seeded successfully",
      result,
    })
  } catch (error: any) {
    console.error("[v0] Seed error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}

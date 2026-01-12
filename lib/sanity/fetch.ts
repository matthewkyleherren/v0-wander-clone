import type {
  Property,
  PropertyCard,
  Review,
  HomePage,
  SitesPage,
  SiteSettings,
} from "./types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

async function sanityFetch<T>(
  query: string,
  params: Record<string, string> = {},
): Promise<T> {
  const url = new URL(
    `https://${projectId}.apicdn.sanity.io/v2024-01-01/data/query/${dataset}`,
  );
  url.searchParams.set("query", query);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  }

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("[v0] Sanity fetch error:", errorText);
    throw new Error(`Sanity fetch failed: ${response.status}`);
  }

  const data = await response.json();
  return data.result;
}

function mapPropertyCard(doc: Record<string, unknown>): PropertyCard {
  const imageUrl =
    (doc.mainImageUrl as string) || "/luxury-vacation-rental.jpg";
  const slug = doc.slug as { current: string } | string;
  const slugValue = typeof slug === "string" ? slug : slug.current;

  return {
    _id: doc._id as string,
    name: (doc.name || doc.title) as string,
    slug: typeof slug === "string" ? { current: slug } : slug,
    location: doc.location as string,
    pricePerNight: doc.pricePerNight as number,
    rating: doc.rating as number,
    reviewCount: doc.reviewCount as number,
    image: imageUrl,
    amenities: (doc.amenities as string[]) || [],
  };
}

// Fetch all properties
export async function getProperties(): Promise<PropertyCard[]> {
  try {
    const query = `*[_type == "property"] | order(name asc) {
      _id,
      name,
      title,
      slug,
      location,
      pricePerNight,
      rating,
      reviewCount,
      mainImageUrl,
      amenities
    }`;
    const result = await sanityFetch<Record<string, unknown>[]>(query);
    return (result || []).map(mapPropertyCard);
  } catch (error) {
    console.error("[v0] Error fetching properties:", error);
    return [];
  }
}

// Fetch a single property by slug
export async function getPropertyBySlug(
  slug: string,
): Promise<Property | null> {
  try {
    const query = `*[_type == "property" && slug.current == $slug][0] {
      _id,
      name,
      title,
      slug,
      location,
      description,
      pricePerNight,
      cleaningFee,
      serviceFee,
      rating,
      reviewCount,
      maxGuests,
      guests,
      bedrooms,
      beds,
      bathrooms,
      sqft,
      mainImageUrl,
      imageUrls,
      amenities,
      highlights,
      features,
      sleepingArrangements,
      houseRules,
      cancellationPolicy,
      checkIn,
      checkOut,
      petsAllowed,
      smokingAllowed,
      eventsAllowed,
      coordinates,
      featured,
      categories,
      bedroomDetails
    }`;
    const result = await sanityFetch<Record<string, unknown> | null>(query, {
      slug,
    });

    if (!result) return null;

    const mainImage =
      (result.mainImageUrl as string) || "/luxury-vacation-rental.jpg";
    const galleryImages = (result.imageUrls as string[]) || [];

    // Map to Property type with correct image fields
    return {
      ...result,
      image: mainImage,
      images: galleryImages.length > 0 ? galleryImages : undefined,
      guests: result.guests || result.maxGuests,
      bedroomDetails: result.bedroomDetails,
    } as Property;
  } catch (error) {
    console.error("[v0] Error fetching property:", error);
    return null;
  }
}

// Fetch featured properties
export async function getFeaturedProperties(): Promise<PropertyCard[]> {
  try {
    const query = `*[_type == "property" && featured == true] | order(name asc) {
      _id,
      name,
      title,
      slug,
      location,
      pricePerNight,
      rating,
      reviewCount,
      mainImageUrl,
      amenities,
      featured
    }`;
    const result = await sanityFetch<Record<string, unknown>[]>(query);
    return (result || []).map(mapPropertyCard);
  } catch (error) {
    console.error("[v0] Error fetching featured properties:", error);
    return [];
  }
}

// Fetch properties by category
export async function getPropertiesByCategory(
  category: string,
): Promise<PropertyCard[]> {
  try {
    const query = `*[_type == "property" && $category in categories] | order(name asc) {
      _id,
      name,
      title,
      slug,
      location,
      pricePerNight,
      rating,
      reviewCount,
      mainImageUrl,
      amenities,
      featured,
      categories
    }`;
    const result = await sanityFetch<Record<string, unknown>[]>(query, {
      category,
    });
    return (result || []).map(mapPropertyCard);
  } catch (error) {
    console.error("[v0] Error fetching properties by category:", error);
    return [];
  }
}

// Fetch reviews for a property
export async function getReviewsByPropertyId(
  propertyId: string,
): Promise<Review[]> {
  try {
    const query = `*[_type == "review" && property._ref == $propertyId] | order(stayDate desc) {
      _id,
      author,
      location,
      content,
      stayDate,
      verified
    }`;
    const result = await sanityFetch<Review[]>(query, { propertyId });
    return result || [];
  } catch (error) {
    console.error("[v0] Error fetching reviews:", error);
    return [];
  }
}

// Fetch home page content
export async function getHomePage(): Promise<HomePage | null> {
  try {
    const query = `*[_type == "homePage"][0] {
      _id,
      hero {
        heading,
        subheading,
        "backgroundImage": backgroundImage.asset->url,
        trustBadges[] {
          icon,
          text
        }
      },
      categories[] {
        name,
        icon
      },
      wanderDifference {
        title,
        description,
        features[] {
          title,
          description,
          "image": image.asset->url
        }
      }
    }`;
    const result = await sanityFetch<HomePage | null>(query);
    return result;
  } catch (error) {
    console.error("[v0] Error fetching home page:", error);
    return null;
  }
}

// Fetch sites page content
export async function getSitesPage(): Promise<SitesPage | null> {
  try {
    const query = `*[_type == "sitesPage"][0] {
      _id,
      hero {
        heading,
        subheading,
        ctaText,
        stats[] {
          value,
          label
        }
      },
      valueProps[] {
        icon,
        title,
        description
      },
      brandingSection {
        title,
        description,
        "image": image.asset->url
      },
      conversionsSection {
        title,
        description,
        "image": image.asset->url
      },
      checkoutSection {
        title,
        description,
        "image": image.asset->url
      },
      integrationsSection {
        title,
        description,
        integrations[] {
          name,
          "logo": logo.asset->url
        }
      },
      auditSection {
        title,
        description,
        ctaText
      },
      technologyFeatures[] {
        icon,
        title,
        description
      },
      howItWorksSteps[] {
        number,
        title,
        description
      },
      pricingPlans[] {
        name,
        price,
        description,
        features,
        ctaText,
        featured
      },
      finalCta {
        title,
        description,
        ctaText
      }
    }`;
    const result = await sanityFetch<SitesPage | null>(query);
    return result;
  } catch (error) {
    console.error("[v0] Error fetching sites page:", error);
    return null;
  }
}

// Fetch site settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const query = `*[_type == "siteSettings"][0] {
      _id,
      siteName,
      "logo": logo.asset->url,
      headerNavigation[] {
        label,
        href
      },
      footer {
        columns[] {
          title,
          links[] {
            label,
            href
          }
        },
        newsletter {
          title,
          description,
          buttonText
        },
        socialLinks[] {
          platform,
          url
        },
        copyrightText
      }
    }`;
    const result = await sanityFetch<SiteSettings | null>(query);
    return result;
  } catch (error) {
    console.error("[v0] Error fetching site settings:", error);
    return null;
  }
}

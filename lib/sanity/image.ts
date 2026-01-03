import imageUrlBuilder from "@sanity/image-url"
import { client } from "./client"

const builder = imageUrlBuilder(client)

// Helper function to get image URL from Sanity image reference
export function urlFor(source: any) {
  return builder.image(source)
}

// Get optimized image URL with specific dimensions
export function getImageUrl(source: any, width?: number, height?: number) {
  if (!source) return null

  let imageBuilder = builder.image(source)

  if (width) {
    imageBuilder = imageBuilder.width(width)
  }
  if (height) {
    imageBuilder = imageBuilder.height(height)
  }

  return imageBuilder.url()
}

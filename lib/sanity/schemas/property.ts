// Sanity schema for Property document type
// This is for reference - add this to your Sanity Studio schemas

export const propertySchema = {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Property Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "pricePerNight",
      title: "Price Per Night",
      type: "number",
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: any) => Rule.min(0).max(5),
    },
    {
      name: "reviewCount",
      title: "Review Count",
      type: "number",
    },
    {
      name: "guests",
      title: "Max Guests",
      type: "number",
    },
    {
      name: "beds",
      title: "Number of Beds",
      type: "number",
    },
    {
      name: "bedrooms",
      title: "Number of Bedrooms",
      type: "number",
    },
    {
      name: "bathrooms",
      title: "Number of Bathrooms",
      type: "number",
    },
    {
      name: "sqft",
      title: "Square Footage",
      type: "number",
    },
    {
      name: "mainImageUrl",
      title: "Main Image URL",
      type: "url",
    },
    {
      name: "imageUrls",
      title: "Gallery Image URLs",
      type: "array",
      of: [{ type: "url" }],
    },
    {
      name: "featured",
      title: "Featured Property",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Beach", value: "beach" },
          { title: "Mountain", value: "mountain" },
          { title: "Desert", value: "desert" },
          { title: "Lake", value: "lake" },
          { title: "Ski", value: "ski" },
          { title: "Tropical", value: "tropical" },
        ],
      },
    },
    {
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "highlights",
      title: "Property Highlights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
        },
      ],
    },
    {
      name: "bedroomDetails",
      title: "Bedroom Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Bedroom Name", type: "string" },
            { name: "beds", title: "Bed Configuration", type: "string" },
            { name: "imageUrl", title: "Bedroom Image URL", type: "url" },
          ],
        },
      ],
    },
    {
      name: "coordinates",
      title: "Coordinates",
      type: "object",
      fields: [
        { name: "lat", title: "Latitude", type: "number" },
        { name: "lng", title: "Longitude", type: "number" },
      ],
    },
    {
      name: "houseRules",
      title: "House Rules",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon", type: "string" },
            { name: "rule", title: "Rule", type: "string" },
          ],
        },
      ],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "string" },
          ],
        },
      ],
    },
  ],
}

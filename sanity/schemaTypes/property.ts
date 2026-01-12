export default {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    // EXISTING FIELDS (keep these as they are)
    {
      name: "name",
      title: "Property Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
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
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
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
            { name: "icon", type: "string", title: "Icon" },
            { name: "label", type: "string", title: "Label" },
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
            { name: "name", type: "string", title: "Bedroom Name" },
            { name: "beds", type: "string", title: "Bed Configuration" },
            {
              name: "image",
              type: "image",
              title: "Bedroom Image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "coordinates",
      title: "Coordinates",
      type: "object",
      fields: [
        { name: "lat", type: "number", title: "Latitude" },
        { name: "lng", type: "number", title: "Longitude" },
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
            { name: "icon", type: "string", title: "Icon" },
            { name: "rule", type: "string", title: "Rule" },
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
            { name: "icon", type: "string", title: "Icon" },
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "string", title: "Description" },
          ],
        },
      ],
    },

    // NEW WANDER-STYLE FIELDS
    {
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Beach House", value: "beach-house" },
          { title: "Mountain Cabin", value: "mountain-cabin" },
          { title: "Lake House", value: "lake-house" },
          { title: "Villa", value: "villa" },
          { title: "Chalet", value: "chalet" },
          { title: "Cottage", value: "cottage" },
          { title: "Estate", value: "estate" },
          { title: "Desert Retreat", value: "desert-retreat" },
        ],
      },
    },
    {
      name: "checkInTime",
      title: "Check-in Time",
      type: "string",
      description: 'e.g., "4:00 PM" or "After 4:00 PM"',
    },
    {
      name: "checkOutTime",
      title: "Check-out Time",
      type: "string",
      description: 'e.g., "10:00 AM" or "Before 10:00 AM"',
    },
    {
      name: "petsAllowed",
      title: "Pets Allowed",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "petFee",
      title: "Pet Fee",
      type: "number",
      description: "Flat fee for pets (if applicable)",
    },
    {
      name: "maxPets",
      title: "Maximum Number of Pets",
      type: "number",
    },
    {
      name: "petRules",
      title: "Pet Rules",
      type: "text",
      rows: 3,
      description: "Detailed pet policy and restrictions",
    },
    {
      name: "cancellationPolicy",
      title: "Cancellation Policy",
      type: "text",
      rows: 3,
    },
    {
      name: "areaDescription",
      title: "Area Description",
      type: "text",
      rows: 4,
      description: "Description of the neighborhood and surrounding area",
    },
    {
      name: "nearbyPlaces",
      title: "Nearby Places",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Place Name",
            },
            {
              name: "type",
              type: "string",
              title: "Type",
              options: {
                list: [
                  { title: "Restaurant", value: "restaurant" },
                  { title: "Attraction", value: "attraction" },
                  { title: "Shop", value: "shop" },
                  { title: "Activity", value: "activity" },
                  { title: "Grocery", value: "grocery" },
                  { title: "Other", value: "other" },
                ],
              },
            },
            {
              name: "distance",
              type: "string",
              title: "Distance",
              description: 'e.g., "5 min walk", "10 min drive"',
            },
            {
              name: "description",
              type: "text",
              title: "Description",
              rows: 2,
            },
          ],
        },
      ],
    },
    {
      name: "tourVideoUrl",
      title: "Tour Video URL",
      type: "url",
    },
    {
      name: "additionalVideos",
      title: "Additional Videos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "Video URL" },
            { name: "title", type: "string", title: "Video Title" },
            { name: "thumbnail", type: "url", title: "Thumbnail URL" },
          ],
        },
      ],
    },
    {
      name: "specialNotices",
      title: "Special Notices",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "category",
              type: "string",
              title: "Category",
              options: {
                list: [
                  { title: "Accessibility", value: "accessibility" },
                  { title: "Safety", value: "safety" },
                  { title: "Location", value: "location" },
                  { title: "Seasonal", value: "seasonal" },
                  { title: "Environment", value: "environment" },
                  { title: "Other", value: "other" },
                ],
              },
            },
            { name: "title", type: "string", title: "Notice Title" },
            {
              name: "description",
              type: "text",
              title: "Description",
              rows: 3,
            },
          ],
        },
      ],
    },
    {
      name: "minimumStay",
      title: "Minimum Stay (nights)",
      type: "number",
      validation: (Rule) => Rule.min(1),
    },
    {
      name: "maximumStay",
      title: "Maximum Stay (nights)",
      type: "number",
    },
    {
      name: "instantBooking",
      title: "Instant Booking Available",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "advanceBookingDays",
      title: "Advance Booking Days",
      type: "number",
      description: "How far in advance guests can book",
    },
    {
      name: "quietHoursStart",
      title: "Quiet Hours Start",
      type: "string",
      description: 'e.g., "10:00 PM"',
    },
    {
      name: "quietHoursEnd",
      title: "Quiet Hours End",
      type: "string",
      description: 'e.g., "7:00 AM"',
    },
    {
      name: "eventsAllowed",
      title: "Events Allowed",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "eventsRequireApproval",
      title: "Events Require Approval",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "smokingAllowed",
      title: "Smoking Allowed",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "smokingFee",
      title: "Smoking Violation Fee",
      type: "number",
    },
    {
      name: "cleaningFee",
      title: "Cleaning Fee",
      type: "number",
    },
    {
      name: "securityDeposit",
      title: "Security Deposit",
      type: "number",
    },
    {
      name: "extraGuestFee",
      title: "Extra Guest Fee",
      type: "number",
      description: "Per person per night",
    },
  ],
};

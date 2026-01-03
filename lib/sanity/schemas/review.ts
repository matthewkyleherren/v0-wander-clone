// Sanity schema for Review document type

export const reviewSchema = {
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    {
      name: "property",
      title: "Property",
      type: "reference",
      to: [{ type: "property" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "location",
      title: "Author Location",
      type: "string",
    },
    {
      name: "content",
      title: "Review Content",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "stayDate",
      title: "Stay Date",
      type: "string",
    },
    {
      name: "verified",
      title: "Verified Guest",
      type: "boolean",
      initialValue: true,
    },
  ],
}

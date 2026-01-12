export const sitesPageSchema = {
  name: "sitesPage",
  title: "Sites Page",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "subheading",
          title: "Subheading",
          type: "text",
        },
        {
          name: "ctaText",
          title: "CTA Button Text",
          type: "string",
        },
        {
          name: "stats",
          title: "Stats",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "value", type: "string", title: "Value" },
                { name: "label", type: "string", title: "Label" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "valueProps",
      title: "Value Propositions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: "string", title: "Icon Name" },
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    },
    {
      name: "brandingSection",
      title: "Branding Section",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
        {
          name: "image",
          type: "image",
          title: "Image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "conversionsSection",
      title: "Conversions Section",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
        {
          name: "image",
          type: "image",
          title: "Image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "checkoutSection",
      title: "Checkout Section",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
        {
          name: "image",
          type: "image",
          title: "Image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "integrationsSection",
      title: "PMS Integrations Section",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
        {
          name: "integrations",
          type: "array",
          title: "Integrations",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", type: "string", title: "Name" },
                {
                  name: "logo",
                  type: "image",
                  title: "Logo",
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "auditSection",
      title: "Website Audit Section",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
        { name: "ctaText", type: "string", title: "CTA Button Text" },
      ],
    },
    {
      name: "technologyFeatures",
      title: "Technology Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: "string", title: "Icon Name" },
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    },
    {
      name: "howItWorksSteps",
      title: "How It Works Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", type: "string", title: "Step Number" },
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    },
    {
      name: "pricingPlans",
      title: "Pricing Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Plan Name" },
            { name: "price", type: "string", title: "Price" },
            { name: "description", type: "text", title: "Description" },
            {
              name: "features",
              type: "array",
              title: "Features",
              of: [{ type: "string" }],
            },
            { name: "ctaText", type: "string", title: "CTA Text" },
            { name: "featured", type: "boolean", title: "Featured Plan" },
          ],
        },
      ],
    },
    {
      name: "finalCta",
      title: "Final CTA Section",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
        { name: "ctaText", type: "string", title: "CTA Button Text" },
      ],
    },
  ],
}

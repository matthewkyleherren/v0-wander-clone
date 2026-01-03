export const homePageSchema = {
  name: "homePage",
  title: "Home Page",
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
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "trustBadges",
          title: "Trust Badges",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  title: "Icon Name",
                  type: "string",
                },
                {
                  name: "text",
                  title: "Text",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "wanderDifference",
      title: "The Wander Difference Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "features",
          title: "Feature Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

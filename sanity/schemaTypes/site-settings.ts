export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "siteName",
      title: "Site Name",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "headerNavigation",
      title: "Header Navigation",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "href",
              title: "Link",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        {
          name: "columns",
          title: "Footer Columns",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Column Title",
                  type: "string",
                },
                {
                  name: "links",
                  title: "Links",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        { name: "label", type: "string", title: "Label" },
                        { name: "href", type: "string", title: "Link" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "newsletter",
          title: "Newsletter Section",
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
            {
              name: "buttonText",
              type: "string",
              title: "Button Text",
            },
          ],
        },
        {
          name: "socialLinks",
          title: "Social Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "platform", type: "string", title: "Platform" },
                { name: "url", type: "string", title: "URL" },
              ],
            },
          ],
        },
        {
          name: "copyrightText",
          title: "Copyright Text",
          type: "string",
        },
      ],
    },
  ],
}

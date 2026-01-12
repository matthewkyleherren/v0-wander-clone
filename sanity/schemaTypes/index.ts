import { type SchemaTypeDefinition } from "sanity";
import propertySchema from "./property";
import { reviewSchema } from "./review";
import { homePageSchema } from "./home-page";
import { sitesPageSchema } from "./sites-page";
import { siteSettingsSchema } from "./site-settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    propertySchema,
    reviewSchema,
    homePageSchema,
    sitesPageSchema,
    siteSettingsSchema,
  ],
};

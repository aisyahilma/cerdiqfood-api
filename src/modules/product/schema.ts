import { z } from "@hono/zod-openapi";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  price: z.number(),
  stockQuantity: z.number().nullable(),
  isOrganic: z.boolean().nullable(),
  weight: z.number(),
  imageUrl: z.string().url(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ProductsSchema = z.array(ProductSchema);

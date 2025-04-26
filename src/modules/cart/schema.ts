import { z } from "@hono/zod-openapi";
import { ProductSchema } from "../product/schema";
import { PublicUserSchema } from "../user/schema";

/**
 * CartItem
 *   - quantity
 *   - product
 */
export const CartItemSchema = z.object({
  id: z.string(),

  quantity: z.number().min(1),

  productId: z.string(),
  product: ProductSchema,

  cartId: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

/**
 * Cart
 *   - user
 *   - items
 */
export const CartSchema = z.object({
  id: z.string(),

  items: z.array(CartItemSchema),

  userId: z.string(),
  user: PublicUserSchema.optional(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

/**
 * AddCartItem
 *   - For adding item to cart
 */
export const AddCartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1).default(1),
});

/**
 * UpdateCartItem
 *   - For updating item quantity in cart
 */
export const UpdateCartItemSchema = z.object({
  cartItemId: z.string(),
  quantity: z.number().min(1),
});

/**
 * RemoveCartItem
 *   - For removing item from cart
 */
export const RemoveCartItemSchema = z.object({
  cartItemId: z.string(),
});

export type Cart = z.infer<typeof CartSchema>;
export type CartItem = z.infer<typeof CartItemSchema>;
export type AddCartItemInput = z.infer<typeof AddCartItemSchema>;
export type UpdateCartItemInput = z.infer<typeof UpdateCartItemSchema>;
export type RemoveCartItemInput = z.infer<typeof RemoveCartItemSchema>;

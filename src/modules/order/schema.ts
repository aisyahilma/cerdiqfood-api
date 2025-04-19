import { z } from "@hono/zod-openapi";

export const OrderSchema = z.object({
  id: z.string(),
  customerName: z.string(),
  address: z.string(),
  products: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().min(1),
    })
  ),
  totalAmount: z.number(),
  status: z.enum(["pending", "paid", "shipped", "completed", "cancelled"]),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const OrdersSchema = z.array(OrderSchema);

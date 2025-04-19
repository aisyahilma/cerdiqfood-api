import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";

const orderRoutes = new OpenAPIHono();

// Schema untuk model Order
const OrderSchema = z.object({
  id: z
    .string()
    .uuid()
    .openapi({ example: "123e4567-e89b-12d3-a456-426614174000" }),
  customerName: z.string().openapi({ example: "Ahmad Fauzi" }),
  address: z.string().openapi({ example: "Jl. Melati No.12, Jakarta" }),
  products: z.array(
    z.object({
      productId: z
        .string()
        .uuid()
        .openapi({ example: "111e4567-e89b-12d3-a456-426614174abc" }),
      quantity: z.number().min(1).openapi({ example: 3 }),
    })
  ),
  totalAmount: z.number().openapi({ example: 150000 }),
  status: z
    .enum(["pending", "paid", "shipped", "completed", "cancelled"])
    .openapi({ example: "pending" }),
});

// Route: GET /orders
orderRoutes.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        description: "Daftar semua pesanan",
        content: {
          "application/json": {
            schema: z.array(OrderSchema),
          },
        },
      },
    },
  }),
  (c) => {
    // Dummy data
    return c.json([
      {
        id: "123e4567-e89b-12d3-a456-426614174000",
        customerName: "Ahmad Fauzi",
        address: "Jl. Melati No.12, Jakarta",
        products: [
          { productId: "111e4567-e89b-12d3-a456-426614174abc", quantity: 3 },
        ],
        totalAmount: 150000,
        status: "pending" as
          | "pending"
          | "paid"
          | "shipped"
          | "completed"
          | "cancelled",
      },
    ]);
  }
);

// Route: POST /orders
orderRoutes.openapi(
  createRoute({
    method: "post",
    path: "/",
    request: {
      body: {
        content: {
          "application/json": {
            schema: OrderSchema.omit({ id: true }),
          },
        },
      },
    },
    responses: {
      201: {
        description: "Pesanan berhasil dibuat",
        content: {
          "application/json": {
            schema: OrderSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    const data = await c.req.json();
    const newOrder = {
      ...data,
      id: crypto.randomUUID(),
      status: "pending",
    };
    return c.json(newOrder, 201);
  }
);

export { orderRoutes };
